import React from 'react'
import type { Metadata } from 'next'

import { ServicePage } from '@/components/services/ServicePage'
import { servicePages } from '@/content/content'

const data = servicePages.find((s) => s.slug === 'meat-livestock-processing')!

export const metadata: Metadata = {
  title: data.title,
  description: data.tagline,
}

export default function MeatLivestockPage() {
  return <ServicePage data={data} />
}
