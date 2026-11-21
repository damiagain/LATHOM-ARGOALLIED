import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingActions } from '@/components/FloatingActions'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen overflow-x-clip bg-offwhite font-sans text-ink">
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
