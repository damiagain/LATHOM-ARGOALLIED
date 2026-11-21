'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Eye, Target, Plus, X } from 'lucide-react'

import { Reveal } from './Reveal'
import { home } from '@/content/content'

type Which = 'vision' | 'mission'

export function PurposeCards({ revealed = 'none' }: { revealed?: string }) {
  return (
    <section id="purpose" className="scroll-mt-20 pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 md:grid-cols-2 md:px-8 lg:gap-6">
        <Reveal>
          <PurposeCard which="vision" initiallyOpen={revealed === 'vision'} />
        </Reveal>
        <Reveal delay={0.06}>
          <PurposeCard which="mission" initiallyOpen={revealed === 'mission'} />
        </Reveal>
      </div>
    </section>
  )
}

function PurposeCard({ which, initiallyOpen }: { which: Which; initiallyOpen: boolean }) {
  const [open, setOpen] = useState(initiallyOpen)
  const reduce = useReducedMotion()

  const data = home.purpose[which]
  const dark = which === 'vision'
  const Icon = which === 'vision' ? Eye : Target
  const panelId = `${which}-detail`

  const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
      }

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={() => canHover() && setOpen(true)}
      onMouseLeave={() => canHover() && setOpen(initiallyOpen)}
      className={`group relative flex min-h-[500px] w-full flex-col overflow-hidden rounded-2xl p-7 text-left transition-[box-shadow,transform] duration-300 ease-[var(--ease-out-strong)] md:min-h-[540px] md:p-9 lg:min-h-[440px] lg:p-11 ${
        dark
          ? 'bg-forest text-white shadow-[0_24px_48px_-24px_rgba(13,48,41,0.6)]'
          : 'border border-forest/12 bg-white text-ink shadow-[0_16px_40px_-28px_rgba(13,48,41,0.4)]'
      }`}
    >
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-3">
          <span
            className={`grid h-12 w-12 place-items-center rounded-xl ${
              dark ? 'bg-lime text-forest' : 'bg-forest text-lime'
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span
            className={`font-heading text-lg font-semibold ${dark ? 'text-lime' : 'text-forest'}`}
          >
            {data.label}
          </span>
        </span>
        <span
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-200 ${
            dark ? 'bg-white/10 group-hover:bg-white/15' : 'bg-forest/[0.06] group-hover:bg-forest/10'
          }`}
          aria-hidden="true"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Plus className="h-[18px] w-[18px]" />}
        </span>
      </span>

      <span className="relative mt-8 flex flex-1 flex-col justify-end">
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="detail"
              id={panelId}
              {...slide}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="block"
            >
              <span
                className={`block font-heading text-xl font-medium leading-snug ${dark ? 'text-white' : 'text-ink'}`}
              >
                {data.statement}
              </span>
              <span
                className={`mt-5 block border-l-2 pl-5 text-base leading-relaxed ${
                  dark ? 'border-lime text-white/80' : 'border-forest text-ink/75'
                }`}
              >
                {data.reveal}
              </span>
            </motion.span>
          ) : (
            <motion.span
              key="summary"
              {...slide}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="block"
            >
              <span
                className={`block font-heading text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] font-semibold leading-[1.12] tracking-tight ${
                  dark ? 'text-white' : 'text-ink'
                }`}
              >
                {data.statement}
              </span>
              <span
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide ${
                  dark ? 'text-lime' : 'text-forest'
                }`}
              >
                Reveal our purpose
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  )
}
