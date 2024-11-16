/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import NextImage, { getImageProps } from 'next/image'
import React from 'react'
import ReactDOM from 'react-dom'
import { fastlyLoader } from '../loaders/fastlyLoader'

export function FastlyImage({ priority }: any) {
  const {
    props: { ...rest },
  } = getImageProps({
    loader: fastlyLoader,
    alt: 'Test Cloud Mobile',
    src: 'docs/model.jpg',
    layout: 'fill',
    sizes: '(max-width: 768px) 100vw, 600px',
    style: { objectPosition: 'center', objectFit: 'cover' },
    priority: true,
  })
  console.log('🔥🔥🔥 >>> ~ FastlyImage ~ rest: >>>', rest)

  const {
    props: { srcSet: desk },
  } = getImageProps({
    loader: fastlyLoader,
    alt: 'Test Cloud Desktop',
    src: 'https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,g_auto,h_450,w_600,q_75/v1632752254/eatery/item-8.jpg',
    layout: 'fill',
    sizes: '(max-width: 768px) 100vw, 600px',
    style: { objectPosition: 'center', objectFit: 'cover' },
    priority: true,
  })
  console.log('🔥🔥🔥 >>> ~ FastlyImage ~ desk: >>>', desk)

  ReactDOM.preload(
    'https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,g_auto,h_450,w_600,q_75/v1632752254/eatery/item-8.jpg',
    {
      as: 'image',
      imageSrcSet: desk,
      imageSizes: '(min-width: 350px) 100vw, 600px',
    }
  )

  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desk} />
      <img {...rest} />
    </picture>

    // <NextImage
    //   loader={fastlyLoader}
    //   src="catalog/product/article_images/L47588800/L47588800_68e01f24ea7bc02131d11e37c53361c6.png"
    //   alt="Model"
    //   fill
    //   sizes="(max-width: 768px) 100vw, 600px"
    //   style={{ objectPosition: "center", objectFit: "cover" }}
    //   priority={priority}
    // />
  )
}
