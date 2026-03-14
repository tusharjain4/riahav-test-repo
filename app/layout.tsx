import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rishav | Full Stack Developer',
  description: 'Portfolio of Rishav, a Full Stack Developer specializing in robust, scalable digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}