import re

file_path = '/Users/Gomi/.gemini/antigravity/worktrees/splendid-carson/rebrand-premium-wine-tours/index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Navigation Menu
nav_old = """        <ul class="nav-menu" id="nav-menu">
          <li>
            <a href="#hero" class="nav-link">
              <span class="lang-fr">Accueil</span>
              <span class="lang-en">Home</span>
            </a>
          </li>
          <li>
            <a href="#experiences" class="nav-link">
              <span class="lang-fr">Wine Tours</span>
              <span class="lang-en">Wine Tours</span>
            </a>
          </li>
          <li>
            <a href="#fleet" class="nav-link">
              <span class="lang-fr">Flotte</span>
              <span class="lang-en">Fleet</span>
            </a>
          </li>
          <li>
            <a href="#reviews" class="nav-link">
              <span class="lang-fr">Avis</span>
              <span class="lang-en">Reviews</span>
            </a>
          </li>
          <li>
            <a href="#booking" class="nav-link">
              <span class="lang-fr">Contact</span>
              <span class="lang-en">Contact</span>
            </a>
          </li>
        </ul>"""

nav_new = """        <ul class="nav-menu" id="nav-menu">
          <li>
            <a href="index.html" class="nav-link">
              <span class="lang-fr">Accueil</span>
              <span class="lang-en">Home</span>
            </a>
          </li>
          <!-- Wine Tours Dropdown -->
          <li class="nav-item dropdown">
            <a href="wine-tours/index.html" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              <span class="lang-fr">Wine Tours <i class="fas fa-chevron-down"></i></span>
              <span class="lang-en">Wine Tours <i class="fas fa-chevron-down"></i></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="beaujolais-wine-tour-from-lyon/index.html" class="dropdown-link">
                  <span class="lang-fr">Beaujolais</span>
                  <span class="lang-en">Beaujolais</span>
                </a>
              </li>
              <li>
                <a href="northern-rhone-valley-wine-tour-from-lyon/index.html" class="dropdown-link">
                  <span class="lang-fr">Vallée du Rhône</span>
                  <span class="lang-en">Rhône Valley</span>
                </a>
              </li>
              <li>
                <a href="wine-tours/index.html" class="dropdown-link">
                  <span class="lang-fr">Expérience sur mesure</span>
                  <span class="lang-en">Custom Wine Experience</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- Private Transfers Dropdown -->
          <li class="nav-item dropdown">
            <a href="private-chauffeur-lyon/index.html" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              <span class="lang-fr">Transferts Privés <i class="fas fa-chevron-down"></i></span>
              <span class="lang-en">Private Transfers <i class="fas fa-chevron-down"></i></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="lyon-airport-transfer/index.html" class="dropdown-link">
                  <span class="lang-fr">Aéroport Lyon (LYS)</span>
                  <span class="lang-en">Lyon Airport</span>
                </a>
              </li>
              <li>
                <a href="lyon-train-station-transfer/index.html" class="dropdown-link">
                  <span class="lang-fr">Gares Part-Dieu / Perrache</span>
                  <span class="lang-en">Train Stations</span>
                </a>
              </li>
              <li>
                <a href="private-chauffeur-lyon/index.html" class="dropdown-link">
                  <span class="lang-fr">Longue distance</span>
                  <span class="lang-en">Long Distance</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="business-events-private-driver-lyon/index.html" class="nav-link">
              <span class="lang-fr">Business & Events</span>
              <span class="lang-en">Business & Events</span>
            </a>
          </li>
          <li>
            <a href="fleet/index.html" class="nav-link">
              <span class="lang-fr">Véhicules</span>
              <span class="lang-en">Fleet</span>
            </a>
          </li>
          <li>
            <a href="reviews/index.html" class="nav-link">
              <span class="lang-fr">Avis clients</span>
              <span class="lang-en">Reviews</span>
            </a>
          </li>
          <li>
            <a href="contact/index.html" class="nav-link">
              <span class="lang-fr">Réserver</span>
              <span class="lang-en">Book Now</span>
            </a>
          </li>
        </ul>"""

content = content.replace(nav_old, nav_new)


# 2. Extract sections
intl_pattern = re.compile(r'(<!-- ==========================================================================\s*3\. INTERNATIONAL CLIENTS SECTION.*?)(<!-- ==========================================================================\s*4\. GOOGLE REVIEWS SECTION)', re.DOTALL)
reviews_pattern = re.compile(r'(<!-- ==========================================================================\s*4\. GOOGLE REVIEWS SECTION.*?)(<!-- ==========================================================================\s*5\. FLEET SECTION)', re.DOTALL)

