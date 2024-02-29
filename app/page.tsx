'use client'
import Live from '@/components/Live'
import Navbar from '@/components/Navbar'
import RightSidebar from '@/components/RightSidebar'
import LeftSidebar from '@/components/LeftSidebar'

export default function Page() {
  return (
    <main className=' h-screen overflow-hidden'>
      <Navbar />
      <section className=' flex h-full flex-row'>
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  )
}
