import React from 'react'
import type { Metadata } from 'next'

import { ServicePage } from '@/components/services/ServicePage'
import { servicePages } from '@/content/content'

const data = servicePages.find((s) => s.slug === 'food-preservation-canning')!

export const metadata: Metadata = {
  title: data.title,
  description: data.tagline,
}

export default function FoodPreservationPage() {
  return <ServicePage data={data} />
}
