import React from 'react'
import Link from 'next/link'
import { brand, landing } from '@/content/content'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="font-heading text-4xl font-semibold text-forest md:text-5xl">
        {brand.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/80">{landing.tagline}</p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/home"
          className="rounded-full bg-lime px-6 py-3 font-semibold text-forest shadow hover:bg-leaf"
        >
          Enter Site
        </Link>
      </div>
    </main>
  )
}
