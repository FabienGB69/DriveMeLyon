import os
import re

source_file = '/Users/Gomi/.gemini/antigravity/worktrees/splendid-carson/rebrand-premium-wine-tours/beaujolais-wine-tour-from-lyon/index.html'
target_dir = '/Users/Gomi/.gemini/antigravity/worktrees/splendid-carson/rebrand-premium-wine-tours/northern-rhone-valley-wine-tour-from-lyon'
target_file = os.path.join(target_dir, 'index.html')

os.makedirs(target_dir, exist_ok=True)

with open(source_file, 'r', encoding='utf-8') as f:
    content = f.read()

# =====================================================================
# META & TITLE
# =====================================================================
content = re.sub(
    r'<title>Beaujolais Wine Tour from Lyon \| Drive Me Lyon</title>',
    '<title>Northern Rhône Valley Wine Tour from Lyon | Drive Me Lyon</title>',
    content
)
content = re.sub(
    r'content="Discover the Beaujolais region with a premium private wine tour from Lyon.*?"',
    'content="Discover the Northern Rhône Valley wine region with a premium private tour from Lyon. Côte-Rôtie, Condrieu, and Hermitage in a luxury Mercedes with an English-speaking chauffeur."',
    content
)

# =====================================================================
# HERO SECTION
# =====================================================================
content = re.sub(
    r'<span class="lang-fr">Beaujolais Wine Tour depuis Lyon</span>',
    '<span class="lang-fr">Wine Tour Vallée du Rhône Nord depuis Lyon</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Beaujolais Wine Tour from Lyon</span>',
    '<span class="lang-en">Northern Rhône Valley Wine Tour from Lyon</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Profitez d\'une expérience privée dans les vignobles du Beaujolais avec prise en charge à l\'hôtel, chauffeur anglophone et itinéraire sur-mesure.</span>',
    '<span class="lang-fr">Découvrez les appellations viticoles les plus emblématiques de France avec un chauffeur privé depuis Lyon : Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage et Crozes-Hermitage.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Enjoy a private wine experience through the Beaujolais vineyards with hotel pickup, English-speaking chauffeur and a flexible itinerary.</span>',
    '<span class="lang-en">Discover some of France’s most iconic wine appellations with a private chauffeur from Lyon: Côte-Rôtie, Condrieu, Saint-Joseph, Hermitage and Crozes-Hermitage.</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Réserver ce Wine Tour</span>',
    '<span class="lang-fr">Réserver ce Wine Tour (Rhône)</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Book your Beaujolais Wine Tour</span>',
    '<span class="lang-en">Request a private Rhône Valley wine tour</span>',
    content
)

# =====================================================================
# WHY CHOOSE THE RHONE VALLEY (Replaces Experience Section)
# =====================================================================
content = re.sub(
    r'<span class="lang-fr">Une journée inoubliable dans le Beaujolais</span>',
    '<span class="lang-fr">Pourquoi choisir la Vallée du Rhône Nord</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">An unforgettable day in Beaujolais</span>',
    '<span class="lang-en">Why choose the Northern Rhône Valley</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Le Beaujolais, avec ses douces collines et ses villages en pierres dorées, offre une expérience authentique.*?</p>',
    '<span class="lang-fr">À seulement quelques dizaines de kilomètres de Lyon, la Vallée du Rhône septentrionale abrite les berceaux mythiques de la Syrah et du Viognier. Offrant des paysages spectaculaires de vignes en terrasses abruptes plongeant vers le fleuve, cette région propose une expérience viticole exclusive, confidentielle et mondialement réputée.</span></p>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<span class="lang-en">Beaujolais, with its rolling hills and golden stone villages, offers an authentic.*?</p>',
    '<span class="lang-en">Just a short drive south of Lyon, the Northern Rhône Valley is the legendary birthplace of Syrah and Viognier. Characterized by spectacular steep terraced vineyards plunging toward the river, this region offers an exclusive, intimate, and world-renowned wine experience that contrasts sharply with mainstream commercial tours.</span></p>',
    content,
    flags=re.DOTALL
)

# Highlights
content = re.sub(
    r'<span class="lang-fr">Pierres Dorées</span>',
    '<span class="lang-fr">Appellations Prestigieuses</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Golden Stones</span>',
    '<span class="lang-en">Prestigious Appellations</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Crus du Beaujolais</span>',
    '<span class="lang-fr">Coteaux Spectaculaires</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">10 Beaujolais Crus</span>',
    '<span class="lang-en">Spectacular Terraces</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Châteaux Historiques</span>',
    '<span class="lang-fr">Syrah & Viognier</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Historic Chateaux</span>',
    '<span class="lang-en">Syrah & Viognier</span>',
    content
)

