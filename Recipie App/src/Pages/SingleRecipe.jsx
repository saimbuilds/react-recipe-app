import React, { useContext } from 'react'
import { recipecontext } from '../Context/Contextrecipe'
import { useParams } from 'react-router-dom'

const SingleRecipe = () => {
    const {data} = useContext(recipecontext)
    const params = useParams();
    const recipe = data.find(recipe => params.id == recipe.id)
    console.log(recipe);
    
    
  return (
    <div>SingleRecipe</div>
  )
}

export default SingleRecipe