import React from 'react'
import { ChevronRight } from 'lucide-react'

import { Button } from './Button'
import { Photo } from './Photo'
import { images, imageAlt } from '../images'
import type { Route } from '../content'

type Cta = { label: string; route: Route }

/**
 * Hero for every sub page: photo with a forest-green overlay, breadcrumb,
 * title, one-line subtitle and up to two CTAs (first lime, second outlined).
 */
export function PageHero({
  title,
  subtitle,
  image = images.pageHeroDefault,
  alt = imageAlt.pageHeroDefault,
  ctas = [],
  onNavigate,
}: {
  title: string
  subtitle?: string
  image?: string
  alt?: string
  ctas?: [Cta] | [Cta, Cta] | []
  onNavigate?: (route: Route) => void
}) {
  const go = (route: Route) => (e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate?.(route)
  }

  return (
    <section className="relative flex min-h-[45svh] items-end overflow-hidden bg-linear-to-b from-forest to-forest-deep lg:min-h-[56svh]">
      <Photo
        key={image}
        src={image}
        alt={alt}
        fallbackSrc={images.pageHeroDefault}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/70 to-forest-deep/40"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:pb-20 lg:pt-36">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
            <li>
              <a href="/home" onClick={go('/home')} className="rounded transition-colors duration-200 hover:text-white">
                Home
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-lime" />
            </li>
            <li aria-current="page" className="font-medium text-white">
              {title}
            </li>
          </ol>
        </nav>
        <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-[60ch] text-base text-white/80 md:text-lg">{subtitle}</p>}
        {ctas.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctas.map((c, i) => (
              <Button key={c.label} href={c.route} onClick={go(c.route)} variant={i === 0 ? 'lime' : 'outlineLight'} icon={i === 0}>
                {c.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
