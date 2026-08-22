/**
 * Upachar.org Main Application Logic
 * Interactive Search & Cost Comparison, Online Appointments, Home Sample Collection & WhatsApp Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let activeTab = 'all';

  initApp();

  function initApp() {
    setupLanguageSwitcher();
    setupMobileMenu();
    renderServices(activeTab);
    renderCostComparisonTable();
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
        renderServices(activeTab);
        renderCostComparisonTable();
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

  // SEARCH & COST COMPARISON TABLE TOOL
  function renderCostComparisonTable() {
    const tableBody = document.getElementById('costTableBody');
    const searchInput = document.getElementById('costSearchInput');
    const categorySelect = document.getElementById('costCategoryFilter');

    if (!tableBody) return;

    function filterAndRender() {
      const query = (searchInput ? searchInput.value : '').toLowerCase();
      const cat = categorySelect ? categorySelect.value : 'all';

      const filtered = UPACHAR_DATA.costDatabase.filter(item => {
        const name = (currentLang === 'hi' ? item.nameHi : item.nameEn).toLowerCase();
        const matchesQuery = name.includes(query) || item.category.toLowerCase().includes(query);
        const matchesCat = cat === 'all' || item.category.toLowerCase().includes(cat.toLowerCase());
        return matchesQuery && matchesCat;
      });

      tableBody.innerHTML = '';

      if (filtered.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align:center; padding:2rem; color:var(--text-muted);">
              <i class="fas fa-search" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
              No healthcare services or tests matched your search "${query}". Try searching "Catheter", "Oxygen", "Doctor", "CBC"...
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(item => {
        const isHi = currentLang === 'hi';
        const name = isHi ? item.nameHi : item.nameEn;
        const inclusions = isHi ? item.inclusionsHi : item.inclusionsEn;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td><strong>${name}</strong></td>
          <td><span class="service-badge" style="font-size:0.75rem;">${item.category}</span></td>
          <td><span style="font-weight:800; color:var(--accent); font-size:1.05rem;">${item.cost}</span></td>
          <td style="font-size:0.875rem; color:var(--text-muted);">${inclusions}</td>
          <td>
            <button class="btn btn-primary btn-sm book-cost-item" data-name="${name}">
              <i class="fab fa-whatsapp"></i> ${isHi ? 'बुकिंग करें' : 'Book'}
            </button>
          </td>
        `;

        tableBody.appendChild(row);
      });

      document.querySelectorAll('.book-cost-item').forEach(btn => {
        btn.addEventListener('click', () => {
          openBookingModal('', `Inquiry & Booking for: ${btn.dataset.name}`);
        });
      });
    }

    if (searchInput) searchInput.oninput = filterAndRender;
    if (categorySelect) categorySelect.onchange = filterAndRender;

    filterAndRender();
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
    select.innerHTML = `<option value="">${isHi ? '-- आवश्यक सेवा चुनें --' : '-- Select Healthcare Service / Test --'}</option>`;

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

    let text = `🏥 *NEW ONLINE APPOINTMENT - UPACHAR.ORG*\n\n`;
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
