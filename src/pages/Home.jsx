import React, { useEffect, useState } from 'react'
import Tags from '../components/tags/Tags'
import RecipeCards from '../components/recipe Cards/RecipeCards'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const [includeTags, setIncludeTags] = useState([])
  const [excludeTags, setExcludeTags] = useState([])
  // console.log(includeTags,"ex;",excludeTags);
  const getRecipe = async()=>{
      try {
        setLoading(true)
        const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=3eb601dfb6114fb49a92db584c7867be&number=5&include-tags=${includeTags}&exclude-tags=${excludeTags}`)
        setData(res.data)
        setLoading(false)
      } catch (error) {
        setErr(error?.response?.data?.message);
      setLoading(false)
      }
  }

  useEffect(()=>{
    getRecipe()
  },[includeTags])

  return (
    <>
    
    <div className='flex flex-col w-full relative'>
      <div className='pb-28 flex w-full justify-center gap-30 items-center mt-10'>
        <div className='flex flex-col gap-2'>
        <p className='text-6xl max-w-[500px] font-bold'>Find The Perfect Recipe's</p>
        <p className='text-2xl font-semibold'>For the Perfect occasion</p>
        </div>
        <img className='w-96 rounded-xl ' src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <p className='absolute bottom-16 left-[45%] animate-bounce'>Scroll to see Recipe's</p>
      
   
      </div>
    <Tags setExcludeTags={setExcludeTags} excludeTags={excludeTags} setIncludeTags={setIncludeTags} includeTags={includeTags} />

    <div className='flex flex-col items-center p-2'>
  
      
      <div className='flex justify-center flex-wrap gap-6'>
      {
          loading ? <p  className='w-full  flex justify-center items-center  text-red-700 font-bold text-xl'>Loading</p> :

          !err == "" ? <div className='w-full flex justify-center items-center  text-red-700 font-bold text-xl'>{err}</div>
          :

        data?.recipes?.map((item,idx)=>(
          <RecipeCards key={item.id} id={item.id} image={item.image} title={item.title} summ={item.summary}/>
        ))
      }
      </div>
    
    </div>
    
      </>
  )
}

export default Home