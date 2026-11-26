import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Phone, Mail } from 'lucide-react'

import { LogoMark } from './LogoMark'
import { contact, footer } from '@/content/content'

export function Footer() {
  const socials = [
    { label: 'Instagram', href: contact.social.instagram, Icon: Instagram },
    { label: 'Facebook', href: contact.social.facebook, Icon: Facebook },
    { label: 'LinkedIn', href: contact.social.linkedin, Icon: Linkedin },
    { label: 'TikTok', href: contact.social.tiktok, Icon: TikTokIcon },
  ].filter((s) => s.href && s.href.trim() !== '' && s.href !== '#')

  return (
    <footer id="footer" className="bg-forest-deep text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pb-12 pt-16 md:grid-cols-2 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="md:col-span-2 lg:col-span-4">
          <LogoMark size={48} tone="light" />
          <p className="mt-6 font-heading text-lg font-semibold uppercase tracking-[0.12em] [word-spacing:0.2em]">
            {footer.name}
          </p>
          <p className="mt-2 text-sm font-medium text-lime">{footer.tagline}</p>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/70">{footer.about}</p>
        </div>

        <FooterColumn title="Quick Links" className="lg:col-span-2">
          {footer.quickLinks.map((l) => (
            <FooterLink key={l.label} href={l.route}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Our Services" className="lg:col-span-3">
          {footer.services.map((l) => (
            <FooterLink key={l.label} href={l.route}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact" className="lg:col-span-3">
          <li>
            <a
              href={contact.phoneLink}
              className="inline-flex items-center gap-2.5 py-1 text-sm text-white/80 transition-colors duration-150 hover:text-lime"
            >
              <Phone className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
              <span>{contact.phone}</span>
            </a>
          </li>
          <li>
            <a
              href={contact.emailLink}
              className="inline-flex items-center gap-2.5 py-1 text-sm text-white/80 transition-colors duration-150 hover:text-lime"
            >
              <Mail className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
              <span className="break-all">{contact.email}</span>
            </a>
          </li>
        </FooterColumn>

        {socials.length > 0 && (
          <div className="md:col-span-2 lg:col-span-12">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">Follow Us</h2>
            <ul className="mt-5 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-[background-color,color,transform] duration-200 hover:bg-lime hover:text-forest active:scale-[0.94]"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-white/55 sm:flex-row md:px-8">
          <p>{footer.copyright}</p>
          <p className="text-white/45">Built for sustainable African agriculture.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block py-1 text-sm text-white/80 transition-colors duration-150 hover:text-lime"
      >
        {children}
      </Link>
    </li>
  )
}

function TikTokIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.47V8.65a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.08z" />
    </svg>
  )
}
