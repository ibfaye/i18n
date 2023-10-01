'use client'

import { useScopedI18n } from '@/locales/client'
import React from 'react'

const Home = () => {
  const t = useScopedI18n('main')
  return (
    <main className="relative h-screen">
      <article className="grid lg:grid-cols-2 ">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold pb-4">{t('title')}</h1>
          <p className="mt-2 text-lg">{t('desc')}</p>
        </div>
      </article>
    </main>
  )
}

export default Home
