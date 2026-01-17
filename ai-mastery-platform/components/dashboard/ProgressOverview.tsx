import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export function ProgressOverview() {
  const courses = [
    { name: 'AI Readiness Fundamentals', progress: 85, status: 'active' },
    { name: 'Prompt Engineering Mastery', progress: 60, status: 'active' },
    { name: 'Advanced AI Communication', progress: 30, status: 'locked' },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Learning Progress</CardTitle>
        <CardDescription>Track your journey through AI mastery courses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold">{course.name}</span>
                  {course.status === 'active' && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full font-medium">
                      Active
                    </span>
                  )}
                  {course.status === 'locked' && (
                    <span className="text-xs bg-gray-600/20 text-gray-400 px-2 py-1 rounded-full font-medium">
                      Locked
                    </span>
                  )}
                </div>
                <span className="text-white/60 font-semibold text-sm">
                  {course.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-700/30 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Overall Progress</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              58%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
