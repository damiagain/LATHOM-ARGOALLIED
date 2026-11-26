'use client'

import React, { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

import { Button } from './Button'
import { Field, inputClass } from './Field'
import { enquiry, contact } from '@/content/content'

export type EnquiryState = 'idle' | 'error' | 'sending' | 'success'

type Values = { name: string; company: string; email: string; phone: string; nature: string; message: string }
type Errors = Partial<Record<keyof Values, string>>

const EMPTY: Values = { name: '', company: '', email: '', phone: '', nature: '', message: '' }

/** The enquiry form card. Validates on the client and submits to Formspree. */
export function EnquiryForm({
  initialState = 'idle',
  prefill,
}: {
  initialState?: EnquiryState
  prefill?: { nature: string; message: string } | null
}) {
  const [values, setValues] = useState<Values>(() =>
    prefill ? { ...EMPTY, nature: prefill.nature, message: prefill.message } : EMPTY,
  )
  const [gotcha, setGotcha] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<EnquiryState>(initialState)

  React.useEffect(() => {
    if (prefill) {
      setValues((v) => ({
        ...v,
        nature: prefill.nature || v.nature,
        message: prefill.message || v.message,
      }))
    }
  }, [prefill?.nature, prefill?.message])

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((errs) => ({ ...errs, [k]: undefined }))
  }

  const validate = (): boolean => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (values.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.'
    if (!values.nature) next.nature = 'Please select a service or nature of enquiry.'
    if (!values.message.trim()) next.message = 'Please provide details about your enquiry.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    if (!endpoint) {
      console.warn('Formspree endpoint is not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.')
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const payload = {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        'nature of enquiry': values.nature,
        message: values.message,
        _subject: `Website enquiry: ${values.nature}`,
        source: typeof window !== 'undefined' ? window.location.pathname : '',
        _gotcha: gotcha,
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const describedBy = (field: keyof Values) => (errors[field] ? `enq-${field}-error` : undefined)

  return (
    <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-[0_24px_56px_-32px_rgba(13,48,41,0.45)] md:p-9">
      {status === 'success' ? (
        <div className="flex flex-col items-start gap-4 py-6" role="status">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-lime/20 text-forest">
            <CheckCircle2 className="h-7 w-7 text-forest" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3 className="font-heading text-2xl font-semibold text-ink">{enquiry.successTitle}</h3>
          <p className="max-w-[48ch] text-base leading-relaxed text-ink/75">{enquiry.successBody}</p>
          <Button
            type="button"
            onClick={() => {
              setValues(EMPTY)
              setStatus('idle')
            }}
            variant="outlineDark"
            size="md"
            className="mt-2"
          >
            Send another enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate aria-label="Enquiry form">
          {/* Honeypot field for bot protection */}
          <input
            type="text"
            name="_gotcha"
            value={gotcha}
            onChange={(e) => setGotcha(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink md:text-[28px]">
              {enquiry.title}
            </h3>
            <p className="text-base text-ink/70">{enquiry.body}</p>
          </div>

          {status === 'error' && (
            <div className="mt-5 rounded-xl border border-error/30 bg-error/10 p-4 text-sm text-ink" role="alert">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-error" aria-hidden="true" />
                <p>
                  Something went wrong. Please email{' '}
                  <a href={contact.emailLink} className="font-semibold text-forest underline hover:text-ink">
                    {contact.email}
                  </a>{' '}
                  or call{' '}
                  <a href={contact.phoneLink} className="font-semibold text-forest underline hover:text-ink">
                    {contact.phone}
                  </a>.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" id="enq-name" error={errors.name} className="sm:col-span-2">
              <input
                id="enq-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={!!errors.name}
                aria-describedby={describedBy('name')}
                value={values.name}
                onChange={set('name')}
                className={inputClass(!!errors.name)}
              />
            </Field>

            <Field label="Company / Organisation" id="enq-company" optional className="sm:col-span-2">
              <input
                id="enq-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={set('company')}
                className={inputClass(false)}
              />
            </Field>

            <Field label="Email Address" id="enq-email" error={errors.email}>
              <input
                id="enq-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={!!errors.email}
                aria-describedby={describedBy('email')}
                value={values.email}
                onChange={set('email')}
                className={inputClass(!!errors.email)}
              />
            </Field>

            <Field label="Phone Number" id="enq-phone" error={errors.phone}>
              <input
                id="enq-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={!!errors.phone}
                aria-describedby={describedBy('phone')}
                value={values.phone}
                onChange={set('phone')}
                className={inputClass(!!errors.phone)}
              />
            </Field>

            <Field label="Nature of Enquiry" id="enq-nature" error={errors.nature} className="sm:col-span-2">
              <select
                id="enq-nature"
                name="nature"
                required
                aria-invalid={!!errors.nature}
                aria-describedby={describedBy('nature')}
                value={values.nature}
                onChange={set('nature')}
                className={`${inputClass(!!errors.nature)} pr-11 ${values.nature ? '' : 'text-ink/45'}`}
              >
                <option value="">Select an option</option>
                {enquiry.natures.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Your Message" id="enq-message" error={errors.message} className="sm:col-span-2">
              <textarea
                id="enq-message"
                name="message"
                rows={4}
                required
                aria-invalid={!!errors.message}
                aria-describedby={describedBy('message')}
                value={values.message}
                onChange={set('message')}
                placeholder="Share relevant details: products, volumes, location, timeline..."
                className={`${inputClass(!!errors.message)} resize-y`}
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="lime" disabled={status === 'sending'} className="w-full sm:w-auto">
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  {enquiry.sending}
                </>
              ) : (
                enquiry.submit
              )}
            </Button>
            <p className="text-xs text-ink/50">Your details are used only to respond to this enquiry.</p>
          </div>
        </form>
      )}
    </div>
  )
}
