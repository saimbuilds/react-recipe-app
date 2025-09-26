import React from 'react'
import Mainroutes from './Routes/Mainroutes'
import Navbar from './Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 text-thin text-white py-10 px-[10%]'>
      
      <Navbar/>
      <ToastContainer/>
      <Mainroutes/>

    </div>
  )
}

export default App