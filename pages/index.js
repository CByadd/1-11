import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
 <Header/>
 <Feed/>
    </main>
  )
}
