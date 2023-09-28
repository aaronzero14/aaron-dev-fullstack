import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Loading from './Loading'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title> &copy; Aaron Padilla &rarr; IT Expert &trade;</title>
        <meta httpEquiv="refresh" content="4;url=/Fullstack" />
        <meta name="description" content="Aaron Fullstack Developer :))" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="hack.jpg" />
       
      </Head>

      <Loading></Loading>

       
    </div>
  )
}
