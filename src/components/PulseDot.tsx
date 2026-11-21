import React from 'react'

/** A small lime dot with a soft ring that pulses outward — the "coming soon" signal. */
export function PulseDot({ className = '' }: { className?: string }) {
  return (
    <span className={`relative flex h-2.5 w-2.5 shrink-0 ${className}`} aria-hidden="true">
      <span className="animate-soft-pulse absolute inset-0 rounded-full bg-lime" />
      <span className="relative h-2.5 w-2.5 rounded-full bg-lime" />
    </span>
  )
}
