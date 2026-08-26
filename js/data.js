/**
 * Upachar.org Data & Internationalization
 * Medical Tourism, Top Hospitals, Doctors, Treatments & Home Healthcare Database
 * Exact Wireframe Structure matching Handwritten Sketch
 */

const UPACHAR_DATA = {
  // Automatic Site Status & Expiry Configuration (26th August 12:00 Midnight)
  siteStatusConfig: {
    isPaid: true,
    autoDisable: false
  },

  contact: {
    tagline: "UPACHAR — Healthcare Made Simple",
    email: "upachar.org@gmail.com",
    phoneAdmin: "+91 8429930881",
    phoneNepal: "+977 9848094547",
    phoneIndia: "+91 7459977911",
    whatsappAdmin: "918429930881",
    whatsappNepal: "9779848094547",
    whatsappIndia: "917459977911",
    handle: "@dambarshahu",
    address: "Upachar Medical Tourism & Home Healthcare Center, Delhi | Lucknow | Kathmandu",
    hours: "24 Hours / 7 Days Available"
  },

  hospitalsByCountry: {
    nepal: [
      { id: "hn1", name: "Norvic International Hospital", city: "Kathmandu", badge: "Super Specialty" },
      { id: "hn2", name: "Grande International Hospital", city: "Kathmandu", badge: "Tertiary Care" },
      { id: "hn3", name: "Vayodha Hospital", city: "Kathmandu", badge: "Multi-Specialty" },
      { id: "hn4", name: "Nepal Mediciti Hospital", city: "Lalitpur / Kathmandu", badge: "JCI Accredited" }
    ],
    india: [
      { id: "hi1", name: "Indraprastha Apollo Hospitals", city: "New Delhi", badge: "JCI Accredited" },
      { id: "hi2", name: "Fortis Memorial Research Institute (FMRI)", city: "Gurugram / Delhi NCR", badge: "Multi-Super Specialty" },
      { id: "hi3", name: "Medanta - The Medicity", city: "Gurugram / Delhi NCR", badge: "Global Destination" },
      { id: "hi4", name: "Max Super Speciality Hospital", city: "Saket, New Delhi", badge: "Center of Excellence" },
      { id: "hi5", name: "BLK-Max Super Speciality Hospital", city: "New Delhi", badge: "NABH & NABL" },
      { id: "hi6", name: "Manipal Hospitals", city: "Dwarka, New Delhi", badge: "Tertiary Care" }
    ]
  },

  doctorsByCountry: {
    nepal: [
      { id: "dn1", name: "Dr. Bharat Rawat", title: "Senior Consultant Cardiologist", hospital: "Norvic International Hospital", country: "Nepal" },
      { id: "dn2", name: "Dr. Chakra Raj Pandey", title: "Senior Orthopaedic & Joint Surgeon", hospital: "Grande International Hospital", country: "Nepal" },
      { id: "dn3", name: "Dr. Pankaj Jalan", title: "Senior Consultant Neurologist", hospital: "Nepal Mediciti Hospital", country: "Nepal" }
    ],
    india: [
      { id: "di1", name: "Dr. (Col.) Manjinder Singh Sandhu", title: "Interventional Cardiology", hospital: "FMRI Gurugram", country: "India" },
      { id: "di2", name: "Dr. (Col.) Vijay Langer", title: "Plastic & Reconstructive Surgeon", hospital: "Fortis / Rainbow New Delhi", country: "India" },
      { id: "di3", name: "Dr. Naresh Trehan", title: "Cardiothoracic Surgeon", hospital: "Medanta Gurugram", country: "India" },
      { id: "di4", name: "Dr. Ashok Seth", title: "Chairman - Cardiology", hospital: "Fortis Escorts Heart Institute", country: "India" },
      { id: "di5", name: "Dr. Subhash Gupta", title: "Liver Transplant Surgeon", hospital: "Max Saket New Delhi", country: "India" }
    ]
  },

  doctorsDatabase: [
    {
      id: "doc1",
      name: "Dr. (Col.) Manjinder Singh Sandhu",
      title: "Senior Consultant - Interventional Cardiology",
      dept: "Cardiology",
      experience: "35 Years Experience",
      hospital: "Fortis Memorial Research Institute (FMRI), Gurugram / Delhi NCR",
      country: "India",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
      bio: "Dr. Sandhu is a distinguished interventional cardiologist with over 35 years of experience in complex coronary angioplasty, TAVR, and cardiac care."
    },
    {
      id: "doc2",
      name: "Dr. (Col.) Vijay Langer",
      title: "Senior Consultant - Aesthetic & Plastic Surgeon",
      dept: "Plastic & Reconstructive Surgery",
      experience: "28 Years Experience",
      hospital: "Madhukar Rainbow Children's Hospital / Fortis, New Delhi",
      country: "India",
      photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
      bio: "Dr. Langer served 28 years in the Indian Armed Forces Medical Services and specializes in cosmetic, reconstructive, and burn surgeries."
    },
    {
      id: "doc3",
      name: "Dr. Ashok Seth",
      title: "Chairman & Lead Cardiologist",
      dept: "Cardiology",
      experience: "40+ Years Experience",
      hospital: "Fortis Escorts Heart Institute, New Delhi",
      country: "India",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      bio: "World-renowned cardiologist pioneer in angioplasty and stenting in Asia Pacific region."
    },
    {
      id: "doc4",
      name: "Dr. Naresh Trehan",
      title: "Chairman & Managing Director",
      dept: "Cardiothoracic Surgery",
      experience: "42+ Years Experience",
      hospital: "Medanta - The Medicity, Gurugram",
      country: "India",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      bio: "Renowned cardiovascular and cardiothoracic surgeon who has performed over 48,000 successful open heart surgeries."
    },
    {
      id: "doc5",
      name: "Dr. Bharat Rawat",
      title: "Senior Consultant Cardiologist",
      dept: "Cardiology",
      experience: "25+ Years Experience",
      hospital: "Norvic International Hospital, Kathmandu",
      country: "Nepal",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=300",
      bio: "Senior cardiologist in Nepal specializing in preventive cardiology and cardiac intervention."
    }
  ],

  hospitalsDatabase: [
    {
      id: "h1",
      name: "Indraprastha Apollo Hospitals",
      location: "New Delhi, India",
      beds: "700+ Beds",
      badge: "JCI Accredited",
      specialties: ["Cardiology", "Oncology", "Organ Transplant", "Orthopaedics", "Neurosciences"],
      photo: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "h2",
      name: "Fortis Memorial Research Institute (FMRI)",
      location: "Gurugram / New Delhi NCR, India",
      beds: "1000+ Beds",
      badge: "Multi-Super Specialty",
      specialties: ["Robotic Surgery", "Bone Marrow Transplant", "IVF", "Paediatric Cardiac"],
      photo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "h3",
      name: "Medanta - The Medicity",
      location: "Gurugram / New Delhi NCR, India",
      beds: "1250+ Beds",
      badge: "Global Destination",
      specialties: ["Heart Institute", "Liver Institute", "Kidney & Urology", "Cancer Care"],
      photo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "h4",
      name: "Norvic International Hospital",
      location: "Kathmandu, Nepal",
      beds: "200+ Beds",
      badge: "Super Specialty",
      specialties: ["Cardiology", "Orthopaedics", "Gastroenterology", "Critical Care"],
      photo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400"
    }
  ],

  translations: {
    en: {
      brandTagline: "Healthcare Made Simple",
      navHome: "HOME",
      navAboutUs: "ABOUT US",
      navServices: "SERVICES",
      navTreatment: "TREATMENT",
      navHospitals: "HOSPITALS",
      navDoctors: "DOCTORS",
      navHomeService: "HOME SERVICE",
      navOnline: "ONLINE",
      navContactUs: "CONTACT US",

      heroBadge: "🏆 UPACHAR — Healthcare Made Simple",
      heroTitle: "Find Healthcare. Compare Costs. Book Appointments.",
      heroSubtitle: "Search top doctors, compare accredited hospitals, explore surgery packages, or request healthcare at home across India & Nepal.",

      searchPlaceholder: "Search Doctor / Hospital / Treatment Name...",
      btnSearch: "SEARCH",
      btnFreeConsult: "Chat for FREE Consultation",
      btnFreeEnquiry: "Fill Form for FREE Enquiry",

      doctorsHeading: "Top Doctors & Specialists",
      doctorsSubheading: "Consult renowned senior surgeons and medical consultants across India & Nepal.",
      selectCountry: "Select Country",
      selectDept: "Select Department",
      filterDoctorInput: "Search Doctor by Name...",

      hospitalsHeading: "Leading Accredited Hospitals",
      hospitalsSubheading: "World-class hospitals with advanced medical technology and international patient care.",

      treatmentHeading: "Specialized Treatments & Surgeries",
      treatmentSubheading: "Compare treatment packages, hospital options, and surgeon expertise.",

      copyRight: "© 2026 UPACHAR — Healthcare Made Simple (upachar.org). All rights reserved."
    },
    hi: {
      brandTagline: "Healthcare Made Simple (स्वास्थ्य सेवा हुई आसान)",
      navHome: "होम",
      navAboutUs: "हमारे बारे में",
      navServices: "सेवाएं",
      navTreatment: "इलाज व सर्जरी",
      navHospitals: "अस्पताल",
      navDoctors: "डॉक्टर्स",
      navHomeService: "होम सर्विस",
      navOnline: "ऑनलाइन परामर्श",
      navContactUs: "संपर्क करें",

      heroBadge: "🏆 UPACHAR — Healthcare Made Simple (स्वास्थ्य सेवा हुई आसान)",
      heroTitle: "डॉक्टर खोजें। लागत की तुलना करें। अपॉइंटमेंट बुक करें।",
      heroSubtitle: "भारत और नेपाल में वरिष्ठ डॉक्टरों, मान्यता प्राप्त अस्पतालों, सर्जरी पैकेज और होम हेल्थकेयर खोजें।",

      searchPlaceholder: "डॉक्टर, अस्पताल या इलाज का नाम खोजें...",
      btnSearch: "खोजें (Search)",
      btnFreeConsult: "मुफ्त व्हाट्सएप परामर्श लें",
      btnFreeEnquiry: "मुफ्त पूछताछ फॉर्म भरें",

      doctorsHeading: "शीर्ष डॉक्टर्स एवं विशेषज्ञ",
      doctorsSubheading: "भारत और नेपाल के प्रसिद्ध डॉक्टरों और सर्जनों से परामर्श लें।",
      selectCountry: "देश चुनें",
      selectDept: "विभाग (Department) चुनें",
      filterDoctorInput: "डॉक्टर का नाम खोजें...",

      hospitalsHeading: "अग्रणी मान्यता प्राप्त अस्पताल",
      hospitalsSubheading: "विश्वस्तरीय तकनीक और अंतर्राष्ट्रीय मरीज सेवा वाले अस्पताल।",

      treatmentHeading: "विशेषज्ञ इलाज एवं सर्जरीज",
      treatmentSubheading: "इलाज पैकेज, अस्पताल के विकल्प और सर्जनों की विशेषज्ञता की तुलना करें।",

      copyRight: "© 2026 UPACHAR — Healthcare Made Simple (upachar.org)। सर्वाधिकार सुरक्षित।"
    }
  },

  surgeryDatabase: [
    {
      id: "s1",
      treatmentEn: "Knee Replacement (Total Knee Arthroplasty)",
      treatmentHi: "नी रिप्लेसमेंट (घुटने का प्रत्यारोपण)",
      hospital: "Apollo Specialty / Max Healthcare",
      location: "Delhi, India",
      cityKey: "delhi",
      costFormatted: "₹ 1,85,000 - ₹ 2,40,000",
      costNum: 185000,
      currency: "INR",
      specialist: "Senior Orthopaedic Surgeon",
      inclusionsEn: "Implant cost, 4 days ICU/room stay, surgeon fee, physio session",
      inclusionsHi: "इम्प्लांट लागत, 4 दिन कमरा शुल्क, सर्जन फीस, फिजियो सेशन"
    },
    {
      id: "s2",
      treatmentEn: "Knee Replacement (Total Knee Arthroplasty)",
      treatmentHi: "नी रिप्लेसमेंट (घुटने का प्रत्यारोपण)",
      hospital: "Norvic International Hospital",
      location: "Kathmandu, Nepal",
      cityKey: "kathmandu",
      costFormatted: "NPR 2,95,000 - NPR 3,80,000",
      costNum: 295000,
      currency: "NPR",
      specialist: "Senior Ortho Specialist",
      inclusionsEn: "Imported Joint Implant, hospital stay, post-op rehabilitation",
      inclusionsHi: "इंपोर्टेड जॉइंट इम्प्लांट, अस्पताल में रहना, पुनर्वास"
    },
    {
      id: "s3",
      treatmentEn: "Cataract Surgery (Phacoemulsification)",
      treatmentHi: "मोतियाबिंद सर्जरी (फेको तकनीक)",
      hospital: "Centre for Sight / Eye Institute",
      location: "Delhi, India",
      cityKey: "delhi",
      costFormatted: "₹ 25,000 - ₹ 45,000 / eye",
      costNum: 25000,
      currency: "INR",
      specialist: "Ophthalmologist & Retinal Surgeon",
      inclusionsEn: "Foldable Monofocal / Multifocal IOL Lens, daycare procedure, post-op drops",
      inclusionsHi: "फोल्डेबल लेंस, डेकेयर प्रक्रिया, आई ड्रॉप्स"
    },
    {
      id: "s4",
      treatmentEn: "Heart Bypass Surgery (CABG)",
      treatmentHi: "हार्ट बायपास सर्जरी (CABG)",
      hospital: "Fortis Escorts Heart Institute",
      location: "Delhi, India",
      cityKey: "delhi",
      costFormatted: "₹ 2,90,000 - ₹ 3,80,000",
      costNum: 29000,
      currency: "INR",
      specialist: "Senior Cardiac Surgeon",
      inclusionsEn: "Off-pump CABG, 3 days Cardiac ICU, 4 days room, heart rehab plan",
      inclusionsHi: "कार्डियक आईसीयू स्टे, बायपास सर्जरी, हृदय रिहैब प्लान"
    }
  ],

  services: [
    {
      id: "nurse",
      category: "nurse",
      titleEn: "Nurse @ Home",
      titleHi: "नर्स @ होम",
      badge: "Most Requested",
      icon: "fa-user-nurse",
      descEn: "Professional nursing care for patients recovering from surgery, stroke, trauma, or needing continuous monitoring.",
      descHi: "सर्जरी, स्ट्रोक या गंभीर बीमारी से उबर रहे मरीजों के लिए पेशेवर नर्सिंग देखभाल।",
      procedures: [
        { en: "Foley catheter insertion & removal", hi: "फॉले कैथेटर (पेशाब की नली)" },
        { en: "Ryles Tube insertion & removal", hi: "राइस ट्यूब (भोजन नली)" },
        { en: "PICC line / Central line dressing", hi: "पीआईसीसी लाइन / सेंट्रल लाइन ड्रेसिंग" },
        { en: "IV Fluids / IV / IM / SC medication admin", hi: "आईवी ड्रिप, आईवी/आईएम/एससी इंजेक्शन" },
        { en: "12-hr & 24-hr ICU trained nurse shift care", hi: "12 घंटे व 24 घंटे की आईसीयू नर्स देखभाल" }
      ]
    },
    {
      id: "doctor",
      category: "doctor",
      titleEn: "Doctor @ Home",
      titleHi: "डॉक्टर @ होम",
      badge: "Expert Doctors",
      icon: "fa-user-md",
      descEn: "Senior physicians and general specialists visiting your bedside for clinical evaluation and minor procedures.",
      descHi: "घर पर परामर्श और छोटी चिकित्सा प्रक्रियाओं के लिए अनुभवी डॉक्टरों की विजिट।",
      procedures: [
        { en: "Home Consultations & Clinical assessment", hi: "घर पर डॉक्टर परामर्श व स्वास्थ्य मूल्यांकन" },
        { en: "Pleural fluid tapping", hi: "प्लुरल फ्लूड टैपिंग (फेफड़ों से पानी)" },
        { en: "General Health check-up & prescription", hi: "सामान्य स्वास्थ्य जांच व दवा परामर्श" },
        { en: "Tracheostomy tube change", hi: "ट्रैकियोस्टॉमी ट्यूब बदलना" }
      ]
    },
    {
      id: "equipment",
      category: "equipment",
      titleEn: "Medical Equipment @ Home & ICU Setup",
      titleHi: "मेडिकल उपकरण व होम आईसीयू सेटअप",
      badge: "Rent & Buy",
      icon: "fa-wheelchair",
      descEn: "High-grade hospital equipment delivered, sanitized, and set up at your home with technician support.",
      descHi: "अस्पताल-स्तरीय उपकरण घर पर सैनिटाइज और होम आईसीयू सेटअप के साथ उपलब्ध।",
      procedures: [
        { en: "Full Home ICU Bed & Monitor Setup", hi: "फुल होम आईसीयू बेड व मॉनिटर सेटअप" },
        { en: "Oxygen Concentrator (5L / 10L)", hi: "ऑक्सीजन कंसंट्रेटर (5L / 10L)" },
        { en: "Motorized & Manual Wheelchairs", hi: "मोटराइज्ड व मैनुअल व्हीलचेयर" },
        { en: "Nimbus / Alpha Anti-bedsore Mattress", hi: "निम्बस / अल्फा एंटी-बेडसोर एयर गद्दा" },
        { en: "BiPAP / CPAP / Portable Ventilators", hi: "सी-पैप / बाई-पैप / पोर्टेबल वेंटिलेटर" }
      ]
    }
  ],

  sampleCollectionTests: [
    { nameEn: "Complete Blood Count (CBC)", nameHi: "कम्प्लीट ब्लड काउंट (CBC)", price: "₹299" },
    { nameEn: "Fasting & PP Blood Sugar", nameHi: "फास्टिंग व पीपी ब्लड शुगर", price: "₹199" },
    { nameEn: "HbA1c Diabetes Profile", nameHi: "HbA1c डायबिटीज प्रोफाइल", price: "₹499" },
    { nameEn: "Thyroid Profile (T3, T4, TSH)", nameHi: "थायराइड प्रोफाइल (T3, T4, TSH)", price: "₹450" }
  ],

  faqs: [
    {
      qEn: "How can I search for Doctors & Hospitals in Nepal and India?",
      qHi: "नेपाल और भारत में डॉक्टर्स व अस्पतालों की खोज कैसे करें?",
      aEn: "Hover over HOSPITALS or DOCTORS in the top navigation bar to select Nepal -> or India -> to view verified profiles and book appointments directly.",
      aHi: "नेपाल या भारत के अस्पतालों और डॉक्टरों को देखने के लिए टॉप मेनू बार में HOSPITALS या DOCTORS पर माउस ले जाएं।"
    }
  ]
};
