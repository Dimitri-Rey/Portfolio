# CLAUDE.md - Portfolio BTS SIO SISR Dimitri Rey

## 🎯 Objectif du projet

Créer un portfolio professionnel pour le passage du BTS SIO option SISR. Ce portfolio doit démontrer les compétences techniques du candidat tout en présentant son parcours, ses projets et sa veille technologique.

**Candidat** : Dimitri Rey
**Formation** : BTS SIO SISR (Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux)
**Entreprise d'alternance** : Oelis (Saint-Étienne)
**Profil différenciant** : 4 ans d'expérience dans l'armée comme technicien helpdesk

---

## 🏗️ Architecture technique

### Stack technologique choisie
```
Frontend : HTML5 + CSS3 + JavaScript vanilla
Style : CSS moderne (variables, flexbox, grid)
Hébergement : GitHub Pages (gratuit, professionnel)
Domaine : dimitri-rey.github.io (ou domaine personnalisé)
```

### Structure des fichiers
```
portfolio/
├── index.html              # Page d'accueil
├── a-propos.html           # Parcours et objectifs
├── cv.html                  # CV interactif
├── oelis.html              # Présentation entreprise + missions
├── veille.html             # Veille technologique
├── competences.html        # Tableau de compétences BTS SIO
├── projets.html            # Portfolio de projets
├── contact.html            # Formulaire de contact
├── css/
│   ├── style.css           # Styles principaux
│   ├── variables.css       # Variables CSS (couleurs, fonts)
│   └── responsive.css      # Media queries
├── js/
│   └── main.js             # Interactions (menu mobile, animations)
├── assets/
│   ├── images/             # Photos, logos, captures d'écran
│   ├── documents/          # CV PDF, certifications
│   └── icons/              # Icônes SVG
└── README.md               # Documentation du projet
```

---

## 🎨 Charte graphique

### Palette de couleurs
```css
:root {
  /* Couleurs principales - Thème cybersécurité/tech */
  --primary: #0f172a;        /* Bleu nuit profond - fond principal */
  --secondary: #1e293b;      /* Bleu-gris - sections alternées */
  --accent: #3b82f6;         /* Bleu vif - liens, boutons, highlights */
  --accent-hover: #2563eb;   /* Bleu hover */
  --success: #22c55e;        /* Vert - validations, compétences acquises */
  
  /* Texte */
  --text-primary: #f8fafc;   /* Blanc cassé - texte principal */
  --text-secondary: #94a3b8; /* Gris clair - texte secondaire */
  --text-muted: #64748b;     /* Gris - métadonnées */
  
  /* Accents techniques */
  --code-bg: #1e1e1e;        /* Fond blocs de code */
  --terminal-green: #4ade80; /* Vert terminal */
  --warning: #f59e0b;        /* Orange - alertes */
  --danger: #ef4444;         /* Rouge - erreurs */
}
```

### Typographie
```css
:root {
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-heading: 'Space Grotesk', sans-serif;
}
```

### Principes de design
1. **Dark mode par défaut** - Cohérent avec l'univers cybersécurité/sysadmin
2. **Minimaliste** - Pas de fioritures, contenu au premier plan
3. **Professionnel** - Sobre, efficace, crédible
4. **Responsive** - Mobile-first, fonctionne sur tous les écrans
5. **Accessible** - Contrastes suffisants, navigation clavier

---

## 📄 Contenu des pages

### 1. Accueil (index.html)
**Objectif** : Capter l'attention en 5 secondes

