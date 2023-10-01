import LandingNavBar from '@/components/LandingNavBar'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNavBar />
      <main className="flex-grow">{children}</main>
    </div>
  )
}
