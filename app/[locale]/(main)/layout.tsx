'use client'

import NavBar from '@/components/NavBar'
import { I18nProviderClient } from '@/locales/client'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18nProviderClient>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
      </div>
    </I18nProviderClient>
  )
}
