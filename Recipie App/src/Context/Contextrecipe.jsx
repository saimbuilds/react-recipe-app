import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)
const Contextrecipe = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      
      image: "https://images.unsplash.com/photo-1595378833483-c995dbe4d74f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBtYXJnYXJpYXRlfGVufDB8fDB8fHww",
      category: "Dinner",
      chef: "Dr wahab",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam id sed at repellendus aliquid, earum quis ullam inventore explicabo perferendis veritatis corrupti. Impedit quae eum fugiat accusamus saepe minima aspernatur!"
    }
  ]);
  console.log(data);

  return (
    <recipecontext.Provider value={{ data, setdata }}>

      {props.children}
    </recipecontext.Provider>
  )
}

export default Contextrecipe