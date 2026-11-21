import React from 'react'

import { Navbar } from '../shared/components/Navbar'
import { PageHero } from '../shared/components/PageHero'
import { Footer } from '../shared/components/Footer'
import { FloatingActions } from '../shared/components/FloatingActions'
import { subPages, type Route } from '../shared/content'

type Props = Partial<typeof args> & { onNavigate?: (route: Route) => void }

/** Placeholder for every sub page until it is designed: shared navbar, PageHero and footer. */
export default function SubPage(props: Props) {
  const { route, onNavigate } = { ...args, ...props }
  const page = subPages[route] ?? subPages['/about']

  return (
    <div className="min-h-screen overflow-x-clip bg-offwhite font-sans text-ink">
      <Navbar active={route as Route} onNavigate={onNavigate} />
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        onNavigate={onNavigate}
        ctas={[
          { label: 'Get a Quote', route: '/contact' },
          { label: 'Back to Home', route: '/home' },
        ]}
      />
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <p className="max-w-[56ch] text-base leading-relaxed text-ink/60 md:text-lg">
          This page is a placeholder. Its content will be designed next.
        </p>
      </section>
      <Footer onNavigate={onNavigate} />
      <FloatingActions />
    </div>
  )
}

export const args = {
  route: '/about',
}

export const argTypes = {
  route: {
    control: 'select',
    options: [
      '/about',
      '/services',
      '/services/cassava-processing',
      '/services/meat-livestock-processing',
      '/services/food-preservation-canning',
      '/services/agricultural-produce-processing',
      '/services/dog-breeding',
      '/marketplace',
      '/locations',
      '/partnerships',
      '/contact',
    ],
  },
}
