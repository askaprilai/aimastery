import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navigation } from '@/components/dashboard/Navigation'

export default async function ROITrackerPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
      <Navigation userFullName={profile?.full_name || undefined} />

      <main className="container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Personal ROI Tracker
          </h1>
          <p className="text-xl text-white/70 mb-8">
            This feature is coming soon. Track and measure your AI productivity impact.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <p className="text-white/60">
              The ROI Tracker will help you quantify time saved, productivity gains, and overall impact of your AI skills.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
