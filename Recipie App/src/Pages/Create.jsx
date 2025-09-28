import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import { recipecontext } from '../Context/Contextrecipe';
import Recipes from './Recipes';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm();
    const {data, setdata} = useContext(recipecontext)
    const updateHandler = (recipe)=>{
        recipe.id = nanoid();
        const copyData = [...data]
        copyData.push(recipe)
        setdata(copyData)
        localStorage.setItem("recipes", JSON.stringify(copyData))
        // setdata([...data, recipe]);
        toast.success("Recipe Created", {
      position: "top-right"
    });
        reset();
        navigate("/recipes")
    }
  return (
    <form onSubmit={handleSubmit(updateHandler)} className='flex flex-col w-[50%]'>
        <input {...register("image")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Enter Image url' />
        <small className='text-red-500 mb-4'>This is how error will be shown.</small>
        <input {...register("title")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Recipe Title' />
        {/* <small className='text-red-500 block mb-4'>This is how error will be shown.</small> */}
        <input {...register("chef")} className='border-b outline-0 p-1 text-2xl block' type="text" placeholder='Enter Chef Name' />
        {/* <small className='text-red-500 block mb-4'>This is how error will be shown.</small> */}
        <textarea {...register("description")} placeholder='Enter your descirption'></textarea>
        {/* <small className='text-red-500 block mb-4'>This is how error will be shown.</small> */}
        <textarea {...register("ingredients")} placeholder='Enter the ingredients spereated by commas'></textarea>
        {/* <small className='text-red-500 block mb-4'>This is how error will be shown.</small> */}
        <textarea {...register("instructions")} placeholder='write the instructions to make the recipe'></textarea>
        {/* <small className='text-red-500 block mb-4'>This is how error will be shown.</small> */}
        <select className='border-b outline-0 p-2' {...register("categories")}>
            <option value="breakfast">Beakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        <button className='bg-gray-600 rounded p-2 text-xl hover:cursor-pointer'>Save Recipe</button>

    </form>
  )
}

export default Create