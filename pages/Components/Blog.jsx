import React, { useState } from 'react';
import styles from '../../styles/Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faDiagramProject, faEye, faLink, faMagic, faPerson, faPersonArrowDownToLine  } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${styles.Blog} ${darkMode ? styles.DarkMode : ''}`}>
    
<br /><br /><br />

  <div className={styles.Blog_Fullstack}> 
  
  <h1 className={styles.Full}> <br /><br /><FontAwesomeIcon icon={faCodeBranch} color='greenyellow' /> Fullstack Developer</h1>
 <center> <button className={styles.dark_mode} onClick={() => setDarkMode(!darkMode)}>

        {darkMode ? 'Off' : 'On'} Dark Mode
      </button></center>
  </div><br />
      <div className={styles.grid}>
  <article className={styles.main}>
    <h1><FontAwesomeIcon icon={faPersonArrowDownToLine} color='purple' /> About Me </h1>
    <p>With a strong background in both front-end and back-end technologies, I create robust and user-friendly applications. My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.</p>
    <p>I build things for the web. I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.Currently, I’m focused on building accessible, human-centered products at Upstatement..</p>
  </article>
  <section className={styles.side}>
    <h1><FontAwesomeIcon icon={faDiagramProject} color='greenyellow' /> Knowledge </h1>
    <p>I have knowledge in the following areas:</p>
    <br />
    <p>Static Content and Information Websites, Blogs, Ecommerces, Foros, News & Media Websites, Online Education Platforms, Entertainment Websites,Job Portals, Government and Public Services Websites,Health and Wellness Websites </p>
    

  </section>
</div> <br /><br />


<div className={styles.grid}>
  <article className={styles.main}>
    <h1><FontAwesomeIcon icon={faPersonArrowDownToLine} color='orange' /> You like a Developer fullstack work for you!! Contact with me Dude!</h1>
  <p>Fullstack developer with a passion for creating seamless, end-to-end digital solutions.</p>

<ContactForm></ContactForm>

  </article>
  <section className={styles.side}>
    <h1><FontAwesomeIcon icon={faEye} color='red' /> Watch my video, about me and skills me </h1>
    
    <br /><br />
     {/* Agrega el iframe para el video de YouTube */}
     <iframe 
        height="315" 
        src="https://www.youtube.com/embed/9CNRPGGyR9M?si=wts3A1T6ouj6zjMi"
        title="Video de YouTube"
        className={styles.video_blog}
      ></iframe>    
      <br /><br />
      <p>
Certainly! Here are four lines summarizing your education for your video description: <br />

Education Highlights:

Dive into my educational journey, where I honed my skills and gained valuable knowledge. 
<br /><br />
I graduated with a degree in [Your Degree] from [Your University], specializing in [Your Major].
<br />
 My academic background, coupled with real-world experiences, equips me to approach challenges with a unique perspective. Explore how my education has shaped my expertise, making me proficient in [Your Skills].</p>

  </section>
</div> <br /><br />


    </div>
  );
}
