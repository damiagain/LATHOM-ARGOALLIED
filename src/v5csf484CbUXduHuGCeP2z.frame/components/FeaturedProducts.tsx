import React from 'react'

import { Reveal } from '../../shared/components/Reveal'
import { SectionHeading } from '../../shared/components/SectionHeading'
import { home } from '../../shared/content'

export function FeaturedProducts({ onEnquire }: { onEnquire?: (product: string) => void }) {
  const { title, intro, items, cta } = home.products
  return (
    <section id="products" className="scroll-mt-20 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <SectionHeading title={title} intro={intro} />
        </Reveal>

        <ul
          className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:gap-6"
          aria-label={title}
        >
          {items.map((p) => (
            <li key={p.name} className="w-[78%] max-w-[300px] shrink-0 snap-start md:w-auto md:max-w-none">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-forest/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-300 ease-[var(--ease-out-strong)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 items-end justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-earth">{p.category}</span>
                    <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-ink">{p.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => onEnquire?.(p.name)}
                    aria-label={`${cta} about ${p.name}`}
                    className="inline-flex h-11 shrink-0 items-center rounded-full border border-forest/25 px-4 text-sm font-semibold text-forest transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-out-strong)] hover:border-forest hover:bg-forest hover:text-white active:scale-[0.97]"
                  >
                    {cta}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-ink/60 md:hidden" aria-hidden="true">
          Swipe to see all {items.length} products
        </p>
      </div>
    </section>
  )
}
