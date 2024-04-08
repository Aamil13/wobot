import React from 'react'

const Tags = ({setExcludeTags,excludeTags,setIncludeTags,includeTags}) => {

    const handleClick=()=>{
        const indexIncluder = includeTags.indexOf("vegetarian");
        const indexExclude = excludeTags.indexOf("vegetarian");

        if (indexIncluder > -1) {
            const newInclude = includeTags.filter(tag => tag !== "vegetarian");
            setIncludeTags(newInclude);

            const newExclude = [...excludeTags, "vegetarian"];
            setExcludeTags(newExclude);
        } else if (indexExclude > -1) {
            const newExclude = excludeTags.filter(tag => tag !== "vegetarian");
            setExcludeTags(newExclude);

            const newInclude = [...includeTags, "vegetarian"];
            setIncludeTags(newInclude);
        } else {
            const newInclude = [...includeTags, "vegetarian"];
            setIncludeTags(newInclude);
        }
    }

  return (
    <div className='flex justify-center p-2 '>
        <div className=' flex justify-center gap-8'>
            <p onClick={()=>handleClick()} className={`border-2 rounded-2xl py-1 px-4 ${includeTags.includes("vegetarian")  ? "bg-green-400" : excludeTags.includes("vegetarian") ? "bg-red-500" : ""}`}>vegetarian</p>
        </div>
    </div>
  )
}

export default Tags