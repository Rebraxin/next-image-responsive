import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ResponsiveImageSource } from '../../images/Image'

export function getImageSource(url: string | StaticImport) {
  switch (true) {
    // images.ctfassets.net
    case /\/\/images\.ctfassets\.net/.test(url as string):
      return 'ContentfulImage'
    case /\.fastly\.net/.test(url as string):
      return 'FastlyImage'
    case /\.cloudinary\.com/.test(url as string):
      return 'CloudinaryImage'
    default:
      return 'NextImage'
  }
}

export function identifySourceType(
  entry: string | StaticImport | ResponsiveImageSource
) {
  if (typeof entry === 'string') {
    return 'String'
  } else if (
    typeof entry === 'object' &&
    entry !== null &&
    'default' in entry &&
    typeof entry.default === 'object' &&
    'src' in entry.default! &&
    'alt' in entry.default
  ) {
    return 'ObjectWithKeys'
  } else {
    console.error('Unknown Type')
  }
}
