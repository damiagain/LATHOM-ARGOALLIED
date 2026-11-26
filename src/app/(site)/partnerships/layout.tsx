import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnerships & Supply',
  description: 'Partner with Lathom Agro Allied across agriculture, processing, and distribution.',
}

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
