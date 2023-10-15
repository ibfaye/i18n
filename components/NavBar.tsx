'use client'

import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import { useScopedI18n } from '@/locales/client'
import { UserButton } from '@clerk/nextjs'

const NavBar = () => {
  const t = useScopedI18n('main')
  return (
    <nav>
      <div className="p-4 flex flex-row items-center justify-between">
        <LocaleSwitcher />
        <div className="flex items-center space-x-2">
          <Link
            href="/home"
            className="bg-zinc-500/50 border-zinc-500 border px-4 py-2 rounded-md font-semibold">
            {t('home')}
          </Link>
          <Link
            href="/home"
            className="bg-zinc-500/50 border-zinc-500 border px-4 py-2 rounded-md font-semibold">
            {t('about')}
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
