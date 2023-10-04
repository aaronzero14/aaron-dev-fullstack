import React from 'react';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Blog_1 from './Components/Blog_1';
import Footer from './Components/Footer';
import Menu from './Components/Menu';


export default function Fullstack() {
 


  return (
    <div className='Fullstack'>

      <Navbar></Navbar>
      <Blog></Blog>
      <Blog_1></Blog_1>
      <br /><br />
      <Menu></Menu>
      <br /><br />
      <Footer></Footer>
    

    </div>
  );
}


 