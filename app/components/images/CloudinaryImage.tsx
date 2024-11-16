/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { getImageProps } from 'next/image'
import React from 'react'
import { cloudinaryLoader } from '../loaders/cloudinaryLoader'
import ReactDOM from 'react-dom'

export function CloudinaryImage({ priority }: any) {
  const {
    props: { ...rest },
  } = getImageProps({
    loader: cloudinaryLoader,
    alt: 'Test Cloud Mobile',
    src: 'docs/model.jpg',
    layout: 'fill',
    sizes: '(max-width: 768px) 100vw, 600px',
    style: { objectPosition: 'center', objectFit: 'cover' },
    priority: true,
  })
  console.log('🔥🔥🔥 >>> ~ CloudinaryImage ~ rest: >>>', rest)

  const {
    props: { srcSet: desk },
  } = getImageProps({
    loader: cloudinaryLoader,
    alt: 'Test Cloud Desktop',
    src: 'https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,g_auto,h_450,w_600,q_75/v1632752254/eatery/item-8.jpg',
    layout: 'fill',
    sizes: '(max-width: 768px) 100vw, 600px',
    style: { objectPosition: 'center', objectFit: 'cover' },
    priority: true,
  })
  console.log('🔥🔥🔥 >>> ~ CloudinaryImage ~ desk: >>>', desk)

  ReactDOM.preload(
    'https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,g_auto,h_450,w_600,q_75/v1632752254/eatery/item-8.jpg',
    {
      as: 'image',
      imageSrcSet: desk,
      imageSizes: '(min-width: 350px) 100vw, 600px',
    }
  )

  return (
    <>
      <picture>
        <source media="(min-width: 1280px)" srcSet={desk} />
        <img {...rest} />
      </picture>

      {/* <NextImage
        loader={cloudinaryLoader}
        src="docs/model.jpg"
        alt="Model"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        style={{ objectPosition: 'center', objectFit: 'cover' }}
        priority={priority}
      /> */}
    </>
  )
}
