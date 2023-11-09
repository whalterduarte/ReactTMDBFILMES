//import { useState } from 'react'

//CSS
import './App.css'


//REACT
import {  Outlet } from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar'



//EXECUTION
function App() {

  return (
   <div className='App'>
    <Navbar/>
    <Outlet/>
   </div>
  )
}

export default App
