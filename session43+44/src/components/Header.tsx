import React from 'react'
import header from './header.scss'
export default function Header() {
  return (
    <div >
        <div className='flex'>
            <form action="" className=''>
              <div className='mb-4'>
                <label htmlFor="">Email</label>
                <input type="email" 
                placeholder='Placeholder content'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus: ring-2 focus: ring-blue-500'/>
              </div>
              <div className='mb-6'>
                <label htmlFor="">Password</label>
                <input type="email" 
                placeholder='Placeholder content'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus: ring-2 focus: ring-blue-500'/>
              </div>
              <div className='flex justify-between mb-6 items-center'>
                <a href="#" className='text-sm text-blue-500 hover:underline'>
                  Forgot Password?
                </a>
              </div>
              
                <button type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-md hover: bg-blue-700'
                >
                      Login
                </button>
              
            </form>
            <div className='mt-6 text-center'>
              <span className='text-gray-600'>or</span>
            </div>
            <button type='submit'
                className='w-full mt-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'
                >
                      Register
            </button>
        </div>
    </div>
  )
}
