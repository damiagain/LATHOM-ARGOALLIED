import React from 'react'
import type { Metadata } from 'next'

import { ServicePage } from '@/components/services/ServicePage'
import { servicePages } from '@/content/content'

const data = servicePages.find((s) => s.slug === 'cassava-processing')!

export const metadata: Metadata = {
  title: data.title,
  description: data.tagline,
}

export default function CassavaProcessingPage() {
  return <ServicePage data={data} />
}
