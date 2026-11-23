import React from 'react'
import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Photo } from '@/components/Photo'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/Button'
import { locationsPageData } from '@/content/content'
import { images } from '@/content/images'

export const metadata: Metadata = {
  title: locationsPageData.hero.title,
  description: locationsPageData.hero.subtitle,
}

export default function LocationsPage() {
  const d = locationsPageData

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={d.hero.title}
        subtitle={d.hero.subtitle}
        image={images.pageHeroDefault}
        alt="Lathom agricultural facilities and operations"
        ctas={[d.hero.cta]}
      />

      {/* ── LOCATIONS SECTION ────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <p className="max-w-[56ch] text-base font-medium leading-relaxed text-ink/80 md:text-xl">
              {d.intro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {d.locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.08}>
                <article className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="overflow-hidden bg-forest/10">
                    <Photo
                      src={loc.image}
                      alt={loc.alt}
                      fallbackSrc={images.pageHeroDefault}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 text-forest">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime/20 text-forest">
                        <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h2 className="font-heading text-xl font-semibold text-ink md:text-2xl">
                        {loc.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-ink/75">
                      {loc.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-12 rounded-2xl border border-forest/10 bg-offwhite p-6 md:p-8">
              <p className="text-base leading-relaxed text-ink/75 md:text-lg">
                {d.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSING CTA BAND ─────────────────────────────────────────── */}
      <section className="bg-forest py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight">
              {d.ctaBand.title}
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href={d.ctaBand.cta.route} variant="lime" icon>
                {d.ctaBand.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
