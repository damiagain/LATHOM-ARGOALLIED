import React from 'react'
import type { Metadata } from 'next'

import { Navbar } from '@/components/Navbar'
import { LandingHero } from '@/components/landing/LandingHero'
import { LandingBackground } from '@/components/landing/LandingBackground'
import { brand, landing } from '@/content/content'

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description: landing.tagline,
}

export default function LandingPage() {
  return (
    <div className="relative flex h-screen min-h-screen flex-col overflow-hidden bg-forest-deep supports-[height:100svh]:h-[100svh] supports-[height:100svh]:min-h-[100svh]">
      <LandingBackground />

      <Navbar active="/" hideQuote />

      <LandingHero />
    </div>
  )
}
