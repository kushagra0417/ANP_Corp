import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";





import Building2 from "../../Assets/Building2.png"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
SwiperCore.use([Autoplay])
const LgFooter = () => {
  

  return (
    <div style={{ background: "#141A24" ,height:" 40rem" }} className="w-full pt-36 flex items-end">
      <div className="w-4/5 h-full relative ">
        
      <Swiper   autoplay={{
        delay: 2500
      }} className=" mySwiper h-full">
      <SwiperSlide className='h-full'> <div className=' w-full  h-full '>
               <img src={Building2 } alt="building" className='h-full w-full'/>
          </div >
          </SwiperSlide>
          <SwiperSlide> <div className=' w-full  h-full '>
          <img src={Building2 } alt="building" className='h-full w-full'/>
     </div >
          </SwiperSlide>
          <SwiperSlide> <div className=' w-full  h-full '>
          <img src={Building2 } alt="building" className='h-full w-full'/>
     </div >
          </SwiperSlide>
          <SwiperSlide> <div className=' w-full  h-full '>
          <img src={Building2 } alt="building" className='h-full w-full'/>
     </div >
 </SwiperSlide>
      </Swiper>
          
      <div className='w-full absolute bottom-0 right-0 md:left-5 lg:left-0  flex justify-end items-end gap-80 z-10'>
        <div className='w-1/2 '>
          <div className='pb-5'>
          <h1 className='text-5xl text-white'>ANP Atlant</h1>
          <hr />
          <h5 className='text-white'>2,3 & 4 BHK homes at Balewadi</h5>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='p-5 bg-red-500 text-white'>Open Project</div>
          <div></div>
        </div>
      </div>
    </div>
    <div className='w-1/5'>
    
    <div className=' flex flex-col items-center justify-center gap-2'>
      <div className='p-3 border-2 border-white  rounded-full text-white'>
        <AiOutlineArrowRight/>
      </div>
      <div className='p-3 border-2 border-white  rounded-full text-white'>
        <AiOutlineArrowLeft/>
      </div>
      </div>
      </div>
  </div>
  )
}

const SmFooter = () => {
  return (
    <div style={{ background: "#141A24" ,height:" 16rem" }} className="w-full pt-2 flex items-end">
      <div className="w-full h-full relative ">
      <Swiper   autoplay={{
        delay: 2500
      }} className=" mySwiper h-full">
      
      <SwiperSlide className='h-full'> <div className=' w-full  h-full '>
      <img src={Building2 } alt="building" className='h-full w-full'/>
 </div >
          </SwiperSlide>
          <SwiperSlide className='h-full'> <div className=' w-full  h-full '>
          <img src={Building2 } alt="building" className='h-full w-full'/>
     </div >
          </SwiperSlide>
          <SwiperSlide className='h-full'> <div className=' w-full  h-full '>
          <img src={Building2 } alt="building" className='h-full w-full'/>
     </div >
     </SwiperSlide>
      </Swiper>    
      <div className='w-full absolute bottom-0 right-0 flex justify-end items-end gap-32 z-10 pl-2'>
        <div className='w-1/2 '>
          <div className='pb-5'>
          <h1 className='text-5xl text-white'>ANP Atlant</h1>
          <hr />
          <h5 className='text-white'>2,3 & 4 BHK homes at Balewadi</h5>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='p-5 bg-red-500 text-white'>Open Project</div>
          <div></div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <LgFooter/>
      </div>
      <div className=' md:hidden'>
        <SmFooter/>
      </div>
    </div>
  )
}

export default Footer