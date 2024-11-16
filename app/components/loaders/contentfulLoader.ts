/* eslint-disable @typescript-eslint/no-explicit-any */
// loaders/contentfulLoader.js

export function contentfulLoader({ src, width, quality }: any) {
  // Assurez-vous que le chemin de l'image commence par "//images.ctfassets.net/"
  // if (!src.startsWith("//images.ctfassets.net/")) {
  //   throw new Error("URL invalide : Contentful URL attendue");
  // }

  // Supprimez le double slash au début du chemin
  // const srcPath = src.startsWith("//") ? src.slice(2) : src;

  // Appliquez les transformations de Contentful
  const params = [
    `w=${width}`, // Largeur
    `q=${quality || 75}`, // Qualité (par défaut à 75)
    `fm=avif`, // Format automatique pour optimiser la taille
  ]
  const paramsString = params.join('&')

  // Retourne l'URL complète avec les transformations
  return src
}
