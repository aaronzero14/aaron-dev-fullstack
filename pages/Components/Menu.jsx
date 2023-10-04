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
            <h3>Teamwork:</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen1 ? '500px' : '0' }}>
            <p>Contenido del acordeón 1.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle2}>
            <h3>vvv</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen2 ? "500px" : "0" }}>
            <p>Contenido del acordeón 2.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle3}>
          <h3>vvv</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen3 ? '500px' : '0' }}>
            <p>Contenido del acordeón 3.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle4}>
          <h3>vvv</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen4 ? '500px' : '0' }}>
            <p>Contenido del acordeón 4.</p>
          </div>
        </div>
 
        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle5}>
          <h3>vvv</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen5 ? '500px' : '0' }}>
            <p>Contenido del acordeón 5.</p>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={handleToggle6}>
          <h3>vvv</h3>
          </div>
          <div className={styles.accordionContent} style={{ maxHeight: isOpen6 ? '500px' : '0' }}>
            <p>Contenido del acordeón 5.</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Accordion;
