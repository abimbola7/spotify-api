import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from './provider/sessionProvider'

const inter = Inter({ subsets: ['latin'] })
const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Now Playing',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${grotesk.className}  bg-[#292929]`}>{children}</body>
      </NextAuthSessionProvider>
    </html>
  )
}
