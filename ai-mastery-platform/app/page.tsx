import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Mastery Platform
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Transform your organization with AI through assessments, personalized learning paths, and gamified challenges.
          </p>
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
