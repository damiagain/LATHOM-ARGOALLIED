import React, { useEffect, useId, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

/** Centred dialog on desktop, bottom sheet on phones. Locks scroll, closes on Esc or backdrop. */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement as HTMLElement | null
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCloseRef.current()
    document.addEventListener('keydown', onKey)
    requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>('input, button')?.focus())
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      prevFocus?.focus?.()
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
            className="relative max-h-[92svh] w-full overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-2xl sm:p-8"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-heading text-2xl font-semibold leading-tight text-ink">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="-mr-2 -mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink/70 transition-colors duration-150 hover:bg-forest/5 hover:text-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
