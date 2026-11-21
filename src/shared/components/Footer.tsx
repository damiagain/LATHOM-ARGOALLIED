import React from 'react'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

import { LogoMark } from './LogoMark'
import { contact, footer, type Route } from '../content'

export function Footer({ onNavigate }: { onNavigate?: (route: Route) => void }) {
  const go = (route: Route) => (e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate?.(route)
  }

  const socials = [
    { label: 'Instagram', href: contact.social.instagram, Icon: Instagram },
    { label: 'Facebook', href: contact.social.facebook, Icon: Facebook },
    { label: 'LinkedIn', href: contact.social.linkedin, Icon: Linkedin },
    { label: 'TikTok', href: contact.social.tiktok, Icon: TikTokIcon },
  ]

  return (
    <footer id="footer" className="bg-forest-deep text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-12 pt-16 md:grid-cols-2 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="md:col-span-2 lg:col-span-5">
          <LogoMark size={48} tone="light" />
          <p className="mt-6 font-heading text-lg font-semibold uppercase tracking-[0.12em] [word-spacing:0.2em]">
            {footer.name}
          </p>
          <p className="mt-2 text-sm font-medium text-lime">{footer.tagline}</p>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/70">{footer.about}</p>
        </div>

        <FooterColumn title="Quick Links" className="lg:col-span-2">
          {footer.quickLinks.map((l) => (
            <FooterLink key={l.label} href={l.route} onClick={go(l.route)}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Our Services" className="lg:col-span-3">
          {footer.services.map((l) => (
            <FooterLink key={l.label} href={l.route} onClick={go(l.route)}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <div className="lg:col-span-2">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">Follow Us</h2>
          <ul className="mt-5 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`${label} (link coming soon)`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-[background-color,color,transform] duration-200 hover:bg-lime hover:text-forest active:scale-[0.94]"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1200px] px-5 py-6 text-sm text-white/60 md:px-8">{footer.copyright}</p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className = '', children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title} className={className}>
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">{title}</h2>
      <ul className="mt-4 flex flex-col">{children}</ul>
    </nav>
  )
}

function FooterLink({ href, onClick, children }: { href: string; onClick: (e: React.MouseEvent) => void; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="inline-flex min-h-10 items-center text-base text-white/85 transition-colors duration-200 hover:text-lime"
      >
        {children}
      </a>
    </li>
  )
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.11V9.75a5.73 5.73 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  )
}
