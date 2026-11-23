'use client'

import React, { useState } from 'react'
import {
  ClipboardList,
  ShoppingCart,
  Handshake,
  Truck,
  Wheat,
  Users,
  Store,
  Utensils,
  Factory,
  Boxes,
  LucideIcon,
} from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { PulseDot } from '@/components/PulseDot'
import { InterestModal } from '@/components/forms/InterestModal'
import { images } from '@/content/images'
import { marketplacePageData } from '@/content/content'

const STEP_ICONS = { list: ClipboardList, cart: ShoppingCart, link: Handshake, truck: Truck }

const WHO_ICONS: Record<string, LucideIcon> = {
  Wheat,
  Users,
  Store,
  Utensils,
  Factory,
  Truck,
  Boxes,
}

export default function MarketplacePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const d = marketplacePageData

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={d.hero.title}
        badge={d.hero.badge}
        subtitle={d.hero.subtitle}
        image={images.services.marketplace}
        alt="A farmer handing a crate of fresh produce to a buyer"
        ctas={[
          {
            label: d.hero.cta,
            onClick: () => setModalOpen(true),
          },
        ]}
      />

      {/* ── INTRO & SUBHEADING ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              Agricultural Commerce
            </span>
            <h2 className="mt-4 font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              {d.subheading}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {d.introParagraphs.map((paragraph, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-forest/10 bg-offwhite p-6 shadow-xs"
                >
                  <p className="text-base leading-relaxed text-ink/75 md:text-lg">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WILL WORK ─────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading
              title={d.howItWorksHeading}
              intro="A structured four-step process connecting agricultural production directly to wholesale and community demand."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.howItWorksSteps.map((step, i) => {
              const Icon = STEP_ICONS[step.icon as keyof typeof STEP_ICONS] ?? ClipboardList
              return (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-bold text-forest">
                      {step.number}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-forest">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/65">{step.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHO CAN USE THE MARKETPLACE? ─────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading
              title={d.whoCanUseHeading}
              intro="Built for stakeholders across every tier of the food and agricultural ecosystem."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.whoCanUseItems.map((item, i) => {
              const Icon = WHO_ICONS[item.icon] ?? Users
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime/20 text-forest">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="text-base font-semibold leading-snug text-ink">{item.title}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR GOAL (Callout) ───────────────────────────────────────── */}
      <section className="bg-offwhite py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="rounded-2xl border-l-4 border-lime bg-white p-8 shadow-sm md:p-12">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-forest/60">
                {d.goalHeading}
              </span>
              <blockquote className="mt-4">
                <p className="max-w-[64ch] text-lg font-medium leading-relaxed text-ink md:text-2xl">
                  {d.goalCallout}
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLOSING FOREST-GREEN BAND (Coming Soon!) ─────────────────── */}
      <section className="bg-forest py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-4 py-1.5 text-sm font-semibold text-lime">
              <PulseDot />
              {d.closingBand.badge}
            </span>
            <h2 className="mx-auto mt-6 max-w-[28ch] font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight">
              {d.closingBand.title}
            </h2>
            <div className="mt-8 flex justify-center">
              <Button onClick={() => setModalOpen(true)} variant="lime" icon>
                {d.closingBand.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <InterestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
