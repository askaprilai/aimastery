import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

export function QuickActions() {
  const actions = [
    {
      title: 'Take Assessment',
      description: 'Evaluate your AI readiness',
      href: '/assessment',
      icon: '📊',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Continue Learning',
      description: 'Resume your current course',
      href: '/learning',
      icon: '🎓',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI Challenge',
      description: 'Practice with real scenarios',
      href: '/challenge',
      icon: '🎯',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      title: 'Track ROI',
      description: 'Measure your AI impact',
      href: '/roi-tracker',
      icon: '📈',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Card hover className="h-full cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {action.title}
                  </h3>
                  <p className="text-white/60 text-sm">{action.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
