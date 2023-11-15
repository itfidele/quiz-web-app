import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz Web App',
  description: 'Quiz Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
