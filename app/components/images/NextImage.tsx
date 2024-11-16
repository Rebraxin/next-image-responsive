// "use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Image from "next/image";

export async function NextImage({ src }: any) {
  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/ugwutotheeshoes/image/upload";

  const imageSrc = `${cloudinaryBaseUrl}/q_75/${src}`;

  async function getBase64ImageUrl(
    imageId: string
  ): Promise<string | undefined> {
    const response = await fetch(
      `${cloudinaryBaseUrl}/w_320/e_blur:1000,q_auto,f_webp/${imageId}`
    );

    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString("base64");
    return `data:image/webp;base64,${data}`;
  }

  const blurDataUrl = await getBase64ImageUrl(src);

  const WIDTH = 320;

  return (
    <div>
      <div
        style={{
          width: WIDTH,
          height: WIDTH / 1.778,
          position: "relative",
        }}
      >
        <Image
          src={imageSrc}
          alt="Description of the image"
          objectFit="cover"
          sizes="320px"
          priority
          fill
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageSrc}
          alt="Example"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="60vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <h1 className="">Next Image</h1>
    </div>
  );
}

// https://images.ctfassets.net/7iktyqnb7v9e/5oRKNxUbd27hlR09QXE0Tz/65a381fca21977fcbb079de4f5175f2e/fw24_holiday_ecom_hp_primarypush_desktop.jpg?w=1920&q=100&fm=webp
