import React, { useEffect, useState } from 'react'
import { ClipboardList, ShoppingCart, Handshake, Truck } from 'lucide-react'

import { Button } from '../../shared/components/Button'
import { Reveal } from '../../shared/components/Reveal'
import { home } from '../../shared/content'

import { InterestModal } from './InterestModal'

const STEP_ICONS = { list: ClipboardList, cart: ShoppingCart, link: Handshake, truck: Truck }

export function MarketplaceTeaser({ modal = 'closed' }: { modal?: string }) {
  const m = home.marketplace
  const [open, setOpen] = useState(modal !== 'closed')
  useEffect(() => setOpen(modal !== 'closed'), [modal])

  return (
    <section id="marketplace" className="scroll-mt-20 pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-[28px] bg-forest px-6 py-10 text-white md:px-12 md:py-14 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-20">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                {m.badge}
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.875rem,1.3rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-tight">
                {m.title}
              </h2>
              <p className="mt-4 text-lg text-white/80 md:text-xl">{m.subtitle}</p>
              <div className="mt-8 flex flex-col sm:flex-row lg:mt-10">
                <Button onClick={() => setOpen(true)} variant="lime" icon>
                  {m.cta}
                </Button>
              </div>
            </div>

            <ol className="relative lg:col-span-6 lg:self-center">
              {m.steps.map((s, i) => {
                const Icon = STEP_ICONS[s.icon]
                const last = i === m.steps.length - 1
                return (
                  <li key={s.title} className="relative flex gap-4 pb-7 last:pb-0 md:gap-5">
                    {!last && (
                      <span className="absolute left-6 top-12 h-[calc(100%-48px)] w-px bg-white/20" aria-hidden="true" />
                    )}
                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-lime">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="flex min-h-12 flex-col justify-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Step {i + 1}</span>
                      <span className="mt-0.5 font-heading text-lg font-medium leading-snug md:text-xl">{s.title}</span>
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>
        </Reveal>
      </div>

      <InterestModal
        open={open}
        onClose={() => setOpen(false)}
        initialSuccess={modal === 'success'}
      />
    </section>
  )
}

