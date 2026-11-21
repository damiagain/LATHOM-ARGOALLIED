import React from 'react'

/** Section title with an optional intro line, used across pages. */
export function SectionHeading({
  title,
  intro,
  tone = 'dark',
  className = '',
}: {
  title: string
  intro?: string
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={className}>
      <h2
        className={`font-heading text-[clamp(1.875rem,1.4rem+2vw,3rem)] font-semibold leading-[1.08] tracking-tight ${
          tone === 'dark' ? 'text-ink' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 max-w-[56ch] text-base leading-relaxed md:text-lg ${
            tone === 'dark' ? 'text-ink/70' : 'text-white/75'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
