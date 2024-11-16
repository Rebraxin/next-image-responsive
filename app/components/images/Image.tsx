import React from 'react'
import { ImageProps } from 'next/image'
import { ContentfulImage } from './ContentfulImage'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'

// { objectPosition: 'center', objectFit: 'cover' }

export type ResponsiveImageSource = {
  type: string
  default: {
    src: string
    alt: string
    ratio?: string
  }
  desktop?: {
    src: string
    alt: string
  }
}

export type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string | StaticImport | ResponsiveImageSource
  imageItem?: boolean
  imageList?: boolean
}

export function Image({ src, ...props }: CustomImageProps) {
  // Helper to check if a URL is from Contentful
  const isContentfulUrl = (url: string) => url.includes('images.ctfassets.net')

  // Case 1: src is a string
  if (typeof src === 'string') {
    if (isContentfulUrl(src)) {
      return <ContentfulImage {...props} src={src} imageItem />
    }
    return <NextImage {...props} src={src} />
  }

  // Case 2: src is an object
  if (typeof src === 'object' && (src as ResponsiveImageSource).default?.src) {
    if (isContentfulUrl((src as ResponsiveImageSource).default.src)) {
      return <ContentfulImage {...props} src={src} imageList />
    }

    const defaultSource = (src as ResponsiveImageSource).default
    return (
      <NextImage {...props} src={defaultSource.src} alt={defaultSource.alt} />
    )
  }
}
