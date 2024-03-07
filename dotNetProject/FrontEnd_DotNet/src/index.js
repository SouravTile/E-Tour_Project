import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import RegFormComp from './Component/RegFormComp';
import SubSector from './Component/SubSector';
import SubCatName from './Component/SubCatName';
import PackageMaster from './Component/PackageMaster';
import CostItinerary from './Component/CostItinerary';
import CostMasterDetails from './Component/CostMasterDetails';
import LoginForm from './Component/LoginForm';
import Passenger from './Component/Passenger';
import Booking from './Component/Booking';
import OrderPage from './Component/OrderPage';


//import RegFormComp from './Component/RegFormComp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         < Route path='/' element={<App />} >
          <Route path='/login' element={<LoginForm />} />
          <Route path='/login/:pkgId' element={<LoginForm />} /> 
           {/* <Route path='/login' element={<Login />} /> */}
          
          <Route path='/about' element={<About />} />
          <Route path='/registration' element={<RegFormComp />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/mylink' element={<About />} />
          <Route path="/bycatId/:catId" element={<SubSector />} /> 
          <Route path="/bysubcatId/:subCatId" element={<SubCatName />} /> 
          <Route path="/bypkgId/:catMasterId" element={<PackageMaster />} /> 
          <Route path="/bycostMasterId/:catMasterId" element={<CostMasterDetails />} /> 
          <Route path="/bypkgMasterId/:catid" element={<CostItinerary />} /> 
          <Route path="/bypassenger/:catid" element={<Passenger />} /> 
          <Route path="/bybooking/:pkgId" element={<Booking />} /> 
          <Route path="/Registration" element={<RegFormComp />} /> 
          <Route path="/email" element={<OrderPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
