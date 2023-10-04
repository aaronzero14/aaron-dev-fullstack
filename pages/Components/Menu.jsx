import React, { useState } from 'react';
import styles from '../../styles/Menu.module.css';

const Accordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleToggle6 = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <div>
      <section className={styles.line}>
        <br /> Attitudes 
      </section>
      <br /><br />
      <div className={styles.container}>
        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle1}>
            <h3>Kindness and Collaboration:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen1 ? '500px' : '0' }}>
            <p>As a web developer, I stand out for my kindness and my ability to work collaboratively in a team. I am always willing to listen to others' ideas and offer my help when needed. I create a positive and respectful environment where everyone can contribute freely.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle2}>
            <h3>Effort and Perseverance:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen2 ? "500px" : "0" }}>
            <p>My effort and perseverance are reflected in my dedication to overcoming obstacles and finding solutions to problems. I am not afraid to tackle complex challenges and am willing to invest time and energy to achieve the project's goals.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle3}>
          <h3>Proactive Problem-Solving:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen3 ? '500px' : '0' }}>
            <p> I excel in proactive problem-solving. Instead of waiting for issues to arise, I anticipate potential challenges and work on preventive solutions. This proactive approach not only saves time but also ensures a smoother development process. I am always one step ahead, ready to address any hurdles that may come our way..</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle4}>
          <h3>Creativity and Innovation:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen4 ? '500px' : '0' }}>
            <p> My creativity shines through in how I approach problems. I am always looking for new and innovative ways to solve issues and enhance user experiences. I thrive on thinking outside the box and coming up with inventive solutions.</p>
          </div>
        </div>
 
        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle5}>
          <h3>Patience and Attention to Detail:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen5 ? '500px' : '0' }}>
            <p>My patience and attention to detail are evident in my coding practices. I meticulously review every line of code, ensuring it meets high-quality standards. Even in the face of complex algorithms, I remain patient, making sure every element aligns perfectly to create seamless web applications.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle6}>
          <h3>Effective Communication:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen6 ? '500px' : '0' }}>
            <p>Effective communication is my forte. I not only write clean and understandable code but also excel in explaining complex technical concepts to non-technical stakeholders. Whether it's a client or a team member, I can convey ideas clearly, fostering understanding and cooperation among diverse project participants. My ability to bridge the gap between technical and non-technical audiences enhances collaboration and project efficiency.</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Accordion;
