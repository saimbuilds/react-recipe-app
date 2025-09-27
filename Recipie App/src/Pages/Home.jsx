import axios from "../Utils/axios";
import React, { useEffect } from 'react'

const Home = () => {
  const getProduct = async () =>{
    try {
      const {data} = await axios.get("https://fakestoreapi.com/products/1")
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
 
  return (
    <div>
      <h1>Home</h1>
      <button className='bg-blue-400 font-black py-2 rounded m-4 px-2 hover:cursor-pointer' onClick={getProduct}>Get Product</button>
    </div>
  )
}

export default Home