**Contenu** :
- Hero section avec nom + titre + photo professionnelle
- Phrase d'accroche différenciante : "4 ans d'expérience terrain dans l'armée, aujourd'hui spécialiste systèmes & réseaux"
- 3-4 stats clés (années d'expérience, projets réalisés, technologies maîtrisées)
- CTA vers les projets et le CV
- Aperçu rapide des compétences clés (icônes)

**À NE PAS FAIRE** :
- ❌ Texte générique type "Passionné d'informatique depuis toujours"
- ❌ Paragraphes trop longs
- ❌ Absence de CTA

---

### 2. À propos (a-propos.html)
**Objectif** : Raconter le parcours unique du candidat

**Structure** :
```
1. Introduction (2-3 phrases)
2. Timeline du parcours
   - 2017-2021 : Armée de Terre - Technicien Helpdesk
   - 2022-2024 : Conseil départemental du Doubs
   - 2024-présent : BTS SIO SISR chez Oelis
   - 2025 : Objectif Bachelor ASR
3. Ce qui me différencie (soft skills issus de l'armée)
4. Objectif professionnel (cybersécurité, SOC, ingénieur sécurité)
5. Centres d'intérêt / hobbies (humaniser le profil)
```

**Points forts à mettre en avant** :
- Discipline et rigueur militaire
- Expérience terrain en environnements sécurisés
- Capacité à travailler sous pression
- Autonomie et esprit d'initiative

---

### 3. CV (cv.html)
**Objectif** : Version web interactive du CV + téléchargement PDF

**Structure** :
```
1. Header avec infos de contact
2. Expériences professionnelles (timeline inversée)
3. Formation
4. Compétences techniques (barres de progression ou tags)
5. Certifications (si existantes)
6. Langues
7. Bouton télécharger CV PDF
```

**Liens** :
- LinkedIn : https://www.linkedin.com/in/dimitri-rey-7610662a2/
- CV PDF sur kDrive

---

### 4. Oelis (oelis.html)
**Objectif** : Présenter l'entreprise et les missions réalisées

**Structure** :
```
1. Présentation de l'entreprise
   - Logo, localisation, secteur d'activité
   - Services proposés (infogérance, VoIP, sécurité...)
   - Taille et clientèle

2. Mon rôle
   - Poste occupé
   - Durée de l'alternance
   - Responsabilités

3. Missions détaillées (avec icônes)
   - Support technique (Helpdesk N1/N2)
   - Administration systèmes (Windows Server, Linux, AD, GPO)
   - Réseaux & sécurité (Cisco, MikroTik, Fortinet, VLAN)
   - Virtualisation (Proxmox, VMware, Veeam)

4. Technologies utilisées (grille de logos)

5. Ce que j'ai appris (soft skills + hard skills)
```

---

### 5. Veille technologique (veille.html)
**Objectif** : Démontrer la capacité de veille - OBLIGATOIRE pour le BTS

**Thèmes choisis** :
1. **Cyberattaques basées sur l'IA et défenses par IA**
2. **Cryptographie post-quantique**

**Structure pour chaque thème** :
```
1. Introduction et contexte
2. Problématique
3. État de l'art / Tendances actuelles
4. Impacts et enjeux
5. Solutions et perspectives
6. Sources (OBLIGATOIRE - minimum 5 sources par thème)
7. Glossaire des termes techniques
```

**Sources à citer** (format) :
```markdown
- [Titre de l'article](URL) - Auteur/Site - Date
```

**Outils de veille à mentionner** :
- Feedly, RSS
- Twitter/X (comptes sécu)
- CERT-FR, ANSSI
- CVE, NVD
- Blogs spécialisés (Krebs on Security, The Hacker News...)

---

### 6. Compétences (competences.html)
**Objectif** : Mapper les compétences au référentiel BTS SIO SISR

**IMPORTANT** : Utiliser le référentiel officiel du BTS SIO

**Blocs de compétences SISR** :
```
Bloc 1 : Support et mise à disposition de services informatiques
  - Gérer le patrimoine informatique
  - Répondre aux incidents et aux demandes d'assistance
  - Développer la présence en ligne de l'organisation
  - Travailler en mode projet
  - Mettre à disposition des utilisateurs un service informatique

Bloc 2 : Administration des systèmes et des réseaux
  - Concevoir une solution d'infrastructure réseau
  - Installer, tester et déployer une solution d'infrastructure réseau
  - Exploiter, dépanner et superviser une solution d'infrastructure réseau

Bloc 3 : Cybersécurité des services informatiques
  - Protéger les données à caractère personnel
  - Préserver l'identité numérique de l'organisation
  - Sécuriser les équipements et les usages des utilisateurs
  - Garantir la disponibilité, l'intégrité et la confidentialité des services
  - Assurer la cybersécurité d'une infrastructure réseau
```

**Format d'affichage** :
Pour chaque compétence :
- Niveau (Acquis / En cours / Non abordé)
- Contexte d'acquisition (école / entreprise / perso)
- Projet(s) associé(s) avec lien

---

### 7. Projets (projets.html)
**Objectif** : Showcase des réalisations concrètes

**Structure par projet** :
```
1. Titre du projet
2. Image/capture d'écran
3. Description courte (2-3 lignes)
4. Contexte (école, entreprise, perso)
5. Technologies utilisées (tags)
6. Compétences BTS mobilisées
7. Lien vers documentation détaillée ou GitHub
```

**Projets à documenter** (basé sur le profil) :
- **Cipher** : Plateforme d'orchestration de tests de pénétration
- **SecureM365** : Plateforme SaaS d'audit sécurité Microsoft 365
- **Homelab** : Infrastructure personnelle (Proxmox, Docker, monitoring)
- **Projets école** : Labs réseau, configurations OSPF, IPv6, STP
- **Scripts d'automatisation** : PowerShell, Bash

**Catégories** :
- Projets professionnels (Oelis)
- Projets école (BTS)
- Projets personnels

---

### 8. Contact (contact.html)
**Objectif** : Permettre au jury/recruteurs de contacter

**Contenu** :
```
1. Formulaire de contact (Formspree ou Netlify Forms)
   - Nom
   - Email
   - Sujet
   - Message

2. Informations de contact directes
   - Email professionnel
   - LinkedIn
   - GitHub (si existant)
   - Localisation (Saint-Étienne / Loire)

3. Disponibilité
   - Recherche alternance Bachelor ASR pour septembre 2025
```

---

## ✅ Checklist qualité

### Avant mise en production
- [ ] Aucune faute d'orthographe (utiliser Antidote ou LanguageTool)
- [ ] Toutes les pages sont complètes (aucun contenu placeholder)
- [ ] Aucun TODO ou note de travail visible
- [ ] Tous les liens fonctionnent
- [ ] Images optimisées (WebP, compression)
- [ ] Site responsive testé sur mobile
- [ ] Temps de chargement < 3 secondes
- [ ] Favicon présent
- [ ] Méta-descriptions renseignées
- [ ] CV PDF téléchargeable

### SEO / Accessibilité
- [ ] Balises title uniques par page
- [ ] Attributs alt sur toutes les images
- [ ] Structure Hn cohérente (un seul H1 par page)
- [ ] Contraste texte/fond suffisant (WCAG AA)
- [ ] Navigation au clavier fonctionnelle

### Spécifique BTS SIO
- [ ] Veille technologique avec sources citées
- [ ] Compétences mappées au référentiel officiel
- [ ] Projets liés aux compétences
- [ ] Tableau de synthèse des compétences disponible

---

## 🚀 Déploiement

### GitHub Pages
```bash
# 1. Créer le repo sur GitHub
# Nom : dimitri-rey.github.io (pour avoir l'URL directe)

# 2. Cloner et ajouter les fichiers
git clone https://github.com/dimitri-rey/dimitri-rey.github.io.git
cd dimitri-rey.github.io

# 3. Ajouter les fichiers du portfolio
# (copier tous les fichiers HTML, CSS, JS, assets)

# 4. Commit et push
git add .
git commit -m "Initial portfolio"
git push origin main

# 5. Activer GitHub Pages
# Settings > Pages > Source: main branch > Save
```

**URL finale** : https://dimitri-rey.github.io

### Domaine personnalisé (optionnel)
Si tu veux un domaine comme `dimitri-rey.fr` :
1. Acheter le domaine (OVH, Gandi, Infomaniak...)
2. Configurer les DNS (CNAME vers dimitri-rey.github.io)
3. Ajouter le fichier CNAME dans le repo
4. Activer HTTPS dans les settings GitHub Pages

---

## 📝 Instructions pour Claude

### Lors de la génération de code
1. **HTML** : Sémantique, accessible, valide W3C
2. **CSS** : Variables CSS, mobile-first, BEM naming
3. **JS** : Vanilla JS uniquement, pas de framework, ES6+
4. **Images** : Toujours demander les attributs alt
5. **Liens** : Toujours vérifier les URLs

### Lors de la rédaction de contenu
1. **Ton** : Professionnel mais pas robotique
2. **Longueur** : Concis, aller à l'essentiel
3. **Orthographe** : Vérifier systématiquement
4. **Vocabulaire** : Technique mais accessible

### Ce qu'il faut éviter absolument
- ❌ Laisser des TODO ou placeholders
- ❌ Utiliser "Lorem ipsum"
- ❌ Copier-coller du contenu générique
- ❌ Oublier les sources dans la veille
- ❌ Négliger le responsive
- ❌ Utiliser des images non optimisées
- ❌ Liens cassés ou morts

---

## 📅 Planning de développement suggéré

### Phase 1 : Structure (Jour 1-2)
- [ ] Créer la structure HTML de toutes les pages
- [ ] Mettre en place le CSS de base (variables, reset, layout)
- [ ] Navigation fonctionnelle

### Phase 2 : Contenu (Jour 3-5)
- [ ] Rédiger le contenu de chaque page
- [ ] Intégrer les images et documents
- [ ] Compléter la veille avec les sources

### Phase 3 : Finitions (Jour 6-7)
- [ ] Responsive design
- [ ] Animations subtiles
- [ ] Tests cross-browser
- [ ] Optimisation performances

### Phase 4 : Déploiement (Jour 8)
- [ ] Mise en ligne GitHub Pages
- [ ] Tests finaux
- [ ] Vérification de tous les liens

---

## 🔗 Ressources utiles

### Design
- [Coolors](https://coolors.co) - Palettes de couleurs
- [Google Fonts](https://fonts.google.com) - Typographies
- [Heroicons](https://heroicons.com) - Icônes SVG
- [Undraw](https://undraw.co) - Illustrations

### Outils
- [TinyPNG](https://tinypng.com) - Compression images
- [Squoosh](https://squoosh.app) - Conversion WebP
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Audit performance
- [W3C Validator](https://validator.w3.org) - Validation HTML

### Référentiel BTS SIO
- [Référentiel officiel BTS SIO](https://www.education.gouv.fr) - Compétences à mapper
- [CERTA](https://www.reseaucerta.org) - Ressources pédagogiques

---

## 💡 Notes importantes

1. **Le portfolio doit être TERMINÉ avant l'examen** - Aucune page vide
2. **Le jury évalue la cohérence** - Projets ↔ Compétences ↔ Veille
3. **La veille doit être sourcée** - Minimum 5 sources vérifiables par thème
4. **Le code doit être propre** - Tu es évalué sur ta rigueur technique
5. **L'hébergement sur GitHub Pages montre que tu maîtrises Git** - Bonus implicite

---

*Dernière mise à jour : Février 2026*
*Version : 1.0*
