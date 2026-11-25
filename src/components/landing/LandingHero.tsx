'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { images } from '@/content/images'
import { landing } from '@/content/content'

const TITLE_WORDS = [
  { text: 'LATHOM', image: images.titleCattle, alt: 'Livestock and cattle' },
  { text: 'AGROALLIED', image: images.titleCassava, alt: 'Lush green cassava crop field' },
  { text: 'LIMITED', image: images.titleMaize, alt: 'Golden maize and corn' },
] as const

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
    <main className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center justify-center px-4 pb-8 pt-24 text-center sm:px-6 md:pt-28 lg:pt-24">
      {/* ── IMAGE-FILLED HEADLINE ─────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0)}
        className="w-full [filter:drop-shadow(0_4px_16px_rgba(0,0,0,0.55))_drop-shadow(0_12px_28px_rgba(13,48,41,0.75))]"
      >
        <h1 className="font-heading font-black uppercase tracking-[0.05em] sm:tracking-[0.07em]">
          <span className="flex flex-col items-center justify-center text-[clamp(2.5rem,11.5vw,4.5rem)] leading-[0.98] sm:text-[clamp(3.5rem,8.5vw,5.5rem)] lg:flex-row lg:gap-5 lg:text-[clamp(2.75rem,5.4vw,4.75rem)] xl:text-[5.25rem]">
            {TITLE_WORDS.map((w, idx) => (
              <span key={w.text} className="flex items-center">
                <span
                  className="relative inline-block bg-cover bg-center bg-clip-text text-white supports-[-webkit-background-clip:text]:text-transparent animate-bg-drift select-none"
                  style={{
                    backgroundImage: `url(${w.image}), linear-gradient(135deg, #c6d83a 0%, #ffffff 100%)`,
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.35)',
                  }}
                >
                  {w.text}
                </span>
                {idx < TITLE_WORDS.length - 1 && (
                  <span className="hidden lg:inline" aria-hidden="true">
                    &nbsp;
                  </span>
                )}
              </span>
            ))}
          </span>
        </h1>
      </motion.div>

      {/* ── TAGLINE ─────────────────────────────────────────────────── */}
      <motion.p
        {...fadeUp(0.06)}
        className="mt-4 max-w-[34ch] text-base font-medium leading-relaxed text-white/90 sm:max-w-none sm:text-lg md:text-xl lg:mt-5"
      >
        {landing.tagline}
      </motion.p>

      {/* ── PRIMARY "CONTINUE TO WEBSITE" BUTTON ─────────────────────── */}
      <motion.div {...fadeUp(0.12)} className="mt-6 flex justify-center lg:mt-7">
        <Link
          href="/home"
          className="group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-lime px-8 text-base font-bold text-forest shadow-[0_12px_32px_-6px_rgba(198,216,58,0.65)] transition-[background-color,transform,box-shadow] duration-200 ease-[var(--ease-out-strong)] hover:bg-leaf hover:shadow-[0_16px_36px_-6px_rgba(169,200,47,0.7)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:h-16 sm:px-10 sm:text-lg"
        >
          <span>Continue to Website</span>
          <ArrowRight
            className="h-5 w-5 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-1 animate-arrow-nudge sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </Link>
      </motion.div>

      {/* ── SECONDARY BUTTONS (GLASS / OUTLINED) ────────────────────── */}
      <motion.div
        {...fadeUp(0.18)}
        className="mt-4 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-5"
      >
        <Link
          href="/contact?enquiry=quote"
          className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md shadow-xs transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:border-white/50 hover:bg-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime sm:h-13 sm:px-7 sm:text-base"
        >
          {landing.quoteCta}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>

        <Link
          href="/marketplace"
          className="group inline-flex h-12 items-center justify-between gap-4 rounded-full border border-white/25 bg-white/10 pl-5 pr-2 text-white backdrop-blur-md shadow-xs transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:border-white/40 hover:bg-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime sm:h-13 sm:min-w-[340px]"
        >
          <span className="truncate text-sm font-medium sm:text-base">{landing.marketplaceBanner}</span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-white/25 sm:h-9 sm:w-9">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      </motion.div>
    </main>
  )
}
