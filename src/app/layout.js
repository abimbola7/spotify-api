import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from './provider/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Now Playing',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${inter.className} min-h-screen bg-[#292929] relative flex items-center justify-center`}>{children}</body>
      </NextAuthSessionProvider>
    </html>
  )
}