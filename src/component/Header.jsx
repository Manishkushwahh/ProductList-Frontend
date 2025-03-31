import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const finalproduct = useSelector((store) => store.final);
  

  if(!finalproduct) return;

  return (
    <div className='px-5 py-8 text-sm shadow-xl'>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
            <button className='bg-blue-500 rounded-2xl px-2 py-1 text-white cursor-pointer'>
              <Link to="/">Home</Link></button>
            <button className='bg-blue-500 rounded-2xl px-2 py-1 text-white cursor-pointer'>
              <Link to="/combinedproduct">+ Add Products</Link></button>
            <button className='border rounded-2xl px-2 py-1 text-black'>{finalproduct.length + " "}- Products</button>
        </div>
        <div className='flex gap-2'>
          <button className='bg-green-400 px-2 py-1 rounded-xl cursor-pointer'>
            <Link to="/product/add">Insert Product</Link></button>
          <button className='bg-green-400 px-2 py-1 rounded-xl cursor-pointer'>
            <Link to="/material/add">Insert Material</Link></button>
          <button className='bg-green-400 px-2 py-1 rounded-xl cursor-pointer'>
            <Link to="/grade/add">Insert Grade</Link></button>
        </div>
        </div>
        <div className='mt-5'>
            <input 
            className='border border-xl box-border px-4 py-1 w-1/3 rounded-l-sm'
            type='text'
            placeholder='Search Product'>
            </input>
            <button className='border border-xl border-blue-500 bg-blue-500 px-5 py-1 rounded-r-sm cursor-pointer'>Search</button>
        </div>
    </div>
  )
}

export default Header