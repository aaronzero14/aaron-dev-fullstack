// components/AnimatedText.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Frontend.module.css'
import React from 'react'
import Link from 'next/link';


export default function Frontend() {
  return (
 <div> <br /><br />
     <div className={styles.grid}>
    <article className={styles.main}>
      <h1>About me such as Fronte End Developer</h1>
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.animated_text}
    >

Passionate Front-End Developer with a keen eye for design, turning ideas into engaging web experiences. Proficient in HTML, CSS, and JavaScript, I craft pixel-perfect, responsive websites that captivate users. <br /><br />
Dedicated to staying up-to-date with the latest web technologies and trends to deliver cutting-edge solutions. <br /><br />
Driven by creativity and a user-centric approach, I love making the web more beautiful and user-friendly. 
Lets collaborate to bring your web projects to life, combining aesthetics and functionality seamlessly.

</motion.p>
<h1> Skills :</h1>
<p>Javascript &rarr; Frameworks based to Js &rarr; React & Vue</p>
<p>Css - HTML - SASS - Bootstrap</p>
    </article>
    <section className={styles.side}><br />
    <section className={styles.line}><br /> Web Developer</section>

<motion.p
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.container}
    > <br />
  <img src="https://c4.wallpaperflare.com/wallpaper/168/815/785/computer-the-room-hacker-the-world-at-night-wallpaper-preview.jpg" alt="icon" className={styles.card} />
 
</motion.p>
<p className={styles.Frontend}>As a front-end developer, I craft digital experiences that bridge creativity and functionality. 
  With every line of code, I paint the canvas of the web, bringing ideas to life and making user interactions memorable. <br /><br />
   I am the architect of user-friendly interfaces, shaping the way people connect with technology. 
  In this ever-evolving digital landscape, I find inspiration in the endless possibilities to create and innovate.</p>
    </section>
  </div>
 <br /><br /><br /><br />  <div className={styles.footer}><br />
<Link href="/Fullstack">
<p className={styles.return}> Return</p> <br />
</Link>
</div>
 </div>
  )
}
