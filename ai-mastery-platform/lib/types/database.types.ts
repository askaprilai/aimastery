export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: string
          onboarding_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          theme: string
          email_notifications: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          theme?: string
          email_notifications?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          theme?: string
          email_notifications?: boolean
          created_at?: string
        }
      }
    }
  }
}
