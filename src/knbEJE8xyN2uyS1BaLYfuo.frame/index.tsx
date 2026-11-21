import React, { useEffect } from 'react'
import { Wheat, Lightbulb, BadgeCheck, Leaf, HandHeart } from 'lucide-react'

import { Navbar } from '../shared/components/Navbar'
import { PageHero } from '../shared/components/PageHero'
import { PurposeCards } from '../shared/components/PurposeCards'
import { SectionHeading } from '../shared/components/SectionHeading'
import { Button } from '../shared/components/Button'
import { Photo } from '../shared/components/Photo'
import { Reveal } from '../shared/components/Reveal'
import { Footer } from '../shared/components/Footer'
import { FloatingActions } from '../shared/components/FloatingActions'
import { images, imageAlt } from '../shared/images'
import { about, type Route } from '../shared/content'

type Props = Partial<typeof args> & { onNavigate?: (route: Route) => void }

export default function About(props: Props) {
  const { section, revealedCard, menuOpen, onNavigate } = { ...args, ...props }

  useEffect(() => {
    if (section === 'top') return
    document.getElementById(section)?.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior })
  }, [section])

  const go = (route: Route) => (e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate?.(route)
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-offwhite font-sans text-ink">
      <Navbar active="/about" onNavigate={onNavigate} defaultMenuOpen={menuOpen} />

      <PageHero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={images.about.hero}
        alt={imageAlt.aboutHero}
        ctas={about.hero.ctas}
        onNavigate={onNavigate}
      />

      {/* 1. Who we are */}
      <section id="who" className="scroll-mt-20 py-16 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              {about.who.label}
            </span>
            <h2 className="mt-5 max-w-[18ch] font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              {about.who.title}
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
              {about.who.paragraphs.map((p, i) => (
                <p key={i} className={i === 3 ? 'font-heading text-xl font-medium text-forest md:text-[22px]' : ''}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-9 max-w-[62ch] rounded-2xl border-2 border-lime bg-white px-6 py-5 font-heading text-lg font-medium leading-snug text-forest md:px-7 md:text-xl">
              {about.who.callout}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-linear-to-br from-forest to-forest-deep lg:sticky lg:top-28">
              <Photo
                src={images.about.who}
                alt={imageAlt.aboutWho}
                fallbackSrc={images.introHome}
                className="block aspect-[4/3] w-full object-cover object-[50%_35%] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Vision and mission */}
      <PurposeCards revealed={revealedCard} />

      {/* 3. Core values */}
      <section id="values" className="scroll-mt-20 bg-white py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading title={about.values.title} />
          </Reveal>
          <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {about.values.items.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon]
              const last = i === about.values.items.length - 1
              return (
                <li
                  key={v.title}
                  className={`${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${last ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                  <Reveal delay={Math.min(i, 3) * 0.05} className="h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-forest/10 bg-offwhite p-6 md:p-8">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-lime">
                          <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <span className="font-heading text-sm font-semibold text-forest/60">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-6 font-heading text-xl font-semibold leading-snug text-ink md:text-[22px]">{v.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-ink/70">{v.body}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section
        id="philosophy"
        className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-forest to-forest-deep"
      >
        <Photo
          src={images.about.philosophy}
          alt={imageAlt.aboutPhilosophy}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[960px] px-5 py-20 text-center md:px-8 md:py-28 lg:py-36">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-lime">
              <span className="h-px w-8 bg-lime" aria-hidden="true" />
              {about.philosophy.label}
              <span className="h-px w-8 bg-lime" aria-hidden="true" />
            </p>
            <blockquote className="mt-7">
              <p className="font-heading text-[clamp(1.875rem,1.2rem+3vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
                {about.philosophy.lead}
              </p>
              {about.philosophy.lines.map((l) => (
                <p key={l} className="mx-auto mt-6 max-w-[54ch] text-lg leading-relaxed text-white/85 md:text-xl">
                  {l}
                </p>
              ))}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 5. Call to action */}
      <section id="cta" className="scroll-mt-20 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-[28px] border border-forest/10 bg-white px-6 py-10 shadow-[0_24px_56px_-36px_rgba(13,48,41,0.45)] md:px-12 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-16">
              <h2 className="max-w-[20ch] font-heading text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                {about.cta.title}
              </h2>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href={about.cta.primary.route} onClick={go(about.cta.primary.route)} variant="lime" icon>
                  {about.cta.primary.label}
                </Button>
                <Button href={about.cta.secondary.route} onClick={go(about.cta.secondary.route)} variant="outlineDark">
                  {about.cta.secondary.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <FloatingActions />
    </div>
  )
}

const VALUE_ICONS = { security: Wheat, innovation: Lightbulb, quality: BadgeCheck, sustain: Leaf, empower: HandHeart }

export const args = {
  section: 'top',
  revealedCard: 'none',
  menuOpen: false,
}

export const argTypes = {
  section: { control: 'select', options: ['top', 'who', 'purpose', 'values', 'philosophy', 'cta', 'footer'] },
  revealedCard: { control: 'radio', options: ['none', 'vision', 'mission'] },
  menuOpen: { control: 'boolean' },
}
