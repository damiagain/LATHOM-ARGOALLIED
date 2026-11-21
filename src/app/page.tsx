import React from 'react'
import type { Metadata } from 'next'

import { Navbar } from '@/components/Navbar'
import { LandingHero } from '@/components/landing/LandingHero'
import { images, imageAlt } from '@/content/images'
import { brand, landing } from '@/content/content'

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description: landing.tagline,
}

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-b from-forest via-forest-deep to-ink supports-[height:100svh]:min-h-[100svh]">
      <img
        src={images.landingHero}
        alt={imageAlt.landingHero}
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-forest-deep/80 via-forest/60 to-forest-deep/90"
        aria-hidden="true"
      />

      <Navbar active="/" />

      <LandingHero />
    </div>
  )
}
