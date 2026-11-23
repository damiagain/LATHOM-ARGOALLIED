'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClipboardList, ShoppingCart, Handshake, Truck, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { PulseDot } from '@/components/PulseDot'
import { InterestModal } from '@/components/forms/InterestModal'
import { images } from '@/content/images'
import { home, subPages } from '@/content/content'

const STEP_ICONS = { list: ClipboardList, cart: ShoppingCart, link: Handshake, truck: Truck }

export default function MarketplacePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const data = subPages['/marketplace']
  const m = home.marketplace

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        image={images.services.marketplace}
        alt="A farmer handing a crate of fresh produce to a buyer"
      />

      {/* ── COMING SOON ANNOUNCEMENT BANNER ─────────────────────────── */}
      <section className="border-b border-forest/10 bg-offwhite py-6">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 md:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
              <PulseDot />
              Coming Soon
            </span>
            <p className="text-sm font-medium text-ink/80 md:text-base">
              The Lathom Agricultural Marketplace is launching soon.
            </p>
          </div>
          <Button onClick={() => setModalOpen(true)} variant="forest" size="md">
            Register Your Interest
          </Button>
        </div>
      </section>

      {/* ── INTRO / OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              Digital Agriculture
            </span>
            <h2 className="mt-4 font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              Connecting Farmers Directly to Markets
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75 md:text-lg">
              {data.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
              By connecting farmers, processors, retailers and bulk purchasers on a single platform, we are creating transparent pricing, reliable supply chains and reducing post-harvest losses across Nigeria.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/20 text-forest">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">Transparent Pricing</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Fair market rates that empower producers and give buyers honest value.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/20 text-forest">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">Direct Sourcing</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Fewer intermediaries means faster transit and reduced post-harvest spoilage.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm sm:col-span-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/20 text-forest">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">Built for All Scale Operators</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Whether you are an individual farmer, a cooperative, a retail supermarket or an institutional bulk buyer.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS STEPS ───────────────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading
              title="How the Marketplace Works"
              intro="A structured four-step model designed to make agricultural commerce efficient and reliable."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {m.steps.map((s, i) => {
              const Icon = STEP_ICONS[s.icon]
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="relative flex flex-col gap-4 rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-bold text-forest">
                      0{i + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/65">
                      {i === 0 && 'Verified farmers list available volumes, varieties, and harvest schedules.'}
                      {i === 1 && 'Wholesalers, retailers, and processors browse and submit purchase orders.'}
                      {i === 2 && 'Direct commercial arrangements without unnecessary speculative middlemen.'}
                      {i === 3 && 'Streamlined logistics coordination from farm gate to delivery destination.'}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMING SOON BAND (Register Interest) ────────────────────── */}
      <section className="bg-forest py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-4 py-1.5 text-sm font-semibold text-lime">
              <PulseDot />
              Coming Soon!
            </span>
            <h2 className="mt-6 font-heading text-[clamp(2rem,1.5rem+2.5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
              Be Among the First to Trade
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-base leading-relaxed text-white/80 md:text-lg">
              We are onboarding agricultural producers, cooperatives, suppliers and institutional buyers ahead of our official marketplace launch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button onClick={() => setModalOpen(true)} variant="lime" icon>
                Register Your Interest
              </Button>
              <Button href="/contact" variant="outlineLight">
                Contact Our Team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <InterestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
