import React from 'react'
import type { Metadata } from 'next'

import { HomeSections } from '@/components/home/HomeSections'
import { brand, home } from '@/content/content'

export const metadata: Metadata = {
  title: 'Home',
  description: home.hero.title,
}

export default function HomePage() {
  return <HomeSections />
}
