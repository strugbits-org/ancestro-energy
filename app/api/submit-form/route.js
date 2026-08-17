
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";

// ---- Configure SendGrid ----
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ---- MongoDB Setup ----
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db(process.env.MONGO_DB_NAME || "ancestro");
  return db.collection("ancestroenergy");
}

// Translation mappings for Spanish to English
const translationMap = {
  propertyOwner: {
    "SÍ": "YES",
    "NO": "NO",
  },
  step2: {
    "Sí": "Yes",
    "No": "No",
    "No estoy seguro": "Not Sure",
  },
  step3: {
    "SUSCRIPCIÓN SOLAR BASADA EN NECESIDADES ACTUALES": "SOLAR SUBSCRIPTION BASED ON CURRENT NEEDS",
    "SUSCRIPCIÓN SOLAR PARA PROPORCIONAR UN EXCEDENTE DE ENERGÍA MÁS ALLÁ DE LAS NECESIDADES ACTUALES": "SOLAR SUBSCRIPTION TO PROVIDE A SURPLUS OF ENERGY BEYOND CURRENT NEEDS",
    "SUSCRIPCIÓN DE BATERÍA (RESPALDO PARCIAL PARA CARGAS ESENCIALES)": "BATTERY SUBSCRIPTION (PARTIAL BACKUP ESSENTIAL LOADS)",
    "SUSCRIPCIÓN DE BATERÍA (RESPALDO COMPLETO PARA INDEPENDENCIA TOTAL)": "BATTERY SUBSCRIPTION (FULL BACKUP FOR TOTAL INDEPENDENCE)",
    "CARGA DE VEHÍCULOS ELÉCTRICOS EN EL SITIO": "EV CHARGING ON SITE",
  },
  step4: {
    "REDUCIR MIS FACTURAS ELÉCTRICAS": "REDUCE MY ELECTRICITY BILLS",
    "REDUCIR EL RIESGO DE APAGONES": "REDUCE BLACKOUT RISK",
    "APOYAR LA SOSTENIBILIDAD": "SUPPORT SUSTAINABILITY",
    "TODAS LAS ANTERIORES": "ALL OF ABOVE",
  },
  projectTypeSelect: {
    "Negocio": "Business",
    "Casa": "House",
    "Granja Solar": "Solar Farm",
  },
};

