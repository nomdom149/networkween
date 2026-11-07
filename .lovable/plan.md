
# Plan : Corrections multi-pages, titres et galerie

## 4 problèmes identifiés et leurs solutions

---

## 1. Page d'accueil en mode multi-pages

### Problème
La page d'accueil (`Index.tsx`) affiche toutes les sections sur une seule page avec scroll, contrairement au reste du site qui est en multi-pages.

### Solution
Simplifier la page d'accueil pour qu'elle n'affiche que :
- Navigation
- Hero
- Footer

Les autres sections seront accessibles uniquement via leurs pages dédiées (Manifeste, Concept, Événements, Sélection, Contact).

### Fichier à modifier
`src/pages/Index.tsx` - Supprimer tous les composants sauf Navigation, Hero et Footer.

---

## 2. Titre dupliqué sur la page "Le Concept"

### Problème
La page affiche deux fois le même titre :
- `PageHero` → "Le Concept"
- `Concept.tsx` ligne 12 → "Le concept"

### Solution
Modifier le composant `Concept.tsx` pour afficher "Une intuition relationnelle" au lieu de "Le concept" quand il est affiché sur sa page dédiée.

### Technique
Ajouter une prop `showTitle` au composant qui permet de masquer ou modifier le titre selon le contexte.

### Fichiers à modifier
- `src/components/Concept.tsx` - Ajouter prop et changer le titre
- `src/pages/ConceptPage.tsx` - Passer la prop

---

## 3. Galerie - Overlay 80% avec éclaircissement au hover

### Problème
L'overlay `bg-midnight/80` ne fonctionne pas car `.bg-midnight` est une classe CSS personnalisée (définie dans index.css) et non une couleur Tailwind native. La syntaxe `/80` ne s'applique pas.

### Solution
Utiliser directement la valeur HSL avec opacité : 
```
style={{ backgroundColor: 'hsl(222 50% 6% / 0.8)' }}
```

Ou définir la couleur dans tailwind.config.ts pour pouvoir utiliser `bg-midnight/80`.

### Meilleure approche
Ajouter la couleur `midnight` dans `tailwind.config.ts` pour que la syntaxe Tailwind fonctionne nativement.

### Fichiers à modifier
- `tailwind.config.ts` - Ajouter la couleur midnight
- `src/components/Gallery.tsx` - Vérifier que l'overlay fonctionne

---

## 4. Titre dupliqué sur la page Contact

### Problème
La page Contact affiche deux fois "Manifester son intérêt" :
- `PageHero` → "Manifester son intérêt"
- `Contact.tsx` ligne 12 → "Manifester son intérêt"

### Solution
Ajouter une prop `showTitle` au composant `Contact` pour masquer le titre quand il est affiché sur la page dédiée.

### Fichiers à modifier
- `src/components/Contact.tsx` - Ajouter prop showTitle
- `src/pages/ContactPage.tsx` - Passer showTitle={false}

---

## Récapitulatif des fichiers à modifier

| Fichier | Modification |
|---------|--------------|
| `src/pages/Index.tsx` | Garder seulement Hero, Navigation, Footer |
| `src/components/Concept.tsx` | Ajouter prop, remplacer titre par "Une intuition relationnelle" |
| `src/pages/ConceptPage.tsx` | Passer la prop au composant |
| `tailwind.config.ts` | Ajouter couleur midnight pour overlay |
| `src/components/Gallery.tsx` | Vérifier overlay avec nouvelle config |
| `src/components/Contact.tsx` | Ajouter prop showTitle |
| `src/pages/ContactPage.tsx` | Passer showTitle={false} |

---

## Détails techniques

### tailwind.config.ts - Nouvelle couleur

```text
colors: {
  ...existing colors,
  midnight: {
    DEFAULT: 'hsl(222 50% 6%)',
    light: 'hsl(222 45% 10%)',
    medium: 'hsl(222 40% 14%)',
  }
}
```

Cela permettra d'utiliser `bg-midnight/80` avec l'opacité native de Tailwind.

### Index.tsx - Version simplifiée

```text
Navigation
Hero (avec liens vers les autres pages)
Footer
```

### Concept.tsx - Nouveau titre

Le titre "Le concept" sera remplacé par "Une intuition relationnelle" pour éviter la duplication avec le PageHero.
