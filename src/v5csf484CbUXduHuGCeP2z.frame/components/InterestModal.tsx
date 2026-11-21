import React, { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { Modal } from '../../shared/components/Modal'
import { Button } from '../../shared/components/Button'
import { Field, inputClass } from '../../shared/components/Field'
import { home } from '../../shared/content'

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
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>(initialSuccess ? 'success' : 'idle')

  useEffect(() => {
    if (open) setStatus(initialSuccess ? 'success' : 'idle')
  }, [open, initialSuccess])

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (values.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.'
    if (!values.role) next.role = 'Please choose one.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('sending')
    setTimeout(() => setStatus('success'), 900)
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
          <p className="-mt-1 text-base leading-relaxed text-ink/70">{t.body}</p>
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
            {errors.role && <p className="mt-1.5 text-sm text-[#B42318]">{errors.role}</p>}
          </fieldset>
          <Button type="submit" variant="lime" disabled={status === 'sending'} className="sm:w-full">
            {status === 'sending' ? 'Registering\u2026' : t.submit}
          </Button>
        </form>
      )}
    </Modal>
  )
}
