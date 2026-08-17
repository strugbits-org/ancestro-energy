
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";

// ---- SendGrid Config ----
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ---- MongoDB Setup ----
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db(process.env.MONGO_DB_NAME || "ancestro");
  return db.collection("ancestroenergy_spotform");
}

// ---- Send Email Function ----
async function sendNotificationEmails(formValues) {
  const {
    fullName = "Unknown",
    email = "Unknown",
    phone = "Unknown",
    address = "Unknown",
    joinfreewaitlist = false,
  } = formValues;

  const checkboxOptions = joinfreewaitlist ? "JOIN FREE WAITLIST" : "N/A";

  // 👨‍💼 Admin Email
  const adminMsg = {
    to: process.env.ADMIN_EMAIL || process.env.FROM_EMAIL,
    from: process.env.FROM_EMAIL,
    templateId: "d-fd0ce1edc140402285c124b2df59db0c", 
    dynamic_template_data: {
      fullName,
      email,
      phone,
      address,
      checkboxOptions,
    },
  };

  // 👤 Client Email
  const clientMsg = {
    to: email,
    from: process.env.FROM_EMAIL,
    templateId: "d-2f12e6bcbba74309b740210f0893d95b", 
    dynamic_template_data: {
      fullName,
      email,
      phone,
      address,
      checkboxOptions,
    },
  };

  await Promise.all([sgMail.send(adminMsg), sgMail.send(clientMsg)]);
}

// ---- POST Handler ----
export async function POST(request) {
  try {
    const data = await request.json();

    const documentToInsert = {
      ...data,
      createdAt: new Date(),
    };

    const collection = await connectToDatabase();
    const result = await collection.insertOne(documentToInsert);

    // Send emails
    await sendNotificationEmails(documentToInsert);

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