import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-2xl flex justify-between mb-10 w-[60%] m-auto'>

        <NavLink className={(e)=>e.isActive&& "text-red-400"} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive&& "text-red-400"} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=>e.isActive&& "text-red-400"} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive&& "text-red-400"} to="/create-recipe">Create Recipes</NavLink>
    </div>
  )
}

export default Navbar