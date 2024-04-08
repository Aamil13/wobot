import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import axios  from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const param = useParams()
  const [data, setData] = useState([])
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const getSingleRecipe=async()=>{
    try {
      setLoading(true)
      const res = await axios.get(`https://api.spoonacular.com/recipes/${param.id}/information?apiKey=3eb601dfb6114fb49a92db584c7867be`)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      setErr(error.response.data.message);
      setLoading(false)
    }
  }
  // console.log(data);

  useEffect(()=>{
    getSingleRecipe()
  },[])

  return (
    <>
    {
      loading ? <p  className='w-full mt-96 flex justify-center items-center  text-red-700 font-bold text-xl'>Loading</p> :

      !err == "" ? <div className='w-full mt-96 flex justify-center items-center  text-red-700 font-bold text-xl'>{err}</div>
      :

    
   <div className='flex flex-col items-center mt-10 mb-10 gap-6'>
    <img className='w-3/4 h-96 object-cover rounded-xl' src={data?.image} alt="recipe_img" />
    <div className='w-3/4'>
    <h2 className='font-bold text-start text-2xl'>{data?.title} </h2>
    </div>
 
      <p className='max-w-[75%]'>{parse(data?.summary || "")}</p>


    <div className='w-3/4 mt-8'>
      <p className='font-bold text-xl'>Instrustions</p>
      <p className='mt-3'>{parse(data?.instructions || "")} </p>
    </div>
   </div>
   }
   </>
  )
}

export default RecipeDetails