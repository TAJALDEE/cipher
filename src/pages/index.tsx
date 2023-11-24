import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>ciphering project </h2>

      <div>
        <button>
      <Link href="playfair">
        playfair Cipher
      </Link>
      </button>
      </div>

      <div>
      <button>
        <Link href="ceaser">
        Caesar Cipher 
      </Link>
      </button>
      </div>
    </main>
  )
}
