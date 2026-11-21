import React from 'react'

/**
 * The L monogram: a forest-green rounded square with a bold white L
 * and a small lime leaf. `tone="light"` adds a hairline ring for dark backgrounds.
 */
export function LogoMark({
  size = 40,
  withWordmark = false,
  tone = 'dark',
}: {
  size?: number
  withWordmark?: boolean
  tone?: 'dark' | 'light'
}) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`relative grid shrink-0 place-items-center rounded-[28%] bg-forest ${
          tone === 'light' ? 'ring-1 ring-white/20' : ''
        }`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold leading-none text-white"
          style={{ fontSize: size * 0.58, transform: `translate(-${size * 0.06}px, ${size * 0.02}px)` }}
        >
          L
        </span>
        <svg
          viewBox="0 0 24 24"
          className="absolute"
          style={{ width: size * 0.36, height: size * 0.36, right: size * 0.12, top: size * 0.14 }}
        >
          <path
            d="M4 20C4 11 9.5 4.5 20 4c.4 9.5-5.5 15.5-14.2 15.6"
            fill="#C6D83A"
          />
          <path d="M5 19.5c3.5-4.5 6.8-7.6 11-10.5" stroke="#154A3F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      {withWordmark && (
        <span
          className={`whitespace-nowrap font-heading text-[17px] font-bold tracking-tight ${
            tone === 'dark' ? 'text-forest' : 'text-white'
          }`}
        >
          Lathom Agro-Allied
        </span>
      )}
    </span>
  )
}
