import React, { useContext } from 'react'
import { recipecontext } from '../Context/Contextrecipe'
import RecipeCard from '../Components/RecipeCard'

const Recipes = () => {
  const {data} = useContext(recipecontext)
  const renderRecipes = data.map((recipe)=> <RecipeCard recipe = {recipe} key={recipe.id}/>)
  return (
    <div className='flex gap-4 flex-wrap'>{data.length>0 ?renderRecipes: "Recipes not found"}</div>
  )
}

export default Recipes