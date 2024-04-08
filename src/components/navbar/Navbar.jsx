import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='bg-white py-2 px-4 flex justify-between shadow-md'>
        <Link to={"/"}>Recipe</Link>
        <p>My List</p>
        </div>
  )
}

export default Navbar