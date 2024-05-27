import React from 'react'

export default function Bai5() {
  return (
    <div className='p-5'>
        <button className='h-9 rounded-3xl text-white bg-blue-500 px-4 hover:bg-blue-700 focus:bg-blue-900 outline-none'>
          Submit
        </button>
        <div className='w-[600px] h-[400px] bg-blue-200 flex justify-center items-center'>
          <div className='w-[400px] h-[300px] bg-blue-400 relative'>
              Relative Parent
              <button className='absolute left-0 bottom-0 bg-blue-700'>
                    Absolute Children
              </button>
          </div>

        </div>
    </div>
  )
}