# =====================================================================
# ITINERARY
# =====================================================================
content = re.sub(
    r'<span class="lang-fr">Exemple d\'itinéraire dans le Beaujolais</span>',
    '<span class="lang-fr">Exemple d\'itinéraire dans la Vallée du Rhône</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Example Beaujolais Itinerary</span>',
    '<span class="lang-en">Example Northern Rhône Itinerary</span>',
    content
)

# Timeline Items
content = re.sub(
    r'<span class="lang-fr">Prise en charge à votre hôtel ou adresse à Lyon\.</span>',
    '<span class="lang-fr">Prise en charge à votre hôtel à Lyon et départ vers le sud.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Pick up at your hotel or accommodation in Lyon\.</span>',
    '<span class="lang-en">Pick up at your hotel in Lyon and scenic drive south along the river.</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Traversée panoramique de la région des Pierres Dorées\.</span>',
    '<span class="lang-fr">Découverte des terrasses abruptes d\'Ampuis (Côte-Rôtie) et de Condrieu.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Scenic drive through the beautiful Golden Stone villages\.</span>',
    '<span class="lang-en">Discover the steep, vertigo-inducing terraces of Ampuis (Côte-Rôtie) and Condrieu.</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Dégustation privée dans un domaine familial\.</span>',
    '<span class="lang-fr">Première dégustation privée dans un domaine prestigieux de Côte-Rôtie.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">First private tasting at a family-owned winery\.</span>',
    '<span class="lang-en">First exclusive wine tasting at a prestigious Côte-Rôtie estate.</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Déjeuner dans un bouchon traditionnel ou restaurant gastronomique\.</span>',
    '<span class="lang-fr">Déjeuner gastronomique à Tain l\'Hermitage face aux vignobles.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Lunch at a traditional local restaurant\.</span>',
    '<span class="lang-en">Gourmet lunch in Tain l\'Hermitage overlooking the vines.</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Visite des Crus \(Brouilly, Morgon, Moulin-à-Vent\) et seconde dégustation\.</span>',
    '<span class="lang-fr">Visite de la colline de l\'Hermitage ou arrêt à la Cité du Chocolat Valrhona, suivi d\'une dégustation.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Visit to the Crus \(Morgon, Fleurie\) and a second premium tasting\.</span>',
    '<span class="lang-en">Drive up the famous Hermitage hill or visit the Valrhona Chocolate City, followed by a second tasting.</span>',
    content
)

# =====================================================================
# FAQ
# =====================================================================
# FAQ 1
content = re.sub(
    r'<span class="lang-fr">Combien de temps faut-il pour aller dans le Beaujolais depuis Lyon \?</span>',
    '<span class="lang-fr">Combien de temps faut-il pour aller dans la Vallée du Rhône depuis Lyon ?</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">How long is the drive to Beaujolais from Lyon\?</span>',
    '<span class="lang-en">How long is the drive to the Northern Rhône from Lyon?</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Il faut compter environ 45 minutes de route pour atteindre les premiers vignobles du Beaujolais depuis le centre de Lyon\.</span>',
    '<span class="lang-fr">Il faut compter environ 40 minutes pour atteindre Ampuis (Côte-Rôtie) et 1 heure pour Tain l\'Hermitage depuis le centre de Lyon.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">It takes about 45 minutes to reach the first Beaujolais vineyards from central Lyon\.</span>',
    '<span class="lang-en">It takes about 40 minutes to reach Ampuis (Côte-Rôtie) and 1 hour to reach Tain l\'Hermitage from central Lyon.</span>',
    content
)

# FAQ 2 (Do you book the tastings) - keep it mostly the same as it applies

# FAQ 3 (Can we mix)
content = re.sub(
    r'<span class="lang-fr">Proposez-vous des circuits demi-journée \?</span>',
    '<span class="lang-fr">Peut-on combiner le Beaujolais et la Vallée du Rhône ?</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Do you offer half-day tours\?</span>',
    '<span class="lang-en">Can we mix Beaujolais and Rhône Valley in one day?</span>',
    content
)

content = re.sub(
    r'<span class="lang-fr">Oui, nous proposons des formules de 4 heures \(généralement le matin ou l\'après-midi\) idéales pour une première approche\.</span>',
    '<span class="lang-fr">Oui, il est possible d\'organiser une journée complète visitant le sud du Beaujolais le matin et le nord de la Vallée du Rhône l\'après-midi, car les deux régions sont proches de Lyon.</span>',
    content
)
content = re.sub(
    r'<span class="lang-en">Yes, we offer 4-hour half-day tours \(morning or afternoon\), perfect for a quick getaway\.</span>',
    '<span class="lang-en">Yes, it is possible to organize a full day combining Southern Beaujolais in the morning and Northern Rhône in the afternoon, as both regions are accessible from Lyon.</span>',
    content
)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully generated {target_file}")
