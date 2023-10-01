'use client'

import React from 'react'
import { Button } from './ui/button'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { cn } from '@/lib/utils'

const LocaleSwitcher = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  return (
    <div>
      <div className="flex gap-x-2">
        <Button
          variant="outline"
          className={cn(
            `rounded-full
            text-xs
            border
            border-zinc-700
            w-9 
            h-9`,
            currentLocale === 'en' ? 'bg-zinc-500/50' : 'bg-zinc-500/10'
          )}
          onClick={() => changeLocale('en')}>
          En
        </Button>
        <Button
          variant="outline"
          className={cn(
            `rounded-full
            text-xs
            border
            border-zinc-700
            w-9 
            h-9`,
            currentLocale === 'fr' ? 'bg-zinc-500/50' : 'bg-zinc-500/10'
          )}
          onClick={() => changeLocale('fr')}>
          Fr
        </Button>
      </div>
    </div>
  )
}

export default LocaleSwitcher
