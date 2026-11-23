import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Button } from './Button'
import { Photo } from './Photo'
import { images, imageAlt } from '@/content/images'
import type { Route } from '@/content/content'

type Cta = { label: string; route?: Route; onClick?: () => void }

/**
 * Hero for every sub page: photo with a forest-green overlay, breadcrumb,
 * title, one-line subtitle and up to two CTAs (first lime, second outlined).
 */
export function PageHero({
  title,
  subtitle,
  badge,
  image = images.pageHeroDefault,
  alt = imageAlt.pageHeroDefault,
  ctas = [],
}: {
  title: string
  subtitle?: string
  badge?: string
  image?: string
  alt?: string
  ctas?: Cta[]
}) {
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
              <Link href="/home" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-white/50" />
            </li>
            <li className="font-medium text-lime" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {badge && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
              {badge}
            </span>
          </div>
        )}

        <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2.25rem,1.4rem+3.4vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>
        )}

        {ctas.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctas[0] && (
              <Button href={ctas[0].route} onClick={ctas[0].onClick} variant="lime" icon>
                {ctas[0].label}
              </Button>
            )}
            {ctas[1] && (
              <Button href={ctas[1].route} onClick={ctas[1].onClick} variant="outlineLight">
                {ctas[1].label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
