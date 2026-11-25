'use client'

import React, { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function LandingBackground() {
  const reduceMotion = useReducedMotion()
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion and data saver mode
    const nav = typeof navigator !== 'undefined' ? (navigator as any) : null
    const isSaveData = nav?.connection?.saveData === true
    if (!reduceMotion && !isSaveData) {
      setShouldPlayVideo(true)
    }
  }, [reduceMotion])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/*
        TODO: Place video file at public/videos/lathom-hero.mp4 once ready.
        Falls back to public/images/landing-poster.jpg + forest-green gradient overlay if missing or unsupported.
      */}
      {shouldPlayVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/landing-poster.jpg"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[5px]"
        >
          <source src="/videos/lathom-hero.mp4" type="video/mp4" />
          <img
            src="/images/landing-poster.jpg"
            alt=""
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-[5px]"
          />
        </video>
      ) : (
        <img
          src="/images/landing-poster.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[5px]"
        />
      )}

      {/* Dark forest-green gradient overlay (about 55-60%) */}
      <div
        className="absolute inset-0 bg-linear-to-b from-forest-deep/60 via-forest/55 to-forest-deep/60"
        aria-hidden="true"
      />
    </div>
  )
}