async function sendNotificationEmails(documentToInsert, language = "en") {
  const {
    fullName = "Unknown",
    email = "Unknown",
    phone = "Unknown",
    city = "Unknown",
    country = "Unknown",
    projectTypeSelect = "Unknown",
    isPropertyOwner = null,
    needsRoofReplacement = null,
    businessInfo = {},
    additionalQuestions = {},
    electricbillAmount = null,
    propertyType = "Unknown",
    roofPhotoUrl = null,
    electricPanelUrl = null,
    electricbillUrl = null,
  } = documentToInsert;

  const formatList = (obj, keys) => {
    const selected = keys.filter((key) => obj[key]).map((key) => key.replace(/([A-Z])/g, " $1").trim());
    return selected.length ? selected.join(", ") : "N/A";
  };

  // Select template ID based on language
  const clientTemplateId = language === "es" 
    ? "d-your-spanish-template-id" // Replace with your Spanish SendGrid template ID
    : "d-d332299b2f4b43a5b7421e989398d27c"; // English template ID

  const adminMsg = {
    to: process.env.ADMIN_EMAIL || process.env.FROM_EMAIL,
    from: process.env.FROM_EMAIL,
    templateId: "d-88af0dba329a472583c201e92310a111", // Admin template (assumed language-agnostic)
    dynamic_template_data: {
      fullName,
      email,
      phone,
      city,
      country,
      projectType: projectTypeSelect,
      propertyOwner: isPropertyOwner === true ? "Yes" : isPropertyOwner === false ? "No" : "Not Specified",
      needsRoofReplacement: needsRoofReplacement === true ? "Yes" : needsRoofReplacement === false ? "No" : "Not Sure",
      projectTypeSelect,
      goals: formatList(businessInfo, [
        "solarSubscriptionCurrentNeeds",
        "solarSubscriptionSurplusEnergy",
        "batterySubscriptionPartialBackup",
        "batterySubscriptionFullBackup",
        "evChargingOnSite",
      ]),
      motivations: formatList(additionalQuestions, [
        "reduceElectricityBills",
        "reduceBlackoutRisk",
        "supportSustainability",
        "allOfAbove",
      ]),
      electricbillAmount: electricbillAmount !== null ? `$${electricbillAmount}` : "N/A",
      installationArea: propertyType,
      roofPhotoUrl: roofPhotoUrl || "N/A",
      electricPanelUrl: electricPanelUrl || "N/A",
      electricbillUrl: electricbillUrl || "N/A",
    },
  };

  const clientMsg = {
    to: email,
    from: process.env.FROM_EMAIL,
    templateId: clientTemplateId,
    dynamic_template_data: {
      fullName,
      email,
      phone,
      city,
      country,
      projectType: projectTypeSelect,
      propertyOwner: isPropertyOwner === true ? (language === "es" ? "SÍ" : "Yes") : isPropertyOwner === false ? (language === "es" ? "NO" : "No") : (language === "es" ? "No especificado" : "Not Specified"),
      needsRoofReplacement: needsRoofReplacement === true ? (language === "es" ? "SÍ" : "Yes") : needsRoofReplacement === false ? (language === "es" ? "NO" : "No") : (language === "es" ? "No estoy seguro" : "Not Sure"),
      projectTypeSelect,
      goals: formatList(businessInfo, [
        "solarSubscriptionCurrentNeeds",
        "solarSubscriptionSurplusEnergy",
        "batterySubscriptionPartialBackup",
        "batterySubscriptionFullBackup",
        "evChargingOnSite",
      ]),
      motivations: formatList(additionalQuestions, [
        "reduceElectricityBills",
        "reduceBlackoutRisk",
        "supportSustainability",
        "allOfAbove",
      ]),
      electricbillAmount: electricbillAmount !== null ? `$${electricbillAmount}` : "N/A",
      installationArea: propertyType,
      roofPhotoUrl: roofPhotoUrl || "N/A",
      electricPanelUrl: electricPanelUrl || "N/A",
      electricbillUrl: electricbillUrl || "N/A",
    },
  };

  await Promise.all([sgMail.send(adminMsg), sgMail.send(clientMsg)]);
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const data = {};
    let language = "en"; // Default to English

    // Extract form data and detect language
    for (const [key, value] of formData.entries()) {
      try {
        data[key] = JSON.parse(value);
        // Detect language based on propertyOwner or step2 values
        if (key === "propertyOwner" && ["SÍ", "NO"].includes(value)) {
          language = "es";
        }
        if (key === "step2" && ["Sí", "No", "No estoy seguro"].includes(value)) {
          language = "es";
        }
      } catch {
        data[key] = value;
      }
    }

    // Normalize Spanish values to English for consistent storage
    const normalizedData = {
      ...data,
      propertyOwner: translationMap.propertyOwner[data.propertyOwner] || data.propertyOwner,
      step2: translationMap.step2[data.step2] || data.step2,
      step3: Array.isArray(data.step3) ? data.step3.map((item) => translationMap.step3[item] || item) : data.step3,
      step4: Array.isArray(data.step4) ? data.step4.map((item) => translationMap.step4[item] || item) : data.step4,
      projectTypeSelect: translationMap.projectTypeSelect[data.projectTypeSelect] || data.projectTypeSelect,
    };

    // Transform data for MongoDB storage
    const documentToInsert = {
      fullName: normalizedData.fullName || "",
      email: normalizedData.email || "",
      phone: normalizedData.phone || "",
      city: normalizedData.city || "",
      country: normalizedData.country || "",
      projectTypeSelect: normalizedData.projectTypeSelect || "",
      isPropertyOwner: normalizedData.propertyOwner === "YES" ? true : normalizedData.propertyOwner === "NO" ? false : null,
      needsRoofReplacement:
        normalizedData.step2 === "Yes" ? true : normalizedData.step2 === "No" ? false : normalizedData.step2 === "Not Sure" ? null : null,
      propertyType: normalizedData.customSelect || "",
      electricbillAmount: normalizedData.billAmount ? Number(normalizedData.billAmount) : null,
      businessInfo: {
        solarSubscriptionCurrentNeeds: (normalizedData.step3 || []).includes("SOLAR SUBSCRIPTION BASED ON CURRENT NEEDS"),
        solarSubscriptionSurplusEnergy: (normalizedData.step3 || []).includes(
          "SOLAR SUBSCRIPTION TO PROVIDE A SURPLUS OF ENERGY BEYOND CURRENT NEEDS"
        ),
        batterySubscriptionPartialBackup: (normalizedData.step3 || []).includes("BATTERY SUBSCRIPTION (PARTIAL BACKUP ESSENTIAL LOADS)"),
        batterySubscriptionFullBackup: (normalizedData.step3 || []).includes("BATTERY SUBSCRIPTION (FULL BACKUP FOR TOTAL INDEPENDENCE)"),
        evChargingOnSite: (normalizedData.step3 || []).includes("EV CHARGING ON SITE"),
      },
      additionalQuestions: {
        reduceElectricityBills: (normalizedData.step4 || []).includes("REDUCE MY ELECTRICITY BILLS"),
        reduceBlackoutRisk: (normalizedData.step4 || []).includes("REDUCE BLACKOUT RISK"),
        supportSustainability: (normalizedData.step4 || []).includes("SUPPORT SUSTAINABILITY"),
      },
      roofPhotoUrl: normalizedData.roofPhotoUrl || null,
      electricPanelUrl: normalizedData.electricPanelUrl || null,
      electricbillUrl: normalizedData.billUrl || null,
      language, // Store the detected language
      createdAt: new Date(),
    };

    const collection = await connectToDatabase();
    const result = await collection.insertOne(documentToInsert);

    // Send notification emails with detected language
    await sendNotificationEmails(documentToInsert, language);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted and notifications sent successfully!",
        id: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting form",
        error: error.message,
      },
      { status: 500 }
    );
  }
}