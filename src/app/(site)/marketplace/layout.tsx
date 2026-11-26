import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agricultural Marketplace',
  description: 'Digital agricultural marketplace connecting farmers directly with buyers.',
}

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
