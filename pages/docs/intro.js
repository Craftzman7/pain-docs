import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function intro() {
    return(
        <h1 className={styles.title}>
          <a href="https://github.com/Craftzman7/pain-docs">SoonTM</a>
        </h1>
    )
}