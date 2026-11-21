'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { home } from '@/content/content'

export function WhatWeDo() {
  const { title, intro, items } = home.whatWeDo
  return (
    <section id="services" className="scroll-mt-20 bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <SectionHeading title={title} intro={intro} />
        </Reveal>

        <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {items.map((item, i) => (
            <li key={item.title} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <Reveal delay={Math.min(i, 3) * 0.05} className="h-full">
                <Link
                  href={item.route}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-offwhite transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-strong)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(13,48,41,0.45)]"
                >
                  <div className="relative h-56 overflow-hidden bg-forest/10 lg:h-60">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-300 ease-[var(--ease-out-strong)] group-hover:scale-[1.04]"
                    />
                    {'badge' in item && item.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="font-heading text-sm font-semibold text-forest/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-ink md:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/70">{item.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-forest">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
