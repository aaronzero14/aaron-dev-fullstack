// components/AnimatedText.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Backend.module.css'


const Backend = () => {
  return (
<div className={styles.backend}> <br /><br />

<div className={styles.noticia}>
  <img className={styles.izquierda} src="https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg"/>
  <aside className={styles.aside}>Leveraging Node.js, Express, and Next.js in the backend empowers developers to create highly 
  efficient, scalable, and feature-rich web applications. <br /><br /> Node.js, with its event-driven architecture, enables asynchronous
   processing, making it ideal for handling multiple concurrent connections, ensuring lightning-fast response times. <br /><br /> Express.js,
    a minimalist web application framework for Node.js, simplifies the creation of robust APIs and facilitates the management of
     routes, requests, and middleware effectively. <br /><br /> When combined with Next.js, which offers server-side rendering and optimized 
     SEO capabilities, developers can build interactive and SEO-friendly web interfaces, enhancing user experience and search
      engine visibility. This trio not only streamlines the development process but also provides a foundation for building
       high-performing, real-time applications, making it a preferred choice for modern backend development projects.</aside>
  <div className={styles.reset}></div>
</div>

<div className={styles.noticia}>
  <img className={styles.derecha} src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/04/raspberry-lanza-editor-codigo-aprender-python-lenguaje-ia-3008158.jpg"/>
  <aside className={styles.aside}>Utilizing Python in the backend offers developers a versatile and powerful framework for 
  building robust web applications. With its simplicity and readability, Python allows for rapid development and easy maintenance,
   reducing the overall development time. The extensive range of libraries, such as Django and Flask, provides developers with
    ready-to-use components, simplifying complex tasks like authentication, database management, and form handling. <br /><br />
     Python's 
    strong integration capabilities enable seamless connection with various databases, APIs, and third-party services, enhancing the application's functionality.
    <br /><br />
     Additionally, Python's asynchronous programming support, as seen in frameworks like FastAPI, ensures efficient handling of concurrent connections, ensuring optimal performance for real-time applications. Its vibrant community and extensive documentation further facilitate problem-solving and innovation, making Python an excellent choice for backend development, particularly for projects requiring flexibility, scalability, and rapid deployment.</aside>
  <div className={styles.reset}></div>
</div>

<div className={styles.noticia}>
<img className={styles.izquierda} src="https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg"/>

  <aside className={styles.aside}>PHP serves as a versatile backend solution, offering developers a 
  robust platform for web applications. Its simplicity, extensive libraries, and frameworks facilitate 
  rapid development and seamless integration. <br /><br /> PHP’s compatibility with various databases enables efficient 
  data management, ensuring dynamic and interactive web experiences. Whether working with popular frameworks
   like Laravel or CodeIgniter, PHP empowers developers to build scalable, secure, and feature-rich applications. <br /><br />
    Additionally, its large community and extensive documentation provide invaluable support, fostering innovation and problem-solving. With PHP, developers can create dynamic websites and applications tailored to 
  diverse needs, making it a preferred choice in the realm of backend development.</aside>
  <div className={styles.reset}></div>


</div>
<br /><br />
</div>
  );
};

export default Backend;
