/**
 * BHARATHI JEWELLERS - Core Premium Interactive Script
 * Features:
 * 1. Sticky Frosted Header with scroll transition
 * 2. Mobile Hamburger Toggle Menu with slide drawer closing on tap
 * 3. Dynamic Products Hydration via products.json (with robust local CORS fallback)
 * 4. High-Performance Event-Delegated WhatsApp Inquiry String Compiler
 * 5. Elegant Form Validation and Mock Consultation Action Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // === 1. STICKY HEADER FROSTED EFFECT ===
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check once initially


  // === 2. MOBILE MENU NAVBAR TOGGLE ===
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }


  // === 3. DYNAMIC PRODUCTS HYDRATION & CORS FALLBACK ===
  // Elite CORS Fallback Dataset matching products.json exactly.
  // This ensures that even if users open files directly via the local file system (file://),
  // the website remains fully functional and catalog cards load beautifully.
  const fallbackProducts = [
    {
      "id": "prodDiamondRing",
      "name": "Royal Diamond Bloom Ring",
      "category": "rings",
      "spec": "18K Gold • 1.25ct VVS1",
      "badge": "Featured",
      "image": "images/rings/diamond_ring.png",
      "chips": ["18K White Gold", "1.25ct VVS1 Diamond", "E-F Color Solitaire", "GIA Certified"],
      "desc": "A breathtaking brilliant-cut center solitaire diamond, surrounded beautifully by a floral halo of pavé-set diamonds on a polished platinum-alloy claw and 18K white gold band. A flawless testament to timeless commitment.",
      "shortSpec": "18K Gold, 1.25ct VVS1 Diamond (4.1 grams)"
    },
    {
      "id": "prodEmeraldNecklace",
      "name": "Nizam Royal Emerald Choker",
      "category": "necklaces",
      "spec": "22K Gold • Colombian Emeralds",
      "badge": "Exclusive",
      "image": "images/necklaces/emerald_necklace.png",
      "chips": ["22K Solid Gold", "5.4ct Colombian Emerald", "Natural Gemstones", "IGI Certified"],
      "desc": "Inspired by rich royal Deccan heritage, this opulent choker features a central octagonal Colombian emerald drop, bordered with paved ideal-cut diamonds on hand-woven gold lace braids. A grand heirloom masterpiece.",
      "shortSpec": "22K Solid Gold, Colombian Emerald & Diamonds (52.6 grams)"
    },
    {
      "id": "prodGoldBangle",
      "name": "Mayura Filigree Temple Kada",
      "category": "bracelets",
      "spec": "22K Gold • Antique Polish",
      "badge": "Heritage",
      "image": "images/bracelets/gold_bangle.png",
      "chips": ["22K Hallmarked", "Handmade Filigree", "Set of 2 Kadas", "BIS 916 Certified"],
      "desc": "A pair of magnificent antique-polished gold kadas, showcasing masterfully detailed peacock (Mayura) motifs in high-relief filigree carvings. Completed with custom hinge locks and matte gold detailing.",
      "shortSpec": "22K Solid Hallmarked Gold - Set of 2 (45.2 grams)"
    },
    {
      "id": "prodGoldBand",
      "name": "Aditi Comfort Solid Gold Band",
      "category": "rings",
      "spec": "22K Gold • Mirror Polish",
      "badge": "Classic",
      "image": "images/rings/gold_band.png",
      "chips": ["22K Solid Gold", "Comfort-Fit Bevel", "Unisex Style", "Mirror Finish"],
      "desc": "A timeless comfort-fit band crafted in highly refined, pure 22-karat solid yellow gold. Formed with smooth domed surfaces and meticulously polished to a flawless mirror finish for premium daily wear.",
      "shortSpec": "22K Solid Yellow Gold Comfort Band (6.8 grams)"
    },
    {
      "id": "prodGoldChoker",
      "name": "Lakshmi Temple Gold Necklace",
      "category": "necklaces",
      "spec": "22K Gold • Ruby Temple Set",
      "badge": "Heritage",
      "image": "images/necklaces/gold_choker.png",
      "chips": ["22K Solid Gold", "Natural Rubies", "Temple Coin Work", "BIS 916 Certified"],
      "desc": "A spectacular traditional temple neckpiece displaying highly detailed engravings of Goddess Lakshmi. Hand-set with deep natural Burmese rubies and dangling solid gold drop beads, reflecting rich cultural heritage.",
      "shortSpec": "22K Solid Heavy Temple Gold Choker (74.8 grams)"
    },
    {
      "id": "prodTennisBracelet",
      "name": "Apsara Brilliant Tennis Bracelet",
      "category": "bracelets",
      "spec": "18K Gold • 6.4ct Diamonds",
      "badge": "Pure Luxury",
      "image": "images/bracelets/diamond_tennis.png",
      "chips": ["18K White Gold", "6.4ct VVS Diamonds", "Ideal Round Cuts", "Secure Clasp"],
      "desc": "A continuous, fluid stream of ideal-cut brilliant diamonds set seamlessly in a four-prong 18-karat white gold tennis link design. Radiates intense sparkling reflections with every movement.",
      "shortSpec": "18K White Gold, 6.4ct VVS Diamond Line (16.2 grams)"
    },
    {
      "id": "prodPolkiSet",
      "name": "Rajkumari Bridal Heritage Set",
      "category": "necklaces",
      "spec": "22K Gold • Uncut Polki Diamonds",
      "badge": "New Arrival",
      "image": "images/necklaces/gold_choker.png",
      "chips": ["22K Gold Base", "Genuine Polki Jewels", "South Sea Pearls", "Heritage Kundan"],
      "desc": "A breathtaking heirloom ceremonial neckpiece showcasing large, raw uncut Polki diamonds set in a traditional Kundan foil base, detailed beautifully with rows of hand-strung natural South Sea pearls.",
      "shortSpec": "22K Bridal Gold, Uncut Polki Diamonds & Pearls (85.4 grams)"
    },
    {
      "id": "prodFiligreeRing",
      "name": "Devi Filigree Gold Ring",
      "category": "rings",
      "spec": "22K Gold • Filigree Accent",
      "badge": "Artisan Choice",
      "image": "images/rings/gold_band.png",
      "chips": ["22K Hallmarked", "Wire-woven Craft", "Matte Gold Accent", "BIS 916 Certified"],
      "desc": "An antique-style cocktail statement ring hand-woven with fine 22K gold threads, forming detailed openwork floral panels. Designed for users who demand unique heritage styling.",
      "shortSpec": "22K Gold Handmade Wire-filigree Ring (8.4 grams)"
    }
  ];

  const dynamicGrid = document.getElementById('dynamicCatalogGrid');

  const buildChipsHtml = (chips) => {
    return chips.map(chip => `<span class="spec-chip">${chip}</span>`).join('');
  };

  const renderCatalogCards = (products) => {
    if (!dynamicGrid) return;
    dynamicGrid.innerHTML = ''; // Clear contents

    products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card show';
      card.setAttribute('data-category', prod.category);
      card.id = prod.id;

      const badgeHtml = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : '';

      card.innerHTML = `
        <div class="product-img-container">
          ${badgeHtml}
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img">
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-category">${prod.category}</span>
            <span class="product-spec">${prod.spec}</span>
          </div>
          <h3>${prod.name}</h3>
          
          <div class="product-specs-chips">
            ${buildChipsHtml(prod.chips)}
          </div>

          <p class="product-desc">${prod.desc}</p>
          
          <div class="card-action-bar">
            <span class="price-poa">Price Upon Request</span>
            <button class="product-inquiry-btn" data-product-name="${prod.name}" data-product-spec="${prod.shortSpec}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      `;
      dynamicGrid.appendChild(card);
    });

    // Re-initialize categories filtering and active checking once loaded
    initializeFilterHandlers();
    processUrlParams();
  };

  const loadCatalogData = async () => {
    if (!dynamicGrid) return;
    
    try {
      // Attempt to load dynamically from products.json
      const response = await fetch('products.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      renderCatalogCards(data);
    } catch (err) {
      // Clean fallback activated instantly if local CORS restrictions block fetching
      console.warn("Catalog Fetch Controller - Local CORS/Protocol block intercepted. Fallback Catalog active.", err);
      renderCatalogCards(fallbackProducts);
    }
  };

  // Trigger catalog hydration
  loadCatalogData();


  // === 4. CATEGORIES FILTERING INTERACTION ===
  function initializeFilterHandlers() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0 && productCards.length > 0) {
      filterBtns.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true)); // Clear previous duplicate event attachments
      });

      const updatedFilterBtns = document.querySelectorAll('.filter-btn');
      updatedFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          updatedFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filterValue = btn.getAttribute('data-filter');
          const cards = document.querySelectorAll('.product-card');

          cards.forEach(card => {
            card.classList.remove('show', 'hide');
            if (filterValue === 'all') {
              card.classList.add('show');
            } else {
              const cardCategory = card.getAttribute('data-category');
              if (cardCategory === filterValue) {
                card.classList.add('show');
              } else {
                card.classList.add('hide');
              }
            }
          });
        });
      });
    }
  }

  function processUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    if (filter) {
      const targetBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  }


  // === 5. EVENT-DELEGATED DYNAMIC WHATSAPP INQUIRY ===
  // Using high-performance event delegation attached to document body.
  // This guarantees dynamic card inquiry works seamlessly without requiring event rebinding.
  document.body.addEventListener('click', (e) => {
    const button = e.target.closest('.product-inquiry-btn');
    if (!button) return;

    e.preventDefault();
    const productName = button.getAttribute('data-product-name');
    const productSpec = button.getAttribute('data-product-spec') || '';

    const whatsappBaseUrl = 'https://wa.me/';
    const whatsappPhoneNumber = '919999999999'; // Unified official representative WhatsApp number

    let message = `Hello Bharathi Jewellers! I am visiting your premium catalog website and would love to inquire about the following magnificent piece:\n\n`;
    message += `✨ Jewelry Item: *${productName}*\n`;
    if (productSpec) {
      message += `⚖️ Specification: _${productSpec}_\n`;
    }
    message += `\nCould you please share details regarding pricing, current gold rates, and availability at the showroom? Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${whatsappBaseUrl}${whatsappPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });


  // === 6. ELEGANT FORM VALIDATION & ACTION SIMULATOR ===
  const contactForm = document.getElementById('catalogContactForm');
  const formStatus = document.getElementById('formStatusBox');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !phone || !message) {
        alert('Please fill out all mandatory showroom details before submitting.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Connecting to Showroom...';

      setTimeout(() => {
        formStatus.style.display = 'block';
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        setTimeout(() => {
          formStatus.style.opacity = '0';
          formStatus.style.transition = 'opacity 1s ease';
          setTimeout(() => {
            formStatus.style.display = 'none';
            formStatus.style.opacity = '1';
          }, 1000);
        }, 8000);

      }, 1500);
    });
  }
});
