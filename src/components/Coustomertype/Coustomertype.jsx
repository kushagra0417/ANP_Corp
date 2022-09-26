import React from 'react'

const LgCoustomertype = () => {
  return (
    <div className='flex gap-1 mt-16'style={{ height: "32rem" }}>
    <div className='w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>RESIDENTIAL</div>
      <div></div>
    </div>
    <div className='w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>COMMERCIAL</div>
      <div></div>
    </div>
    <div className=' w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>HOSPITALITY</div>
      <div></div>
    </div>
  </div>
  )
}

const SmCoustomertype = () => {
  return (
    <div className='flex gap-1 mt-16'style={{ height: "20rem" }}>
    <div className='w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>RESIDENTIAL</div>
      <div></div>
    </div>
    <div className='w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>COMMERCIAL</div>
      <div></div>
    </div>
    <div className=' w-1/3 h-full bg-gray-200 flex justify-center items-center'>
      <div className='text-lg text-red-500'>HOSPITALITY</div>
      <div></div>
    </div>
  </div>
  )
}
const Coustomertype = () => {
  return (
    <div>
    <div className='hidden md:block'>
      <LgCoustomertype/>
    </div>
    <div className='md:hidden'>
      <SmCoustomertype/>
      </div>
      </div>
  )
}

export default Coustomertype