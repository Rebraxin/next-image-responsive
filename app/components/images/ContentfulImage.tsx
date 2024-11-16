/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import NextImage, { getImageProps } from 'next/image'
import React from 'react'
import ReactDOM from 'react-dom'
import { contentfulLoader } from '../loaders/contentfulLoader'
import { CustomImageProps, ResponsiveImageSource } from './Image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export function ContentfulImage({
  alt,
  src,
  width,
  height,
  sizes,
  style,
  fill,
  priority,
  imageItem,
  imageList,
}: CustomImageProps) {
  if (imageItem) {
    return (
      <NextImage
        alt={alt}
        loader={contentfulLoader}
        src={src as string | StaticImport}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        style={style}
        priority={priority}
      />
    )
  }

  if (imageList) {
    // Desktop image props
    const {
      props: { ...desktopImageProps },
    } = getImageProps({
      loader: contentfulLoader,
      alt: (src as ResponsiveImageSource).desktop!.alt,
      src: (src as ResponsiveImageSource).desktop!.src,
      width: 1920, // To replace
      height: 640, // To replace
      sizes: '(min-width: 1024px) 100vw', // To replace
      style,
      priority,
    })
    console.log('🔥🔥🔥 >>> ~ desktopImageProps: >>>', desktopImageProps)
    console.log('🔥🔥🔥 >>> ~ desktopImageProps: >>>', typeof desktopImageProps)

    // Generate mobile srcset
    const {
      props: { srcSet: mobileSrcSet },
    } = getImageProps({
      loader: contentfulLoader,
      alt: (src as ResponsiveImageSource).default.alt,
      src: (src as ResponsiveImageSource).default.src,
      width: 768, // To replace
      height: 1024, // To replace
      sizes: '(max-width: 1023px) 100vw', // To replace
      style,
      priority,
    })

    // Generate desktop srcset
    const {
      props: { srcSet: desktopSrcSet },
    } = getImageProps({
      loader: contentfulLoader,
      alt: (src as ResponsiveImageSource).desktop!.alt,
      src: (src as ResponsiveImageSource).desktop!.src,
      width: 1920, // To replace
      height: 640, // To replace
      sizes: '(min-width: 1024px) 100vw', // To replace
      style,
      priority,
    })

    // Generate preloads
    if (priority) {
      ReactDOM.preload((src as ResponsiveImageSource).desktop!.src, {
        as: 'image',
        imageSrcSet: desktopSrcSet,
        imageSizes: '(min-width: 1024px) 100vw',
      })

      ReactDOM.preload((src as ResponsiveImageSource).default.src, {
        as: 'image',
        imageSrcSet: mobileSrcSet,
        imageSizes: '(max-width: 1023px) 100vw',
      })
    }

    return (
      <picture>
        <source
          media="(max-width: 1023px)"
          srcSet={mobileSrcSet}
          sizes="100vw"
        />
        <source
          media="(min-width: 1024px)"
          srcSet={desktopSrcSet}
          sizes="100vw"
        />
        <img
          src={desktopImageProps.src}
          alt={desktopImageProps.alt}
          style={{
            ...desktopImageProps.style,
            width: '100%',
            height: 'auto',
          }}
        />
      </picture>
    )
  }
}
