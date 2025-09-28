import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import Create from '../Pages/Create'
import SingleRecipe from '../Pages/SingleRecipe'
import PageNotFound from '../Pages/PageNotFound'
import Fav from '../Pages/Fav'

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/create-recipe' element={<Create />} />
        <Route path='/recipe/details/:id' element={<SingleRecipe />} />
        <Route path='/about' element={<About />} />
        <Route path='/favourites' element={<Fav />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Mainroutes
