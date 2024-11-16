import React from 'react'
import HeroBannerMedia from './HeroBannerMedia'
import { Image } from '../images/Image'

const testObjImage = {
  type: 'responsive',
  default: {
    src: '//images.ctfassets.net/7iktyqnb7v9e/oHHpM00d5JEvzaH4oygkZ/82f0386faa8a8a94cc745fd5c32c3183/fw24_holiday_ecom_hp_primarypush_mobile.jpg',
    alt: 'Mobile picture',
  },
  desktop: {
    src: '//images.ctfassets.net/7iktyqnb7v9e/5oRKNxUbd27hlR09QXE0Tz/65a381fca21977fcbb079de4f5175f2e/fw24_holiday_ecom_hp_primarypush_desktop.jpg',
    alt: 'Desktop picture',
  },
}

export function HeroBanner() {
  return (
    <div className="relative w-full grid grid-cols-1 grid-rows-1">
      <HeroBannerMedia src="src">
        <div className="relative w-full">
          <Image
            src={testObjImage}
            alt=""
            width={375}
            height={550}
            priority
            sizes="100vw"
          />
        </div>
      </HeroBannerMedia>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

      <div className="absolute inset-0 flex flex-col justify-center text-left px-24 max-w-[57rem]">
        <div className="pl-24 pr-24">
          {' '}
          {/* Conserve le padding gauche/droite */}
          <p className="text-sm uppercase font-bold">subhead</p>
          <h1 className="text-4xl font-bold mb-4">title</h1>
          <p className="text-lg mb-6">description</p>
        </div>
      </div>
    </div>
  )
}
