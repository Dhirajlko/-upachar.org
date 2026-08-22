/**
 * Upachar.org Data & Internationalization
 * Medical Tourism, Top Hospitals, Doctors, Treatments & Home Healthcare Database
 */

const UPACHAR_DATA = {
  contact: {
    tagline: "UPACHAR — Healthcare Made Simple",
    email: "upachar.org@gmail.com",
    phoneNepal: "+977 9848094547",
    phoneIndia: "+91 7459977911",
    whatsappNepal: "9779848094547",
    whatsappIndia: "917459977911",
    address: "Upachar Medical Tourism & Home Healthcare Center, Delhi | Lucknow | Kathmandu",
    hours: "24 Hours / 7 Days Available"
  },

  // 9-Item Main Navigation & Services Categories Breakdown
  navCategories: {
    findHealthcare: ["Doctors", "Hospitals", "Clinics", "Specialists"],
    compareChoose: ["Treatment Cost", "Surgery Cost", "Packages"],
    bookConsult: ["Appointments", "Online Consultation", "Second Opinion"],
    healthcareHome: ["Nursing", "Diagnostics", "Physiotherapy", "Doctor Visits"],
    healthcareAbroad: ["India & International Treatment", "Medical Tourism"],
    completeCare: ["Diagnostics", "Pharmacy", "Insurance", "Travel", "Accommodation", "Follow-up"]
  },

  // Doctors Database for Doctor Directory & Search
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
      name: "Dr. Subhash Gupta",
      title: "Chairman - Liver Transplant & HPB Surgery",
      dept: "Liver Transplant",
      experience: "30+ Years Experience",
      hospital: "Max Super Speciality Hospital, Saket, New Delhi",
      country: "India",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=300",
      bio: "Pioneer liver transplant surgeon in India having conducted over 3,000 liver transplantation surgeries."
    },
    {
      id: "doc6",
      name: "Dr. Subhash Chandra",
      title: "Chairman - Orthopaedics & Joint Replacement",
      dept: "Orthopaedics",
      experience: "25+ Years Experience",
      hospital: "Indraprastha Apollo Hospitals, New Delhi",
      country: "India",
      photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
      bio: "Specialist in computer-navigated total knee and hip joint replacement surgeries."
    }
  ],

  // Hospitals Database (Matching MUFA MediTourism & Screenshots)
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
      name: "Max Super Speciality Hospital",
      location: "Saket, New Delhi, India",
      beds: "500+ Beds",
      badge: "Center of Excellence",
      specialties: ["Oncology", "Spine Surgery", "Pulmonology", "Gastroenterology"],
      photo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "h5",
      name: "BLK-Max Super Speciality Hospital",
      location: "New Delhi, India",
      beds: "650+ Beds",
      badge: "NABH & NABL Accredited",
      specialties: ["CyberKnife Oncology", "Bone Marrow", "Joint Replacement", "Bariatric Surgery"],
      photo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "h6",
      name: "Manipal Hospitals",
      location: "Dwarka, New Delhi, India",
      beds: "380+ Beds",
      badge: "Tertiary Care",
      specialties: ["Nephrology", "Infertility & IVF", "ENT & Head Neck", "Plastic Surgery"],
      photo: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=400"
    }
  ],

  // Treatments Dropdown List (Matching MUFA screenshot)
  treatmentList: [
    "Cancer Treatment & Oncology",
    "Heart Care & Heart Surgery",
    "Bone, Joint & Spine Care",
    "Brain & Spine Treatment",
    "Liver & Digestive Diseases Treatment",
    "Kidney Treatment & Transplant",
    "Organ Transplant (Liver / Kidney / Heart)",
    "Urology & Prostate Care",
    "Pulmonology & Respiratory Care",
    "Advanced Robotic & Minimally Invasive Surgery",
    "IVF & Infertility Treatment",
    "Cosmetic & Plastic Surgery",
    "Dental Implants & Maxillofacial"
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

      servicesBreakdownHeading: "Our Comprehensive Healthcare Services",

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

      servicesBreakdownHeading: "हमारी संपूर्ण स्वास्थ्य देखभाल सेवाएं",

      copyRight: "© 2026 UPACHAR — Healthcare Made Simple (upachar.org)। सर्वाधिकार सुरक्षित।"
    }
  },

  // DATABASE OF SURGERY & TREATMENT COSTS
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
      hospital: "Sahara / Medanta Super Specialty",
      location: "Lucknow, India",
      cityKey: "lucknow",
      costFormatted: "₹ 1,45,000 - ₹ 1,95,000",
      costNum: 145000,
      currency: "INR",
      specialist: "Joint Replacement Specialist",
      inclusionsEn: "US FDA approved implant, 3-4 days stay, medications, physio",
      inclusionsHi: "यूएस एफडीए स्वीकृत इम्प्लांट, 3-4 दिन कमरा, दवाएं"
    },
    {
      id: "s3",
      treatmentEn: "Knee Replacement (Total Knee Arthroplasty)",
      treatmentHi: "नी रिप्लेसमेंट (घुटने का प्रत्यारोपण)",
      hospital: "Norvic International / Grande Hospital",
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
      id: "s4",
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
      id: "s5",
      treatmentEn: "Cataract Surgery (Phacoemulsification)",
      treatmentHi: "मोतियाबिंद सर्जरी (फेको तकनीक)",
      hospital: "Mansarovar Eye Hospital",
      location: "Lucknow, India",
      cityKey: "lucknow",
      costFormatted: "₹ 18,000 - ₹ 35,000 / eye",
      costNum: 18000,
      currency: "INR",
      specialist: "Senior Eye Surgeon",
      inclusionsEn: "Phaco technique, hydrophobic IOL lens, follow-up checkups",
      inclusionsHi: "फेको तकनीक, हाइड्रोफोबिक लेंस, फॉलो-अप जांच"
    },
    {
      id: "s6",
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
    },
    {
      id: "s7",
      treatmentEn: "Kidney Stone Treatment (PCNL / RIRS Laser)",
      treatmentHi: "किडनी स्टोन (पथरी) लेजर इलाज",
      hospital: "Sanjay Gandhi Urology Center",
      location: "Lucknow, India",
      cityKey: "lucknow",
      costFormatted: "₹ 35,000 - ₹ 65,000",
      costNum: 35000,
      currency: "INR",
      specialist: "Senior Urologist",
      inclusionsEn: "Holmium Laser stone lithotripsy, DJ stent placement, 1-day stay",
      inclusionsHi: "होलमियम लेजर पथरी तोड़ना, डीजे स्टेंट, 1 दिन स्टे"
    },
    {
      id: "s8",
      treatmentEn: "Cancer Treatment (Chemotherapy / Onco-Surgery)",
      treatmentHi: "कैंसर इलाज (कीमोथेरेपी / ऑन्को-सर्जरी)",
      hospital: "Rajiv Gandhi Cancer Institute",
      location: "Delhi, India",
      cityKey: "delhi",
      costFormatted: "₹ 65,000 - ₹ 1,20,000 / cycle",
      costNum: 65000,
      currency: "INR",
      specialist: "Medical & Surgical Oncologist",
      inclusionsEn: "Targeted chemo drug infusion, daycare bed, anti-emetic medications",
      inclusionsHi: "कीमोथेरेपी ड्रिप, डेकेयर बेड, सपोर्टिव दवाएं"
    },
    {
      id: "s9",
      treatmentEn: "IVF Treatment (In Vitro Fertilization)",
      treatmentHi: "आईवीएफ निसंतानता इलाज (IVF)",
      hospital: "Nepal IVF & Fertility Center",
      location: "Kathmandu, Nepal",
      cityKey: "kathmandu",
      costFormatted: "NPR 1,80,000 - NPR 2,60,000",
      costNum: 180000,
      currency: "NPR",
      specialist: "Senior Reproductive Endocrinologist",
      inclusionsEn: "Egg retrieval, ICSI, embryo culture, embryo transfer & hormonal support",
      inclusionsHi: "एग रिट्रीवल, आईसीएसआई, भ्रूण संवर्धन व ट्रांसफ़र"
    }
  ],

  // Home Healthcare Services
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
        { en: "Foley catheter insertion & removal", hi: "फॉले कैथेटर (पेशाब की नली) डालना व निकालना" },
        { en: "Ryles Tube insertion & removal", hi: "राइस ट्यूब (भोजन नली) डालना व निकालना" },
        { en: "PICC line / Central line dressing", hi: "पीआईसीसी लाइन / सेंट्रल लाइन ड्रेसिंग" },
        { en: "IV Fluids / IV / IM / SC medication admin", hi: "आईवी ड्रिप, आईवी/आईएम/एससी इंजेक्शन देना" },
        { en: "Bladder wash / irrigation", hi: "ब्लेडर वॉश / सिंचाई" },
        { en: "Advanced & surgical wound dressing", hi: "घाव की ड्रेसिंग (Wound Dressing)" },
        { en: "Vaccination at home", hi: "घर पर टीकाकरण (Vaccination)" },
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
        { en: "Pleural fluid tapping", hi: "प्लुरल फ्लूड टैपिंग (फेफड़ों से पानी निकालना)" },
        { en: "General Health check-up & prescription", hi: "सामान्य स्वास्थ्य जांच व दवा परामर्श" },
        { en: "Post Operative care & clinical monitoring", hi: "ऑपरेशन के बाद की डॉक्टर देखभाल" },
        { en: "Tracheostomy tube change", hi: "ट्रैकियोस्टॉमी ट्यूब बदलना" },
        { en: "Blood / Albumin infusion Package", hi: "ब्लड / एलब्यूमिन इन्फ्यूजन पैकेज" },
        { en: "Palliative Care & Pain Management", hi: "पैलिएटिव केयर व दर्द प्रबंधन" },
        { en: "Suture / Stitch removal", hi: "टांके काटना व निकालना" },
        { en: "Chemotherapy administration @ home", hi: "घर पर कीमोथेरेपी" }
      ]
    },
    {
      id: "equipment",
      category: "equipment",
      titleEn: "Medical Equipment @ Home",
      titleHi: "मेडिकल उपकरण @ होम",
      badge: "Rent & Buy",
      icon: "fa-wheelchair",
      descEn: "High-grade hospital equipment delivered, sanitized, and set up at your home with technician support.",
      descHi: "अस्पताल-स्तरीय उपकरण घर पर सैनिटाइज और इंस्टॉलेशन के साथ किराये या खरीद पर उपलब्ध।",
      procedures: [
        { en: "Oxygen Concentrator (5L / 10L)", hi: "ऑक्सीजन कंसंट्रेटर (5L / 10L)" },
        { en: "Motorized & Manual Wheelchairs", hi: "मोटराइज्ड व मैनुअल व्हीलचेयर" },
        { en: "Nimbus / Alpha Anti-bedsore Mattress", hi: "निम्बस / अल्फा एंटी-बेडसोर एयर गद्दा" },
        { en: "Multipara Cardiac Monitors", hi: "मल्टीपारा कार्डियक मॉनिटर" },
        { en: "C-Pap / Bi-Pap / Portable Ventilators", hi: "सी-पैप / बाई-पैप / पोर्टेबल वेंटिलेटर" }
      ]
    },
    {
      id: "diagnostics",
      category: "diagnostics",
      titleEn: "Diagnostics @ Home",
      titleHi: "जांच @ होम (लैब टेस्ट)",
      badge: "Accurate & Fast",
      icon: "fa-vials",
      descEn: "Free home sample collection by certified phlebotomists with digital report delivery on mobile.",
      descHi: "घर पर फ्री सैंपल कलेक्शन, ईसीजी और पोर्टेबल एक्स-रे। डिजिटल रिपोर्ट मोबाइल पर।",
      procedures: [
        { en: "Master Health Check-Up Silver", hi: "मास्टर हेल्थ चेक-अप सिल्वर" },
        { en: "Master Health Check-Up Gold", hi: "मास्टर हेल्थ चेक-अप गोल्ड" },
        { en: "Master Health Check-Up Platinum", hi: "मास्टर हेल्थ चेक-अप प्लैटिनम" },
        { en: "Essential Male 45+ Package", hi: "एसेंशियल मेल 45+ पैकेज" },
        { en: "Essential Female 45+ Package", hi: "एसेंशियल फीमेल 45+ पैकेज" }
      ]
    },
    {
      id: "physio",
      category: "physio",
      titleEn: "Physiotherapy @ Home",
      titleHi: "फिजियोथेरेपी @ होम",
      badge: "Specialized Rehab",
      icon: "fa-child",
      descEn: "Customized physical rehabilitation therapies to restore mobility, strength, and independence.",
      descHi: "शरीर की गतिशीलता और ताकत वापस पाने के लिए विशेषज्ञ फिजियोथेरेपिस्ट की सेवाएं।",
      procedures: [
        { en: "Post Operative Physiotherapy", hi: "ऑपरेशन के बाद की फिजियोथेरेपी" },
        { en: "Ortho Rehab (Joint Replacement / Fracture)", hi: "आर्थो रिहैब (जोड़ प्रत्यारोपण / फ्रैक्चर)" },
        { en: "Neuro Rehab (Stroke / Paralysis / Parkinson's)", hi: "न्यूरो रिहैब (स्ट्रोक / लकवा / पैरालिसिस)" },
        { en: "Cardiac Rehab", hi: "कार्डियक (हृदय) रिहैब" },
        { en: "Lung / Pulmonary Rehab", hi: "फेफड़े व श्वास रिहैब" }
      ]
    }
  ],

  sampleCollectionTests: [
    { nameEn: "Complete Blood Count (CBC)", nameHi: "कम्प्लीट ब्लड काउंट (CBC)", price: "₹299" },
    { nameEn: "Fasting & PP Blood Sugar", nameHi: "फास्टिंग व पीपी ब्लड शुगर", price: "₹199" },
    { nameEn: "HbA1c Diabetes Profile", nameHi: "HbA1c डायबिटीज प्रोफाइल", price: "₹499" },
    { nameEn: "Thyroid Profile (T3, T4, TSH)", nameHi: "थायराइड प्रोफाइल (T3, T4, TSH)", price: "₹450" },
    { nameEn: "Lipid Profile (Cholesterol)", nameHi: "लिपिड प्रोफाइल (कोलेस्ट्रॉल)", price: "₹550" },
    { nameEn: "Liver Function Test (LFT)", nameHi: "लिवर फंक्शन टेस्ट (LFT)", price: "₹699" },
    { nameEn: "Kidney Function Test (KFT)", nameHi: "किडनी फंक्शन टेस्ट (KFT)", price: "₹699" },
    { nameEn: "Vitamin D3 & B12 Combo", nameHi: "विटामिन D3 एवं B12 कॉम्बो", price: "₹999" }
  ],

  faqs: [
    {
      qEn: "How can I search for Doctors, Hospitals, and Surgery Costs on Upachar?",
      qHi: "उपचार पर डॉक्टर्स, अस्पताल और सर्जरी लागत की खोज कैसे करें?",
      aEn: "Use our Universal Search bar at the top or navigate through our menu bars (TREATMENT, HOSPITALS, DOCTORS) to filter by specialty, country, or keyword. You can compare hospital packages and book consultations directly.",
      aHi: "शीर्ष पर मौजूद सर्च बार या मेनू (इलाज, अस्पताल, डॉक्टर्स) का उपयोग करके शहर, विभाग या नाम से खोजें।"
    },
    {
      qEn: "What services are included under Healthcare at Home?",
      qHi: "होम सर्विस के अंतर्गत कौन सी सेवाएं शामिल हैं?",
      aEn: "Healthcare at Home includes 12h/24h ICU Nurse @ Home, Doctor bedside visits, free Home Sample Collection for lab tests, Medical Equipment rentals (Oxygen, BiPAP, Air Beds), and Physiotherapy.",
      aHi: "नर्सिंग देखभाल, डॉक्टर विजिट, घर पर ब्लड टेस्ट सैंपल कलेक्शन, मेडिकल उपकरण किराया और फिजियोथेरेपी शामिल हैं।"
    }
  ]
};
