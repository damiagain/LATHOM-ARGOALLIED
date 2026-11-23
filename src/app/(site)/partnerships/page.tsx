'use client'

import React, { useCallback } from 'react'
import {
  Wheat,
  Bird,
  Truck,
  Boxes,
  Store,
  Factory,
  TrendingUp,
  Users,
  LucideIcon,
} from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { partnershipsPageData } from '@/content/content'
import { images } from '@/content/images'

const PARTNER_ICONS: Record<string, LucideIcon> = {
  Wheat,
  Bird,
  Truck,
  Boxes,
  Store,
  Factory,
  TrendingUp,
  Users,
}

export default function PartnershipsPage() {
  const d = partnershipsPageData

  const scrollToEnquiry = useCallback(() => {
    const el = document.getElementById('enquiry')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={d.hero.title}
        subtitle={d.hero.subtitle}
        image={images.about.who}
        alt="A farmer collaborating with processing center workers"
        ctas={[
          {
            label: d.hero.cta.label,
            onClick: scrollToEnquiry,
          },
        ]}
      />

      {/* ── INTRO & FOCUS AREAS ──────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <p className="max-w-[56ch] text-base font-medium leading-relaxed text-ink/80 md:text-xl">
              {d.intro}
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <SectionHeading
              title={d.heading}
              intro="We collaborate across the agribusiness value chain to foster long-term mutual commercial success."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.partners.map((partner, i) => {
              const Icon = PARTNER_ICONS[partner.icon] ?? Users
              return (
                <Reveal key={partner.title} delay={i * 0.05}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime/20 text-forest">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="text-base font-semibold leading-snug text-ink">{partner.title}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-12 rounded-2xl border-l-4 border-lime bg-offwhite p-6 md:p-8">
              <p className="text-base leading-relaxed text-ink/80 md:text-lg">
                {d.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────────────────── */}
      <section id="enquiry" className="scroll-mt-24 bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:grid lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="mb-10 lg:mb-0">
              <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                Start a Conversation
              </span>
              <h2 className="mt-4 font-heading text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-ink">
                Become a Partner
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
                Send us details regarding your organisation and partnership objectives. Our leadership team will review and respond promptly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EnquiryForm prefill={{ nature: 'Partnership', message: '' }} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
