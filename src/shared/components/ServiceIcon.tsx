import React from 'react'
import { Sprout, Beef, Package, Wheat, Dog, Store } from 'lucide-react'

import type { ServiceIcon as ServiceIconName } from '../content'

const ICONS = { cassava: Sprout, meat: Beef, canning: Package, produce: Wheat, dog: Dog, market: Store }

export function ServiceIcon({ name, className = 'h-[18px] w-[18px]' }: { name: ServiceIconName; className?: string }) {
  const Icon = ICONS[name]
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />
}
