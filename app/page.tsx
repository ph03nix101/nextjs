
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets:['latin']})

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/about">Go to about page</Link>
    </main>
  )
}