intl_match = intl_pattern.search(content)
reviews_match = reviews_pattern.search(content)

if intl_match and reviews_match:
    intl_html = intl_match.group(1)
    reviews_html = reviews_match.group(1)
    
    # Modify Reviews HTML
    # Title & Subtitle
    reviews_html = re.sub(
        r'<span class="lang-en">Guest Testimonials</span>',
        '<span class="lang-en">Guest Testimonials</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-fr">Pourquoi nos clients nous recommandent</span>',
        '<span class="lang-fr">La confiance des voyageurs internationaux</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-en">What our guests say about us</span>',
        '<span class="lang-en">Trusted by international travelers</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-fr">Découvrez les retours d\'expérience authentiques laissés par nos clients sur Google Business\.</span>',
        '<span class="lang-fr">Découvrez les avis laissés sur Google par nos clients du monde entier.</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-en">Discover the authentic, verified feedback left by our luxury travelers on Google Business\.</span>',
        '<span class="lang-en">Rated on Google by clients from all over the world. Read what guests say about our private chauffeur service, airport transfers and wine tours from Lyon.</span>',
        reviews_html
    )
    
    # Update score and badges
    reviews_html = re.sub(
        r'<span class="total">7 reviews on Google</span>',
        '<span class="total">Based on verified Google reviews</span>',
        reviews_html
    )
    
    new_badges = """<span class="benefit-badge"><span class="lang-fr">Ponctualité</span><span class="lang-en">Punctuality</span></span>
          <span class="benefit-badge"><span class="lang-fr">Professionnalisme</span><span class="lang-en">Professionalism</span></span>
          <span class="benefit-badge"><span class="lang-fr">Flexibilité</span><span class="lang-en">Flexibility</span></span>
          <span class="benefit-badge"><span class="lang-fr">Service Anglophone</span><span class="lang-en">English-speaking service</span></span>
          <span class="benefit-badge"><span class="lang-fr">Confort Mercedes</span><span class="lang-en">Mercedes Comfort</span></span>
          <span class="benefit-badge"><span class="lang-fr">Expertise Oenologique</span><span class="lang-en">Wine region knowledge</span></span>
          <span class="benefit-badge"><span class="lang-fr">Relations Domaines</span><span class="lang-en">Winery Connections</span></span>"""
          
    reviews_html = re.sub(
        r'<div class="reviews-header-benefits">.*?</div>',
        f'<div class="reviews-header-benefits">\n          {new_badges}\n        </div>',
        reviews_html,
        flags=re.DOTALL
    )

    # Add source badges and types to review cards
    reviews_html = reviews_html.replace(
        '<div class="review-meta">',
        '<div class="review-source"><i class="fab fa-google"></i> Google Review</div>\n              <div class="review-meta">'
    )
    
    reviews_html = reviews_html.replace(
        '"Would highly recommend booking with Sanath and his team for any services. We used them for a tour around Beaujolais - Sanath had a wonderful car (large Mercedes van), was incredibly knowledgeable about the region, and was well connected with the wineries."',
        '"Would highly recommend booking with Sanath and his team for any services. We used them for a tour around Beaujolais - Sanath had a wonderful car (large Mercedes van), was incredibly knowledgeable about the region, and was well connected with the wineries."\n              <span class="review-type">Wine Tour</span>'
    )
    
    reviews_html = reviews_html.replace(
        '"Fantastic service! Sanath is very professional. I worked with him for a group of clients we needed to transfer in Lyon for a week. Sanath has been punctual, professional and flexible over the whole period. He can communicate fluently in English and in French."',
        '"Fantastic service! Sanath is very professional. I worked with him for a group of clients we needed to transfer in Lyon for a week. Sanath has been punctual, professional and flexible over the whole period. He can communicate fluently in English and in French."\n              <span class="review-type">Business Travel</span>'
    )
    
    reviews_html = reviews_html.replace(
        '"Très contents de notre journée avec Sanath sur Lyon, nous avons découvert la ville autrement. Je recommande vivement !"',
        '"Très contents de notre journée avec Sanath sur Lyon, nous avons découvert la ville autrement. Je recommande vivement !"\n              <span class="review-type">Private Tour</span>'
    )
    
    reviews_html = reviews_html.replace(
        '"Très sympa et fiable. Déjà à la Villa Maïa très fiable. Merci Monsieur de Hambourg."',
        '"Très sympa et fiable. Déjà à la Villa Maïa très fiable. Merci Monsieur de Hambourg."\n              <span class="review-type">Hotel Transfer</span>'
    )

    # Modify International HTML
    intl_html = re.sub(
        r'<span class="lang-fr">La référence de confiance des voyageurs internationaux et professionnels</span>',
        '<span class="lang-fr">Ce que nos clients apprécient</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-en">Trusted by international travelers and business clients</span>',
        '<span class="lang-en">What our guests appreciate</span>',
        intl_html
    )
    
    # 6 features update
    intl_html = re.sub(
        r'<span class="lang-fr">Chauffeur Privé & Discret</span>',
        '<span class="lang-fr">Excursions Viticoles Privées</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-en">Private and discreet chauffeur</span>',
        '<span class="lang-en">Private wine tours</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-fr">Professionnalisme, discrétion et respect absolu de la vie privée.</span>',
        '<span class="lang-fr">Circuits sur-mesure dans les vignobles du Beaujolais et de la Vallée du Rhône.</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-en">Utmost professionalism, security and absolute privacy.</span>',
        '<span class="lang-en">Bespoke wine excursions across the beautiful Beaujolais and Rhône Valley regions.</span>',
        intl_html
    )
    
    intl_html = re.sub(
        r'<span class="lang-fr">Expertise Oenologique Locale</span>',
        '<span class="lang-fr">Service Fiable 24/7</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-en">Local wine knowledge</span>',
        '<span class="lang-en">Reliable 24/7 service</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-fr">Explications riches sur les terroirs et relations privilégiées avec les domaines.</span>',
        '<span class="lang-fr">Disponibilité totale pour vos transferts tôt le matin ou tard la nuit.</span>',
        intl_html
    )
    intl_html = re.sub(
        r'<span class="lang-en">Deep insights on terroirs and premium connections to wineries.</span>',
        '<span class="lang-en">Complete availability for early morning airport departures or late night arrivals.</span>',
        intl_html
    )
    
    # Update buttons
    reviews_html = reviews_html.replace(
        '<span class="lang-fr">Lire tous les avis Google</span>',
        '<span class="lang-fr">Lire tous les avis sur Google</span>'
    )
    reviews_html = reviews_html.replace(
        '<span class="lang-en">Read Google reviews</span>',
        '<span class="lang-en">Read all Google reviews</span>'
    )

    # Swap their positions in the content
    content = content.replace(intl_match.group(1), reviews_html)
    content = content.replace(reviews_match.group(1), intl_html)

