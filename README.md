# Portfolio Ashad - Portfolio Personnel

Un portfolio moderne et interactif développé avec React, Vite, et Three.js.

## 🚀 Technologies Utilisées

- **React 19** - Framework JavaScript moderne
- **Vite** - Outil de build rapide
- **GSAP** - Animations fluides
- **Three.js** - Graphiques 3D
- **Tailwind CSS** - Framework CSS utilitaire
- **React Three Fiber** - Intégration Three.js avec React

## ✨ Fonctionnalités

- **Design Responsive** - Adapté à tous les appareils
- **Animations GSAP** - Transitions fluides et professionnelles
- **Modèles 3D** - Visualisations interactives
- **Compteurs Animés** - Statistiques dynamiques
- **Slider de Texte** - Animation de mots clés
- **Interface Moderne** - Design épuré et professionnel

## 🛠️ Installation et Démarrage

1. **Cloner le projet**

   ```bash
   git clone [url-du-repo]
   cd ashad
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Construire pour la production**

   ```bash
   npm run build
   ```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── AnimatedCounter.jsx      # Compteurs animés
│   ├── Button.jsx               # Composant bouton
│   ├── models/
│   │   └── hero_models/
│   │       └── HeroExperience.jsx  # Modèle 3D
│   └── sections/
│       └── Hero.jsx             # Section principale
├── constants/
│   └── index.js                 # Données et constantes
├── App.jsx                      # Composant principal
├── main.jsx                     # Point d'entrée
└── index.css                    # Styles globaux
```

## 🔧 Corrections Apportées

### Problèmes Résolus

1. **Composants manquants** - Création de `AnimatedCounter`, `Button`, et `HeroExperience`
2. **Chemins d'import incorrects** - Correction des imports relatifs
3. **Structure de dossiers** - Organisation cohérente des composants
4. **Erreurs de build** - Résolution des conflits de dépendances

### Composants Créés

- **AnimatedCounter** : Affiche des statistiques avec animation au scroll
- **Button** : Bouton interactif avec effets hover
- **HeroExperience** : Modèle 3D simple avec Three.js

## 🎨 Personnalisation

### Modifier les données

Éditez `src/constants/index.js` pour personnaliser :

- Informations personnelles
- Statistiques
- Expériences
- Témoignages

### Styles

Les styles sont dans `src/index.css` avec Tailwind CSS pour une personnalisation facile.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Déploiement

Le projet peut être déployé sur :

- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur statique

## 📄 Licence

Ce projet est sous licence MIT.

---

**Développé avec ❤️ par Ashad**
