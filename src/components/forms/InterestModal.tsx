'use client'

import React, { useEffect, useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'
import { Field, inputClass } from '@/components/Field'
import { home, contact } from '@/content/content'

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'role', string>>

export function InterestModal({
  open,
  onClose,
  initialSuccess = false,
}: {
  open: boolean
  onClose: () => void
  initialSuccess?: boolean
}) {
  const t = home.marketplace.modal
  const [values, setValues] = useState({ name: '', email: '', phone: '', role: '' })
  const [gotcha, setGotcha] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(initialSuccess ? 'success' : 'idle')

  useEffect(() => {
    if (open) setStatus(initialSuccess ? 'success' : 'idle')
  }, [open, initialSuccess])

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (values.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.'
    if (!values.role) next.role = 'Please choose one.'
    setErrors(next)
    if (Object.keys(next).length) return

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
        email: values.email,
        phone: values.phone,
        role: values.role,
        _subject: 'Marketplace interest',
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

  return (
    <Modal open={open} onClose={onClose} title={status === 'success' ? t.successTitle : t.title}>
      {status === 'success' ? (
        <div className="flex flex-col items-start gap-4">
          <CheckCircle2 className="h-10 w-10 text-forest" strokeWidth={1.75} aria-hidden="true" />
          <p className="text-base leading-relaxed text-ink/75">{t.successBody}</p>
          <Button onClick={onClose} variant="forest" size="md">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-5">
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

          <p className="-mt-1 text-base leading-relaxed text-ink/70">{t.body}</p>

          {status === 'error' && (
            <div className="rounded-xl border border-error/30 bg-error/10 p-4 text-sm text-ink" role="alert">
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

          <Field label="Full Name" id="ri-name" error={errors.name}>
            <input id="ri-name" className={inputClass(!!errors.name)} value={values.name} onChange={set('name')} autoComplete="name" />
          </Field>
          <Field label="Email" id="ri-email" error={errors.email}>
            <input id="ri-email" type="email" className={inputClass(!!errors.email)} value={values.email} onChange={set('email')} autoComplete="email" />
          </Field>
          <Field label="Phone" id="ri-phone" error={errors.phone}>
            <input id="ri-phone" type="tel" className={inputClass(!!errors.phone)} value={values.phone} onChange={set('phone')} autoComplete="tel" />
          </Field>
          <fieldset>
            <legend className="text-sm font-medium text-ink">I am a</legend>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {t.roles.map((r) => (
                <label
                  key={r}
                  className={`flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 text-sm font-medium transition-colors duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-lime ${
                    values.role === r ? 'border-forest bg-forest text-white' : 'border-forest/20 bg-white text-forest hover:border-forest/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="ri-role"
                    value={r}
                    checked={values.role === r}
                    onChange={() => setValues((v) => ({ ...v, role: r }))}
                    className="sr-only"
                  />
                  {r}
                </label>
              ))}
            </div>
            {errors.role && <p className="mt-1.5 text-sm text-error">{errors.role}</p>}
          </fieldset>
          <Button type="submit" variant="lime" disabled={status === 'sending'} className="sm:w-full">
            {status === 'sending' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Registering…
              </>
            ) : (
              t.submit
            )}
          </Button>
        </form>
      )}
    </Modal>
  )
}
