import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/info">Info page</Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href="/blog">Blog page</Link>
        </li>
        <li>
          <Link href="/navigation">Navigation page</Link>
        </li>
      </ul>
    </main>
  )
}
