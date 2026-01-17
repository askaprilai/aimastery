'use client'

import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'

interface NavigationProps {
  userFullName?: string
}

export function Navigation({ userFullName }: NavigationProps) {
  const { signOut } = useAuth()

  // Get initials from full name
  const getInitials = (name?: string) => {
    if (!name) return 'U'
    const parts = name.split(' ')
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }
    return name[0].toUpperCase()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/dashboard"
            className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight"
          >
            AI Mastery
          </Link>

          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link
                href="/dashboard"
                className="text-white/70 hover:text-white font-medium transition-colors text-sm"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/assessment"
                className="text-white/70 hover:text-white font-medium transition-colors text-sm"
              >
                Assessment
              </Link>
            </li>
            <li>
              <Link
                href="/learning"
                className="text-white/70 hover:text-white font-medium transition-colors text-sm"
              >
                Learning
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-white/70 hover:text-white font-medium transition-colors text-sm"
              >
                Profile
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
              {getInitials(userFullName)}
            </div>
            <span className="text-white/90 text-sm font-medium hidden sm:inline">
              {userFullName || 'User'}
            </span>
            <button
              onClick={signOut}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors ml-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
