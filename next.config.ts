import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // domains: ['res.cloudinary.com', 'images.ctfassets.net'],
    loader: 'custom',
    loaderFile: '',
  },
}

export default nextConfig
