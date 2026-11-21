import React from 'react'

/** Label + control + error message, wired for screen readers by `id`. */
export function Field({
  label,
  id,
  error,
  optional = false,
  className = '',
  children,
}: {
  label: string
  id: string
  error?: string
  optional?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-ink/55">Optional</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}

export function inputClass(invalid: boolean) {
  return `block min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4 ${
    invalid
      ? 'border-error focus:ring-error/15'
      : 'border-forest/20 hover:border-forest/40 focus:border-forest focus:ring-lime/40'
  }`
}
