# AI Mastery Platform - Next.js Application

A full-stack Next.js application for AI education with user authentication, personalized learning paths, and progress tracking.

## Features

- ✅ User authentication (signup/login/logout)
- ✅ Protected dashboard with user profile
- ✅ Progress tracking and learning paths
- ✅ Responsive design with Tailwind CSS
- ✅ Server-side rendering with Next.js 14
- ✅ Supabase backend for authentication and data storage

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Supabase Auth
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Create a new project
3. Wait for the database to be provisioned

### 3. Set Up Database Schema

Go to the SQL Editor in your Supabase dashboard and run the following SQL:

```sql
-- User Profiles (extends auth.users)
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Preferences
CREATE TABLE public.user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  theme TEXT DEFAULT 'dark',
  email_notifications BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile"
  ON public.user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can manage own preferences"
  ON public.user_preferences FOR ALL
  USING (auth.uid() = user_id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');

  INSERT INTO public.user_preferences (user_id)
  VALUES (NEW.id);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Supabase credentials:
   - Go to Project Settings → API
   - Copy the Project URL and anon/public key

3. Update `.env.local` with your credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-mastery-platform/
├── app/
│   ├── (auth)/           # Auth pages (login, signup)
│   ├── (protected)/      # Protected pages (dashboard, etc.)
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── auth/             # Auth components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # Reusable UI components
├── lib/
│   ├── supabase/         # Supabase clients
│   └── types/            # TypeScript types
├── public/
│   └── legacy/           # Legacy HTML files
└── middleware.ts         # Route protection
```

## Available Routes

### Public Routes
- `/` - Homepage
- `/login` - Login page
- `/signup` - Signup page

### Protected Routes
- `/dashboard` - User dashboard
- `/assessment` - AI readiness assessment (coming soon)
- `/learning` - Learning paths (coming soon)
- `/profile` - User profile settings

## Testing the Application

### 1. Create an Account
1. Navigate to `/signup`
2. Fill in your details
3. Click "Create Account"
4. You should be redirected to `/dashboard`

### 2. Verify Database
Check your Supabase dashboard:
- Go to Table Editor → user_profiles
- You should see your new user profile
- Go to Table Editor → user_preferences
- You should see default preferences created

### 3. Test Authentication
1. Log out from the dashboard
2. Try to access `/dashboard` directly - you should be redirected to `/login`
3. Log in again - you should be redirected to `/dashboard`

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Link your project:
   ```bash
   vercel link
   ```

3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Add all variables from `.env.local`

4. Deploy:
   ```bash
   vercel --prod
   ```

## Next Steps (Roadmap)

### Phase 2: Core Features
- [ ] AI Readiness Assessment implementation
- [ ] Prompt Engineering Masterclass
- [ ] Learning progress tracking
- [ ] Assessment results storage

### Phase 3: Advanced Features
- [ ] AI Mastery Challenge (gamification)
- [ ] Personal ROI Tracker
- [ ] Admin Dashboard
- [ ] Organizational Insights

### Phase 4: Payments
- [ ] Stripe integration
- [ ] Subscription plans
- [ ] Billing portal

## Troubleshooting

### "Invalid API key" error
- Check that your `.env.local` file has the correct Supabase credentials
- Restart your development server after changing environment variables

### Database connection issues
- Verify that your Supabase project is active
- Check that you've run the database schema SQL
- Ensure RLS policies are properly configured

### Authentication not working
- Check that the trigger for auto-creating profiles is set up
- Verify that the `handle_new_user()` function exists in your database

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
