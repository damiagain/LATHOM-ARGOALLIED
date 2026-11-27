'use client'

import React, { useState } from 'react'

/**
 * An <img> that never leaves a broken icon: on error it tries `fallbackSrc`,
 * then hides itself so the green gradient on its container shows through.
 */
export function Photo({
  src,
  alt,
  className = '',
  fallbackSrc,
  loading,
  sizes,
  priority,
}: {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
  priority?: boolean
}) {
  const [current, setCurrent] = useState(src)
  const [failed, setFailed] = useState(false)

  if (failed) return <span role="img" aria-label={alt} className={className} />

  return (
    <img
      src={current}
      alt={alt}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : undefined}
      sizes={sizes}
      className={className}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc)
        else setFailed(true)
      }}
    />
  )
}