# 3. Add Contact Review Block
contact_block = """
        <!-- Google Trust Mini Block -->
        <div style="background-color: var(--color-white); border: 1px solid rgba(197, 168, 128, 0.3); border-radius: var(--border-radius-sm); padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="font-size: 1.25rem; color: #4285F4;"><i class="fab fa-google"></i></div>
          <div style="flex-grow: 1;">
            <div style="color: var(--color-gold); font-size: 0.85rem; margin-bottom: 0.2rem;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p style="font-size: 0.85rem; font-weight: 600; color: var(--color-onyx); margin: 0;">
              <span class="lang-fr">Noté sur Google par des voyageurs internationaux — réservez en toute confiance.</span>
              <span class="lang-en">Rated on Google by international travelers — book with confidence.</span>
            </p>
          </div>
        </div>
"""

content = content.replace('<h3 class="form-title">', contact_block + '\n        <h3 class="form-title">')

# Header nav actions update for "Book Now" CTA
content = re.sub(
    r'<a href="#booking" class="btn btn-outline-gold" style="padding: 0\.65rem 1\.25rem; font-size: 0\.75rem;">.*?</a>',
    '<a href="contact/index.html" class="btn btn-outline-gold" style="padding: 0.65rem 1.25rem; font-size: 0.75rem;">\n          <span class="lang-fr">Devis Gratuit</span>\n          <span class="lang-en">Request Quote</span>\n        </a>',
    content,
    flags=re.DOTALL
)

# Replace all old `#booking` anchors to `contact/index.html` where appropriate inside index.html
content = content.replace('href="#booking"', 'href="contact/index.html"')
content = content.replace('href="#experiences"', 'href="wine-tours/index.html"')
content = content.replace('href="#fleet"', 'href="fleet/index.html"')
content = content.replace('href="#reviews"', 'href="reviews/index.html"')

# Re-anchor the local IDs on homepage just in case
content = content.replace('id="booking"', 'id="booking"')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html updated successfully!")
