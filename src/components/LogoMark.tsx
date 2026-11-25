import Image from 'next/image'

// Put the real pixel size of each file here
const FULL = { src: '/images/lathom-logo.png', w: 1000, h: 684 }
const MARK = { src: '/images/lathom-mark.png', w: 600, h: 600 }

export function LogoMark({
  size = 40,
  tone = 'dark',
  variant = 'full',
}: {
  size?: number
  tone?: 'dark' | 'light'
  variant?: 'full' | 'mark'
  withWordmark?: boolean
}) {
  const img = variant === 'mark' ? MARK : FULL
  const logo = (
    <Image
      src={img.src}
      alt="Lathom Agro-Allied logo"
      width={img.w}
      height={img.h}
      priority
      style={{ height: size, width: 'auto' }}
    />
  )

  // On dark green backgrounds (footer, mobile menu) the dark logo needs a light plate
  if (tone === 'light') {
    return <span className="inline-flex rounded-2xl bg-white p-2.5">{logo}</span>
  }
  return logo
}