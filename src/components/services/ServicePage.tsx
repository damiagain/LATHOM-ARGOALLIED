'use client'

import React, { useCallback } from 'react'
import {
  Wheat,
  Package,
  PackageCheck,
  Bird,
  Feather,
  Ham,
  ShieldCheck,
  Settings2,
  Box,
  Thermometer,
  Flame,
  Apple,
  Plus,
  Shield,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Photo } from '@/components/Photo'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { images } from '@/content/images'
import { services } from '@/content/content'
import type { ServicePageData } from '@/content/content'
import type { Route } from '@/content/content'

// ── Icon registry ──────────────────────────────────────────────────────────
const ICONS: Record<string, LucideIcon> = {
  Wheat,
  Package,
  PackageCheck,
  Bird,
  Feather,
  Ham,
  ShieldCheck,
  Settings2,
  Box,
  Thermometer,
  Flame,
  Apple,
  Plus,
  Shield,
}

function ServiceIcon({ name, className = '' }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Package
  return <Icon className={className} aria-hidden="true" strokeWidth={1.5} />
}

// ── Scroll helper ──────────────────────────────────────────────────────────
function useScrollTo() {
  return useCallback((id: string) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])
}

// ── Main component ─────────────────────────────────────────────────────────
export function ServicePage({ data }: { data: ServicePageData }) {
  const scrollTo = useScrollTo()

  // "Explore Other Services" – the 3 services that are NOT this one
  const otherServices = services.filter((s) => !s.route.endsWith(data.slug))

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[45svh] items-end overflow-hidden bg-linear-to-b from-forest to-forest-deep lg:min-h-[56svh]">
        <Photo
          src={data.heroImage}
          alt={data.heroImageAlt}
          fallbackSrc={images.pageHeroDefault}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/75 to-forest-deep/45"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:pb-20 lg:pt-36">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
              <li>
                <a href="/home" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li aria-hidden="true">
                <span className="text-white/40 text-xs">›</span>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:text-white">
                  Our Services
                </a>
              </li>
              <li aria-hidden="true">
                <span className="text-white/40 text-xs">›</span>
              </li>
              <li className="font-medium text-lime" aria-current="page">
                {data.title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2.25rem,1.4rem+3.4vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
            {data.title}
          </h1>

          <p className="mt-4 max-w-[52ch] text-base font-medium leading-relaxed text-white/85 md:text-lg">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="lime"
              icon
              onClick={() => scrollTo(data.heroCtaPrimary.scrollTo)}
            >
              {data.heroCtaPrimary.label}
            </Button>
            {data.heroCtaSecondary && (
              <Button
                variant="outlineLight"
                onClick={() => scrollTo(data.heroCtaSecondary!.scrollTo)}
              >
                {data.heroCtaSecondary.label}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-5">
              {data.overviewParagraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink/75 md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl bg-forest/10">
              <Photo
                src={data.overviewImage ?? data.heroImage}
                alt={data.overviewImageAlt ?? data.heroImageAlt}
                fallbackSrc={images.pageHeroDefault}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover object-center md:aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PHOTO CARDS ──────────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading title={data.iconCardsHeading} />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.iconCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05} className="h-full">
                <div
                  style={{ '--card-img-w': 'clamp(84px, 25%, 140px)' } as React.CSSProperties}
                  className="group relative flex h-full min-h-[84px] items-center overflow-hidden rounded-2xl border border-forest/10 bg-white py-5 pl-[calc(var(--card-img-w)+16px)] pr-4 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:pr-5 lg:min-h-[88px]"
                >
                  <div className="absolute inset-y-0 left-0 w-[var(--card-img-w)] overflow-hidden rounded-r-2xl bg-linear-to-br from-forest/15 to-forest/30">
                    <Photo
                      src={card.image}
                      alt={card.alt}
                      fallbackSrc={card.fallbackImage ?? data.overviewImage ?? images.pageHeroDefault}
                      loading="lazy"
                      sizes="(min-width: 1024px) 140px, 25vw"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                        card.imagePosition === 'center 30%' ? 'object-[center_30%]' : 'object-center'
                      }`}
                    />
                  </div>
                  <p className="min-w-0 text-base font-semibold leading-snug text-ink">{card.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIVE CALLOUT ────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <blockquote className="rounded-2xl border-l-4 border-lime bg-lime/8 px-8 py-8 md:py-10">
              <p className="max-w-[64ch] text-lg font-medium leading-relaxed text-ink md:text-xl">
                {data.objectiveCallout}
              </p>
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* ── PROCESS STEPS (Meat page only) ──────────────────────────── */}
      {data.processSteps && data.processSteps.length > 0 && (
        <section className="bg-offwhite py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            {data.processBlockIntro && (
              <Reveal>
                <p className="mb-10 max-w-[60ch] text-base leading-relaxed text-ink/75 md:text-lg">
                  {data.processBlockIntro}
                </p>
              </Reveal>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="relative flex flex-col gap-4 rounded-2xl border border-forest/10 bg-white p-6">
                    <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime text-xs font-bold text-forest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-forest">
                      <ServiceIcon name={step.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/65">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BREED CARDS + PHILOSOPHY (Dog breeding page only) ───────── */}
      {data.breedCards && data.breedCards.length > 0 && (
        <>
          <section id="breeds" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
              <Reveal>
                <SectionHeading title="Our Breeding Programme" />
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.breedCards.map((breed, i) => (
                  <Reveal key={breed.name} delay={i * 0.06}>
                    <article className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm">
                      <div className="overflow-hidden bg-forest/10">
                        <Photo
                          src={breed.image}
                          alt={breed.alt}
                          fallbackSrc={images.services.dogs}
                          loading="lazy"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="aspect-[4/3] w-full object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-lg font-semibold text-ink">{breed.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/65">{breed.body}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Breeding philosophy checklist */}
          {data.breedingPhilosophyChecklist && (
            <section className="bg-offwhite py-16 md:py-20">
              <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
                  <Reveal>
                    <div>
                      <SectionHeading title="Our Breeding Philosophy" />
                      <p className="mt-3 text-base text-ink/70 md:text-lg">We prioritise:</p>
                      <ul className="mt-6 flex flex-col gap-3" aria-label="Breeding priorities">
                        {data.breedingPhilosophyChecklist.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-lime"
                              aria-hidden="true"
                              strokeWidth={2}
                            />
                            <span className="text-base text-ink/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  {data.closingCallout && (
                    <Reveal delay={0.08}>
                      <div className="mt-12 flex flex-col gap-5 lg:mt-0">
                        {data.closingCallout.map((p, i) => (
                          <p key={i} className="text-base leading-relaxed text-ink/75 md:text-lg">
                            {p}
                          </p>
                        ))}
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── ENQUIRY FORM ─────────────────────────────────────────────── */}
      <section id="enquiry" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:grid lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="mb-10 lg:mb-0">
              <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                Get in Touch
              </span>
              <h2 className="mt-5 font-heading text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-ink">
                Interested in this service?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
                Send us an enquiry and the right team will get back to you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <EnquiryForm prefill={{ nature: data.enquiryNature, message: '' }} />
          </Reveal>
        </div>
      </section>

      {/* ── EXPLORE OTHER SERVICES ───────────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Explore Other Services" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((svc, i) => (
              <Reveal key={svc.route} delay={i * 0.06}>
                <a
                  href={svc.route}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  <div className="overflow-hidden bg-forest/10">
                    <Photo
                      src={svc.image}
                      alt={svc.alt}
                      fallbackSrc={images.pageHeroDefault}
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-forest">
                      {svc.label}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-forest">
                      Learn more
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
