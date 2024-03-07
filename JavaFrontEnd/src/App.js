
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Crawling from './Component/Crawling';
import Slider from './Component/Slider';
import { useState } from 'react';



function App() {
  
  
  return (
    <div >
      <Header />
       <Slider /> 
      
      <div> <Crawling/></div>
     
      <div class="ref"><Outlet /></div>
      <Footer />
      
    </div>



  );
}

export default App;
