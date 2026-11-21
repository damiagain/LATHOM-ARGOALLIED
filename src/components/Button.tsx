import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Variant = 'lime' | 'forest' | 'outlineLight' | 'outlineDark'

const VARIANTS: Record<Variant, string> = {
  lime: 'bg-lime text-forest hover:bg-leaf',
  forest: 'bg-forest text-white hover:bg-forest-deep',
  outlineLight: 'border border-white/50 text-white hover:border-white hover:bg-white/10',
  outlineDark: 'border border-forest/30 text-forest hover:border-forest hover:bg-forest/5',
}

/**
 * The site's pill button. Renders a Next.js Link when `href` is given, otherwise a button.
 * Full width when stacked on small screens; content width from `sm` up.
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'lime',
  icon = false,
  type = 'button',
  disabled = false,
  size = 'lg',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<any>) => void
  variant?: Variant
  icon?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  size?: 'md' | 'lg'
  className?: string
}) {
  const cls = `group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-out-strong)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60 sm:w-auto ${
    size === 'lg' ? 'h-14 px-7 text-base' : 'h-11 px-5 text-sm'
  } ${VARIANTS[variant]} ${className}`

  const inner = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="h-[18px] w-[18px] transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {inner}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  )
}
