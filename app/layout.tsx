import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shreya J — Software Engineer',
  description: 'Portfolio of Shreya J — Full Stack Developer & AI/ML Engineer based in Bengaluru, India.',
  keywords: ['Shreya J', 'Software Engineer', 'Full Stack Developer', 'AI Engineer', 'Bengaluru', 'React', 'Python'],
  openGraph: {
    title: 'Shreya J — Software Engineer',
    description: 'Full Stack Developer & AI/ML Engineer based in Bengaluru, India.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="noise">
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}