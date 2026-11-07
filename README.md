# NetworKween

Site vitrine du cercle privé de femmes entrepreneures NetworKween.
Next.js 15 (App Router) + TypeScript, déployé sur Vercel depuis GitHub.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
app/
  layout.tsx          polices (Cormorant Garamond + Inter), metadata, nav + footer
  globals.css         charte : fond #080c17, texte #ede9de, or #c0a159
  page.tsx            accueil
  manifeste/ concept/ evenements/ selection/ contact/
components/
  Crown.tsx           couronne en SVG
  Nav.tsx  Footer.tsx
```

## Mettre en ligne (GitHub + Vercel)

1. Créer un dépôt vide `networkween` sur GitHub.
2. Dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Site NetworKween"
   git branch -M main
   git remote add origin https://github.com/<ton-compte>/networkween.git
   git push -u origin main
   ```
3. Sur vercel.com : **Add New → Project**, importer le dépôt. Vercel détecte Next.js, aucun réglage à modifier. Chaque `git push` sur `main` redéploie le site.
4. Domaine : **Settings → Domains** pour brancher `networkween.com`. L'adresse du bouton « Écrire » est dans `app/contact/page.tsx`.
