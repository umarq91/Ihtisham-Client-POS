import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-around bg-gray-700'>

        <div>
            <Link to='/' className='hover:scale-105 hover:text-blue-300 text-[24px]'>
            Home
            </Link>
        </div>

    <div className='flex gap-5 text-center items-center'>
       
     
       <Link className='text-[17px] hover:scale-105 hover:text-blue-300' to='/products'>Products </Link>
       <Link className='text-[17px] hover:scale-105 hover:text-blue-300' to='/relations'>Relations </Link>
       <Link className='text-[17px] hover:scale-105 hover:text-blue-300' to='/stocks'> Stocks </Link>

       

     


    </div>

        </div>


    </div>
  )
}

export default Navbar