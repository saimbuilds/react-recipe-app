import React, { useContext, useEffect } from 'react'
import { recipecontext } from '../Context/Contextrecipe'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

const SingleRecipe = () => {
    // const {data} = useContext(recipecontext)
    const navigate = useNavigate();
    const {data, setdata} = useContext(recipecontext)
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id)
    console.log(recipe);
 
    const {register, handleSubmit, reset} = useForm({
      defaultValues:{
        title:recipe.title,
        chef: recipe.chef,
        image: recipe.image,
        instruction: recipe.instruction,
        ingredient: recipe.ingredients,
        category: recipe.category,
        description: recipe.description
      }
    });
    const submitHandler = (recipe) =>{
      const index = data.findIndex((recipe)=>params.id == recipe.id)
      const copyData = [...data]
      copyData[index] = {...copyData[index], ...recipe}
      setdata(copyData)
      toast.success("Recipe Created")
      console.log(data);
      

    }
    const deleteHandler = () =>{
      const filterData =  data.filter(r=>r.id!=params.id)
      setdata(filterData)
      toast.warn("Recipe Deleted")
      navigate("/recipes")
    }
     useEffect(()=>{
    console.log("Mounted");
    return ()=>{
      console.log("Unmounted");
      
    }
    
  })
    return recipe? <div className='flex'>
      <div className='left w-1/2 p-2'>
        <h1 className='text-5xl font-black'>{recipe.title}</h1>
        <img className='w-1/2 mt-3 rounded-lg' src={recipe.image} alt="" />
      </div>
       <form  onSubmit={handleSubmit(submitHandler)} className='flex flex-col w-1/2 gap-5'>
        <input {...register("image")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Enter Image url'  />
        
        <input {...register("title")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Recipe Title' />
       
        <input {...register("chef")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Enter Chef Name'  />
       
        <textarea {...register("description")} placeholder='Enter your descirption'></textarea>
       
        <textarea {...register("ingredients")} placeholder='Enter the ingredients spereated by commas'></textarea>
        
        <textarea {...register("instructions")} placeholder='write the instructions to make the recipe'></textarea>
        
        <select className='border-b outline-0 p-2 w-1/2' {...register("categories")}>
            <option value="breakfast">Beakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        <div className='flex gap-5'>
        <button className='bg-gray-600 rounded p-2 text-xl hover:cursor-pointer  w-fit'>Update Recipe</button>
        <button onClick={deleteHandler} className='bg-red-600 rounded p-2 text-xl hover:cursor-pointer w-fit'>Delete Recipe</button>
        </div>

    </form>
    </div> : "loading"
  }

export default SingleRecipe