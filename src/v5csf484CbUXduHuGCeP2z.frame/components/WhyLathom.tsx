import React from 'react'
import { Layers, Snowflake, Users, Network, Compass } from 'lucide-react'

import { Reveal } from '../../shared/components/Reveal'
import { home } from '../../shared/content'

const ICONS = { value: Layers, preserve: Snowflake, farmer: Users, diverse: Network, vision: Compass }

export function WhyLathom() {
  const { title, items } = home.why
  return (
    <section id="why" className="scroll-mt-20 bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <h2 className="font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink lg:sticky lg:top-32">
            {title}
          </h2>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
          {items.map((it, i) => {
            const Icon = ICONS[it.icon]
            const wide = i === items.length - 1
            return (
              <li key={it.title} className={wide ? 'sm:col-span-2' : ''}>
                <Reveal delay={Math.min(i, 3) * 0.05} className="h-full">
                  <div
                    className={`flex h-full gap-5 rounded-2xl border border-forest/10 bg-offwhite p-6 md:p-7 ${
                      wide ? 'flex-col sm:flex-row sm:items-start' : 'flex-col'
                    }`}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-lime">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold leading-snug text-ink md:text-xl">{it.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-ink/70">{it.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
