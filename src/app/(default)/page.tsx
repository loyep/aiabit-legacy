export const metadata = {
  title: 'Home - Stellar',
  description: 'Page description',
}

import Hero from '~/client/components/hero'
import Clients from '~/client/components/clients'
import Features from '~/client/components/features'
import Features02 from '~/client/components/features-02'
import Features03 from '~/client/components/features-03'
import TestimonialsCarousel from '~/client/components/testimonials-carousel'
import Features04 from '~/client/components/features-04'
// import Pricing from '~/client/components/pricing'
import Testimonials from '~/client/components/testimonials'
import Cta from '~/client/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Clients /> */}
      {/* <Features /> */}
      <Features02 />
      {/* <Features03 /> */}
      <TestimonialsCarousel />
      {/* <Features04 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
    </>
  )
}
