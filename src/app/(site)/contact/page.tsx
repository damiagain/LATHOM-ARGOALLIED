'use client'

import React, { Suspense, useId, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Globe,
  Building2,
  ChevronDown,
} from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { contact, contactPageData } from '@/content/content'
import { images } from '@/content/images'

function ContactFormWithQuery() {
  const searchParams = useSearchParams()
  const enquiryParam = searchParams.get('enquiry')
  const preselectedNature = enquiryParam === 'quote' ? 'Food Products' : ''

  return (
    <EnquiryForm
      prefill={preselectedNature ? { nature: preselectedNature, message: '' } : null}
    />
  )
}

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  const toggle = (index: number) => {
    setOpenIndex((curr) => (curr === index ? null : index))
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-faq-btn-${index}`
        const panelId = `${baseId}-faq-panel-${index}`

        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-colors duration-200 ${
              isOpen ? 'border-forest/30 bg-offwhite shadow-xs' : 'border-forest/10 bg-white'
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-lg font-semibold text-ink md:p-6"
              >
                <span>{faq.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/5 text-forest transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-lime text-forest' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 pb-6 pt-1 text-base leading-relaxed text-ink/75 md:px-6 md:pb-6 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ContactPage() {
  const d = contactPageData

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        title={d.hero.title}
        subtitle={d.hero.subtitle}
        image={images.pageHeroDefault}
        alt="Lathom agricultural processing warehouse and logistics"
      />

      {/* ── INTRO & CONTACT SECTION ──────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <p className="max-w-[56ch] text-base font-medium leading-relaxed text-ink/80 md:text-xl">
              {d.intro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Contact details cards */}
            <Reveal className="lg:col-span-5">
              <div className="space-y-6">
                {/* Company card */}
                <div className="rounded-2xl border border-forest/10 bg-offwhite p-6 md:p-7">
                  <div className="flex items-center gap-3 text-forest">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/25 text-forest">
                      <Building2 className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h2 className="font-heading text-xl font-semibold text-ink">
                      {d.company.name}
                    </h2>
                  </div>

                  <div className="mt-5 border-t border-forest/10 pt-5">
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest/70">
                      <MapPin className="h-4 w-4 text-forest" aria-hidden="true" />
                      Locations
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 text-sm font-medium text-ink/80">
                      {d.company.locations.map((loc) => (
                        <li key={loc}>• {loc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Channels */}
                <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-xs md:p-7">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    Direct Enquiries
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <dt className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest/5 text-forest">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Phone:</span>
                      </dt>
                      <dd className="break-all pt-1 font-medium text-ink/85">
                        <a href={contact.phoneLink} className="transition-colors hover:text-forest">
                          {contact.phone}
                        </a>
                      </dd>
                    </div>

                    <div className="flex items-start gap-3">
                      <dt className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest/5 text-forest">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">WhatsApp:</span>
                      </dt>
                      <dd className="break-all pt-1 font-medium text-ink/85">
                        <a
                          href={contact.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-forest"
                        >
                          {contact.phone}
                        </a>
                      </dd>
                    </div>

                    <div className="flex items-start gap-3">
                      <dt className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest/5 text-forest">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Email:</span>
                      </dt>
                      <dd className="break-all pt-1 font-medium text-ink/85">
                        <a href={contact.emailLink} className="transition-colors hover:text-forest">
                          {contact.email}
                        </a>
                      </dd>
                    </div>

                    {contact.website && contact.website.trim() !== '' && (
                      <div className="flex items-start gap-3">
                        <dt className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest/5 text-forest">
                          <Globe className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">Website:</span>
                        </dt>
                        <dd className="break-all pt-1 font-medium text-ink/85">
                          <a
                            href={contact.websiteLink || contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-forest"
                          >
                            {contact.website}
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Enquiry Form */}
            <Reveal delay={0.08} className="lg:col-span-7">
              <Suspense fallback={<EnquiryForm />}>
                <ContactFormWithQuery />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <SectionHeading
              title={d.faqHeading}
              intro="Answers to common questions about our agricultural processing, products, sourcing, and operations."
            />
          </Reveal>

          <div className="mt-10">
            <Reveal delay={0.06}>
              <FaqAccordion faqs={d.faqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
