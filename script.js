/**
 * SRI NARAYANA JEWELLERS - Core Premium Interactive Script
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
  // Houses a high-end 15-item representative catalog (one from each luxury category)
  // to guarantee robust, offline-safe operations with direct local loads (file://).
  const fallbackProducts = [
  {
    "id": "prod_rings_1",
    "name": "Royal Solitaire Diamond Ring",
    "category": "rings",
    "spec": "950 Platinum • Colombian Emr",
    "badge": "Featured",
    "image": "images/rings/royal_solitaire_diamond_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "Premium 950 Platinum",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "4.5 Grams Base"
    ],
    "desc": "A breathtaking masterwork designed to grace the finger with majestic elegance. Set in certified premium 950 platinum, the core colombian octagonal emeralds captures high dispersion reflections beautifully. Perfect for an exquisite statement or heirloom commitment.",
    "shortSpec": "Premium 950 Platinum, Colombian Octagonal Emeralds (~4.5g base weight)"
  },
  {
    "id": "prod_rings_10",
    "name": "Kanak Hand-Carved Gold Ring",
    "category": "rings",
    "spec": "18K White Gold • South Sea Prls",
    "badge": "Classic",
    "image": "images/rings/kanak_hand_carved_gold_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Elegant White Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "12.6 Grams Base"
    ],
    "desc": "This stunning cocktail band showcases beautiful lustrous white south sea pearls accented seamlessly on a base of textured 18k elegant white gold. Sculpted by hand to assure optimal balance and comfortable, light finger presence.",
    "shortSpec": "18K Elegant White Gold, Lustrous White South Sea Pearls (~12.6g base weight)"
  },
  {
    "id": "prod_rings_2",
    "name": "Imperial Polki Cocktail Ring",
    "category": "rings",
    "spec": "22K Matte Gold • South Sea Prls",
    "badge": "Popular",
    "image": "images/rings/imperial_polki_cocktail_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Temple Matte Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "5.4 Grams Base"
    ],
    "desc": "Crafted in flawless 22k temple matte gold and accented with shimmering lustrous white south sea pearls, this ring features an ergonomic smooth inner band for ultimate luxury. The masterfully structured setting sits proudly, highlighting natural refraction.",
    "shortSpec": "22K Temple Matte Gold, Lustrous White South Sea Pearls (~5.4g base weight)"
  },
  {
    "id": "prod_rings_3",
    "name": "Vedic Filigree Gold Band",
    "category": "rings",
    "spec": "18K White Gold • Uncut Polki Dms",
    "badge": "New Arrival",
    "image": "images/rings/vedic_filigree_gold_band.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Elegant White Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "6.3 Grams Base"
    ],
    "desc": "Inspired by historical royal seals, this 18k elegant white gold ring houses hand-selected traditional uncut polki diamonds in a heavy claw setting. Detailed filigree scrollwork runs gracefully along the outer shank, demonstrating museum-grade benchwork.",
    "shortSpec": "18K Elegant White Gold, Traditional Uncut Polki Diamonds (~6.3g base weight)"
  },
  {
    "id": "prod_rings_4",
    "name": "Nizam Antique Emerald Ring",
    "category": "rings",
    "spec": "18K Rose Gold • VVS Dms",
    "badge": "Exclusive",
    "image": "images/rings/nizam_antique_emerald_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "18K Soft Rose Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "7.2 Grams Base"
    ],
    "desc": "A gorgeous contemporary design featuring pristine fine marquise cut vvs diamonds wrapped in polished 18k soft rose gold curves. Its elegant profile transitions fluidly from executive daily wear to premium evening regalia.",
    "shortSpec": "18K Soft Rose Gold, Fine Marquise Cut VVS Diamonds (~7.2g base weight)"
  },
  {
    "id": "prod_rings_5",
    "name": "Chola Dynasty Signet Ring",
    "category": "rings",
    "spec": "22K Solid Gold • Colombian Emr",
    "badge": "Best Seller",
    "image": "images/rings/chola_dynasty_signet_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Yellow Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "8.1 Grams Base"
    ],
    "desc": "This stunning cocktail band showcases beautiful colombian octagonal emeralds accented seamlessly on a base of textured 22k solid yellow gold. Sculpted by hand to assure optimal balance and comfortable, light finger presence.",
    "shortSpec": "22K Solid Yellow Gold, Colombian Octagonal Emeralds (~8.1g base weight)"
  },
  {
    "id": "prod_rings_6",
    "name": "Aura Marquise Diamond Ring",
    "category": "rings",
    "spec": "22K Polished Gold • South Sea Prls",
    "badge": "Artisan Choice",
    "image": "images/rings/aura_marquise_diamond_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Polished Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "9.0 Grams Base"
    ],
    "desc": "A breathtaking masterwork designed to grace the finger with majestic elegance. Set in certified 22k antique polished gold, the core lustrous white south sea pearls captures high dispersion reflections beautifully. Perfect for an exquisite statement or heirloom commitment.",
    "shortSpec": "22K Antique Polished Gold, Lustrous White South Sea Pearls (~9.0g base weight)"
  },
  {
    "id": "prod_rings_7",
    "name": "Devi Kundan Floral Ring",
    "category": "rings",
    "spec": "18K Champagne Gold • Uncut Polki Dms",
    "badge": "Heritage",
    "image": "images/rings/devi_kundan_floral_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Champagne Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "9.9 Grams Base"
    ],
    "desc": "Crafted in flawless 18k champagne gold and accented with shimmering traditional uncut polki diamonds, this ring features an ergonomic smooth inner band for ultimate luxury. The masterfully structured setting sits proudly, highlighting natural refraction.",
    "shortSpec": "18K Champagne Gold, Traditional Uncut Polki Diamonds (~9.9g base weight)"
  },
  {
    "id": "prod_rings_8",
    "name": "Rajkumari Ruby Halo Band",
    "category": "rings",
    "spec": "950 Platinum • VVS Dms",
    "badge": null,
    "image": "images/rings/rajkumari_ruby_halo_band.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "Premium 950 Platinum",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "10.8 Grams Base"
    ],
    "desc": "Inspired by historical royal seals, this premium 950 platinum ring houses hand-selected fine marquise cut vvs diamonds in a heavy claw setting. Detailed filigree scrollwork runs gracefully along the outer shank, demonstrating museum-grade benchwork.",
    "shortSpec": "Premium 950 Platinum, Fine Marquise Cut VVS Diamonds (~10.8g base weight)"
  },
  {
    "id": "prod_rings_9",
    "name": "Apsara Pear Cut Solitaire",
    "category": "rings",
    "spec": "22K Matte Gold • Colombian Emr",
    "badge": "Limited",
    "image": "images/rings/apsara_pear_cut_solitaire.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Temple Matte Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "11.7 Grams Base"
    ],
    "desc": "A gorgeous contemporary design featuring pristine colombian octagonal emeralds wrapped in polished 22k temple matte gold curves. Its elegant profile transitions fluidly from executive daily wear to premium evening regalia.",
    "shortSpec": "22K Temple Matte Gold, Colombian Octagonal Emeralds (~11.7g base weight)"
  },
  {
    "id": "prod_necklaces_1",
    "name": "Nizam Royal Emerald Choker",
    "category": "necklaces",
    "spec": "22K Matte Gold • Uncut Polki Dms",
    "badge": null,
    "image": "images/necklaces/nizam_royal_emerald_choker.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Temple Matte Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "42.0 Grams Base"
    ],
    "desc": "Draping the neckline with supreme royalty, this necklace integrates wreathed braids of 22k temple matte gold around pristine traditional uncut polki diamonds drop points. Crafted as a grand heirloom highlight for standard-setting luxury.",
    "shortSpec": "22K Temple Matte Gold, Traditional Uncut Polki Diamonds (~42.0g base weight)"
  },
  {
    "id": "prod_necklaces_10",
    "name": "Aishwarya Diamond Wave Choker",
    "category": "necklaces",
    "spec": "18K Rose Gold • VVS Dms",
    "badge": "Heritage",
    "image": "images/necklaces/aishwarya_diamond_wave_choker.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Soft Rose Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "67.2 Grams Base"
    ],
    "desc": "This custom-fit hasli collar integrates stylized peacock accents in hand-engraved 18k soft rose gold. Natural drop fine marquise cut vvs diamonds gems dangle fluidly, offering exquisite visual movement.",
    "shortSpec": "18K Soft Rose Gold, Fine Marquise Cut VVS Diamonds (~67.2g base weight)"
  },
  {
    "id": "prod_necklaces_2",
    "name": "Chola Kasulaperu Gold Haar",
    "category": "necklaces",
    "spec": "18K White Gold • VVS Dms",
    "badge": "Limited",
    "image": "images/necklaces/chola_kasulaperu_gold_haar.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Elegant White Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "44.8 Grams Base"
    ],
    "desc": "A magnificent classic collar piece hand-woven in certified 18k elegant white gold. Alternating clusters of ideal fine marquise cut vvs diamonds capture the ambient light gracefully, completing the ensemble with high-fashion sophistication.",
    "shortSpec": "18K Elegant White Gold, Fine Marquise Cut VVS Diamonds (~44.8g base weight)"
  },
  {
    "id": "prod_necklaces_3",
    "name": "Mughal Kundan Bridal Choker",
    "category": "necklaces",
    "spec": "18K Rose Gold • Colombian Emr",
    "badge": "Classic",
    "image": "images/necklaces/mughal_kundan_bridal_choker.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Soft Rose Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "47.6 Grams Base"
    ],
    "desc": "Inspired by ancient dynasty art, this neckpiece displays beautifully layered bib-curving strands of 18k soft rose gold. Accented masterfully with sparkling colombian octagonal emeralds details that represent ultimate Indian cultural prestige.",
    "shortSpec": "18K Soft Rose Gold, Colombian Octagonal Emeralds (~47.6g base weight)"
  },
  {
    "id": "prod_necklaces_4",
    "name": "Apsara South Sea Pearl Necklace",
    "category": "necklaces",
    "spec": "22K Solid Gold • South Sea Prls",
    "badge": "Featured",
    "image": "images/necklaces/apsara_south_sea_pearl_necklace.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Solid Yellow Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "50.4 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, featuring cascading rows of lustrous white south sea pearls suspended gracefully on a sleek collar of 22k solid yellow gold. Buffed to a magnificent mirror gloss to enhance high-fashion evening wear.",
    "shortSpec": "22K Solid Yellow Gold, Lustrous White South Sea Pearls (~50.4g base weight)"
  },
  {
    "id": "prod_necklaces_5",
    "name": "Rajkumari Guttapusalu Haar",
    "category": "necklaces",
    "spec": "22K Polished Gold • Uncut Polki Dms",
    "badge": "Popular",
    "image": "images/necklaces/rajkumari_guttapusalu_haar.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Antique Polished Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "53.2 Grams Base"
    ],
    "desc": "This custom-fit hasli collar integrates stylized peacock accents in hand-engraved 22k antique polished gold. Natural drop traditional uncut polki diamonds gems dangle fluidly, offering exquisite visual movement.",
    "shortSpec": "22K Antique Polished Gold, Traditional Uncut Polki Diamonds (~53.2g base weight)"
  },
  {
    "id": "prod_necklaces_6",
    "name": "Royal Peacock Nakshi Necklace",
    "category": "necklaces",
    "spec": "18K Champagne Gold • VVS Dms",
    "badge": "New Arrival",
    "image": "images/necklaces/royal_peacock_nakshi_necklace.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Champagne Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "56.0 Grams Base"
    ],
    "desc": "Draping the neckline with supreme royalty, this necklace integrates wreathed braids of 18k champagne gold around pristine fine marquise cut vvs diamonds drop points. Crafted as a grand heirloom highlight for standard-setting luxury.",
    "shortSpec": "18K Champagne Gold, Fine Marquise Cut VVS Diamonds (~56.0g base weight)"
  },
  {
    "id": "prod_necklaces_7",
    "name": "Devi Antique Ruby Collar",
    "category": "necklaces",
    "spec": "950 Platinum • Colombian Emr",
    "badge": "Exclusive",
    "image": "images/necklaces/devi_antique_ruby_collar.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "Premium 950 Platinum",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "58.8 Grams Base"
    ],
    "desc": "A magnificent classic collar piece hand-woven in certified premium 950 platinum. Alternating clusters of ideal colombian octagonal emeralds capture the ambient light gracefully, completing the ensemble with high-fashion sophistication.",
    "shortSpec": "Premium 950 Platinum, Colombian Octagonal Emeralds (~58.8g base weight)"
  },
  {
    "id": "prod_necklaces_8",
    "name": "Kanak Filigree Gold Lariat",
    "category": "necklaces",
    "spec": "22K Matte Gold • South Sea Prls",
    "badge": "Best Seller",
    "image": "images/necklaces/kanak_filigree_gold_lariat.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Temple Matte Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "61.6 Grams Base"
    ],
    "desc": "Inspired by ancient dynasty art, this neckpiece displays beautifully layered bib-curving strands of 22k temple matte gold. Accented masterfully with sparkling lustrous white south sea pearls details that represent ultimate Indian cultural prestige.",
    "shortSpec": "22K Temple Matte Gold, Lustrous White South Sea Pearls (~61.6g base weight)"
  },
  {
    "id": "prod_necklaces_9",
    "name": "Lakshmi Temple Heavy Haar",
    "category": "necklaces",
    "spec": "18K White Gold • Uncut Polki Dms",
    "badge": "Artisan Choice",
    "image": "images/necklaces/lakshmi_temple_heavy_haar.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Elegant White Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "64.4 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, featuring cascading rows of traditional uncut polki diamonds suspended gracefully on a sleek collar of 18k elegant white gold. Buffed to a magnificent mirror gloss to enhance high-fashion evening wear.",
    "shortSpec": "18K Elegant White Gold, Traditional Uncut Polki Diamonds (~64.4g base weight)"
  },
  {
    "id": "prod_bracelets_1",
    "name": "Apsara Brilliant Tennis Bracelet",
    "category": "bracelets",
    "spec": "22K Solid Gold • Burmese Rub",
    "badge": "Popular",
    "image": "images/bracelets/apsara_brilliant_tennis_bracelet.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Yellow Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "25.0 Grams Base"
    ],
    "desc": "A fluid, seamless stream of brilliant-cut natural untreated burmese rubies set beautifully in a secure 22k solid yellow gold line layout. Features a custom integrated clasp lock for absolute security and standard-setting wrist comfort.",
    "shortSpec": "22K Solid Yellow Gold, Natural Untreated Burmese Rubies (~25.0g base weight)"
  },
  {
    "id": "prod_bracelets_10",
    "name": "Vedic Sanskrit Engraved Kada",
    "category": "bracelets",
    "spec": "18K Champagne Gold • Ceylon Saph",
    "badge": "Featured",
    "image": "images/bracelets/vedic_sanskrit_engraved_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Champagne Gold",
      "Royal Blue Ceylon Sapphires",
      "BIS 916 Certified",
      "42.1 Grams Base"
    ],
    "desc": "This highly durable link chain bracelet displays pristine royal blue ceylon sapphires charms draping elegantly from heavy 18k champagne gold loops. A beautiful touch of everyday luxury.",
    "shortSpec": "18K Champagne Gold, Royal Blue Ceylon Sapphires (~42.1g base weight)"
  },
  {
    "id": "prod_bracelets_2",
    "name": "Nizam Royal Gold Kada",
    "category": "bracelets",
    "spec": "22K Polished Gold • Ceylon Saph",
    "badge": "New Arrival",
    "image": "images/bracelets/nizam_royal_gold_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Polished Gold",
      "Royal Blue Ceylon Sapphires",
      "BIS 916 Certified",
      "26.9 Grams Base"
    ],
    "desc": "This structural cuff bracelet is hand-forged in premium 22k antique polished gold. Features alternating polished panels and rows of hand-set royal blue ceylon sapphires to present an understated, premium wrist silhouette.",
    "shortSpec": "22K Antique Polished Gold, Royal Blue Ceylon Sapphires (~26.9g base weight)"
  },
  {
    "id": "prod_bracelets_3",
    "name": "Chola Filigree Link Bracelet",
    "category": "bracelets",
    "spec": "18K Champagne Gold • Basra Prls",
    "badge": "Exclusive",
    "image": "images/bracelets/chola_filigree_link_bracelet.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Champagne Gold",
      "Creamy Basra Pearls",
      "BIS 916 Certified",
      "28.8 Grams Base"
    ],
    "desc": "Interlocking twisted braids of 18k champagne gold are completed by highly detailed clusters of lustrous creamy basra pearls at the terminals. Lightweight and fluidly flexible, it curves gracefully around the wrist for premium daily styling.",
    "shortSpec": "18K Champagne Gold, Lustrous Creamy Basra Pearls (~28.8g base weight)"
  },
  {
    "id": "prod_bracelets_4",
    "name": "Mughal Kundan Cuff Bracelet",
    "category": "bracelets",
    "spec": "950 Platinum • VVS1 Sol Dms",
    "badge": "Best Seller",
    "image": "images/bracelets/mughal_kundan_cuff_bracelet.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "Premium 950 Platinum",
      "VVS1 Solitaire Diamonds",
      "BIS 916 Certified",
      "30.7 Grams Base"
    ],
    "desc": "An opulent contemporary statement piece showcasing ideal-cut ideal cut vvs1 solitaire diamonds in a bold geometry of polished premium 950 platinum. Designed to catch reflections from all angles with every single hand movement.",
    "shortSpec": "Premium 950 Platinum, Ideal Cut VVS1 Solitaire Diamonds (~30.7g base weight)"
  },
  {
    "id": "prod_bracelets_5",
    "name": "Mayura Nakshi Hand Kada",
    "category": "bracelets",
    "spec": "22K Matte Gold • Burmese Rub",
    "badge": "Artisan Choice",
    "image": "images/bracelets/mayura_nakshi_hand_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Temple Matte Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "32.6 Grams Base"
    ],
    "desc": "This highly durable link chain bracelet displays pristine natural untreated burmese rubies charms draping elegantly from heavy 22k temple matte gold loops. A beautiful touch of everyday luxury.",
    "shortSpec": "22K Temple Matte Gold, Natural Untreated Burmese Rubies (~32.6g base weight)"
  },
  {
    "id": "prod_bracelets_6",
    "name": "Kanak Delicate Gold Chain Bracelet",
    "category": "bracelets",
    "spec": "18K White Gold • Ceylon Saph",
    "badge": "Heritage",
    "image": "images/bracelets/kanak_delicate_gold_chain_bracelet.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Elegant White Gold",
      "Royal Blue Ceylon Sapphires",
      "BIS 916 Certified",
      "34.5 Grams Base"
    ],
    "desc": "A fluid, seamless stream of brilliant-cut royal blue ceylon sapphires set beautifully in a secure 18k elegant white gold line layout. Features a custom integrated clasp lock for absolute security and standard-setting wrist comfort.",
    "shortSpec": "18K Elegant White Gold, Royal Blue Ceylon Sapphires (~34.5g base weight)"
  },
  {
    "id": "prod_bracelets_7",
    "name": "Aura Marquise Diamond Bracelet",
    "category": "bracelets",
    "spec": "18K Rose Gold • Basra Prls",
    "badge": null,
    "image": "images/bracelets/aura_marquise_diamond_bracelet.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Soft Rose Gold",
      "Creamy Basra Pearls",
      "BIS 916 Certified",
      "36.4 Grams Base"
    ],
    "desc": "This structural cuff bracelet is hand-forged in premium 18k soft rose gold. Features alternating polished panels and rows of hand-set lustrous creamy basra pearls to present an understated, premium wrist silhouette.",
    "shortSpec": "18K Soft Rose Gold, Lustrous Creamy Basra Pearls (~36.4g base weight)"
  },
  {
    "id": "prod_bracelets_8",
    "name": "Devi Ruby Cabochon Bangle-Cuff",
    "category": "bracelets",
    "spec": "22K Solid Gold • VVS1 Sol Dms",
    "badge": "Limited",
    "image": "images/bracelets/devi_ruby_cabochon_bangle_cuff.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Solid Yellow Gold",
      "VVS1 Solitaire Diamonds",
      "BIS 916 Certified",
      "38.3 Grams Base"
    ],
    "desc": "Interlocking twisted braids of 22k solid yellow gold are completed by highly detailed clusters of ideal cut vvs1 solitaire diamonds at the terminals. Lightweight and fluidly flexible, it curves gracefully around the wrist for premium daily styling.",
    "shortSpec": "22K Solid Yellow Gold, Ideal Cut VVS1 Solitaire Diamonds (~38.3g base weight)"
  },
  {
    "id": "prod_bracelets_9",
    "name": "Rajkumari Pearl Strand Bracelet",
    "category": "bracelets",
    "spec": "22K Polished Gold • Burmese Rub",
    "badge": "Classic",
    "image": "images/bracelets/rajkumari_pearl_strand_bracelet.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Antique Polished Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "40.2 Grams Base"
    ],
    "desc": "An opulent contemporary statement piece showcasing ideal-cut natural untreated burmese rubies in a bold geometry of polished 22k antique polished gold. Designed to catch reflections from all angles with every single hand movement.",
    "shortSpec": "22K Antique Polished Gold, Natural Untreated Burmese Rubies (~40.2g base weight)"
  },
  {
    "id": "prod_bangles_1",
    "name": "Mayura Filigree Temple Kada",
    "category": "bangles",
    "spec": "22K Solid Gold • Colombian Emr",
    "badge": "Featured",
    "image": "images/bangles/mayura_filigree_temple_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Yellow Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "25.0 Grams Base"
    ],
    "desc": "A spectacular hand-sculptly Kada Bangle crafted in certified 22k solid yellow gold. Detailed with traditional repoussé carvings and hand-inlaid colombian octagonal emeralds motifs, finished with a discreet side-hinge lock mechanism.",
    "shortSpec": "22K Solid Yellow Gold, Colombian Octagonal Emeralds (~25.0g base weight)"
  },
  {
    "id": "prod_bangles_10",
    "name": "Devi Ruby Accent Bangles",
    "category": "bangles",
    "spec": "18K Champagne Gold • South Sea Prls",
    "badge": "Classic",
    "image": "images/bangles/devi_ruby_accent_bangles.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Champagne Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "42.1 Grams Base"
    ],
    "desc": "These luxury bangles showcase alternating bands of raw gold texture and brilliant row settings of lustrous white south sea pearls. An exquisite testament to generational hand-craftsmanship.",
    "shortSpec": "18K Champagne Gold, Lustrous White South Sea Pearls (~42.1g base weight)"
  },
  {
    "id": "prod_bangles_2",
    "name": "Vedic Solid Gold Valaya",
    "category": "bangles",
    "spec": "22K Polished Gold • South Sea Prls",
    "badge": "Popular",
    "image": "images/bangles/vedic_solid_gold_valaya.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Polished Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "26.9 Grams Base"
    ],
    "desc": "A pair of magnificent solid bangles hand-detailed in 22k antique polished gold with mirror polished outer trims. Bordered with a delicate pavé row of shimmering lustrous white south sea pearls to ensure extreme optical reflections.",
    "shortSpec": "22K Antique Polished Gold, Lustrous White South Sea Pearls (~26.9g base weight)"
  },
  {
    "id": "prod_bangles_3",
    "name": "Royal Jaipur Meenakari Bangles",
    "category": "bangles",
    "spec": "18K Champagne Gold • Uncut Polki Dms",
    "badge": "New Arrival",
    "image": "images/bangles/royal_jaipur_meenakari_bangles.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Champagne Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "28.8 Grams Base"
    ],
    "desc": "Inspired by royal Jaipur enamel work, these bangles are forged in 18k champagne gold with delicate traditional uncut polki diamonds settings. Features highly comfortable inner contours, ideal for wedding wear or festive highlights.",
    "shortSpec": "18K Champagne Gold, Traditional Uncut Polki Diamonds (~28.8g base weight)"
  },
  {
    "id": "prod_bangles_4",
    "name": "Chola Antique Nakshi Kada",
    "category": "bangles",
    "spec": "950 Platinum • VVS Dms",
    "badge": "Exclusive",
    "image": "images/bangles/chola_antique_nakshi_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "Premium 950 Platinum",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "30.7 Grams Base"
    ],
    "desc": "Heavy classic bangles showing intricate filigree carvings in premium 950 platinum, centered beautifully with Colombian fine marquise cut vvs diamonds highlights. Buffed to a warm, premium satin matte finish.",
    "shortSpec": "Premium 950 Platinum, Fine Marquise Cut VVS Diamonds (~30.7g base weight)"
  },
  {
    "id": "prod_bangles_5",
    "name": "Kanak Traditional Gold Patla",
    "category": "bangles",
    "spec": "22K Matte Gold • Colombian Emr",
    "badge": "Best Seller",
    "image": "images/bangles/kanak_traditional_gold_patla.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Temple Matte Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "32.6 Grams Base"
    ],
    "desc": "These luxury bangles showcase alternating bands of raw gold texture and brilliant row settings of colombian octagonal emeralds. An exquisite testament to generational hand-craftsmanship.",
    "shortSpec": "22K Temple Matte Gold, Colombian Octagonal Emeralds (~32.6g base weight)"
  },
  {
    "id": "prod_bangles_6",
    "name": "Apsara Diamond Bangle Set",
    "category": "bangles",
    "spec": "18K White Gold • South Sea Prls",
    "badge": "Artisan Choice",
    "image": "images/bangles/apsara_diamond_bangle_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Elegant White Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "34.5 Grams Base"
    ],
    "desc": "A spectacular hand-sculptly Kada Bangle crafted in certified 18k elegant white gold. Detailed with traditional repoussé carvings and hand-inlaid lustrous white south sea pearls motifs, finished with a discreet side-hinge lock mechanism.",
    "shortSpec": "18K Elegant White Gold, Lustrous White South Sea Pearls (~34.5g base weight)"
  },
  {
    "id": "prod_bangles_7",
    "name": "Nizam Kundan Heavy Kada",
    "category": "bangles",
    "spec": "18K Rose Gold • Uncut Polki Dms",
    "badge": "Heritage",
    "image": "images/bangles/nizam_kundan_heavy_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Soft Rose Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "36.4 Grams Base"
    ],
    "desc": "A pair of magnificent solid bangles hand-detailed in 18k soft rose gold with mirror polished outer trims. Bordered with a delicate pavé row of shimmering traditional uncut polki diamonds to ensure extreme optical reflections.",
    "shortSpec": "18K Soft Rose Gold, Traditional Uncut Polki Diamonds (~36.4g base weight)"
  },
  {
    "id": "prod_bangles_8",
    "name": "Rajkumari Gilded Bead Bangles",
    "category": "bangles",
    "spec": "22K Solid Gold • VVS Dms",
    "badge": null,
    "image": "images/bangles/rajkumari_gilded_bead_bangles.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Solid Yellow Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "38.3 Grams Base"
    ],
    "desc": "Inspired by royal Jaipur enamel work, these bangles are forged in 22k solid yellow gold with delicate fine marquise cut vvs diamonds settings. Features highly comfortable inner contours, ideal for wedding wear or festive highlights.",
    "shortSpec": "22K Solid Yellow Gold, Fine Marquise Cut VVS Diamonds (~38.3g base weight)"
  },
  {
    "id": "prod_bangles_9",
    "name": "Lakshmi Icon Temple Kada",
    "category": "bangles",
    "spec": "22K Polished Gold • Colombian Emr",
    "badge": "Limited",
    "image": "images/bangles/lakshmi_icon_temple_kada.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Antique Polished Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "40.2 Grams Base"
    ],
    "desc": "Heavy classic bangles showing intricate filigree carvings in 22k antique polished gold, centered beautifully with Colombian colombian octagonal emeralds highlights. Buffed to a warm, premium satin matte finish.",
    "shortSpec": "22K Antique Polished Gold, Colombian Octagonal Emeralds (~40.2g base weight)"
  },
  {
    "id": "prod_chains_1",
    "name": "Adrika Gold Rope Link Chain",
    "category": "chains",
    "spec": "18K White Gold • VVS1 Sol Dms",
    "badge": "Popular",
    "image": "images/chains/adrika_gold_rope_link_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Elegant White Gold",
      "VVS1 Solitaire Diamonds",
      "BIS 916 Certified",
      "18.0 Grams Base"
    ],
    "desc": "A masterfully woven rope chain crafted meticulously in certified 18k elegant white gold. Buffed to a magnificent mirror shine to capture and reflect light with clean daily wear durability.",
    "shortSpec": "18K Elegant White Gold, Ideal Cut VVS1 Solitaire Diamonds (~18.0g base weight)"
  },
  {
    "id": "prod_chains_10",
    "name": "Mayura Delicate Figarope Chain",
    "category": "chains",
    "spec": "22K Solid Gold • Burmese Rub",
    "badge": "Featured",
    "image": "images/chains/mayura_delicate_figarope_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Solid Yellow Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "31.5 Grams Base"
    ],
    "desc": "A classic double-loop curb chain forged in heavy 22k solid yellow gold. Buffed to a rich, warm champagne gold gloss that layers beautifully with premium showroom pendants.",
    "shortSpec": "22K Solid Yellow Gold, Natural Untreated Burmese Rubies (~31.5g base weight)"
  },
  {
    "id": "prod_chains_2",
    "name": "Vedic Solid Curb Link Chain",
    "category": "chains",
    "spec": "18K Rose Gold • Burmese Rub",
    "badge": "New Arrival",
    "image": "images/chains/vedic_solid_curb_link_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Soft Rose Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "19.5 Grams Base"
    ],
    "desc": "Featuring solid, precision-interlocking curb links hand-polished in 18k soft rose gold. Accented discreetly near the clasp with brilliant-cut natural untreated burmese rubies details to ensure subtle prestige.",
    "shortSpec": "18K Soft Rose Gold, Natural Untreated Burmese Rubies (~19.5g base weight)"
  },
  {
    "id": "prod_chains_3",
    "name": "Ananta Hand-Woven Spiga Chain",
    "category": "chains",
    "spec": "22K Solid Gold • Ceylon Saph",
    "badge": "Exclusive",
    "image": "images/chains/ananta_hand_woven_spiga_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Solid Yellow Gold",
      "Royal Blue Ceylon Sapphires",
      "BIS 916 Certified",
      "21.0 Grams Base"
    ],
    "desc": "A highly flexible, hand-finished spiga chain woven in solid 22k solid yellow gold. Glides smoothly across the skin with comfort-fit beveling, designed for standard-standing daily wear.",
    "shortSpec": "22K Solid Yellow Gold, Royal Blue Ceylon Sapphires (~21.0g base weight)"
  },
  {
    "id": "prod_chains_4",
    "name": "Kanak Diamond-Cut Rope Chain",
    "category": "chains",
    "spec": "22K Polished Gold • Basra Prls",
    "badge": "Best Seller",
    "image": "images/chains/kanak_diamond_cut_rope_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Antique Polished Gold",
      "Creamy Basra Pearls",
      "BIS 916 Certified",
      "22.5 Grams Base"
    ],
    "desc": "This elegant rectangular box link chain is crafted in soft 22k antique polished gold. Accented with tiny round lustrous creamy basra pearls charms to present an exceptionally elegant, understated neck line.",
    "shortSpec": "22K Antique Polished Gold, Lustrous Creamy Basra Pearls (~22.5g base weight)"
  },
  {
    "id": "prod_chains_5",
    "name": "Chola Antique Wheat Link Chain",
    "category": "chains",
    "spec": "18K Champagne Gold • VVS1 Sol Dms",
    "badge": "Artisan Choice",
    "image": "images/chains/chola_antique_wheat_link_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "VVS1 Solitaire Diamonds",
      "BIS 916 Certified",
      "24.0 Grams Base"
    ],
    "desc": "A classic double-loop curb chain forged in heavy 18k champagne gold. Buffed to a rich, warm champagne gold gloss that layers beautifully with premium showroom pendants.",
    "shortSpec": "18K Champagne Gold, Ideal Cut VVS1 Solitaire Diamonds (~24.0g base weight)"
  },
  {
    "id": "prod_chains_6",
    "name": "Devi Fine Venetian Box Chain",
    "category": "chains",
    "spec": "950 Platinum • Burmese Rub",
    "badge": "Heritage",
    "image": "images/chains/devi_fine_venetian_box_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "Premium 950 Platinum",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "25.5 Grams Base"
    ],
    "desc": "A masterfully woven rope chain crafted meticulously in certified premium 950 platinum. Buffed to a magnificent mirror shine to capture and reflect light with clean daily wear durability.",
    "shortSpec": "Premium 950 Platinum, Natural Untreated Burmese Rubies (~25.5g base weight)"
  },
  {
    "id": "prod_chains_7",
    "name": "Rajkumari Delicate Cable Link Chain",
    "category": "chains",
    "spec": "22K Matte Gold • Ceylon Saph",
    "badge": null,
    "image": "images/chains/rajkumari_delicate_cable_link_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Temple Matte Gold",
      "Royal Blue Ceylon Sapphires",
      "BIS 916 Certified",
      "27.0 Grams Base"
    ],
    "desc": "Featuring solid, precision-interlocking curb links hand-polished in 22k temple matte gold. Accented discreetly near the clasp with brilliant-cut royal blue ceylon sapphires details to ensure subtle prestige.",
    "shortSpec": "22K Temple Matte Gold, Royal Blue Ceylon Sapphires (~27.0g base weight)"
  },
  {
    "id": "prod_chains_8",
    "name": "Mughal Heavy Byzantine Link Chain",
    "category": "chains",
    "spec": "18K White Gold • Basra Prls",
    "badge": "Limited",
    "image": "images/chains/mughal_heavy_byzantine_link_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "18K Elegant White Gold",
      "Creamy Basra Pearls",
      "BIS 916 Certified",
      "28.5 Grams Base"
    ],
    "desc": "A highly flexible, hand-finished spiga chain woven in solid 18k elegant white gold. Glides smoothly across the skin with comfort-fit beveling, designed for standard-standing daily wear.",
    "shortSpec": "18K Elegant White Gold, Lustrous Creamy Basra Pearls (~28.5g base weight)"
  },
  {
    "id": "prod_chains_9",
    "name": "Nizam Royal Ball Bead Chain",
    "category": "chains",
    "spec": "18K Rose Gold • VVS1 Sol Dms",
    "badge": "Classic",
    "image": "images/chains/nizam_royal_ball_bead_chain.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Soft Rose Gold",
      "VVS1 Solitaire Diamonds",
      "BIS 916 Certified",
      "30.0 Grams Base"
    ],
    "desc": "This elegant rectangular box link chain is crafted in soft 18k soft rose gold. Accented with tiny round ideal cut vvs1 solitaire diamonds charms to present an exceptionally elegant, understated neck line.",
    "shortSpec": "18K Soft Rose Gold, Ideal Cut VVS1 Solitaire Diamonds (~30.0g base weight)"
  },
  {
    "id": "prod_pendants_1",
    "name": "Ganesha Bas-Relief Gold Medallion",
    "category": "pendants",
    "spec": "22K Solid Gold • Uncut Polki Dms",
    "badge": "Featured",
    "image": "images/pendants/ganesha_bas_relief_gold_medallion.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Yellow Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "4.5 Grams Base"
    ],
    "desc": "An auspicious round medallion depicting a sacred icon in soft matte antique 22k solid yellow gold. Bordered beautifully with a micro-beaded filigree frame and sparkling traditional uncut polki diamonds drops.",
    "shortSpec": "22K Solid Yellow Gold, Traditional Uncut Polki Diamonds (~4.5g base weight)"
  },
  {
    "id": "prod_pendants_10",
    "name": "Brilliant Halo Round Diamond Pendant",
    "category": "pendants",
    "spec": "18K Champagne Gold • VVS Dms",
    "badge": "Classic",
    "image": "images/pendants/brilliant_halo_round_diamond_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Champagne Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "12.6 Grams Base"
    ],
    "desc": "This hand-beaten gold coin pendant features the Goddess Lakshmi in bas-relief matte 18k champagne gold, rimmed by high-brilliance round fine marquise cut vvs diamonds stones.",
    "shortSpec": "18K Champagne Gold, Fine Marquise Cut VVS Diamonds (~12.6g base weight)"
  },
  {
    "id": "prod_pendants_2",
    "name": "Devi Oval Ruby Halo Locket",
    "category": "pendants",
    "spec": "22K Polished Gold • VVS Dms",
    "badge": "Popular",
    "image": "images/pendants/devi_oval_ruby_halo_locket.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Polished Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "5.4 Grams Base"
    ],
    "desc": "This delicate locket is forged in certified 22k antique polished gold and houses a central natural fine marquise cut vvs diamonds drop. Opens smoothly via a hidden side hinge to store personal keepsakes.",
    "shortSpec": "22K Antique Polished Gold, Fine Marquise Cut VVS Diamonds (~5.4g base weight)"
  },
  {
    "id": "prod_pendants_3",
    "name": "Royal Peacock Filigree Pendant",
    "category": "pendants",
    "spec": "18K Champagne Gold • Colombian Emr",
    "badge": "New Arrival",
    "image": "images/pendants/royal_peacock_filigree_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Champagne Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "6.3 Grams Base"
    ],
    "desc": "Inspired by royal family crests, this solid 18k champagne gold shield pendant features micro-relief carvings accented with natural VVS colombian octagonal emeralds. A highly personalized daily luxury.",
    "shortSpec": "18K Champagne Gold, Colombian Octagonal Emeralds (~6.3g base weight)"
  },
  {
    "id": "prod_pendants_4",
    "name": "Lakshmi Coin Sacred Medallion",
    "category": "pendants",
    "spec": "950 Platinum • South Sea Prls",
    "badge": "Exclusive",
    "image": "images/pendants/lakshmi_coin_sacred_medallion.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "Premium 950 Platinum",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "7.2 Grams Base"
    ],
    "desc": "A stunning geometric pendant showcasing a brilliant cluster of lustrous white south sea pearls claw-set in certified premium 950 platinum. Hangs elegantly to deliver a focal highlight.",
    "shortSpec": "Premium 950 Platinum, Lustrous White South Sea Pearls (~7.2g base weight)"
  },
  {
    "id": "prod_pendants_5",
    "name": "Shiva Trishul Hand-Carved Pendant",
    "category": "pendants",
    "spec": "22K Matte Gold • Uncut Polki Dms",
    "badge": "Best Seller",
    "image": "images/pendants/shiva_trishul_hand_carved_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Temple Matte Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "8.1 Grams Base"
    ],
    "desc": "This hand-beaten gold coin pendant features the Goddess Lakshmi in bas-relief matte 22k temple matte gold, rimmed by high-brilliance round traditional uncut polki diamonds stones.",
    "shortSpec": "22K Temple Matte Gold, Traditional Uncut Polki Diamonds (~8.1g base weight)"
  },
  {
    "id": "prod_pendants_6",
    "name": "Lotus Bloom Pink Enamel Pendant",
    "category": "pendants",
    "spec": "18K White Gold • VVS Dms",
    "badge": "Artisan Choice",
    "image": "images/pendants/lotus_bloom_pink_enamel_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Elegant White Gold",
      "Marquise Cut VVS Diamonds",
      "BIS 916 Certified",
      "9.0 Grams Base"
    ],
    "desc": "An auspicious round medallion depicting a sacred icon in soft matte antique 18k elegant white gold. Bordered beautifully with a micro-beaded filigree frame and sparkling fine marquise cut vvs diamonds drops.",
    "shortSpec": "18K Elegant White Gold, Fine Marquise Cut VVS Diamonds (~9.0g base weight)"
  },
  {
    "id": "prod_pendants_7",
    "name": "Vedic Aum Sacred Sanskrit Pendant",
    "category": "pendants",
    "spec": "18K Rose Gold • Colombian Emr",
    "badge": "Heritage",
    "image": "images/pendants/vedic_aum_sacred_sanskrit_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "18K Soft Rose Gold",
      "Colombian Octagonal Emeralds",
      "BIS 916 Certified",
      "9.9 Grams Base"
    ],
    "desc": "This delicate locket is forged in certified 18k soft rose gold and houses a central natural colombian octagonal emeralds drop. Opens smoothly via a hidden side hinge to store personal keepsakes.",
    "shortSpec": "18K Soft Rose Gold, Colombian Octagonal Emeralds (~9.9g base weight)"
  },
  {
    "id": "prod_pendants_8",
    "name": "Nizam Royal Emerald Halo Locket",
    "category": "pendants",
    "spec": "22K Solid Gold • South Sea Prls",
    "badge": null,
    "image": "images/pendants/nizam_royal_emerald_halo_locket.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Solid Yellow Gold",
      "White South Sea Pearls",
      "BIS 916 Certified",
      "10.8 Grams Base"
    ],
    "desc": "Inspired by royal family crests, this solid 22k solid yellow gold shield pendant features micro-relief carvings accented with natural VVS lustrous white south sea pearls. A highly personalized daily luxury.",
    "shortSpec": "22K Solid Yellow Gold, Lustrous White South Sea Pearls (~10.8g base weight)"
  },
  {
    "id": "prod_pendants_9",
    "name": "Apsara Shimmering Pearl Drop Pendant",
    "category": "pendants",
    "spec": "22K Polished Gold • Uncut Polki Dms",
    "badge": "Limited",
    "image": "images/pendants/apsara_shimmering_pearl_drop_pendant.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Antique Polished Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "11.7 Grams Base"
    ],
    "desc": "A stunning geometric pendant showcasing a brilliant cluster of traditional uncut polki diamonds claw-set in certified 22k antique polished gold. Hangs elegantly to deliver a focal highlight.",
    "shortSpec": "22K Antique Polished Gold, Traditional Uncut Polki Diamonds (~11.7g base weight)"
  },
  {
    "id": "prod_pendants_new_104",
    "name": "Shanku Chakra",
    "category": "pendants",
    "spec": "22K Solid Gold • Uncut Polki",
    "badge": "New Arrival",
    "image": "images/pendants/shanku_chakra.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Yellow Gold",
      "Traditional Uncut Polki Diamonds",
      "BIS 916 Certified",
      "6.0 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing shanku chakra with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "22K Solid Gold • Uncut Polki (~6.0 Grams Base)"
  },
  {
    "id": "prod_nose_pins_missing_5",
    "name": "Gold nose pin",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/gold_nose_pin.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing gold nose pin with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_105",
    "name": "Aura Floral Nose Stud",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/aura_floral_nose_stud.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing aura floral nose stud with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_106",
    "name": "Chandra Marquise Nose Stud",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/chandra_marquise_nose_stud.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing chandra marquise nose stud with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_107",
    "name": "Devi Ruby Nose Stud",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/devi_ruby_nose_stud.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing devi ruby nose stud with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_108",
    "name": "Ganga Pearl Drop Nose Pin",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/ganga_pearl_drop_nose_pin.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing ganga pearl drop nose pin with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_109",
    "name": "Kalyan Royal Diamond Nath",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/kalyan_royal_diamond_nath.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing kalyan royal diamond nath with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_110",
    "name": "Mayura Solitaire Nose Stud",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/mayura_solitaire_nose_stud.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing mayura solitaire nose stud with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_111",
    "name": "Nila Diamond Nose Ring",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/nila_diamond_nose_ring.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing nila diamond nose ring with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_112",
    "name": "Padma Blossom Nose Pin",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/padma_blossom_nose_pin.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing padma blossom nose pin with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_113",
    "name": "Rajkumari Polki Mukuthi",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/rajkumari_polki_mukuthi.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing rajkumari polki mukuthi with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_nose_pins_new_114",
    "name": "Valkyrie Platinum Nose Stud",
    "category": "nose-pins",
    "spec": "18K Champagne Gold • VVS Solitaire",
    "badge": "New Arrival",
    "image": "images/nose_pins/valkyrie_platinum_nose_stud.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Champagne Gold",
      "Ideal Cut VVS Solitaire",
      "BIS 916 Certified",
      "1.2 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing valkyrie platinum nose stud with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K Champagne Gold • VVS Solitaire (~1.2 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs10",
    "name": "Valkyrie Platinum Solitaire Set",
    "category": "bridal-sets",
    "spec": "950 Platinum • Cushion Cut Diamonds",
    "badge": "Exclusive",
    "image": "images/bridal_sets/valkyrie_platinum_solitaire_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "Premium 950 Platinum",
      "Flawless Cushion Solitaires",
      "Modern Minimalist Bridal",
      "88.6 Grams Base"
    ],
    "desc": "Designed for the ultra-modern bride who demands minimalist excellence. Set in pure platinum, housing large, cushion-cut GIA-certified diamond solitaires that deliver unparalleled luxury refraction.",
    "shortSpec": "950 Platinum • Cushion Cut Diamonds (~88.6 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs2",
    "name": "Mayura Heritage Bridal Set",
    "category": "bridal-sets",
    "spec": "22K Solid Gold • Basra Pearls & Rubies",
    "badge": "Featured",
    "image": "images/bridal_sets/mayura_heritage_bridal_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Antique Yellow Gold",
      "Natural Burmese Rubies",
      "Fine Basra Pearls",
      "110.5 Grams Base"
    ],
    "desc": "A breathtaking heritage bridal creation detailing sacred peacock motifs in solid 22k gold, adorned with shimmering natural burmese rubies and cascading premium basra pearls. Truly a magnificent masterpiece for standard royal weddings.",
    "shortSpec": "22K Solid Gold • Basra Pearls & Rubies (~110.5 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs3",
    "name": "Kalyan Royal Diamond Bridal Choker Set",
    "category": "bridal-sets",
    "spec": "18K White Gold • VVS Diamonds",
    "badge": "Classic",
    "image": "images/bridal_sets/kalyan_royal_diamond_bridal_choker_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K White Gold Base",
      "Uncut Polki & Brilliant Diamonds",
      "BIS 916 Hallmarked",
      "95.2 Grams Base"
    ],
    "desc": "This elite diamond choker set wraps the neck in brilliant, closely set GIA certified diamonds. Perfect for modern high-society receptions and crafted to project maximum sparkle under ballroom lights.",
    "shortSpec": "18K White Gold • VVS Diamonds (~95.2 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs4",
    "name": "Devi Temple Antique Bridal Set",
    "category": "bridal-sets",
    "spec": "22K Solid Gold • Kemp Stone Accents",
    "badge": "Popular",
    "image": "images/bridal_sets/devi_temple_antique_bridal_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Solid Temple Gold",
      "Traditional Kemp Stones",
      "Temple Carved Motifs",
      "125.0 Grams Base"
    ],
    "desc": "Inspired by historical South Indian temple sculptures, this solid 22k gold set displays hand-carved divine forms surrounded by intense traditional kemp stones and premium solid gold beads.",
    "shortSpec": "22K Solid Gold • Kemp Stone Accents (~125.0 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs5",
    "name": "Vasundhara Polki Kundan Set",
    "category": "bridal-sets",
    "spec": "22K Gold Plated • Polki & Kundan Glass",
    "badge": "Heritage",
    "image": "images/bridal_sets/vasundhara_polki_kundan_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Kundan Setting",
      "Intricate Meenakari backing",
      "Precious Uncut Gemstones",
      "140.0 Grams Base"
    ],
    "desc": "Showcasing immaculate Rajasthani Kundan settings with rich Meenakari hand-painted detailing on the back. Adorned with premium uncut polki diamonds that shimmer with deep vintage glow.",
    "shortSpec": "22K Gold Plated • Polki & Kundan Glass (~140.0 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs6",
    "name": "Aura Radiant Platinum Diamond Set",
    "category": "bridal-sets",
    "spec": "950 Platinum • Marquise Cut Diamonds",
    "badge": "Exclusive",
    "image": "images/bridal_sets/aura_radiant_platinum_diamond_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "950 Pure Platinum",
      "Marquise & Pear VVS Diamonds",
      "GIA Certified",
      "80.4 Grams Base"
    ],
    "desc": "A breathtaking high-modern premium platinum set that cascades along the collarbone. Features peerless, certified brilliant pear and marquise cut diamonds for ultimate contemporary luxury.",
    "shortSpec": "950 Platinum • Marquise Cut Diamonds (~80.4 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs7",
    "name": "Chidambaram Antique Nakshi Set",
    "category": "bridal-sets",
    "spec": "22K Solid Gold • Hand-Crafted Nakshi",
    "badge": "Classic",
    "image": "images/bridal_sets/chidambaram_antique_nakshi_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Antique Nakshi",
      "Divine Iconography",
      "BIS 916 Hallmarked",
      "118.0 Grams Base"
    ],
    "desc": "Immaculate hand-beaten gold detailing portraying sacred celestial scenes. An antique-polished heirloom masterpiece that defines royal lineage and timeless Southern elegance.",
    "shortSpec": "22K Solid Gold • Hand-Crafted Nakshi (~118.0 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs8",
    "name": "Rajkumari Emerald Layered Haar Set",
    "category": "bridal-sets",
    "spec": "22K Solid Gold • Colombian Emerald Layers",
    "badge": "Best Seller",
    "image": "images/bridal_sets/rajkumari_emerald_layered_haar_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold Layers",
      "Vibrant Colombian Emeralds",
      "GIA Certified Gems",
      "135.2 Grams Base"
    ],
    "desc": "Four rows of immaculate, hand-selected vibrant Colombian emerald beads linked by ornate 22k gold medallions. Completed with an oversized central pendant that commands absolute royal presence.",
    "shortSpec": "22K Solid Gold • Colombian Emerald Layers (~135.2 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_bs9",
    "name": "Imperial Polki Guttapusalu Set",
    "category": "bridal-sets",
    "spec": "22K Solid Gold • Bunches of Rice Pearls",
    "badge": "Trending",
    "image": "images/bridal_sets/imperial_polki_guttapusalu_set.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "Heritage Guttapusalu Style",
      "Bunches of Rice Pearls",
      "BIS Certified 916 Gold",
      "102.8 Grams Base"
    ],
    "desc": "A traditional masterpiece representing the coastal Telugu heritage. Features heavy clusters of pristine rice pearls set on a crescent-gold base accented with uncut diamonds and precious rubies.",
    "shortSpec": "22K Solid Gold • Bunches of Rice Pearls (~102.8 Grams Base)"
  },
  {
    "id": "prod_bridal_sets_missing_2",
    "name": "Bridal set",
    "category": "bridal-sets",
    "spec": "18K White Gold • GIA Diamonds",
    "badge": "New Arrival",
    "image": "images/bridal_sets/bridal_set.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Elegant White Gold",
      "GIA Certified VVS Diamonds",
      "BIS 916 Certified",
      "85.0 Grams Base"
    ],
    "desc": "An absolute marvel of craftsmanship, framing bridal set with elite hand-finishing and pristine materials. Authenticated and certified by Sri Narayana showroom curators.",
    "shortSpec": "18K White Gold • GIA Diamonds (~85.0 Grams Base)"
  },
  {
    "id": "prod_earrings_u01",
    "name": "Apsara Diamond Chandbalis",
    "category": "earrings",
    "spec": "22K Gold • Natural Diamonds",
    "badge": "Exclusive",
    "image": "images/earrings/apsara_diamond_chandbalis.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Natural Diamonds",
      "BIS 916 Certified",
      "14.5 Grams Base"
    ],
    "desc": "Breathtaking chandelier-style chandbalis handcrafted in solid 22K gold, featuring brilliant-cut natural diamonds cascading elegantly. A show-stopping statement piece for weddings.",
    "shortSpec": "22K Gold, Natural Diamonds (~14.5g base weight)"
  },
  {
    "id": "prod_earrings_u02",
    "name": "Apsara Pearl Cluster Drops",
    "category": "earrings",
    "spec": "22K Temple Gold • Natural Pearls",
    "badge": null,
    "image": "images/earrings/apsara_pearl_cluster_drops.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Temple Gold",
      "Natural Pearls",
      "BIS 916 Certified",
      "9.8 Grams Base"
    ],
    "desc": "Delicate pearl cluster drop earrings with lustrous natural pearls in solid 22K gold. Timeless elegance, ideal for festive occasions.",
    "shortSpec": "22K Temple Gold, Natural Pearls (~9.8g base weight)"
  },
  {
    "id": "prod_earrings_u03",
    "name": "Apsara Pearl Cluster Drops (High Collection)",
    "category": "earrings",
    "spec": "22K Polished Gold • South Sea Pearls",
    "badge": "Limited",
    "image": "images/earrings/apsara_pearl_cluster_drops.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Polished Gold",
      "South Sea Pearls",
      "BIS 916 Certified",
      "11.2 Grams Base"
    ],
    "desc": "High-collection version of our iconic pearl drops — larger South Sea pearls set in hand-burnished 22K polished gold for maximum luxury presence.",
    "shortSpec": "22K Polished Gold, South Sea Pearls (~11.2g base weight)"
  },
  {
    "id": "prod_earrings_u04",
    "name": "Aura Classic Diamond Studs",
    "category": "earrings",
    "spec": "18K White Gold • VS Diamonds",
    "badge": "Best Seller",
    "image": "images/earrings/aura_diamond_studs.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "18K White Gold",
      "VS Diamonds",
      "BIS 916 Certified",
      "6.4 Grams Base"
    ],
    "desc": "Classic round brilliant VS diamond studs in 18K white gold. Ideal cut, perfect symmetry, and a brilliant fire that catches every light.",
    "shortSpec": "18K White Gold, VS Diamonds (~6.4g base weight)"
  },
  {
    "id": "prod_earrings_u05",
    "name": "Brilliant Halo Diamond Chandbalis",
    "category": "earrings",
    "spec": "18K Polished Gold • Brilliant Cut Diamonds",
    "badge": "Featured",
    "image": "images/earrings/brilliant_halo_diamond_chandbalis.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Polished Gold",
      "Brilliant Cut Diamonds",
      "BIS 916 Certified",
      "16.0 Grams Base"
    ],
    "desc": "Stunning halo-set chandbalis with natural round brilliant diamonds circling a bezel-set centre stone in polished 18K gold. Exceptionally radiant.",
    "shortSpec": "18K Polished Gold, Brilliant Cut Diamonds (~16.0g base weight)"
  },
  {
    "id": "prod_earrings_u06",
    "name": "Brilliant Halo Chandbalis (Premium)",
    "category": "earrings",
    "spec": "18K Gold • VVS Diamond Halos",
    "badge": "New Arrival",
    "image": "images/earrings/brilliant_halo_diamond_chandbalis.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K Gold",
      "VVS Diamond Halos",
      "BIS 916 Certified",
      "18.2 Grams Base"
    ],
    "desc": "Premium version of our halo chandbalis — VVS grade stones in an extended multi-layered halo setting, crafted for maximum brilliance and ceremony.",
    "shortSpec": "18K Gold, VVS Diamond Halos (~18.2g base weight)"
  },
  {
    "id": "prod_earrings_u07",
    "name": "Chandra Antique Chandbalis",
    "category": "earrings",
    "spec": "22K Antique Gold • Semi-Precious Stones",
    "badge": null,
    "image": "images/earrings/chandra_antique_chandbalis.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Antique Gold",
      "Semi-Precious Stones",
      "BIS 916 Certified",
      "12.0 Grams Base"
    ],
    "desc": "Antique-finish chandbali earrings with traditional hand-engraved motifs in 22K gold. Crescent moon design with stone-set accents and pearl drops.",
    "shortSpec": "22K Antique Gold, Semi-Precious Stones (~12.0g base weight)"
  },
  {
    "id": "prod_earrings_u08",
    "name": "Chola Filigree Hanging Earrings",
    "category": "earrings",
    "spec": "22K Yellow Gold • Filigree Goldwork",
    "badge": "Artisan Choice",
    "image": "images/earrings/chola_filigree_hanging_earrings.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Yellow Gold",
      "Filigree Goldwork",
      "BIS 916 Certified",
      "10.5 Grams Base"
    ],
    "desc": "Hand-woven filigree hanging earrings in 22K gold, inspired by Chola period craftsmanship. Intricate wire-work forms a dramatic chandelier silhouette.",
    "shortSpec": "22K Yellow Gold, Filigree Goldwork (~10.5g base weight)"
  },
  {
    "id": "prod_earrings_u09",
    "name": "Chola Filigree Drops (Signature)",
    "category": "earrings",
    "spec": "22K Gold • Temple Filigree",
    "badge": "Heritage",
    "image": "images/earrings/chola_filigree_hanging_earrings.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Temple Filigree",
      "BIS 916 Certified",
      "13.5 Grams Base"
    ],
    "desc": "Signature edition of the Chola filigree drops — an extended 3-tier drop design with temple motifs, hand-soldered wire-work, and a polished finish.",
    "shortSpec": "22K Gold, Temple Filigree (~13.5g base weight)"
  },
  {
    "id": "prod_earrings_u10",
    "name": "Devi Antique Kemp Jhumkas",
    "category": "earrings",
    "spec": "22K Temple Gold • Natural Kemp Stones",
    "badge": null,
    "image": "images/earrings/devi_antique_kemp_jhumkas.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Temple Gold",
      "Natural Kemp Stones",
      "BIS 916 Certified",
      "15.0 Grams Base"
    ],
    "desc": "Vibrant temple jhumkas adorned with hand-set Kemp stones in glowing red and green set in antique 22K gold. Traditional South Indian bridal design.",
    "shortSpec": "22K Temple Gold, Natural Kemp Stones (~15.0g base weight)"
  },
  {
    "id": "prod_earrings_u11",
    "name": "Devi Ruby Sui-Dhaga Earrings",
    "category": "earrings",
    "spec": "22K Gold • Natural Burmese Rubies",
    "badge": null,
    "image": "images/earrings/devi_ruby_sui_dhaga_earrings.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "Natural Burmese Rubies",
      "BIS 916 Certified",
      "8.2 Grams Base"
    ],
    "desc": "Delicate thread-style sui-dhaga earrings in 22K gold, set with natural untreated Burmese ruby accents. Feminine yet bold for daily luxury wear.",
    "shortSpec": "22K Gold, Natural Burmese Rubies (~8.2g base weight)"
  },
  {
    "id": "prod_earrings_u12",
    "name": "Devi Ruby Sui-Dhaga (Bridal Set)",
    "category": "earrings",
    "spec": "22K Gold • Premium Burmese Rubies",
    "badge": "Popular",
    "image": "images/earrings/devi_ruby_sui_dhaga_earrings.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Gold",
      "Premium Burmese Rubies",
      "BIS 916 Certified",
      "10.8 Grams Base"
    ],
    "desc": "Bridal edition of the Devi Sui-Dhaga earrings — deeper ruby colour, wider wire gauge, and a matching temple motif end cap for a complete ceremonial look.",
    "shortSpec": "22K Gold, Premium Burmese Rubies (~10.8g base weight)"
  },
  {
    "id": "prod_earrings_u13",
    "name": "Kalyan Royal Polki Jhumkas",
    "category": "earrings",
    "spec": "22K Yellow Gold • Uncut Polki Diamonds",
    "badge": "Popular",
    "image": "images/earrings/kalyan_royal_polki_jhumkas.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Yellow Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "19.2 Grams Base"
    ],
    "desc": "Royal polki jhumkas hand-set with flat uncut diamonds in solid 22K gold, featuring a wide dome body and hanging pearl drops. Ideal for grand occasions.",
    "shortSpec": "22K Yellow Gold, Uncut Polki Diamonds (~19.2g base weight)"
  },
  {
    "id": "prod_earrings_u14",
    "name": "Kanak Kundan Drop Jhumkas",
    "category": "earrings",
    "spec": "22K Gold • Kundan Polki Setting",
    "badge": null,
    "image": "images/earrings/kanak_kundan_drop_jhumkas.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Gold",
      "Kundan Polki Setting",
      "BIS 916 Certified",
      "17.3 Grams Base"
    ],
    "desc": "Traditional Kundan drop jhumkas with hand-set polki glass and gold foil in 22K yellow gold. Features multi-tier drop design with seed pearl fringe.",
    "shortSpec": "22K Gold, Kundan Polki Setting (~17.3g base weight)"
  },
  {
    "id": "prod_earrings_u15",
    "name": "Lakshmi Nakshi Temple Studs",
    "category": "earrings",
    "spec": "22K Oxidised Gold • Nakshi Engraving",
    "badge": "Classic",
    "image": "images/earrings/lakshmi_nakshi_temple_studs.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Oxidised Gold",
      "Nakshi Engraving",
      "BIS 916 Certified",
      "13.2 Grams Base"
    ],
    "desc": "Nakshi-work Lakshmi face temple studs in oxidised 22K gold, hand-engraved with traditional motifs. A sacred and auspicious design for heritage collectors.",
    "shortSpec": "22K Oxidised Gold, Nakshi Engraving (~13.2g base weight)"
  },
  {
    "id": "prod_earrings_u16",
    "name": "Lakshmi Temple Studs (Grand)",
    "category": "earrings",
    "spec": "22K Gold • Enamel & Goldwork",
    "badge": "Artisan Choice",
    "image": "images/earrings/lakshmi_nakshi_temple_studs.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Gold",
      "Enamel & Goldwork",
      "BIS 916 Certified",
      "16.5 Grams Base"
    ],
    "desc": "Grand edition of the Lakshmi temple studs — larger face, additional enamel colour-fill, and an extended pearl drop for full bridal elegance.",
    "shortSpec": "22K Gold, Enamel & Goldwork (~16.5g base weight)"
  },
  {
    "id": "prod_earrings_u17",
    "name": "Nizam Royal Emerald Ear-Tops",
    "category": "earrings",
    "spec": "18K Gold • Colombian Emeralds",
    "badge": null,
    "image": "images/earrings/nizam_royal_emerald_ear_tops.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K Gold",
      "Colombian Emeralds",
      "BIS 916 Certified",
      "11.4 Grams Base"
    ],
    "desc": "Magnificent ear-top studs featuring natural Colombian emerald centres surrounded by rose-cut diamond halos, set in 18K gold. Nizam-inspired luxury.",
    "shortSpec": "18K Gold, Colombian Emeralds (~11.4g base weight)"
  },
  {
    "id": "prod_earrings_u18",
    "name": "Nizam Emerald Ear-Tops (Signature)",
    "category": "earrings",
    "spec": "18K White Gold • VVS Emerald & Diamond",
    "badge": "Exclusive",
    "image": "images/earrings/nizam_royal_emerald_ear_tops.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "18K White Gold",
      "VVS Emerald & Diamond",
      "BIS 916 Certified",
      "14.2 Grams Base"
    ],
    "desc": "Signature edition — a deeper colour emerald set in platinum-look 18K white gold, surrounded by an additional outer diamond pavé ring for ultimate brilliance.",
    "shortSpec": "18K White Gold, VVS Emerald & Diamond (~14.2g base weight)"
  },
  {
    "id": "prod_earrings_u19",
    "name": "Vasundhara Pearl Jhumkas",
    "category": "earrings",
    "spec": "22K Gold • South Sea Pearls",
    "badge": "New Arrival",
    "image": "images/earrings/vasundhara_pearl_jhumkas.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "South Sea Pearls",
      "BIS 916 Certified",
      "12.8 Grams Base"
    ],
    "desc": "Elegant pearl-drop jhumkas in 22K gold, featuring a polished dome body adorned with seed pearls and a single lustrous South Sea pearl drop. Refined and timeless.",
    "shortSpec": "22K Gold, South Sea Pearls (~12.8g base weight)"
  },
  {
    "id": "prod_jhumkas_u01",
    "name": "Apsara Bridal Jhumka Set",
    "category": "jhumkas",
    "spec": "22K Gold • Natural Rubies",
    "badge": "Bridal",
    "image": "images/Jhumkas/020926f5a6b69f6b25bbda7334983f41.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Natural Rubies",
      "BIS 916 Certified",
      "22.0 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Natural Rubies and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Natural Rubies (~22.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u02",
    "name": "Chola Temple Bell Jhumkas",
    "category": "jhumkas",
    "spec": "22K Temple Gold • Kemp Stones",
    "badge": null,
    "image": "images/Jhumkas/2aa2d69a1382c62d778b924d6a8f12bc.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Temple Gold",
      "Kemp Stones",
      "BIS 916 Certified",
      "19.5 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Temple Gold, featuring Kemp Stones and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Temple Gold, Kemp Stones (~19.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u03",
    "name": "Devi Pearl Drop Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • South Sea Pearls",
    "badge": "New Arrival",
    "image": "images/Jhumkas/2f691768060725cd1652ac788eb76f1c.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "South Sea Pearls",
      "BIS 916 Certified",
      "14.8 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring South Sea Pearls and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, South Sea Pearls (~14.8g base weight)"
  },
  {
    "id": "prod_jhumkas_u04",
    "name": "Imperial Polki Bell Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Uncut Polki Diamonds",
    "badge": "Popular",
    "image": "images/Jhumkas/3c44ea46d1baa7b164b4c07d2aa6000a.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "21.2 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Uncut Polki Diamonds and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Uncut Polki Diamonds (~21.2g base weight)"
  },
  {
    "id": "prod_jhumkas_u05",
    "name": "Kalyan Gold Jhumka Danglers",
    "category": "jhumkas",
    "spec": "22K Solid Gold • Natural Emeralds",
    "badge": null,
    "image": "images/Jhumkas/4984e738c4e392e77af708d8cfc50833.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Solid Gold",
      "Natural Emeralds",
      "BIS 916 Certified",
      "16.0 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Solid Gold, featuring Natural Emeralds and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Solid Gold, Natural Emeralds (~16.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u06",
    "name": "Lakshmi Nakshi Jhumka Studs",
    "category": "jhumkas",
    "spec": "22K Antique Gold • Nakshi Goldwork",
    "badge": "Classic",
    "image": "images/Jhumkas/4dc2a30d26e8a161bacc3f37ec162b8b.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Gold",
      "Nakshi Goldwork",
      "BIS 916 Certified",
      "13.5 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Antique Gold, featuring Nakshi Goldwork and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Antique Gold, Nakshi Goldwork (~13.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u07",
    "name": "Mayura Peacock Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Natural Sapphires",
    "badge": "Exclusive",
    "image": "images/Jhumkas/5b42c65470a816787abb6d6156132e09.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "Natural Sapphires",
      "BIS 916 Certified",
      "18.5 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Natural Sapphires and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Natural Sapphires (~18.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u08",
    "name": "Nizam Royal Jadau Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Jadau Kundan",
    "badge": "Limited",
    "image": "images/Jhumkas/7e2a768b92b0e4f08d0f7621607269e5.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Gold",
      "Jadau Kundan",
      "BIS 916 Certified",
      "23.0 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Jadau Kundan and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Jadau Kundan (~23.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u09",
    "name": "Padma Lotus Bell Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Meenakari Enamel",
    "badge": null,
    "image": "images/Jhumkas/811b05881d8c7b343b8b24c8074aca67.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Meenakari Enamel",
      "BIS 916 Certified",
      "15.2 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Meenakari Enamel and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Meenakari Enamel (~15.2g base weight)"
  },
  {
    "id": "prod_jhumkas_u10",
    "name": "Rajput Antique Gold Jhumkas",
    "category": "jhumkas",
    "spec": "22K Antique Gold • Uncut Polki",
    "badge": "Heritage",
    "image": "images/Jhumkas/82c41cab74801badceb4cf540ce654a8.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Antique Gold",
      "Uncut Polki",
      "BIS 916 Certified",
      "20.0 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Antique Gold, featuring Uncut Polki and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Antique Gold, Uncut Polki (~20.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u11",
    "name": "Royal Filigree Drop Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Temple Filigree",
    "badge": "Artisan Choice",
    "image": "images/Jhumkas/8d6202334757c674f943e1cb5d33a5b9.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "Temple Filigree",
      "BIS 916 Certified",
      "17.8 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Temple Filigree and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Temple Filigree (~17.8g base weight)"
  },
  {
    "id": "prod_jhumkas_u12",
    "name": "Vasundhara Kemp Jhumkas",
    "category": "jhumkas",
    "spec": "22K Temple Gold • Natural Kemp Stones",
    "badge": null,
    "image": "images/Jhumkas/952f6a719cf8cf538673f4b2c1e83036.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Temple Gold",
      "Natural Kemp Stones",
      "BIS 916 Certified",
      "16.8 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Temple Gold, featuring Natural Kemp Stones and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Temple Gold, Natural Kemp Stones (~16.8g base weight)"
  },
  {
    "id": "prod_jhumkas_u13",
    "name": "Vedic Sacred Jhumka Drops",
    "category": "jhumkas",
    "spec": "22K Gold • Ruby Accents",
    "badge": null,
    "image": "images/Jhumkas/993a2e1dce3fd12c2804480fe2801fbc.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Ruby Accents",
      "BIS 916 Certified",
      "14.0 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Ruby Accents and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Ruby Accents (~14.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u14",
    "name": "Vrindavan Floral Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Enamel Flowers",
    "badge": "New Arrival",
    "image": "images/Jhumkas/ae08e9908255785eeaf0e1f0fb8245d6.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Gold",
      "Enamel Flowers",
      "BIS 916 Certified",
      "12.5 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Enamel Flowers and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Enamel Flowers (~12.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u15",
    "name": "Aura Classic Chandbali Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • VS Diamonds",
    "badge": "Best Seller",
    "image": "images/Jhumkas/aura_classic_diamond_studs.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "VS Diamonds",
      "BIS 916 Certified",
      "16.5 Grams Base"
    ],
    "desc": "Breathtaking chandbali jhumkas in solid 22K gold, each encrusted with brilliant-cut VS diamonds in a classic halo setting. The quintessential bridal statement.",
    "shortSpec": "22K Gold, VS Diamonds (~16.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u16",
    "name": "Chandra Crescent Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Diamond Accents",
    "badge": null,
    "image": "images/Jhumkas/dfb202cdf779f72619ee103f83fe62c3.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Gold",
      "Diamond Accents",
      "BIS 916 Certified",
      "15.5 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Diamond Accents and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Diamond Accents (~15.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u17",
    "name": "Diamond Halo Jhumka Drops",
    "category": "jhumkas",
    "spec": "18K White Gold • Natural Diamonds",
    "badge": "Featured",
    "image": "images/Jhumkas/diamond_earrings.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "18K White Gold",
      "Natural Diamonds",
      "BIS 916 Certified",
      "14.2 Grams Base"
    ],
    "desc": "Elegant halo jhumka drops featuring natural diamonds set in polished 18K white gold. Brilliant fire, premium cut, and an unmistakable modern luxury silhouette.",
    "shortSpec": "18K White Gold, Natural Diamonds (~14.2g base weight)"
  },
  {
    "id": "prod_jhumkas_u18",
    "name": "Ganga Pearl Jhumka Drops",
    "category": "jhumkas",
    "spec": "22K Gold • Basra Pearls",
    "badge": "Classic",
    "image": "images/Jhumkas/f783c8d902fd31b151cb623a2358c007.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Gold",
      "Basra Pearls",
      "BIS 916 Certified",
      "13.8 Grams Base"
    ],
    "desc": "Hand-finished luxury jhumkas crafted in solid 22K Gold, featuring Basra Pearls and traditional Indian craftsmanship. BIS 916 hallmark certified.",
    "shortSpec": "22K Gold, Basra Pearls (~13.8g base weight)"
  },
  {
    "id": "prod_jhumkas_u19",
    "name": "Kanak Kundan Jhumkas",
    "category": "jhumkas",
    "spec": "22K Gold • Kundan Polki",
    "badge": "Artisan Choice",
    "image": "images/Jhumkas/kanak_kundan_jhumkas.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #F9F6F0, #EFECE6)",
    "chips": [
      "22K Gold",
      "Kundan Polki",
      "BIS 916 Certified",
      "18.0 Grams Base"
    ],
    "desc": "Handcrafted Kundan jhumkas in rich 22K gold with hand-set polki Kundan stones in traditional meenakari style. A timeless heirloom piece.",
    "shortSpec": "22K Gold, Kundan Polki (~18.0g base weight)"
  },
  {
    "id": "prod_jhumkas_u20",
    "name": "Kundan Meenakari Jhumkas",
    "category": "jhumkas",
    "spec": "22K Temple Gold • Kundan Polki",
    "badge": null,
    "image": "images/Jhumkas/kundan_jhumkas.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF5F5, #F0E6E6)",
    "chips": [
      "22K Temple Gold",
      "Kundan Polki",
      "BIS 916 Certified",
      "17.3 Grams Base"
    ],
    "desc": "Classic meenakari Kundan jhumkas hand-finished in deep red and emerald green on oxidised 22K temple gold. Traditional Indian craftsmanship at its finest.",
    "shortSpec": "22K Temple Gold, Kundan Polki (~17.3g base weight)"
  },
  {
    "id": "prod_jhumkas_u21",
    "name": "Mughal Heritage Kundan Drops",
    "category": "jhumkas",
    "spec": "22K Gold • Mughal Kundan",
    "badge": "Heritage",
    "image": "images/Jhumkas/mughal_heritage_kundan_drops.png",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FAF8F5, #F2EFE9)",
    "chips": [
      "22K Gold",
      "Mughal Kundan",
      "BIS 916 Certified",
      "20.5 Grams Base"
    ],
    "desc": "Heritage Kundan drops inspired by Mughal court jewellery — intricately layered gold work with hand-set polki stones and a dramatic multi-drop silhouette.",
    "shortSpec": "22K Gold, Mughal Kundan (~20.5g base weight)"
  },
  {
    "id": "prod_jhumkas_u22",
    "name": "Rajkumari Polki Chandbalis",
    "category": "jhumkas",
    "spec": "22K Matte Gold • Uncut Polki Diamonds",
    "badge": null,
    "image": "images/Jhumkas/rajkumari_polki_chandbalis.jpg",
    "imageStyle": "transform: scale(0.95); transition: transform 0.4s ease, filter 0.4s ease;",
    "bgStyle": "linear-gradient(135deg, #FFFFFF, #F5F5F7)",
    "chips": [
      "22K Matte Gold",
      "Uncut Polki Diamonds",
      "BIS 916 Certified",
      "15.8 Grams Base"
    ],
    "desc": "Royal polki chandbali earrings in matte 22K gold, featuring large flat uncut diamonds and a crescent moon body with pearl fringe drops. Bridal-grade elegance.",
    "shortSpec": "22K Matte Gold, Uncut Polki Diamonds (~15.8g base weight)"
  }
];

  const dynamicGrid = document.getElementById('dynamicCatalogGrid');

  const renderCatalogCards = (products) => {
    if (!dynamicGrid) return;
    dynamicGrid.innerHTML = ''; // Clear contents

    products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card show';
      card.setAttribute('data-category', prod.category);
      card.id = prod.id;

      const badgeHtml = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : '';
      
      let weightVal = '';
      if (prod.chips && Array.isArray(prod.chips)) {
        const chipMatch = prod.chips.find(c => /([0-9.]+)\s*\b(?:Grams?|g)\b/i.test(c));
        if (chipMatch) {
          const m = chipMatch.match(/([0-9.]+)/);
          if (m) weightVal = `${m[1]}g`;
        }
      }
      if (!weightVal) {
        const textMatch = ((prod.shortSpec || '') + ' ' + (prod.spec || '')).match(/([0-9.]+)\s*\b(?:Grams?|g)\b/i);
        if (textMatch) weightVal = `${textMatch[1]}g`;
      }
      const weightHtml = weightVal ? `<span class="product-weight-badge">${weightVal}</span>` : '';

      card.innerHTML = `
        <div class="product-img-container" style="${prod.bgStyle || ''}">
          ${badgeHtml}
          ${weightHtml}
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy" style="${prod.imageStyle || ''}">
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-spec">${prod.spec}</span>
          </div>
          <h3>${prod.name}</h3>
          
          <p class="product-desc" style="display:none !important;">${prod.desc}</p>
          
          <div class="card-action-bar">
            <span class="product-category">${prod.category.replace('-', ' ')}</span>
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

          // Smoothly scroll horizontal category pill into center focus on select
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

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

    let message = `Hello Sri Narayana Jewellers! I am visiting your premium catalog website and would love to inquire about the following magnificent piece:\n\n`;
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
