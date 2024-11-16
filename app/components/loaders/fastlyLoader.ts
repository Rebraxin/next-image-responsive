/* eslint-disable @typescript-eslint/no-explicit-any */

export function fastlyLoader({ src, width, quality }: any) {
  const fastlyDomain = "www.salomon.com/fr-fr/shop-emea/media";

  const params = [`width=${width}`, `quality=${quality || 75}`, "format=auto"];

  // Conversion du tableau de paramètres en chaîne de caractères
  const paramsString = params.join("&");

  // Suppression du slash initial si présent
  const srcPath = src.startsWith("/") ? src.slice(1) : src;

  // Construction de l'URL finale
  return `https://${fastlyDomain}/${srcPath}?${paramsString}`;
}

// catalog/product/article_images/L47588800/L47588800_68e01f24ea7bc02131d11e37c53361c6.png

// &auto=webp
// &bg-color=f5f5f5
// &crop=1667%2C2000%2Csafe
// &dpr=1.25
// &fit=cover
// &format=pjpg
// &optimize=low
// &orient=1&width=1050

// https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/article_images/L47588800/L47588800_68e01f24ea7bc02131d11e37c53361c6.png?auto=webp&bg-color=f5f5f5&crop=1667%2C2000%2Csafe&dpr=1.25&fit=cover&format=pjpg&optimize=low&orient=1&width=1050
