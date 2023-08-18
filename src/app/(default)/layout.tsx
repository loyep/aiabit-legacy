'use client'

import { useEffect } from 'react'

import Header from '~/client/components/ui/header'
import Footer from '~/client/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
