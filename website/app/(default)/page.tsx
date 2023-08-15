export const metadata = {
  title: 'Home - Aiabit',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <TestimonialsCarousel />
      <Features04 />
      <Testimonials />
      <Cta />
    </>
  )
}
