import React, { useContext } from 'react'
import RecipeCard from '../Components/RecipeCard'

const Fav = () => {

    const favourite = JSON.parse(localStorage.getItem("fav") || [])
  const renderRecipes = favourite.map((recipe)=> <RecipeCard recipe = {recipe} key={recipe.id}/>)
  return (
    <div className='flex gap-4 flex-wrap'>{favourite.length>0 ?renderRecipes: "Favourites not found"}</div>
  )


  return (
    <div>Fav</div>
  )
}

export default Fav