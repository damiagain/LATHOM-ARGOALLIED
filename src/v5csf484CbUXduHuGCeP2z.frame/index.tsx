import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Navbar } from '../shared/components/Navbar'
import { Footer } from '../shared/components/Footer'
import { FloatingActions } from '../shared/components/FloatingActions'
import { Button } from '../shared/components/Button'
import { Reveal } from '../shared/components/Reveal'
import { EnquiryForm, type EnquiryState } from '../shared/components/EnquiryForm'
import { images, imageAlt } from '../shared/images'
import { home, type Route } from '../shared/content'

import { PurposeCards } from '../shared/components/PurposeCards'
import { WhatWeDo } from './components/WhatWeDo'
import { FeaturedProducts } from './components/FeaturedProducts'
import { MarketplaceTeaser } from './components/MarketplaceTeaser'
import { WhyLathom } from './components/WhyLathom'

type Props = Partial<typeof args> & { onNavigate?: (route: Route) => void }

export default function Home(props: Props) {
  const { section, revealedCard, interestModal, enquiryState, menuOpen, onNavigate } = { ...args, ...props }
  const [prefill, setPrefill] = useState<{ nature: string; message: string } | null>(null)

  useEffect(() => {
    if (section === 'top') return
    const el = document.getElementById(section)
    el?.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior })
  }, [section])

  const go = (route: Route) => (e?: React.MouseEvent) => {
    e?.preventDefault()
    onNavigate?.(route)
  }

  const enquireAbout = (product: string) => {
    setPrefill({ nature: 'Food Products', message: `I would like to enquire about ${product}.` })
    document.getElementById('enquiry')?.scrollIntoView({ block: 'start' })
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-offwhite font-sans text-ink">
      <Navbar active="/home" onNavigate={onNavigate} defaultMenuOpen={menuOpen} />

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[90svh] items-end overflow-hidden bg-linear-to-b from-forest to-forest-deep"
      >
        <img
          src={images.heroHome}
          alt={imageAlt.heroHome}
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/75 to-forest-deep/35 lg:bg-linear-to-r lg:from-forest-deep/95 lg:via-forest-deep/70 lg:to-forest-deep/20"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-14 pt-32 md:px-8 md:pb-20 lg:pb-24">
          <Reveal>
            <h1 className="max-w-[16ch] font-heading text-[clamp(2.25rem,1.3rem+3.8vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-white">
              {home.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-white/80 md:text-lg">{home.hero.body}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
              <Button href={home.hero.primary.route} onClick={go(home.hero.primary.route)} variant="lime" icon>
                {home.hero.primary.label}
              </Button>
              <Button href={home.hero.secondary.route} onClick={go(home.hero.secondary.route)} variant="outlineLight">
                {home.hero.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              {home.intro.label}
            </span>
            <p className="mt-6 font-heading text-[clamp(1.375rem,1.1rem+1vw,2rem)] font-medium leading-snug text-ink">
              {home.intro.body}
            </p>
            <a
              href={home.intro.link.route}
              onClick={go(home.intro.link.route)}
              className="group mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-forest underline decoration-lime decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-ink"
            >
              {home.intro.link.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl bg-forest/10">
              <img
                src={images.introHome}
                alt={imageAlt.introHome}
                className="aspect-[4/3] w-full object-cover object-[50%_30%] lg:aspect-[5/6]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <PurposeCards revealed={revealedCard} />
      <WhatWeDo onNavigate={onNavigate} />
      <FeaturedProducts onEnquire={enquireAbout} />
      <MarketplaceTeaser modal={interestModal} />
      <WhyLathom />

      {/* Partnership and enquiry */}
      <section id="enquiry" className="scroll-mt-20 py-16 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              {home.partner.title}
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-ink/75 md:text-lg">{home.partner.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Who we partner with">
              {home.partner.audiences.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-forest/15 bg-white px-3.5 py-2 text-sm font-medium text-forest"
                >
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row">
              <Button href={home.partner.cta.route} onClick={go(home.partner.cta.route)} variant="forest" icon>
                {home.partner.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EnquiryForm key={prefill?.message ?? enquiryState} initialState={enquiryState as EnquiryState} prefill={prefill} />
          </Reveal>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <FloatingActions />
    </div>
  )
}

export const args = {
  section: 'top',
  revealedCard: 'none',
  interestModal: 'closed',
  enquiryState: 'idle',
  menuOpen: false,
}

export const argTypes = {
  section: {
    control: 'select',
    options: ['top', 'intro', 'purpose', 'services', 'products', 'marketplace', 'why', 'enquiry', 'footer'],
  },
  revealedCard: { control: 'radio', options: ['none', 'vision', 'mission'] },
  interestModal: { control: 'radio', options: ['closed', 'open', 'success'] },
  enquiryState: { control: 'select', options: ['idle', 'error', 'sending', 'success'] },
  menuOpen: { control: 'boolean' },
}
