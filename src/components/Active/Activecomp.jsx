import React from 'react'
import Active from "../../Assets/active.png"
import Res1 from "../../Assets/Res1.png";
import Res2 from "../../Assets/Res2.png";

const LgActivecomp = () => {
  return (<div>
    <div className=" w-full "  style={{ height: "42rem" }}>
    <br /><br />

    <div className=' w-full h-20 flex justify-between    '>
              <div className='w-1/4'></div>
              <img src={Active} alt='active' className='w-3/4 ' />
    </div>
    <div className='relative container mx-auto px-4  w-full flex justify-between items-end h-full'>
      <div className='w-1/2 '>
        <h6 className='text-sm text-red-500'>WHO WE ARE</h6>
        <h3 className='text-5xl'> We are<br/>committed<br/>to delivering<br/>the best, to<br/>those who<br/>seek the best<br/>in life.</h3>
      </div>
      <div className='w-1/2 h-full'>
        <div className='  absolute top-5 right-56'>
         
              <img src={Res1}  alt="Res1" className='h-88 w-72  '/>
          
          <div className='text-white text-xs p-20   rounded-full bg-red-500 absolute top-5 -right-20'>
            <div className='absolute top-16 right-10'>
              More<br />
              Information
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 absolute bottom-2 right-5'>
          <img src={Res2} alt="Res1" className='h-52 w-84  ' />
          <div className='text-right'>
            ANP Corp aims to reach newer horizos with<br />
            every project it creates and introduce innovations<br />
            in the industry.Setting new standards in the<br />
            industry with sheer hard work and relentlessly<br />
            adopting new trends while executing.
            </div>
            
          </div>
          
        </div>
        
      </div>
     
     
          </div>
  </div>
  )
} 

const SmActivecomp = () => {
  return (
    <div>
      <div className="container mx-auto px-4 w-full mt-40">
        <div className='w-full flex flex-col items-center '>
         <div>
        <h6 className='text-base text-red-500'>WHO WE ARE</h6>
            <h3 className='text-5xl'> We are<br />committed<br />to delivering<br />the best, to<br />those who<br />seek the best<br />in life.</h3>
            </div> 
        </div>
        <div className='w-full  h-full relative mt-4'>
        <div className='  flex justify-center'>
                
              <img src={Res1}  alt="Res1" className='h-44 w-36  '/>
          
          <div className='text-white text-xs p-10   rounded-full bg-red-500 absolute top-5 right-12'>
            <div className='absolute top-6 right-2'>
              More<br />
              Information
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 absolute -bottom-48 right-2  mb-4'>
          <img src={Res2} alt="Res1" className='h-24 w-44  ' />
          <div className=' text-xs text-right w-44'>
            ANP Corp aims to reach newer horizos with
            every project it creates and introduce innovation
            in the industry.Setting new standards in the
            industry with sheer hard work and relentlessly
            adopting new trends while executing.
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

const Activecomp = () => {
  return (
    <>
      <div className="hidden md:block">
        <LgActivecomp/>
      </div>
      <div className="md:hidden">
        <SmActivecomp/>
      </div>
    </>
  )
}

export default Activecomp