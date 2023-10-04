// Slider.jsx
//import styles from '../../styles/Slider.module.css'; // Importa tus estilos aquí
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Slider.module.css'


const SliderComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 15000,
    };
  
    return (
     <div> 
        <section className={styles.line}> <br /> All Skills</section> <br /><br /><br />
         <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div className={styles.sliderSlide}>
            <h3 className={styles.left}>Front_End</h3>
            <p className={styles.letters}>
            With a strong background in front-end development, 
            I possess exceptional skills in key technologies such as React and Vue, 
            enabling me to create dynamic and engaging web interfaces. My expertise in HTML 
            and CSS, coupled with mastery of preprocessors like Sass and frameworks like Bootstrap,
             allows me to design elegant and responsive websites. Furthermore, I have a deep understanding
              of version control systems like GitHub, ensuring a collaborative and efficient workflow. 
              <br /><br />

              My passion for staying abreast of the latest trends and technologies in the front-end development world drives me to continually learn and enhance my skills. I am committed to delivering creative and functional solutions that enhance user experience and add value to every project I work on.
            </p>
          </div>
          <div className={styles.sliderSlide}>
          <h3 className={styles.left}>Back_End</h3>
          <p className={styles.letters}>As a proficient developer skilled in Python and experienced with technologies like Node.js, Next.js, and Express on the backend, I bring a wealth of expertise to every project. My Python proficiency allows me to create sophisticated solutions, from AI applications to data science projects, leveraging the language's versatility and power. 
          In backend development, my experience with Node.js, Next.js, and Express enables the creation of swift and scalable
           applications, ensuring a seamless user experience. <br /><br /> I excel in writing clean, modular code and translating client
            requirements into high-quality technical solutions. By staying updated with the latest web development trends, 
            
            I create innovative applications that meet clients' needs. 
          <br /><br />
          My proactive approach and passion for programming empower me to tackle challenges creatively, ensuring project success.</p>


          </div>
          <div className={styles.sliderSlide}>
          <h3 className={styles.left}>Databases</h3>
          <p className={styles.letters}>I excel in database management with a focus on MongoDB and MySQL. 
          My proficiency lies in designing intricate database structures, optimizing complex queries, 
          and ensuring seamless data integration. <br /><br /> I possess a keen eye for detail, enabling me to create
           efficient and scalable solutions tailored to specific business needs. My expertise extends to data modeling,
            indexing strategies, and performance tuning, guaranteeing robust and high-performing databases. 
            With a deep understanding of both MongoDB's flexible NoSQL architecture and MySQL's relational database capabilities,
           I am well-equipped to handle diverse database challenges with precision and effectiveness.</p>


          </div>
          {/* Agrega más slides según sea necesario */}
        </Slider>
      </div>
     </div>
    );
  };
  
  export default SliderComponent;
  
