import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navigation } from '@/components/dashboard/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default async function ProfilePage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Profile Settings
          </h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Full Name
                  </label>
                  <p className="text-white text-lg">{profile?.full_name || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <p className="text-white text-lg">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Role
                  </label>
                  <p className="text-white text-lg capitalize">{profile?.role || 'User'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Member Since
                  </label>
                  <p className="text-white text-lg">
                    {profile?.created_at
                      ? new Date(profile.created_at).toLocaleDateString()
                      : 'Unknown'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60">
                Profile editing, preferences, and additional settings will be available soon.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
