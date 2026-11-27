import React from 'react'
import type { Metadata } from 'next'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { Photo } from '@/components/Photo'
import { PageHero } from '@/components/PageHero'
import { servicesOverview } from '@/content/content'
import { images } from '@/content/images'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Adding value across the agricultural value chain.',
}

export default function ServicesPage() {
  const { hero, intro, sections, marketplaceBanner, closingCta } = servicesOverview

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={images.services.cassava}
        alt="Peeled cassava roots being washed in a steel trough"
        ctas={[hero.ctaPrimary, hero.ctaSecondary]}
      />

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading title={intro.heading} intro={intro.body} />
          </Reveal>
        </div>
      </section>

      {/* ── ALTERNATING SERVICE SECTIONS ─────────────────────────────── */}
      <div className="flex flex-col divide-y divide-forest/8">
        {sections.map((section, i) => {
          const isEven = i % 2 === 0
          return (
            <section key={section.title} className="py-16 md:py-24">
              <div
                className={`mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? '' : 'lg:[&>:first-child]:order-2'
                }`}
              >
                {/* Text */}
                <Reveal>
                  <div>
                    <span className="font-heading text-[clamp(3rem,5vw,5rem)] font-bold leading-none text-lime/40 select-none">
                      {section.number}
                    </span>
                    <h2 className="mt-2 font-heading text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-ink">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-base font-medium text-forest md:text-lg">{section.tagline}</p>
                    <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink/70 md:text-lg">
                      {section.description}
                    </p>
                    {/* Chips */}
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${section.title} categories`}>
                      {section.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-forest/15 bg-white px-3.5 py-1.5 text-sm font-medium text-forest"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href={section.route} variant="forest" icon size="md">
                        Learn more
                      </Button>
                    </div>
                  </div>
                </Reveal>

                {/* Image */}
                <Reveal delay={0.08}>
                  <div className="overflow-hidden rounded-2xl bg-forest/10">
                    <Photo
                      src={section.image}
                      alt={section.alt}
                      fallbackSrc={images.pageHeroDefault}
                      loading="lazy"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover object-center md:aspect-[4/3] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── MARKETPLACE BANNER ───────────────────────────────────────── */}
      <section className="bg-forest py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-white">
              {marketplaceBanner.title}
            </h2>
            <p className="mt-3 text-lg text-white/70">{marketplaceBanner.subtitle}</p>
            <div className="mt-8">
              <Button href={marketplaceBanner.route} variant="lime" icon>
                Agricultural Marketplace
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSING CTA BAND ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              {closingCta.headline}
            </h2>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={closingCta.primary.route} variant="lime" icon>
                {closingCta.primary.label}
              </Button>
              <Button href={closingCta.secondary.route} variant="outlineDark">
                {closingCta.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
