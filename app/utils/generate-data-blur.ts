/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/generateBlurDataURL.js

import lqip from "lqip-modern";

export async function generateBlurDataURL() {
  try {
    // Télécharger l'image depuis l'URL distante
    const response: any = await fetch(
      "https://res.cloudinary.com/demo/image/upload/c_fill,g_auto,h_650,w_1920,q_75/docs/model.jpg"
    );
    console.log("🔥🔥🔥 >>> ~ generateBlurDataURL ~ response: >>>", response);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log("🔥🔥🔥 >>> ~ generateBlurDataURL ~ buffer: >>>", buffer);

    // Générer le placeholder avec lqip-modern
    const { metadata } = await lqip(buffer);
    console.log("🔥🔥🔥 >>> ~ generateBlurDataURL ~ metadata: >>>", metadata);

    return metadata.dataURIBase64;
  } catch (error) {
    console.error(`Erreur lors de la génération du blurDataURL pour `, error);
    return null;
  }
}
