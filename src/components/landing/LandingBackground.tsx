import React from 'react'
import { images, imageAlt } from '@/content/images'

export function LandingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={images.landingHero}
        alt={imageAlt.landingHero}
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark forest-green gradient overlay (about 55-60%) */}
      <div
        className="absolute inset-0 bg-linear-to-b from-forest-deep/60 via-forest/55 to-forest-deep/60"
        aria-hidden="true"
      />
    </div>
  )
}
