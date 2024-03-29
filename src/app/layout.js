import Header from '@/components/header'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Now Playing',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.className} bg-[#121212]`}>
        {children}
      </body>
    </html>
  )
}
