import React from 'react'
import type { Metadata } from 'next'

import { PageHero } from '@/components/PageHero'
import { serviceDetails } from '@/content/content'

const data = serviceDetails['meat-livestock-processing']

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
}

export default function MeatLivestockProcessingPage() {
  return (
    <div>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        alt={data.alt}
        ctas={[
          { label: 'Get a Quote', route: '/contact' },
          { label: 'Back to Home', route: '/home' },
        ]}
      />
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <p className="max-w-[56ch] text-base leading-relaxed text-ink/70 md:text-lg">
          Content coming soon.
        </p>
      </section>
    </div>
  )
}
