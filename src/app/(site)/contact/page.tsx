
import { PageHero } from '@/components/PageHero'
import { EnquiryForm } from '@/components/EnquiryForm'
import { subPages } from '@/content/content'
import { images, imageAlt } from '@/content/images'

const data = subPages['/contact']

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
}

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        image={images.pageHeroDefault}
        alt={imageAlt.pageHeroDefault}
        ctas={[
          { label: 'Back to Home', route: '/home' },
          { label: 'Explore Our Services', route: '/services' },
        ]}
      />
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {data.intro}
            </p>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
