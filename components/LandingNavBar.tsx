import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import { getScopedI18n } from '@/locales/server'

const LandingNavBar = async () => {
  const t = await getScopedI18n('main')
  return (
    <nav>
      <div className="p-4 flex flex-row items-center justify-between">
        <LocaleSwitcher />
        <div className="space-x-2">
          <Link
            href="/home"
            className="bg-zinc-500/50 border-zinc-500 border px-4 py-2 rounded-md font-semibold">
            {t('home')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavBar
