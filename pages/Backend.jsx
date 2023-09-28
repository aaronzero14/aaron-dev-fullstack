// components/AnimatedText.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Backend.module.css'


const AnimatedText = () => {
  return (
<div className={styles.backend}>
<motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
      className={styles.animated_text}
    >
      Aaron - Expert IT
    </motion.p>
<div className={styles.backend_card}>

<motion.p
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
      className={styles.container}
    > <br /><br />
  <img src="https://c4.wallpaperflare.com/wallpaper/168/815/785/computer-the-room-hacker-the-world-at-night-wallpaper-preview.jpg" alt="icon" className={styles.card} />
   <br /> <br />
   Dedicated Back-End Developer with a strong passion for creating robust and efficient web applications. Proficient in various programming languages and frameworks, I specialize in building the powerful engine that drives websites and applications.

I am committed to staying current with the latest back-end technologies and methodologies, ensuring that your web projects are not only functional but also scalable and secure. With a focus on optimizing performance and data handling, I am driven by the desire to make web applications run seamlessly behind the scenes.

Lets collaborate to bring your web projects to life, ensuring they have a strong and reliable foundation, where data flows smoothly and securely, enabling your users to have a seamless and enjoyable experience.
      <br /><br />
</motion.p>

</div>
<br /><br />
</div>
  );
};

export default AnimatedText;
