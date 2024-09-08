'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import {
  Banknote,
  BrickWall,
  Building,
  Building2,
  Earth,
  Folder,
  Home,
  HousePlus,
  Settings,
  Tv,
  Video,
  LucideIcon,
} from 'lucide-react'

interface NavItem {
  href: string
  icon: LucideIcon
  label: string
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/dashboard/projects', icon: Building2, label: 'Projects' },
  { href: '/dashboard/developers', icon: BrickWall, label: 'Developers' },
  { href: '/dashboard/communities', icon: HousePlus, label: 'Communities' },
  { href: '/dashboard/about', icon: Earth, label: 'About Page' },
  { href: '/dashboard/page-content', icon: Folder, label: 'Page Content' },
  { href: '/dashboard/meta-tags', icon: Folder, label: 'Meta Tags' },
  { href: '/dashboard/team', icon: Building, label: 'Team' },
  {
    href: '/dashboard/homepage-slider',
    icon: Banknote,
    label: 'Homepage Slider',
  },
  { href: '/dashboard/homepage-video', icon: Video, label: 'Homepage Video' },
  {
    href: '/dashboard/popular-community',
    icon: Tv,
    label: 'Popular Community',
  },
  { href: '/dashboard/services', icon: Settings, label: 'Services' },
]

const DashboardSideBar: React.FC = () => {
  const pathname = usePathname()
  const [activeHref, setActiveHref] = useState(pathname)

  useEffect(() => {
    setActiveHref(pathname)
  }, [pathname])

  const renderNavItem = ({ href, icon: Icon, label }: NavItem) => {
    const isActive = activeHref === href
    return (
      <Link
        key={href}
        href={href}
        onClick={() => setActiveHref(href)}
        className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
          isActive
            ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
            : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
        }`}>
        <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
          <Icon className='h-3 w-3' />
        </div>
        {label}
      </Link>
    )
  }

  return (
    <div className='hidden lg:block border-r h-full'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-[55px] items-center justify-between border-b px-3 w-full'>
          <Link className='flex items-center gap-2 font-semibold ml-1' href='/'>
            <span>Dubai Real Estate CMS</span>
          </Link>
        </div>
        <nav className='flex-1 overflow-auto py-2 px-4'>
          <div className='grid items-start text-sm font-medium gap-1'>
            {navItems.map(renderNavItem)}
            <Separator className='my-3' />
            {renderNavItem({
              href: '/dashboard/settings',
              icon: Settings,
              label: 'Settings',
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default DashboardSideBar
