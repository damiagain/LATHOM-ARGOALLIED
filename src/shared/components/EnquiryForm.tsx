import React, { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from './Button'
import { Field, inputClass } from './Field'
import { enquiry } from '../content'

export type EnquiryState = 'idle' | 'error' | 'sending' | 'success'

type Values = { name: string; company: string; email: string; phone: string; nature: string; message: string }
type Errors = Partial<Record<keyof Values, string>>

const EMPTY: Values = { name: '', company: '', email: '', phone: '', nature: '', message: '' }

/** The enquiry form card. Validates on the client and fakes a send. */
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
  const [errors, setErrors] = useState<Errors>(() => (initialState === 'error' ? validate(EMPTY) : {}))
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>(
    initialState === 'sending' ? 'sending' : initialState === 'success' ? 'success' : 'idle',
  )

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('sending')
    setTimeout(() => setStatus('success'), 1200)
  }

  const describedBy = (k: keyof Values) => (errors[k] ? `enq-${k}-error` : undefined)

  return (
    <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-[0_24px_56px_-32px_rgba(13,48,41,0.45)] md:p-9">
      {status === 'success' ? (
        <div className="flex min-h-[420px] flex-col items-start justify-center gap-4" role="status">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-lime text-forest">
            <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3 className="font-heading text-2xl font-semibold text-ink">{enquiry.successTitle}</h3>
          <p className="max-w-[44ch] text-base leading-relaxed text-ink/70">{enquiry.successBody}</p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY)
              setStatus('idle')
            }}
            className="mt-2 min-h-11 text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <h3 className="font-heading text-2xl font-semibold text-ink">{enquiry.title}</h3>
          <p className="mt-1.5 text-base text-ink/70">{enquiry.body}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" id="enq-name" error={errors.name}>
              <input id="enq-name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={describedBy('name')} className={inputClass(!!errors.name)} />
            </Field>
            <Field label="Company / Organisation" id="enq-company" optional>
              <input id="enq-company" autoComplete="organization" value={values.company} onChange={set('company')} className={inputClass(false)} />
            </Field>
            <Field label="Email Address" id="enq-email" error={errors.email}>
              <input id="enq-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={describedBy('email')} className={inputClass(!!errors.email)} />
            </Field>
            <Field label="Phone Number" id="enq-phone" error={errors.phone}>
              <input id="enq-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} className={inputClass(!!errors.phone)} />
            </Field>
            <Field label="Nature of Enquiry" id="enq-nature" error={errors.nature} className="sm:col-span-2">
              <select id="enq-nature" value={values.nature} onChange={set('nature')} aria-invalid={!!errors.nature} aria-describedby={describedBy('nature')} className={`${inputClass(!!errors.nature)} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 fill=%22none%22 stroke=%22%23154A3F%22 stroke-width=%222%22><path d=%22M5 8l5 5 5-5%22/></svg>')] bg-[length:20px] bg-[right_14px_center] bg-no-repeat pr-11 ${values.nature ? '' : 'text-ink/45'}`}>
                <option value="" disabled>
                  Select one
                </option>
                {enquiry.natures.map((n) => (
                  <option key={n} value={n} className="text-ink">
                    {n}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message" id="enq-message" error={errors.message} className="sm:col-span-2">
              <textarea id="enq-message" rows={5} value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={describedBy('message')} className={`${inputClass(!!errors.message)} resize-y`} />
            </Field>
          </div>

          <div className="mt-7">
            <Button type="submit" variant="lime" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
                  {enquiry.sending}
                </>
              ) : (
                enquiry.submit
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please enter your full name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.'
  if (!v.nature) e.nature = 'Please choose the nature of your enquiry.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}
