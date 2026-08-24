/**
 * Upachar.org Main Application Logic
 * Universal Search, 9-Item Nav Dropdowns, Doctor & Hospital Directories, Expiry Timer & WhatsApp Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let activeTab = 'all';

  // 1. Check Site Expiry & Payment Status (26th August 12:00 Midnight)
  if (checkSiteExpiryStatus()) return;

  initApp();

  function checkSiteExpiryStatus() {
    const config = UPACHAR_DATA.siteStatusConfig;
    if (config && config.autoDisable && !config.isPaid) {
      const expiryTime = new Date(config.expiryDateISO).getTime();
      if (Date.now() >= expiryTime) {
        document.body.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; background:#0F172A; color:#FFFFFF; text-align:center; padding:2rem; font-family:sans-serif;">
            <div style="font-size:4.5rem; margin-bottom:1rem;">⚠️</div>
            <h1 style="font-size:2.4rem; color:#EF4444; margin-bottom:0.75rem; font-weight:800;">Website Service Temporarily Suspended</h1>
            <p style="font-size:1.15rem; color:#CBD5E1; max-width:640px; margin-bottom:2rem; line-height:1.6;">
              The website domain <strong>upachar.org</strong> has been suspended due to pending account billing / payment clearance.
            </p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
              <a href="mailto:upachar.org@gmail.com" style="background:#2563EB; color:#FFF; padding:0.85rem 1.75rem; border-radius:8px; text-decoration:none; font-weight:600;">
                Contact Support Desk
              </a>
              <a href="tel:+917459977911" style="background:rgba(255,255,255,0.15); color:#FFF; padding:0.85rem 1.75rem; border-radius:8px; text-decoration:none; font-weight:600;">
                Call Admin (+91 7459977911)
              </a>
            </div>
          </div>
        `;
        return true;
      }
    }
    return false;
  }

  function initApp() {
    setupLanguageSwitcher();
    setupMobileMenu();
    setupUniversalSearch();
    renderDoctorsSection();
    renderHospitalsSection();
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
        renderDoctorsSection();
        renderHospitalsSection();
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

  // Mobile Menu Toggle & Submenu Handler
  function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
      let isToggling = false;

      function handleToggle(e) {
        if (e) e.stopPropagation();
        if (isToggling) return;
        isToggling = true;
        setTimeout(() => { isToggling = false; }, 300);

        navMenu.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }

      toggleBtn.addEventListener('click', handleToggle);

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
          navMenu.classList.remove('active');
          const icon = toggleBtn.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        }
      });

      // Mobile dropdown accordion handling
      navMenu.querySelectorAll('.nav-item').forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        if (link && dropdown) {
          link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1200) {
              const isDisplayed = window.getComputedStyle(dropdown).display !== 'none';
              if (!isDisplayed) {
                e.preventDefault();
                dropdown.style.display = 'block';
              } else {
                dropdown.style.display = 'none';
              }
            }
          });
        }
      });
    }
  }

  // UNIVERSAL HERO SEARCH WIDGET
  function setupUniversalSearch() {
    const searchInput = document.getElementById('universalSearchInput');
    const searchCategory = document.getElementById('universalSearchCategory');
    const searchBtn = document.getElementById('universalSearchBtn');

    function performSearch() {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const cat = searchCategory ? searchCategory.value : 'all';

      if (!query && cat === 'all') {
        window.location.hash = '#treatments';
        return;
      }

      if (cat === 'doctors' || query.includes('doc') || query.includes('dr')) {
        const docSection = document.getElementById('doctors');
        if (docSection) docSection.scrollIntoView({ behavior: 'smooth' });
        const docInput = document.getElementById('doctorSearchInput');
        if (docInput) { docInput.value = query; docInput.dispatchEvent(new Event('input')); }
      } else if (cat === 'hospitals' || query.includes('hospital') || query.includes('apollo') || query.includes('fortis')) {
        const hospSection = document.getElementById('hospitals');
        if (hospSection) hospSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        const surgSection = document.getElementById('surgeryCosts');
        if (surgSection) surgSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (searchBtn) searchBtn.onclick = performSearch;
    if (searchInput) {
      searchInput.onkeypress = (e) => {
        if (e.key === 'Enter') performSearch();
      };
    }
  }

  // RENDER DOCTORS DIRECTORY WITH FILTERS
  function renderDoctorsSection() {
    const container = document.getElementById('doctorsGrid');
    const countrySelect = document.getElementById('doctorCountryFilter');
    const deptSelect = document.getElementById('doctorDeptFilter');
    const nameInput = document.getElementById('doctorSearchInput');

    if (!container) return;

    if (deptSelect && deptSelect.options.length <= 1) {
      const depts = [...new Set(UPACHAR_DATA.doctorsDatabase.map(d => d.dept))];
      depts.forEach(dept => {
        const opt = document.createElement('option');
        opt.value = dept;
        opt.textContent = dept;
        deptSelect.appendChild(opt);
      });
    }

    function filterAndRenderDoctors() {
      const countryVal = countrySelect ? countrySelect.value : 'all';
      const deptVal = deptSelect ? deptSelect.value : 'all';
      const query = (nameInput ? nameInput.value : '').toLowerCase();

      const filtered = UPACHAR_DATA.doctorsDatabase.filter(d => {
        const matchCountry = countryVal === 'all' || d.country.toLowerCase() === countryVal.toLowerCase();
        const matchDept = deptVal === 'all' || d.dept.toLowerCase() === deptVal.toLowerCase();
        const matchName = !query || d.name.toLowerCase().includes(query) || d.title.toLowerCase().includes(query) || d.hospital.toLowerCase().includes(query);
        return matchCountry && matchDept && matchName;
      });

      container.innerHTML = '';

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
            <i class="fas fa-user-md" style="font-size:3rem; margin-bottom:1rem; color:var(--accent);"></i>
            <h3>No Doctors Found Matching Your Filters</h3>
            <p>Try resetting filters or searching with another keyword.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
          <div class="doc-img-wrap">
            <img src="${doc.photo}" alt="${doc.name}">
          </div>
          <div class="doc-info">
            <h3 class="doc-name">${doc.name}</h3>
            <div class="doc-title">${doc.title}</div>
            <div class="doc-meta">
              <span><i class="fas fa-award" style="color:var(--amber);"></i> ${doc.experience}</span>
              <span><i class="fas fa-building" style="color:var(--accent);"></i> ${doc.hospital}</span>
            </div>
            <p class="doc-bio">${doc.bio}</p>
            <div style="display:flex; gap:0.5rem; margin-top:auto; padding-top:1rem;">
              <button class="btn btn-primary btn-sm book-consult-btn" data-doc="${doc.name}" data-hosp="${doc.hospital}">
                <i class="fab fa-whatsapp"></i> Book Consultation
              </button>
            </div>
          </div>
        `;

        container.appendChild(card);
      });

      document.querySelectorAll('.book-consult-btn').forEach(btn => {
        btn.onclick = () => {
          openBookingModal('doctor', `Consultation Request with: ${btn.dataset.doc} at ${btn.dataset.hosp}`);
        };
      });
    }

    if (countrySelect) countrySelect.onchange = filterAndRenderDoctors;
    if (deptSelect) deptSelect.onchange = filterAndRenderDoctors;
    if (nameInput) nameInput.oninput = filterAndRenderDoctors;

    filterAndRenderDoctors();
  }

  // RENDER HOSPITALS DIRECTORY
  function renderHospitalsSection() {
    const container = document.getElementById('hospitalsGrid');
    if (!container) return;

    container.innerHTML = '';
    UPACHAR_DATA.hospitalsDatabase.forEach(h => {
      const card = document.createElement('div');
      card.className = 'hospital-card';
      card.innerHTML = `
        <div class="hosp-img-wrap">
          <img src="${h.photo}" alt="${h.name}">
          <span class="hosp-badge">${h.badge}</span>
        </div>
        <div class="hosp-content">
          <h3 class="hosp-name">${h.name}</h3>
          <div class="hosp-location"><i class="fas fa-map-marker-alt" style="color:var(--rose);"></i> ${h.location} • <strong>${h.beds}</strong></div>
          <div class="hosp-specs">
            ${h.specialties.map(s => `<span class="spec-tag">${s}</span>`).join('')}
          </div>
          <div style="display:flex; gap:0.5rem; margin-top:1.25rem;">
            <button class="btn btn-navy btn-sm hosp-inquiry-btn" data-hosp="${h.name}" data-loc="${h.location}" style="width:100%;">
              <i class="fab fa-whatsapp"></i> Inquire Hospital Package
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    document.querySelectorAll('.hosp-inquiry-btn').forEach(btn => {
      btn.onclick = () => {
        openQuoteModal('', btn.dataset.hosp, btn.dataset.loc);
      };
    });
  }

  // RENDER SURGERY & TREATMENT COST SECTION
  function renderSurgeryCostSection() {
    const tableBody = document.getElementById('surgeryTableBody');
    const selectTreatment = document.getElementById('surgeryTreatmentSelect');
    const selectCity = document.getElementById('surgeryCitySelect');
    const searchBtn = document.getElementById('surgerySearchBtn');

    if (!tableBody) return;

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
              No treatment or surgery matched your selection.
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(item => {
        const isHi = currentLang === 'hi';
        const treatmentName = isHi ? item.treatmentHi : item.treatmentEn;

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

      document.querySelectorAll('.quote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openQuoteModal(btn.dataset.treatment, btn.dataset.hospital, btn.dataset.city);
        });
      });
    }

    if (searchBtn) searchBtn.onclick = filterAndRenderSurgeries;
    if (selectTreatment) selectTreatment.onchange = filterAndRenderSurgeries;
    if (selectCity) selectCity.onchange = filterAndRenderSurgeries;

    filterAndRenderSurgeries();
  }

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

    const modalForm = document.getElementById('modalBookingForm');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const serviceId = document.getElementById('modalServiceSelect').value;
        const name = document.getElementById('modalName').value;
        const phone = document.getElementById('modalPhone').value;
        const country = document.getElementById('modalCountry') ? document.getElementById('modalCountry').value : 'India';
        const address = document.getElementById('modalAddress').value;
        const dateTimeEl = document.getElementById('modalDateTime');
        const dateTime = dateTimeEl ? dateTimeEl.value : '';
        const notes = document.getElementById('modalNotes') ? document.getElementById('modalNotes').value : '';

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
