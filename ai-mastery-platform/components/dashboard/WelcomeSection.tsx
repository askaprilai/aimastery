interface WelcomeSectionProps {
  userFirstName?: string
}

export function WelcomeSection({ userFirstName }: WelcomeSectionProps) {
  const firstName = userFirstName || 'there'

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Welcome back, {firstName}!
        </h1>
        <p className="text-xl text-white/70 mb-6 leading-relaxed">
          Continue your journey to mastering AI communication and unlock new opportunities.
        </p>
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold text-emerald-500">
            Active Learning Path
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 min-w-[300px]">
        <div className="bg-white/3 border border-white/10 rounded-xl p-5 text-center backdrop-blur-sm">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
            3
          </div>
          <div className="text-xs text-white/60 font-medium">Courses</div>
        </div>

        <div className="bg-white/3 border border-white/10 rounded-xl p-5 text-center backdrop-blur-sm">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
            67%
          </div>
          <div className="text-xs text-white/60 font-medium">Progress</div>
        </div>

        <div className="bg-white/3 border border-white/10 rounded-xl p-5 text-center backdrop-blur-sm">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
            12
          </div>
          <div className="text-xs text-white/60 font-medium">Streak</div>
        </div>
      </div>
    </div>
  )
}
