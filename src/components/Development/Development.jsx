import React from 'react'

const LgDevelopment = () => {
  return (
    <div className='container mx-auto  w-full' style={{ height: "32rem" }}>
          
    <div className='w-full mt-24 flex justify-center gap-20 px-36'>
      <div className='relative w-1/2'>
        <div className='p-36 bg-gray-200 rounded-full absolute top-0 right-0 '>
          <div className='absolute text-red-500 top-32 right-24'>
          ONGOING<br />
          DEVELOPMENT
          </div>
        </div>
        <div className='p-36 rounded-full border-2 border-gray-200 absolute -top-0.5  -right-6'>
        </div>
      </div>
      <div className='w-1/2 flex flex-col gap-20'>
      <div className=' flex flex-col gap-5'>
      <div className='text-6xl'>
        2.7 millon<br />
        sq.ft.
      </div>
      <div className='text-sm'>
        of architectural brilliance<br />
        under development
      </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-6xl text-red-500'>
            21+<br />
            Projects
          </div>
          <div className='text-sm'>
            completed projects Delivered<br />
            before committed dates
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
const SmDevelopment = () => {
  return (
    <div className='w-full'>
    <div style={{ height: "16rem" }} className="mt-5 relative flex flex-col items-center">
    <div className='w-full '>
    <div className='p-28 bg-gray-200 rounded-full absolute top-0 right-20 '>
      <div className='absolute text-red-500 top-24 right-16'>
      ONGOING<br />
      DEVELOPMENT
      </div>
    </div>
    <div className='p-28 rounded-full border-2 border-gray-200 absolute -top-0.5  right-16'>
    </div>
      </div>
      
    </div>
    <div className='w-full flex flex-col gap-5 items-center'>
      <div className=' flex flex-col gap-2 '>
      <div className='text-4xl'>
        2.7 millon<br />
        sq.ft.
      </div>
      <div className='text-sm '>
        of architectural brilliance<br />
        under development
      </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-4xl text-red-500'>
            21+<br />
            Projects
          </div>
          <div className='text-sm'>
            completed projects <br />Delivered<br/>
            before committed dates
          </div>
        </div>
      </div>
      </div>
  )
}

const Development = () => {
  return (
    <>
      <div className=' hidden md:block'>
        <LgDevelopment/>
      </div>
      <div className='  md:hidden'>
        <SmDevelopment/>
      </div>
    </>
  )
}

export default Development