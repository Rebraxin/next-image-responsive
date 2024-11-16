/* eslint-disable @typescript-eslint/no-explicit-any */

export function cloudinaryLoader({ src, width, quality }: any) {
  const cloudName = "demo";

  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];

  const paramsString = params.join(",");

  const srcPath = src.startsWith("/") ? src.slice(1) : src;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${paramsString}/${srcPath}`;
}
