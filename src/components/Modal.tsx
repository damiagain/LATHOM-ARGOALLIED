'use client'

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
  const headingId = useId()
  const reduce = useReducedMotion()
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCloseRef.current()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          className="fixed inset-0 z-50 grid place-items-end p-0 sm:place-items-center sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-forest/15 bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-4 pb-4">
              <h2 id={headingId} className="font-heading text-xl font-semibold text-ink md:text-2xl">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink/60 transition-colors hover:bg-forest/5 hover:text-ink"
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
