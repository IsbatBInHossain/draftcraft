'use client'

import Image from 'next/image'
import { memo } from 'react'

import { NavbarProps } from '@/types/type'

import ActiveUsers from './users/ActiveUsers'

const Navbar = ({ activeElement }: NavbarProps) => {
  return (
    <nav className='flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white'>
      <Image src='/favicon.ico' alt='DraftCraft Logo' width={58} height={20} />

      <ActiveUsers />
    </nav>
  )
}

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
)
