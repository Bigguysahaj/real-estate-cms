"use client"

import { Separator } from "@/components/ui/separator"
import clsx from "clsx"
import {
  Banknote,
  BrickWall,
  Building,
  Building2,
  Earth,
  Folder,
  HomeIcon,
  HousePlus,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardSideBar() {
  const pathname = usePathname()

  return (
    <div className='lg:block hidden border-r h-full'>
      <div className='flex h-full max-h-screen flex-col gap-2 '>
        <div className='flex h-[55px] items-center justify-between border-b px-3 w-full'>
          <Link className='flex items-center gap-2 font-semibold ml-1' href='/'>
            <span className=''>Dubai Real Estate CMS</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto py-2 '>
          <nav className='grid items-start px-4 text-sm font-medium'>
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard",
                }
              )}
              href='/dashboard'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <HomeIcon className='h-3 w-3' />
              </div>
              Home
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/projects",
                }
              )}
              href='/dashboard/projects'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <Building2 className='h-3 w-3' />
              </div>
              Projects
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/developers",
                }
              )}
              href='/dashboard/developers'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <BrickWall className='h-3 w-3' />
              </div>
              Developers
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/communities",
                }
              )}
              href='/dashboard/communities'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <HousePlus className='h-3 w-3' />
              </div>
              Comunities
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/about",
                }
              )}
              href='/dashboard/about'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <Earth className='h-3 w-3' />
              </div>
              About Page
            </Link>
            <Separator className='my-3' />
            <Link
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/settings",
                }
              )}
              href='/dashboard/settings'
              id='onboarding'>
              <div className='border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white'>
                <Settings className='h-3 w-3' />
              </div>
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
