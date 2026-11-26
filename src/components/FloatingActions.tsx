'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'

import { contact } from '@/content/content'

/** WhatsApp chat button (always) and back-to-top (after scrolling), bottom right. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.18 }}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 bg-white text-forest shadow-[0_8px_24px_-8px_rgba(14,26,23,0.35)] transition-colors duration-200 hover:bg-offwhite"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 items-center gap-2 rounded-full bg-forest pl-4 pr-4 text-white shadow-[0_12px_32px_-10px_rgba(14,26,23,0.55)] ring-1 ring-white/10 transition-[background-color,transform] duration-200 ease-[var(--ease-out-strong)] hover:bg-forest-deep active:scale-[0.96] md:pr-5"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-forest">
          <MessageCircle className="h-4 w-4" aria-hidden="true" fill="currentColor" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
      </a>
    </div>
  )
}
