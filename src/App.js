
import './App.css';
import Signin from './component/Auth/Signin/Signin';
import Header from './component/Header/Header';
import { Routes, Route } from "react-router-dom"
import {useSelector} from 'react-redux'
import Services from './component/Services/Services/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceDetails from './component/ServicesDetails/ServicesDetails';
import MyServices from './component/My Services/MyServices';
import MyReservation from './component/Reservation/MyReservation/MyReservation';
function App() {
  const {isSignin} =useSelector(state=>state.authSlice)
  console.log(isSignin);
  return (
    <>
      {
      isSignin? 
      <> 
         <Header/>
         <ToastContainer/>
    <Routes>
      <Route path='/' element={<h1>Mohamamd</h1>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Services/:id' element={<ServiceDetails/>}/>
      <Route path='/My-Services' element={<MyServices/>}/>
      <Route path='/My-Reservation' element={<MyReservation/>}/>
      <Route path='/reserve/myService' element={<h1>Mohamamd</h1>}/>
      <Route path='/Contact-us' element={<h1>Mohamamd</h1>}/>
      <Route path='/Reports' element={<h1>Mohamamd</h1>}/>
      <Route path='/Settings' element={<h1>Mohamamd</h1>}/>
     
    </Routes>
      </>
      :<Signin/>
      
      }

    </>
  );
}

export default App;
