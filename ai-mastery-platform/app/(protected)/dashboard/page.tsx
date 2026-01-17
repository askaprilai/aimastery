import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navigation } from '@/components/dashboard/Navigation'
import { WelcomeSection } from '@/components/dashboard/WelcomeSection'
import { ProgressOverview } from '@/components/dashboard/ProgressOverview'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default async function DashboardPage() {
  const supabase = createClient()

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch user profile
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Extract first name from full name
  const firstName = profile?.full_name?.split(' ')[0] || 'there'

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] relative">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl top-[-200px] right-[-200px] animate-pulse" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-full blur-3xl bottom-[-150px] left-[-150px] animate-pulse delay-75" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation userFullName={profile?.full_name || undefined} />

        <main className="container mx-auto px-6 pt-28 pb-16">
          <WelcomeSection userFirstName={firstName} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <QuickActions />
              <ProgressOverview />
            </div>

            <div className="space-y-6">
              {/* Recent Activity Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                    <div>
                      <p className="text-white/90 text-sm font-medium">
                        Completed: AI Fundamentals Module 3
                      </p>
                      <p className="text-white/50 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <p className="text-white/90 text-sm font-medium">
                        Started: Prompt Engineering Course
                      </p>
                      <p className="text-white/50 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div>
                      <p className="text-white/90 text-sm font-medium">
                        Achieved: 7-day Learning Streak
                      </p>
                      <p className="text-white/50 text-xs">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Achievements</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                      🏆
                    </div>
                    <p className="text-xs text-white/60">First Course</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <p className="text-xs text-white/60">10 Courses</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <p className="text-xs text-white/60">Master</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
