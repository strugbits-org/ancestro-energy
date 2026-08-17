
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  hero: {
    title: "JOIN LATAM’S FASTEST-GROWING SOLAR + BATTERY SUBSCRIPTION NETWORK",
    subtitle: "$0 upfront. Day-one savings. Long-term stability. Available now in 18 countries.",
    button: "Apply Now – Go Solar for $0 Down",
  },
  solarSubscription: {
    label: "SOLAR SUBSCRIPTION",
    title: "What is Solar Subscription?",
    description: "It’s the easiest way to switch to clean energy. With zero upfront cost, you don’t buy the panels — Ancestro does. You simply switch your monthly payment from the utility to Ancestro.",
    list: [
      "Zero upfront cost — no big investment required.",
      "Stable rates that protect you from utility price hikes.",
      "Ancestro owns + maintains the equipment.",
      "Pay directly through the Ancestro app.",
    ],
    button: "Apply Now – Go Solar for $0 Down",
  },
  batterySubscription: {
    label: "BATTERY SUBSCRIPTION",
    title: "Never Be Left in the Dark.",
    description: "Ancestro’s Battery Subscription gives you backup power during outages — all with zero upfront cost.",
    list: [
      "Protection from blackouts at home or work.",
      "Peace of mind for families + businesses.",
      "Ancestro owns + maintains the battery.",
      "Controlled and monitored through the Ancestro app.",
    ],
    button: "Apply Now",
  },
  allInOneApp: {
    label: "ALL IN ONE APP",
    title: "Switching is simple",
    description: "With zero upfront cost, you just sign up and manage everything from the Ancestro Energy app.",
    list: [
      "Track your energy use.",
      "See billing + payments in real-time.",
      "Simple, secure, and mobile-friendly.",
    ],
    button: "Apply Now – Go Solar for $0 Down",
  },
  energyTransition: {
    title: "Be Part of the Energy Transition.",
    description: "Join millions of homes and businesses switching to clean, reliable power — with zero upfront cost.",
    button: "Apply Now – Join the $0 Down Energy Revolution",
  },
  modal: {
    title: "YOUR BATTERY SUBSCRIPTION PROPOSAL",
    subtitle: "SECURE YOUR SPOT IN THE ANCESTRO ENERGY NETWORK",
    fullName: "FULL NAME",
    email: "EMAIL",
    phone: "PHONE / WHATSAPP",
    address: "ADDRESS / BUSINESS NAME",
    checkboxOptions: [
      "JOIN FREE WAITLIST",
      // "PRIORITY ACCESS (PAY DEPOSIT VIA STRIPE/PAYPAL)",
    ],
    applyButton: "Apply Now",
    thankYou: "Thank You!",
    thankYouMessage: "Your submission has been received successfully."
  },
  multiStepForm: {
    title: "APPLY TODAY TO JOIN THE CLEAN ENERGY MOVEMENT IN YOUR COMPANY",
    stepTitles: [
      "STEP 01: BASIC INFO",
      "STEP 02: PROPERTY DETAILS",
      "STEP 03: BUSINESS INFO",
      "STEP 04: ADDITIONAL QUESTIONS",
    ],
    thankYou: "THANK YOU!",
    thankYouSubtitle: "YOUR CUSTOM PROPOSAL WILL BE GENERATED AND SENT WITHIN 24 HOURS.",
    fullName: "FULL NAME",
    email: "EMAIL",
    phone: "PHONE NUMBER",
    city: "CITY",
    country: "COUNTRY",
    propertyOwner: "ARE YOU THE PROPERTY OWNER?",
    propertyOwnerOptions: ["YES", "NO"],
    projectType: "PROJECT TYPE",
    projectTypeOptions: ["Business", "House", "Solar Farm"],
    roofReplacement: "DO YOU NEED TO REPLACE YOUR ROOF WITHIN 2 YEARS?",
    roofReplacementOptions: ["Yes", "No", "Not Sure"],
    uploadRoofPhoto: "UPLOAD ROOF PHOTO",
    uploadRoofOptional: "(OPTIONAL)",
    uploadElectricPanel: "UPLOAD ELECTRIC PANEL PHOTO",
    uploadElectricPanelOptional: "(OPTIONAL)",
    averageBill: "AVERAGE MONTHLY ELECTRICITY BILL",
    billValueLabel: "$/MO TYPE ESTIMATED VALUE OF ELECTRIC BILL",
    uploadBill: "UPLOAD",
    uploading: "Uploading...",
    uploadBillHint: "Upload electric bill (PDF OR JPEG)",
  noResults: "No results found",
    step3Options: [
      "SOLAR SUBSCRIPTION BASED ON CURRENT NEEDS",
      "SOLAR SUBSCRIPTION TO PROVIDE A SURPLUS OF ENERGY BEYOND CURRENT NEEDS",
      "BATTERY SUBSCRIPTION (PARTIAL BACKUP ESSENTIAL LOADS)",
      "BATTERY SUBSCRIPTION (FULL BACKUP FOR TOTAL INDEPENDENCE)",
      "EV CHARGING ON SITE",
    ],
    step4Intro: "(CHECK ALL THAT APPLY)",
    step4Options: [
      "REDUCE MY ELECTRICITY BILLS",
      "REDUCE BLACKOUT RISK",
      "SUPPORT SUSTAINABILITY",
      "ALL OF ABOVE",
    ],
    nextButton: "NEXT",
    submitButton: "SUBMIT APPLICATION",
    submittingButton: "SUBMITTING...",
    errors: {
      projectType: "Please select one property type",
      fullName: "Full name is required",
      email: "Email is required",
      phone: "Phone number is required",
      city: "City is required",
      country: "Country is required",
      propertyOwner: "Please select one option",
      step2: "Please select one option",
      projectTypeSelect: "Please select at least one project type",
      billAmount: "Bill amount is required",
      bill: "Electric bill upload is required", 
      step3: "Please select at least one option",
       customSelect: "Please select one property type",
       address: "Address is required",
       checkboxOptions: "Please select option",
      
    }
  },
  caseStudySection: {
    title: "OUR CASE STUDY",
    poweredBy: "POWERED BY ANCESTRO ECOSYSTEM",
    address: "ADDRESS: PISO 19, 2G5F+72C, Av PASEO DEL MAR, PANAMÁ, PANAMÁ",
    contact: "CONTACT US: +57 300 1726236",
    caseStudies: [
      {
        heading: "COLOMBIA",
        description: "FACTORY / INDUSTRIAL PLANT.",
        tag: "IMMEDIATE SAVINGS: 36%",
        paragraph:
          "“Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.”",
        quote: "— Carlos M., Factory Owner, Colombia",
      },
      {
        heading: "MEXICO",
        description: "WAREHOUSE/ LOGISTICS CENTER",
        tag: "IMMEDIATE SAVINGS: 28%",
        paragraph:
          "“Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.”",
        quote: "— Raúl H. , Warehouse Owner in Mexico",
      },
      {
        heading: "DOMINICAN REPUBLIC",
        description: "HOTEL / RESORT",
        tag: "IMMEDIATE SAVINGS: 32%",
        paragraph:
          "“Running a resort means nonstop electricity use—air conditioning, kitchens, laundry, everything. Ancestro's system cut our bills by nearly a third without disrupting guests. Now we save money, and we proudly showcase our commitment to sustainability. Guests notice, and it adds to our reputation.”",
        quote: "— Miguel P., Resort Manager, Dominican Republic",
      },
    ],
  },
    checkboxList: {
    options: ["BUSINESS", "HOUSE", "SOLAR FARM"],
  },
  customSelect: {
    label: "TYPE OF PROPERTY",
    options: ["HOTEL", "PARKING LOT", "RESORT", "FARMHOUSE", "HOUSE", "MALL"],
    placeholder: "Select type",
  },
    fixedButton: {
    applyButton: "GET A PROPOSAL",
  },
};

