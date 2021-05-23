import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="PAIN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/pain-lang/pain">Pain</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://pain-docs.vercel.app/docs/intro" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Pain features</p>
          </a>
        </div>
      </main>
    </div>
  )
}
