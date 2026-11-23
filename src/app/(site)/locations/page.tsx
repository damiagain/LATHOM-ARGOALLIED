
import { PageHero } from '@/components/PageHero'
import { subPages } from '@/content/content'
import { images, imageAlt } from '@/content/images'

const data = subPages['/locations']

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
}

export default function LocationsPage() {
  return (
    <div>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        image={images.pageHeroDefault}
        alt={imageAlt.pageHeroDefault}
        ctas={[
          { label: 'Get a Quote', route: '/contact' },
          { label: 'Back to Home', route: '/home' },
        ]}
      />
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <p className="max-w-[56ch] text-base leading-relaxed text-ink/70 md:text-lg">
          {data.intro}
        </p>
      </section>
    </div>
  )
}
