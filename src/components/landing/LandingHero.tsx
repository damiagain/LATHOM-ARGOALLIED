'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { landing } from '@/content/content'

export function LandingHero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, delay, ease: [0.23, 1, 0.32, 1] as const },
        }

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-5 pb-12 pt-28 text-center md:px-8 lg:pt-32">
      {/* ── PLAIN WHITE HEADLINE ─────────────────────────────────────── */}
      <motion.h1
        {...fadeUp(0)}
        className="font-heading font-semibold uppercase leading-[1.02] text-white [word-spacing:0.3em]"
      >
        <span className="block text-[clamp(2.75rem,11vw,5.5rem)] tracking-[0.1em] lg:inline lg:text-[clamp(2.5rem,4.2vw,4rem)] lg:tracking-[0.08em]">
          {landing.headingTop}
          <span className="hidden lg:inline"> </span>
        </span>
        <span className="mt-2 block text-[clamp(1.2rem,4.8vw,2rem)] tracking-[0.14em] text-white/95 lg:mt-0 lg:inline lg:text-[clamp(2.5rem,4.2vw,4rem)] lg:tracking-[0.08em] lg:text-white">
          {landing.headingBottom}
        </span>
      </motion.h1>

      {/* ── SLOGAN ───────────────────────────────────────────────────── */}
      <motion.p
        {...fadeUp(0.06)}
        className="mt-5 max-w-[34ch] text-[length:var(--text-lede)] leading-relaxed text-white/85 sm:max-w-none lg:mt-6"
      >
        {landing.tagline}
      </motion.p>

      {/* ── SINGLE CTA: EXPLORE LATHOM ───────────────────────────────── */}
      <motion.div {...fadeUp(0.12)} className="mt-8 flex justify-center lg:mt-10">
        <Link
          href="/home"
          className="group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-lime px-8 text-base font-bold text-forest shadow-[0_12px_32px_-6px_rgba(198,216,58,0.65)] transition-[background-color,transform,box-shadow] duration-200 ease-[var(--ease-out-strong)] hover:bg-leaf hover:shadow-[0_16px_36px_-6px_rgba(169,200,47,0.7)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:h-16 sm:px-10 sm:text-lg"
        >
          <span>Explore Lathom</span>
          <ArrowRight
            className="h-5 w-5 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-1 animate-arrow-nudge sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </main>
  )
}
