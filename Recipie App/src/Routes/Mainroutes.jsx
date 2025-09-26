import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import Create from '../Pages/Create'
import SingleRecipe from '../Pages/SingleRecipe'

const Mainroutes = () => {
    return (

        <>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/recipes' element={<Recipes/>}></Route>
                <Route path='/create-recipe' element={<Create/>}></Route>
                <Route path='/recipe/details/:id' element={<SingleRecipe/>}></Route>
                <Route path='/about' element={<About/>}></Route>

            </Routes>
        </>



    )
}

export default Mainroutes