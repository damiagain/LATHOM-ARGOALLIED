import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

import { LogoMark } from './LogoMark'
import { PulseDot } from './PulseDot'
import { ServiceIcon } from './ServiceIcon'
import { nav, services, type Route } from '../content'

const EASE = [0.23, 1, 0.32, 1] as const

type NavbarProps = {
  active: Route
  onNavigate?: (route: Route) => void
  /** Opens the mobile menu on first render — for reviewing it in the prototype. */
  defaultMenuOpen?: boolean
  /** Expands Our Services in the mobile menu on first render. */
  defaultServicesOpen?: boolean
}

export function Navbar({ active, onNavigate, defaultMenuOpen = false, defaultServicesOpen = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(defaultMenuOpen)

  useEffect(() => setMenuOpen(defaultMenuOpen), [defaultMenuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (route: Route) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    onNavigate?.(route)
  }

  return (
    <>
      {/* Desktop: floating glass pill */}
      <header className="pointer-events-none fixed inset-x-0 top-5 z-40 hidden justify-center lg:flex">
        <nav
          aria-label="Main"
          className={`pointer-events-auto flex h-16 w-[calc(100%-48px)] min-w-[960px] max-w-[1200px] items-center justify-between gap-8 rounded-full border pl-3 pr-3 backdrop-blur-xl xl:pl-4 transition-[background-color,box-shadow,border-color] duration-300 ease-[var(--ease-out-strong)] ${
            scrolled
              ? 'border-white/70 bg-white/95 shadow-[0_12px_32px_-12px_rgba(14,26,23,0.35)]'
              : 'border-white/60 bg-white/90 shadow-[0_8px_24px_-12px_rgba(14,26,23,0.25)]'
          }`}
        >
          <a href="/" onClick={go('/')} aria-label="Lathom Agroallied — home" className="shrink-0 rounded-xl">
            <LogoMark size={44} />
          </a>

          <ul className="flex min-w-0 flex-1 items-center justify-center gap-6 px-2 xl:gap-8">
            {nav.links.map((link) =>
              link.hasMenu ? (
                <li key={link.route}>
                  <ServicesDropdown active={active.startsWith('/services')} label={link.label} go={go} />
                </li>
              ) : (
                <li key={link.route}>
                  <DesktopLink
                    label={link.label}
                    badge={link.badge}
                    active={active === link.route}
                    href={link.route}
                    onClick={go(link.route)}
                  />
                </li>
              ),
            )}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={nav.quote.route}
              onClick={go(nav.quote.route)}
              className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-lime px-5 text-sm font-semibold text-forest transition-[background-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:bg-leaf active:scale-[0.97]"
            >
              {nav.quote.label}
            </a>
            <a
              href={nav.marketplacePill.route}
              onClick={go(nav.marketplacePill.route)}
              className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-full border border-forest/25 px-4 text-sm font-medium text-forest transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:border-forest/40 hover:bg-forest/5 active:scale-[0.97] min-[1280px]:inline-flex"
            >
              <PulseDot />
              {nav.marketplacePill.label}
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile + tablet: floating bar */}
      <header className="fixed inset-x-0 top-3 z-40 mx-4 md:top-4 md:mx-6 lg:hidden">
        <div
          className={`flex h-14 items-center justify-between rounded-full border pl-2 pr-1.5 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
            scrolled
              ? 'border-white/70 bg-white/95 shadow-[0_12px_32px_-12px_rgba(14,26,23,0.35)]'
              : 'border-white/60 bg-white/90 shadow-[0_8px_24px_-12px_rgba(14,26,23,0.25)]'
          }`}
        >
          <a
            href="/"
            onClick={go('/')}
            aria-label="Lathom Agroallied — home"
            className="grid h-11 min-w-11 place-items-center rounded-xl px-0.5"
          >
            <LogoMark size={40} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white transition-transform duration-150 ease-[var(--ease-out-strong)] active:scale-[0.94]"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        go={go}
        defaultServicesOpen={defaultServicesOpen}
      />
    </>
  )
}

function DesktopLink({
  label,
  badge,
  active,
  href,
  onClick,
}: {
  label: string
  badge?: string
  active: boolean
  href: string
  onClick: (e: React.MouseEvent) => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`relative flex h-10 items-center gap-1.5 whitespace-nowrap rounded-md text-[14px] text-forest transition-colors duration-200 hover:text-ink xl:text-[15px] ${
        active ? 'font-semibold' : 'font-medium'
      }`}
    >
      {label}
      {badge && <SoonBadge>{badge}</SoonBadge>}
      {active && <ActiveDot />}
    </a>
  )
}

function ServicesDropdown({
  active,
  label,
  go,
}: {
  active: boolean
  label: string
  go: (route: Route) => (e: React.MouseEvent) => void
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const closeTimer = useRef<number | undefined>(undefined)
  const panelId = useId()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const openNow = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120)
  }

  const onButtonKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      requestAnimationFrame(() => itemRefs.current[0]?.focus())
    }
  }

  const onItemKey = (i: number) => (e: React.KeyboardEvent) => {
    const n = services.length
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      itemRefs.current[(i + 1) % n]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      itemRefs.current[(i - 1 + n) % n]?.focus()
    } else if (e.key === 'Tab' && !e.shiftKey && i === n - 1) {
      setOpen(false)
    }
  }

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onButtonKey}
        className={`relative flex h-10 items-center gap-1 whitespace-nowrap rounded-md text-[14px] text-forest transition-colors duration-200 hover:text-ink xl:text-[15px] ${
          active ? 'font-semibold' : 'font-medium'
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-strong)] ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {active && <ActiveDot />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: EASE }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
          >
            <ul className="w-[340px] rounded-2xl border border-forest/10 bg-white p-2 shadow-[0_24px_48px_-16px_rgba(14,26,23,0.35)]">
              {services.map((s, i) => (
                <li key={s.route}>
                  <a
                    ref={(el) => {
                      itemRefs.current[i] = el
                    }}
                    href={s.route}
                    onClick={(e) => {
                      setOpen(false)
                      go(s.route)(e)
                    }}
                    onKeyDown={onItemKey(i)}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-offwhite focus-visible:bg-offwhite"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest/[0.07] text-forest transition-colors duration-150 group-hover:bg-lime">
                      <ServiceIcon name={s.icon} />
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({
  defaultServicesOpen,
  open,
  onClose,
  active,
  go,
}: {
  open: boolean
  onClose: () => void
  active: Route
  go: (route: Route) => (e: React.MouseEvent) => void
  defaultServicesOpen: boolean
}) {
  const [servicesOpen, setServicesOpen] = useState(defaultServicesOpen)
  useEffect(() => setServicesOpen(defaultServicesOpen), [defaultServicesOpen])
  const closeRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCloseRef.current()
    document.addEventListener('keydown', onKey)
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.26, delay: 0.06 + i * 0.04, ease: EASE },
        }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-forest-deep text-white lg:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between px-5 pt-3 md:px-8 md:pt-4">
            <LogoMark size={42} withWordmark tone="light" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition-[background-color,transform] duration-150 hover:bg-white/15 active:scale-[0.94]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Main" className="mx-auto w-full max-w-xl flex-1 px-5 pt-8 md:px-8">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {nav.links.map((link, i) => (
                <motion.li key={link.route} {...item(i)}>
                  {link.hasMenu ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-services"
                        onClick={() => setServicesOpen((o) => !o)}
                        className="flex min-h-16 w-full items-center justify-between py-3 text-left font-heading text-[28px] font-medium"
                      >
                        <span className="flex items-center gap-3">
                          {link.label}
                          {active === link.route && <ActiveDot inline />}
                        </span>
                        <ChevronDown
                          className={`h-6 w-6 text-white/60 transition-transform duration-200 ease-[var(--ease-out-strong)] ${servicesOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.div
                            id="mobile-services"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4">
                              {services.map((s) => (
                                <a
                                  key={s.route}
                                  href={s.route}
                                  onClick={go(s.route)}
                                  className="flex min-h-12 items-center gap-3 rounded-xl px-2 text-base text-white/85 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                                >
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-lime">
                                    <ServiceIcon name={s.icon} />
                                  </span>
                                  {s.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.route}
                      onClick={go(link.route)}
                      aria-current={active === link.route ? 'page' : undefined}
                      className="flex min-h-16 items-center gap-3 py-3 font-heading text-[28px] font-medium"
                    >
                      {link.label}
                      {link.badge && <SoonBadge>{link.badge}</SoonBadge>}
                      {active === link.route && <ActiveDot inline />}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            {...item(nav.links.length)}
            className="mx-auto flex w-full max-w-xl shrink-0 flex-col gap-3 px-5 pb-8 pt-10 md:px-8"
          >
            <a
              href={nav.quote.route}
              onClick={go(nav.quote.route)}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-lime font-semibold text-forest transition-[background-color,transform] duration-200 hover:bg-leaf active:scale-[0.97]"
            >
              {nav.quote.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={nav.marketplacePill.route}
              onClick={go(nav.marketplacePill.route)}
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full border border-white/25 font-medium text-white transition-[background-color,transform] duration-200 hover:bg-white/5 active:scale-[0.97]"
            >
              <PulseDot />
              {nav.marketplacePill.label}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SoonBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-lime px-2 py-0.5 font-sans text-[11px] font-semibold uppercase leading-4 tracking-wide text-forest">
      {children}
    </span>
  )
}

function ActiveDot({ inline = false }: { inline?: boolean }) {
  return inline ? (
    <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
  ) : (
    <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-leaf" aria-hidden="true" />
  )
}
