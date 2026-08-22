/**
 * Upachar.org Main Application Logic
 * Treatment & Surgery Cost Comparison, Online Appointments, Home Sample Collection & WhatsApp Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let activeTab = 'all';

  initApp();

  function initApp() {
    setupLanguageSwitcher();
    setupMobileMenu();
    renderSurgeryCostSection();
    renderServices(activeTab);
    renderSampleCollectionSection();
    renderFaqs();
    setupModal();
    setupForms();
  }

  // Language Switcher (EN <-> HI)
  function setupLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        if (selectedLang === currentLang) return;

        currentLang = selectedLang;
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        applyTranslations();
        renderSurgeryCostSection();
        renderServices(activeTab);
        renderSampleCollectionSection();
        renderFaqs();
        updateFormSelects();
      });
    });
  }

  function applyTranslations() {
    const dict = UPACHAR_DATA.translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  // Mobile Menu Toggle
  function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });

      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          const icon = toggleBtn.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        });
      });
    }
  }

  // SURGERY & TREATMENT COST COMPARISON SECTION LOGIC
  function renderSurgeryCostSection() {
    const tableBody = document.getElementById('surgeryTableBody');
    const selectTreatment = document.getElementById('surgeryTreatmentSelect');
    const selectCity = document.getElementById('surgeryCitySelect');
    const searchBtn = document.getElementById('surgerySearchBtn');

    if (!tableBody) return;

    // Populate Treatment Dropdown dynamically if empty
    if (selectTreatment && selectTreatment.options.length <= 1) {
      const uniqueTreatments = [...new Set(UPACHAR_DATA.surgeryDatabase.map(s => s.treatmentEn))];
      uniqueTreatments.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        selectTreatment.appendChild(opt);
      });
    }

    function filterAndRenderSurgeries() {
      const selectedT = selectTreatment ? selectTreatment.value : 'all';
      const selectedC = selectCity ? selectCity.value : 'all';

      const filtered = UPACHAR_DATA.surgeryDatabase.filter(item => {
        const matchesT = selectedT === 'all' || item.treatmentEn.toLowerCase().includes(selectedT.toLowerCase());
        const matchesC = selectedC === 'all' || item.cityKey.toLowerCase() === selectedC.toLowerCase();
        return matchesT && matchesC;
      });

      tableBody.innerHTML = '';

      if (filtered.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align:center; padding:2.5rem; color:var(--text-muted);">
              <i class="fas fa-search" style="font-size:2.5rem; margin-bottom:0.75rem; display:block; color:var(--accent);"></i>
              No treatment or surgery matched your selection. Try selecting "All Treatments" or "All Cities".
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(item => {
        const isHi = currentLang === 'hi';
        const treatmentName = isHi ? item.treatmentHi : item.treatmentEn;
        const inclusions = isHi ? item.inclusionsHi : item.inclusionsEn;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
            <strong style="color:var(--primary); font-size:1.05rem;">${treatmentName}</strong>
            <div style="font-size:0.775rem; color:var(--text-muted);"><i class="fas fa-user-md" style="color:var(--accent);"></i> ${item.specialist}</div>
          </td>
          <td><strong>${item.hospital}</strong></td>
          <td>
            <span class="service-badge" style="background:rgba(14,165,233,0.12); color:var(--cyan);">
              <i class="fas fa-map-marker-alt"></i> ${item.location}
            </span>
          </td>
          <td>
            <span style="font-weight:800; color:var(--accent); font-size:1.15rem;">${item.costFormatted}</span>
            <div style="font-size:0.725rem; color:var(--text-light);">Indicative Package</div>
          </td>
          <td>
            <button class="btn btn-navy btn-sm quote-btn" data-treatment="${treatmentName}" data-hospital="${item.hospital}" data-city="${item.location}">
              <i class="fab fa-whatsapp"></i> ${isHi ? 'विवरण / कोटेशन लें' : 'Request Estimate'}
            </button>
          </td>
        `;

        tableBody.appendChild(row);
      });

      // Attach click events
      document.querySelectorAll('.quote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tName = btn.dataset.treatment;
          const hName = btn.dataset.hospital;
          const cName = btn.dataset.city;

          openQuoteModal(tName, hName, cName);
        });
      });
    }

    if (searchBtn) searchBtn.onclick = filterAndRenderSurgeries;
    if (selectTreatment) selectTreatment.onchange = filterAndRenderSurgeries;
    if (selectCity) selectCity.onchange = filterAndRenderSurgeries;

    filterAndRenderSurgeries();
  }

  // Open Quote Request Modal / Scroll to Form
  function openQuoteModal(treatment = '', hospital = '', city = '') {
    const reqTreatment = document.getElementById('quoteTreatment');
    const prefHospital = document.getElementById('quoteHospital');

    if (reqTreatment && treatment) reqTreatment.value = treatment;
    if (prefHospital && hospital) prefHospital.value = `${hospital} (${city})`;

    const quoteSection = document.getElementById('requestQuote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // HOME SAMPLE COLLECTION SECTION
  function renderSampleCollectionSection() {
    const container = document.getElementById('sampleTestsGrid');
    if (!container) return;

    container.innerHTML = '';
    UPACHAR_DATA.sampleCollectionTests.forEach(t => {
      const isHi = currentLang === 'hi';
      const name = isHi ? t.nameHi : t.nameEn;

      const card = document.createElement('div');
      card.className = 'pkg-card';
      card.style.padding = '1.25rem';

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
          <div style="font-weight:700; color:var(--primary); font-size:1rem;">${name}</div>
          <span style="font-weight:800; color:var(--accent); font-size:1.15rem;">${t.price}</span>
        </div>
        <div style="font-size:0.8rem; color:var(--emerald); margin-bottom:1rem;">
          <i class="fas fa-check-circle"></i> Free Home Sample Pickup Included
        </div>
        <button class="btn btn-navy sample-book-btn" data-test="${name}" style="width:100%; font-size:0.85rem; padding:0.5rem;">
          <i class="fab fa-whatsapp"></i> ${isHi ? 'सैंपल कलेक्शन बुक करें' : 'Book Sample Collection'}
        </button>
      `;

      container.appendChild(card);
    });

    document.querySelectorAll('.sample-book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openBookingModal('diagnostics', `Home Sample Collection Requested: ${btn.dataset.test}`);
      });
    });
  }

  // Render Services Grid
  function renderServices(categoryFilter = 'all') {
    const gridContainer = document.getElementById('servicesContainer');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const filtered = categoryFilter === 'all' 
      ? UPACHAR_DATA.services 
      : UPACHAR_DATA.services.filter(s => s.category === categoryFilter);

    filtered.forEach(service => {
      const isHi = currentLang === 'hi';
      const title = isHi ? service.titleHi : service.titleEn;
      const desc = isHi ? service.descHi : service.descEn;

      const card = document.createElement('div');
      card.className = 'service-card';
      
      let proceduresHtml = service.procedures.map(proc => `
        <div class="procedure-item">
          <i class="fas fa-check-circle"></i>
          <span>${isHi ? proc.hi : proc.en}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="service-icon">
            <i class="fas ${service.icon}"></i>
          </div>
          <span class="service-badge">${service.badge}</span>
        </div>
        <h3 class="service-title">${title}</h3>
        <p class="service-desc">${desc}</p>
        <div class="procedure-list">
          ${proceduresHtml}
        </div>
        <div class="card-footer">
          <button class="btn btn-primary book-service-btn" data-service-id="${service.id}">
            <i class="fab fa-whatsapp"></i>
            <span data-i18n="btnBookNow">${currentLang === 'hi' ? 'स्वास्थ्य सेवा बुक करें' : 'Book Home Care'}</span>
          </button>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    document.querySelectorAll('.book-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openBookingModal(btn.dataset.serviceId);
      });
    });

    setupFilterTabs();
  }

  function setupFilterTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(tab => {
      tab.onclick = () => {
        tabBtns.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.category;
        renderServices(activeTab);
      };
    });
  }

  // Render FAQs
  function renderFaqs() {
    const faqContainer = document.getElementById('faqAccordion');
    if (!faqContainer) return;

    faqContainer.innerHTML = '';
    UPACHAR_DATA.faqs.forEach((faq) => {
      const isHi = currentLang === 'hi';
      const question = isHi ? faq.qHi : faq.qEn;
      const answer = isHi ? faq.aHi : faq.aEn;

      const item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML = `
        <button class="faq-question">
          <span>${question}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer">
          <p>${answer}</p>
        </div>
      `;

      const qBtn = item.querySelector('.faq-question');
      qBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });

      faqContainer.appendChild(item);
    });
  }

  // Modal Setup
  function setupModal() {
    const modalOverlay = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('closeModalBtn');

    if (closeBtn && modalOverlay) {
      closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('active');
      });
    }

    updateFormSelects();
  }

  function updateFormSelects() {
    const select = document.getElementById('modalServiceSelect');
    if (!select) return;

    const isHi = currentLang === 'hi';
    select.innerHTML = `<option value="">${isHi ? '-- आवश्यक सेवा / सर्जरी चुनें --' : '-- Select Healthcare Service / Surgery --'}</option>`;

    UPACHAR_DATA.services.forEach(s => {
      const option = document.createElement('option');
      option.value = s.id;
      option.textContent = isHi ? s.titleHi : s.titleEn;
      select.appendChild(option);
    });
  }

  window.openBookingModal = function(serviceId = '', customNotes = '') {
    const modalOverlay = document.getElementById('bookingModal');
    const select = document.getElementById('modalServiceSelect');
    const notesInput = document.getElementById('modalNotes');

    if (select && serviceId) select.value = serviceId;
    if (notesInput && customNotes) notesInput.value = customNotes;
    if (modalOverlay) modalOverlay.classList.add('active');
  };

  // Form Handlers & WhatsApp Link Generator
  function setupForms() {
    // 1. Personalized Quote Form Handler
    const quoteForm = document.getElementById('personalizedQuoteForm');
    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('quoteName').value;
        const age = document.getElementById('quoteAge').value;
        const country = document.getElementById('quoteCountry').value;
        const treatment = document.getElementById('quoteTreatment').value;
        const hospital = document.getElementById('quoteHospital').value;
        const contact = document.getElementById('quoteContact').value;
        const emailWA = document.getElementById('quoteEmailWA').value;
        const date = document.getElementById('quoteDate').value;
        const reportInput = document.getElementById('quoteReportFile');

        let reportStatus = "No file attached";
        if (reportInput && reportInput.files.length > 0) {
          reportStatus = `Attached: ${reportInput.files[0].name} (${(reportInput.files[0].size / 1024).toFixed(1)} KB)`;
        }

        let text = `🏥 *PERSONALIZED TREATMENT & SURGERY ESTIMATE REQUEST*\n\n`;
        text += `👤 *Patient Name:* ${name} (Age: ${age})\n`;
        text += `📍 *Country/City:* ${country}\n`;
        text += `⚕️ *Treatment/Surgery Required:* ${treatment}\n`;
        text += `🏥 *Preferred Hospital/City:* ${hospital || 'Any suitable hospital'}\n`;
        text += `📞 *Contact Number:* ${contact}\n`;
        text += `💬 *Email / WhatsApp:* ${emailWA}\n`;
        text += `📅 *Preferred Date:* ${date || 'As soon as possible'}\n`;
        text += `📎 *Medical Reports:* ${reportStatus}\n\n`;
        text += `Please send me an estimated treatment cost breakdown and specialist recommendations. Thank you!`;

        const waNumber = country.toLowerCase().includes('nepal') 
          ? UPACHAR_DATA.contact.whatsappNepal 
          : UPACHAR_DATA.contact.whatsappIndia;

        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
      });
    }

    // 2. Online Appointment Form Handler
    const appointmentForm = document.getElementById('onlineAppointmentForm');
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const service = document.getElementById('appService').value;
        const name = document.getElementById('appName').value;
        const phone = document.getElementById('appPhone').value;
        const country = document.getElementById('appCountry').value;
        const address = document.getElementById('appAddress').value;
        const date = document.getElementById('appDate').value;
        const slot = document.getElementById('appSlot').value;
        const notes = document.getElementById('appNotes').value;

        sendWhatsAppBooking(service, name, phone, address, `Country: ${country} | Date: ${date} (${slot}) | Notes: ${notes}`, country);
      });
    }

    // 3. Modal Booking Form Handler
    const modalForm = document.getElementById('modalBookingForm');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const serviceId = document.getElementById('modalServiceSelect').value;
        const name = document.getElementById('modalName').value;
        const phone = document.getElementById('modalPhone').value;
        const country = document.getElementById('modalCountry') ? document.getElementById('modalCountry').value : 'India';
        const address = document.getElementById('modalAddress').value;
        const dateTime = document.getElementById('modalDateTime').value;
        const notes = document.getElementById('modalNotes').value;

        const serviceObj = UPACHAR_DATA.services.find(s => s.id === serviceId);
        const serviceName = serviceObj ? serviceObj.titleEn : serviceId;

        sendWhatsAppBooking(serviceName, name, phone, address, `Date: ${dateTime} | Notes: ${notes}`, country);
      });
    }
  }

  function sendWhatsAppBooking(service, name, phone, address, extra, country = 'India') {
    const waNumber = country === 'Nepal' || (phone && phone.startsWith('+977')) 
      ? UPACHAR_DATA.contact.whatsappNepal 
      : UPACHAR_DATA.contact.whatsappIndia;

    let text = `🏥 *NEW ONLINE BOOKING - UPACHAR.ORG*\n\n`;
    text += `🔹 *Requested Service:* ${service || 'General Healthcare Visit'}\n`;
    text += `👤 *Patient Name:* ${name || 'N/A'}\n`;
    text += `📞 *Phone:* ${phone || 'N/A'}\n`;
    text += `📍 *Address:* ${address || 'N/A'}\n`;
    if (extra) text += `ℹ️ *Details:* ${extra}\n`;
    text += `\nPlease confirm appointment slot & healthcare staff assignment. Thank you!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  }
});
