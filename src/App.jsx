import {BrowserRouter ,Route,Routes } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LowerNavbar from './components/LowerNavbar/LowerNavbar'
import InputProvider  from './Context/InputContext'


function App() {
 

  return (
    
    <InputProvider>
    <div className='app'>
     <Navbar/>
     <LowerNavbar/>
     <Outlet/>
     
     {/* <Footer/> */}
    </div>
    </InputProvider>
  )
}

export default App
