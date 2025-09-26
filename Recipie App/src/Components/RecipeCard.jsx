import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const {id, image, title, description, chef} = props.recipe
  return (
    <Link to={`/recipe/details/${id}`} className='hover:scale-90 flex flex-col gap-4  w-[20vw] h-fit p-2 rounded-lg  overflow-hidden bg-zinc-500'>
        <img src={image} className='w-full h-[20vh] object-cover' alt="" />
        <h1>{title}</h1>
        <p className='w-full'>{description.slice(0,100)} ... <small className='text-red-400'>Read More</small></p>
    </Link>
  )
}

export default RecipeCard