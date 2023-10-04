// components/ContactForm.js
import React, { useState } from 'react';
import styles from '../../styles/Form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faComments, faGhost, faMailForward, faPerson, faRodSnake  } from '@fortawesome/free-solid-svg-icons';


const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones
    console.log(formData);
    // Muestra una alerta al enviar el formulario
    alert('¡Formulario enviado correctamente!');
    // Resetea el formulario después de enviarlo
    setFormData(initialState);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>

      <div> <br /><br />

        <label htmlFor="name" className={styles.left}><FontAwesomeIcon icon={faPerson} color=' rgba(23, 255, 213, 0.7)' fontSize={20} />  &rarr; Name:</label><br /><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder='Your name '

        />
      </div>
      <div> <br />
        <label htmlFor="email"  className={styles.left}><FontAwesomeIcon icon={faMailForward} color=' rgba(23, 255, 213, 0.7)' fontSize={20} />  &rarr;Email :</label><br /><br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder='name@gmail.com'


        />
      </div>
      <div> <br />
        <label htmlFor="message"  className={styles.left}><FontAwesomeIcon icon={faComments} color=' rgba(23, 255, 213, 0.7)' fontSize={20} />  &rarr; Message :</label><br /><br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.input_comment}
          

        />
      </div><br />
      <button type="submit" className={styles.button}><FontAwesomeIcon icon={faGhost} color=' rgba(23, 255, 213, 0.7)' fontSize={20} />  &rarr; Sent </button>

    </form> <br /><br />

    </div>
  );
};

export default ContactForm;
