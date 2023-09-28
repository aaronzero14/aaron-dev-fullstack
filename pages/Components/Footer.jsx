import React from 'react'
import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCode, faHand, faInfo, faSyringe } from '@fortawesome/free-solid-svg-icons';




export default function Footer() {

      // Obtenemos la fecha actual
      const fechaActual = new Date();

      // Formateamos la fecha en el formato deseado (por ejemplo, "YYYY-MM-DD")
      const fechaFormateada = fechaActual.toISOString().split('T')[0];

  return (
    <div className={styles.Footer}>


<br /><br />
<div className={styles.grid}>
  <article className={styles.main}>
    <h1 >   <FontAwesomeIcon icon={faHand} color='white' fontSize={20} /> Comunnicate With Me</h1>
    <p>
    I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations. Discover a realm of refined craftsmanship and exquisite design as you navigate through my portfolio website. I look forward to connecting with you and discussing how we can bring your vision to life in the most elegant and impactful way possible  </p>
  </article>
  <section className={styles.side}>
    <h1>  <FontAwesomeIcon icon={faCode} color='white' fontSize={20} />  Skills</h1>
    <p>
    #Javascript #React #Next #Node #Typescript #PHP #Python #Java #HTML #CSS #SCSS #Boopstrap #Material UI/UX #Linux #kali #Parrot #CISCO    </p>
   <p>Date today : {fechaFormateada} </p>
   </section>
  <section className={styles.side}>
    <h1> <FontAwesomeIcon icon={faCheck} color='white' fontSize={20} />  Information</h1>
    <p>Costa Rica, San Jose : Desamparados</p>
    <p>( +506 ) 6144 - 7976    </p>
    <p>aaronfullstackdeveloper@gmail.com

</p>
  </section>

<br /><br /><br />
</div>

    </div>
  )
}
