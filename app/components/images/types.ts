export type ImageProps = {
  src: string
  width: number
  height: number
  quality?: number
  caption?: string
  sources?: Source[]
  lazy?: boolean
  className?: string
  // USE WITH CAUTION: This prop should only be used when the image is the Largest Contentful Paint (LCP)
  priority?: boolean
  imageTagClassname?: string
  fastlySettings?: FastlySettings
  onLoad?: () => void
} & (
  | {
      role?: 'presentation' | 'none'
      alt: string
    }
  | {
      role?: 'img' | 'button' | 'link'
      alt?: string
    }
)

export type Source = {
  src: string
  min?: ScreenKeys
  width?: number
}

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const

export type ScreenKeys = keyof typeof breakpoints

export type FastlySettings = {
  fit?: 'bounds' | 'cover' | 'crop'
  orient?: 'r' | 'l' | 'h' | 'v' | 'hv' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  optimize?: 'low' | 'medium' | 'high'
  'bg-color'?: string
  format?:
    | 'avif'
    | 'bjpg'
    | 'jpg'
    | 'jxl'
    | 'mp4'
    | 'pjpg'
    | 'pjxl'
    | 'png'
    | 'png8'
    | 'webp'
    | 'webpll'
    | 'webply'
  auto?: 'webp' | 'avif'
  dpr?: number
  crop?: string
  trim?: string
  pad?: string
  dpad?: string
  width?: number
}
