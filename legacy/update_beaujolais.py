import re

source_html = '/Users/Gomi/.gemini/antigravity/worktrees/splendid-carson/rebrand-premium-wine-tours/index.html'
target_html = '/Users/Gomi/.gemini/antigravity/worktrees/splendid-carson/rebrand-premium-wine-tours/beaujolais-wine-tour-from-lyon/index.html'

with open(source_html, 'r', encoding='utf-8') as f:
    main_content = f.read()

with open(target_html, 'r', encoding='utf-8') as f:
    page_content = f.read()

# 1. Grab new nav from index and adjust paths
nav_pattern = re.compile(r'(<ul class="nav-menu" id="nav-menu">.*?</ul>)', re.DOTALL)
new_nav_match = nav_pattern.search(main_content)
if not new_nav_match:
    print("Could not find nav in index.html")
    exit(1)

new_nav = new_nav_match.group(1)
# Prepend ../ to all hrefs except #
new_nav = re.sub(r'href="([^#][^"]*)"', r'href="../\1"', new_nav)

# Replace in target
page_content = re.sub(r'<ul class="nav-menu" id="nav-menu">.*?</ul>', new_nav, page_content, flags=re.DOTALL)

# Header actions link fix
page_content = re.sub(
    r'<a href="#booking" class="btn btn-outline-gold" style="padding: 0\.65rem 1\.25rem; font-size: 0\.75rem;">.*?</a>',
    '<a href="../contact/index.html" class="btn btn-outline-gold" style="padding: 0.65rem 1.25rem; font-size: 0.75rem;">\n          <span class="lang-fr">Devis Gratuit</span>\n          <span class="lang-en">Request Quote</span>\n        </a>',
    page_content,
    flags=re.DOTALL
)

# 2. Grab reviews section from index.html
reviews_pattern = re.compile(r'(<!-- ==========================================================================\s*4\. GOOGLE REVIEWS SECTION.*?)(<!-- ==========================================================================\s*3\. INTERNATIONAL CLIENTS SECTION)', re.DOTALL)
reviews_match = reviews_pattern.search(main_content)

if reviews_match:
    reviews_html = reviews_match.group(1)
    
    # Customize for Wine Tours
    reviews_html = re.sub(
        r'<span class="lang-en">Trusted by international travelers</span>',
        '<span class="lang-en">Loved by wine lovers and international guests</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-fr">La confiance des voyageurs internationaux</span>',
        '<span class="lang-fr">Apprécié par les amateurs de vin du monde entier</span>',
        reviews_html
    )
    
    reviews_html = re.sub(
        r'<span class="lang-en">Rated on Google by clients from all over the world\. Read what guests say about our private chauffeur service, airport transfers and wine tours from Lyon\.</span>',
        '<span class="lang-en">Guests appreciate the local wine knowledge, flexible itinerary, English-speaking service and premium Mercedes comfort.</span>',
        reviews_html
    )
    reviews_html = re.sub(
        r'<span class="lang-fr">Découvrez les avis laissés sur Google par nos clients du monde entier\.</span>',
        '<span class="lang-fr">Nos clients apprécient nos connaissances oenologiques, la flexibilité de nos itinéraires, notre service bilingue et le confort de nos véhicules Mercedes.</span>',
        reviews_html
    )
    
    # Filter to only keep Wine Tour reviews.
    # The review cards are structured as <div class="swiper-slide">...</div>
    slides = re.findall(r'<div class="swiper-slide">.*?</div>\s*(?=<!--|</div)', reviews_html, re.DOTALL)
    
    # We want to keep the Beaujolais one and maybe the general Private Tour one
    kept_slides = []
    for slide in slides:
        if 'Wine Tour' in slide or 'Private Tour' in slide:
            kept_slides.append(slide)
            
    # Rebuild the swiper wrapper
    wrapper_pattern = re.compile(r'(<div class="swiper-wrapper">).*?(</div>\s*<!-- Pagination -->)', re.DOTALL)
    reviews_html = wrapper_pattern.sub(r'\1\n' + '\n'.join(kept_slides) + r'\n\2', reviews_html)
    
    # Insert reviews right before <section class="booking-section">
    booking_pattern = r'(<!-- ==========================================================================\s*4\. BOOKING SECTION\s*========================================================================== -->)'
    page_content = re.sub(booking_pattern, reviews_html + r'\n\1', page_content)

# 3. Add Contact Review Block before form in beaujolais
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

page_content = page_content.replace('<h3 class="form-title">', contact_block + '\n        <h3 class="form-title">')

with open(target_html, 'w', encoding='utf-8') as f:
    f.write(page_content)

print("beaujolais-wine-tour-from-lyon/index.html updated successfully!")
