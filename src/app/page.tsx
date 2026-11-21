'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import { PulseDot } from '@/components/PulseDot'
import { images, imageAlt } from '@/content/images'
import { landing } from '@/content/content'

export default function LandingPage() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] as const },
        }

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

      <main className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-5 pb-12 pt-28 text-center md:px-8 lg:pt-32">
        <motion.h1
          {...fadeUp(0)}
          className="font-heading font-semibold uppercase leading-[1.02] text-white [word-spacing:0.3em]"
        >
          <span className="block text-[clamp(3rem,13vw,6rem)] tracking-[0.12em] lg:inline lg:text-[clamp(2.5rem,4.2vw,4rem)] lg:tracking-[0.08em]">
            {landing.headingTop}
            <span className="hidden lg:inline"> </span>
          </span>
          <span className="mt-2 block text-[clamp(1.2rem,5.2vw,2rem)] tracking-[0.14em] text-white/95 lg:mt-0 lg:inline lg:text-[clamp(2.5rem,4.2vw,4rem)] lg:tracking-[0.08em] lg:text-white">
            {landing.headingBottom}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.06)}
          className="mt-5 max-w-[34ch] text-[length:var(--text-lede)] leading-relaxed text-white/75 md:max-w-none lg:mt-6"
        >
          {landing.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.12)}
          className="mt-10 flex w-full max-w-md flex-col gap-3 lg:mt-12 lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime px-8 font-semibold text-forest shadow-[0_8px_24px_-8px_rgba(198,216,58,0.5)] transition-[background-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:bg-leaf active:scale-[0.97]"
          >
            {landing.quoteCta}
            <ArrowRight className="h-5 w-5 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <Link
            href="/marketplace"
            className="group inline-flex h-14 items-center justify-between gap-4 rounded-full border border-white/25 bg-white/10 pl-5 pr-2 text-white backdrop-blur-md transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:border-white/40 hover:bg-white/15 active:scale-[0.98] lg:min-w-[400px]"
          >
            <span className="flex min-w-0 items-center gap-3">
              <PulseDot />
              <span className="truncate text-[15px] font-medium sm:text-base">{landing.marketplaceBanner}</span>
            </span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-white/20">
              <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}
