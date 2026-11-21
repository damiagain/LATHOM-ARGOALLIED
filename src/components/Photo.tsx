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
}: {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  loading?: 'lazy' | 'eager'
}) {
  const [current, setCurrent] = useState(src)
  const [failed, setFailed] = useState(false)

  if (failed) return <span role="img" aria-label={alt} className={className} />

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc)
        else setFailed(true)
      }}
    />
  )
}
