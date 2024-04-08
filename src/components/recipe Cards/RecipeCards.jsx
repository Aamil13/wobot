import React from 'react'
import {useNavigate} from "react-router-dom"

const RecipeCards = ({id,title,summ,image}) => {
    const navigate = useNavigate()
    // console.log(title.length);
  return (
    <div onClick={()=>navigate(`/details/${id}`)} className='flex gap-2 border-2 rounded-xl'>
        <div className='p-2'>
        <h2 className='font-bold'>{title.substr(0,23)}{title.length > 24 ? "..." : ""}</h2>
        <p className='max-w-52 text-xs'>{summ.substring(0,200).replace(/<[^>]*>?/gm, '')}...</p>
        </div>

        <img className='w-32 object-cover rounded-xl' src={image} alt="recipe_img" />
        </div>
  )
}

export default RecipeCards