import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Blog_1.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faCodeBranch, faKey, faStore, faSyringe } from '@fortawesome/free-solid-svg-icons';





export default function Blog_1() {
  return (
    <div>

<div className={styles.line}> <br /> - Projects -  </div>
<br /><br />
<div className={styles.grid}>
  <article className={styles.main}>
    <h1> <FontAwesomeIcon icon={faSyringe} color='gray' fontSize={30} /> Tatto Studio</h1>

<img src="https://wallpapers.com/images/hd/white-haired-bad-girl-with-tattoo-ml15c7zmqs0ghjef.jpg" alt="imgs" className={styles.imgs_blogs} />
<p>
App created with HTML, CSS & Javascript
    </p>
   <Link href="https://weather-14.netlify.app/  " >
   <div className={styles.link_1}><br /> Look the project</div>
   </Link>

  </article>

  <article className={styles.main}>
    <h1> <FontAwesomeIcon icon={faCloud} color='#0070f3' fontSize={30} />  App Weather</h1>
    <img src="https://wallpapers.com/images/hd/weather-scenarios-collage-dbk9c5n23l7e5fgb.jpg" alt="imgs" className={styles.imgs_blogs} />

<p>
App weather created to Javascript.
    </p>
   <Link href="https://weather-14.netlify.app/  " >
   <div className={styles.link_1}><br /> Look the project</div>
   </Link>

  </article>
  <section className={styles.side}>
    <h1><FontAwesomeIcon icon={faKey} color='yellow' fontSize={30}  /> Password Generator</h1>
    <img src="https://d3c80vss50ue25.cloudfront.net/media/filer_public_thumbnails/filer_public/cd/17/cd17c494-267a-451b-b8dc-0bb12a024e35/expression_website_1920x1080.jpg__1920x1920_q85_subject_location-960%2C539_subsampling-2_upscale.jpg" alt="imgs" className={styles.imgs_blogs} />

    <p>
App Password created Javascript
    </p>
    <Link href="https://hash-password.netlify.app/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>
  </section>
  <section className={styles.side}>
    <h1><FontAwesomeIcon icon={faCode} color='greenyellow' fontSize={30}  />  Zero Net Solutions</h1>
    <img src="https://images.wallpaperscraft.com/image/single/code_programming_symbols_140997_1920x1080.jpg" alt="imgs" className={styles.imgs_blogs} />


    <p>
   Software Solutions
    </p>
    <Link href="https://zeronetsolutions.netlify.app/#acerca" className={styles.link_1}>
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>
  </section>
  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://www.panamajackchile.cl/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://estampapanama.com/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://scalperscompany.mx/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://experienciausa.net/ropa-barata-estados-unidos/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>
</div>



    </div>
  )
}
