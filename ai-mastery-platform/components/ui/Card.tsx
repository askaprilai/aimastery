import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''

  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`text-xl font-bold text-white ${className}`}>{children}</h3>
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`text-gray-400 text-sm ${className}`}>{children}</p>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`mt-4 ${className}`}>{children}</div>
}