// Spanish translations
  const esTranslations = {
    hero: {
      title: "ÚNETE A LA RED DE SUSCRIPCIÓN SOLAR + BATERÍA DE MÁS RÁPIDO CRECIMIENTO EN LATAM",
      subtitle: "$0 de costo inicial. Ahorros desde el primer día. Estabilidad a largo plazo. Disponible ahora en 18 países.",
      button: "Solicita Ahora – Pásate a la Energía Solar sin Costo Inicial",
    },
  solarSubscription: {
    label: "SUSCRIPCIÓN SOLAR",
    title: "¿Qué es la Suscripción Solar?",
    description: "Es la forma más fácil de cambiar a energía limpia. Sin costo inicial, no compras los paneles — Ancestro lo hace. Simplemente cambias tu pago mensual de la compañía eléctrica a Ancestro.",
    list: [
      "Cero costo inicial — no se requiere gran inversión.",
      "Tarifas estables que te protegen de los aumentos de precios de la compañía eléctrica.",
      "Ancestro es dueño y mantiene el equipo.",
      "Paga directamente a través de la aplicación de Ancestro.",
    ],
    button: "Solicita Ahora – Pásate a la Energía Solar sin Costo Inicial",
  },
  batterySubscription: {
    label: "SUSCRIPCIÓN DE BATERÍA",
    title: "Nunca te Quedes a Oscuras.",
    description: "La Suscripción de Batería de Ancestro te proporciona energía de respaldo durante cortes de luz — todo sin costo inicial.",
    list: [
      "Protección contra cortes de luz en casa o en el trabajo.",
      "Tranquilidad para familias y negocios.",
      "Ancestro es dueño y mantiene la batería.",
      "Controlado y monitoreado a través de la aplicación de Ancestro.",
    ],
    button: "Solicita Ahora",
  },
  allInOneApp: {
    label: "TODO EN UNA APLICACIÓN",
    title: "Cambiar es Simple",
    description: "Sin costo inicial, solo te registras y gestionas todo desde la aplicación de Ancestro Energy.",
    list: [
      "Monitorea tu consumo de energía.",
      "Consulta facturación y pagos en tiempo real.",
      "Simple, seguro y apto para dispositivos móviles.",
    ],
    button: "Solicita Ahora – Pásate a la Energía Solar sin Costo Inicial",
  },
  energyTransition: {
    title: "Sé Parte de la Transición Energética.",
    description: "Únete a millones de hogares y negocios que están cambiando a energía limpia y confiable — sin costo inicial.",
    button: "Solicita Ahora – Únete a la Revolución Energética sin Costo Inicial",
  },
  modal: {
    title: "TU PROPUESTA DE SUSCRIPCIÓN DE BATERÍA",
    subtitle: "Asegura tu Lugar en la Red de Energía de Ancestro",
    fullName: "NOMBRE COMPLETO",
    email: "CORREO ELECTRÓNICO",
    phone: "TELÉFONO / WHATSAPP",
    address: "DIRECCIÓN / NOMBRE DEL NEGOCIO",
    checkboxOptions: [
      "ÚNETE A LA LISTA DE ESPERA GRATUITA",
      // "ACCESO PRIORITARIO (PAGA DEPÓSITO A TRAVÉS DE STRIPE/PAYPAL)",
    ],
    applyButton: "Solicita Ahora",
      thankYou: "¡Gracias!",
      thankYouMessage: "Tu solicitud ha sido recibida con éxito."
  },
    multiStepForm: {
      title: "SOLICITA HOY PARA UNIRTE AL MOVIMIENTO DE ENERGÍA LIMPIA EN TU EMPRESA",
      stepTitles: [
        "PASO 01: INFORMACIÓN BÁSICA",
        "PASO 02: DETALLES DE LA PROPIEDAD",
        "PASO 03: INFORMACIÓN DEL NEGOCIO",
        "PASO 04: PREGUNTAS ADICIONALES",
      ],
      thankYou: "¡GRACIAS!",
      thankYouSubtitle: "TU PROPUESTA PERSONALIZADA SERÁ GENERADA Y ENVIADA DENTRO DE LAS 24 HORAS.",
      fullName: "NOMBRE COMPLETO",
      email: "CORREO ELECTRÓNICO",
      phone: "NÚMERO DE TELÉFONO",
      city: "CIUDAD",
      country: "PAÍS",
      propertyOwner: "¿ERES EL PROPIETARIO DE LA PROPIEDAD?",
      propertyOwnerOptions: ["SÍ", "NO"],
      projectType: "TIPO DE PROYECTO",
      projectTypeOptions: ["Negocio", "Casa", "Granja Solar"],
      roofReplacement: "¿NECESITAS REEMPLAZAR TU TECHO DENTRO DE 2 AÑOS?",
      roofReplacementOptions: ["Sí", "No", "No estoy seguro"],
      uploadRoofPhoto: "SUBIR FOTO DEL TECHO",
      uploadRoofOptional: "(OPCIONAL)",
      uploadElectricPanel: "SUBIR FOTO DEL PANEL ELÉCTRICO",
      uploadElectricPanelOptional: "(OPCIONAL)",
      averageBill: "FACTURA ELÉCTRICA MENSUAL PROMEDIO",
      billValueLabel: "$/MES ESCRIBE EL VALOR ESTIMADO DE LA FACTURA ELÉCTRICA",
      uploadBill: "SUBIR",
      uploading: "Subiendo...",
      uploadBillHint: "Subir factura eléctrica (PDF O JPEG)",
      noResults: "NO SE ENCONTRARON RESULTADOS",
      step3Options: [
        "SUSCRIPCIÓN SOLAR BASADA EN NECESIDADES ACTUALES",
        "SUSCRIPCIÓN SOLAR PARA PROPORCIONAR UN EXCEDENTE DE ENERGÍA MÁS ALLÁ DE LAS NECESIDADES ACTUALES",
        "SUSCRIPCIÓN DE BATERÍA (RESPALDO PARCIAL PARA CARGAS ESENCIALES)",
        "SUSCRIPCIÓN DE BATERÍA (RESPALDO COMPLETO PARA INDEPENDENCIA TOTAL)",
        "CARGA DE VEHÍCULOS ELÉCTRICOS EN EL SITIO",
      ],
      step4Intro: "(MARCA TODAS LAS QUE APLIQUEN)",
      step4Options: [
        "REDUCIR MIS FACTURAS ELÉCTRICAS",
        "REDUCIR EL RIESGO DE APAGONES",
        "APOYAR LA SOSTENIBILIDAD",
        "TODAS LAS ANTERIORES",
      ],
      nextButton: "SIGUIENTE",
      submitButton: "ENVIAR SOLICITUD",
      submittingButton: "ENVIANDO SOLICITUD...",
  
    errors: {
        projectType: "Por favor, selecciona un tipo de propiedad",
        fullName: "El nombre completo es obligatorio",
        email: "El correo electrónico es obligatorio",
        phone: "El número de teléfono es obligatorio",
        city: "La ciudad es obligatoria",
        country: "El país es obligatorio",
        propertyOwner: "Por favor, selecciona una opción",
        step2: "Por favor, selecciona una opción",
        projectTypeSelect: "Por favor, selecciona al menos un tipo de proyecto",
        billAmount: "El monto de la factura es obligatorio",
        bill: "La carga de la factura eléctrica es obligatoria",
        step3: "Por favor, selecciona al menos una opción",
          customSelect: "Por favor, selecciona un tipo de propiedad",
          address: "La dirección es obligatoria",
          checkboxOptions: "Por favor, selecciona una opció",
        
      }
    },
  caseStudySection: {
    title: "NUESTRO ESTUDIO DE CASO",
    poweredBy: "IMPULSADO POR EL ECOSISTEMA ANCESTRO",
    address: "DIRECCIÓN: PISO 19, 2G5F+72C, Av PASEO DEL MAR, PANAMÁ, PANAMÁ",
    contact: "CONTÁCTANOS: +57 300 1726236",
    caseStudies: [
      {
        heading: "COLOMBIA",
        description: "FÁBRICA / PLANTA INDUSTRIAL",
        tag: "AHORROS INMEDIATOS: 36%",
        paragraph:
          "“Las facturas de energía de nuestra fábrica nos estaban asfixiando. Con Ancestro, comenzamos a ahorrar desde el primer día, sin costos iniciales. En solo dos meses, el sistema estaba funcionando, y ahora proyectamos cientos de miles en ahorros a largo plazo. Nos ha dado estabilidad financiera, espacio para expandir la producción y la confianza para planificar a largo plazo.”",
        quote: "— Carlos M., Propietario de Fábrica, Colombia",
      },
      {
        heading: "MÉXICO",
        description: "ALMACÉN / CENTRO LOGÍSTICO",
        tag: "AHORROS INMEDIATOS: 28%",
        paragraph:
          "“Las facturas de energía de nuestra fábrica nos estaban asfixiando. Con Ancestro, comenzamos a ahorrar desde el primer día, sin costos iniciales. En solo dos meses, el sistema estaba funcionando, y ahora proyectamos cientos de miles en ahorros a largo plazo. Nos ha dado estabilidad financiera, espacio para expandir la producción y la confianza para planificar a largo plazo.”",

         quote:"— Raúl H., Propietario de almacén en México",
      },
      {
        heading: "REPÚBLICA DOMINICANA",
        description: "HOTEL / RESORT",
        tag: "AHORROS INMEDIATOS: 32%",
        paragraph:
          "“Dirigir un resort significa un uso constante de electricidad: aire acondicionado, cocinas, lavandería, todo. El sistema de Ancestro redujo nuestras facturas en casi un tercio sin interrumpir a los huéspedes. Ahora ahorramos dinero y mostramos con orgullo nuestro compromiso con la sostenibilidad. Los huéspedes lo notan y eso mejora nuestra reputación.”",
        quote: "— Miguel P., Gerente de Resort, República Dominicana",
      },
    ],
  },
    checkboxList: {
    options: ["NEGOCIO", "CASA", "GRANJA SOLAR"],
  },
  customSelect: {
    label: "TIPO DE PROPIEDAD",
    options: ["HOTEL", "ESTACIONAMIENTO", "RESORT", "CASA DE CAMPO", "CASA", "CENTRO COMERCIAL"],
    placeholder: "Seleccionar tipo",
  },
    fixedButton: {
    applyButton: "Obtener una Propuesta",
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;