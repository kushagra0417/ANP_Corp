import React, { useState ,useEffect} from "react"
import Slider from "react-slick";
import front from "../../Assets/front.png"
import Logo from "../../Assets/Logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Header.css"



import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlinePlus,AiOutlineClose} from "react-icons/ai"
import Droupdown from "./Droupdown";

const Lgheader = () => {

  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    adaptiveHeight:false,
    
    speed: 500,
    slideToScroll: 1
};
  return (
    <div className="relative w-full  " style={{ height: "35rem" }}>
          <div className='w-full'>
            <div className="absolute z-30 left-0 top-0 flex  h-16 gap-10 w-full">
          <div className='w-1/2 pt-2.5 pb-2.5  pl-20 flex justify-between items-center'>
              <div>  <img src={Logo} alt='logo' className='w-1/2 h-1/2 ' /></div>
             
             <div><h6 className='text-white underline hover:cursor-pointer'><a href='#' >Explore Project</a></h6></div> 
          </div>
          <div className='  w-1/2 pt-2.5 pb-2.5 flex justify-around items-center bg-white '>
          
            <div className='flex items-end'><Droupdown name="Residential" /> <BiChevronDown/></div> 
            
            <div className='flex items-end'><Droupdown name="Hospitality" /> <BiChevronDown/></div> 
            <div className='flex items-end'><Droupdown name="Commercial"/> <BiChevronDown/></div> 
              
              <div><h6 className='text-black  hover:cursor-pointer'><a href='#' className='text-red-500'><GiHamburgerMenu/></a></h6></div> 
              
          </div>
          
            </div>
            <div className='absolute z-30 left-32 top-48 flex flex-col'>
                  <h4 className='text-lg text-white'>WE ARE PARTICULARS</h4>
                  <h4 className='text-5xl text-white'>Creating Spaces<br/>that are true<br/>masterpieces.</h4>
              </div>
              <div className="absolute z-30 left-0 bottom-0 flex  h-16 gap-10 w-full">
                <div className='w-1/2  pt-2.5 pb-2.5  flex justify-around items-center  bg-white'>
                      <div className='flex gap-2 items-center'>
                          <h6 className='text-red-500 underline '>GET IN TOUCH</h6>
                          <div className='rounded-full p-2 bg-gray-300 text-red-500'>
                          <AiOutlinePlus />
                          </div>
                          

                      </div>
                      <div className='flex gap-2 p-2.5 bg-gray-300 rounded-lg '>
                          <h6>Enquire now</h6>
                          <input type="text" className='border-black border-b-2 bg-transparent  focus:outline-none ' />
                      </div>
                             
             
                  </div>
                  
          <div className='  w-1/2 pt-2.5 pb-2.5 flex justify-around items-center '>
   
              
          </div>
          
            </div>
              
          </div>
          <div className="absolute h-full w-full z-20" style={{ background: "#01080D", opacity: "49%"}}/>
      <Slider {...settings}   >  
      <div className="w-full h-full ">
      
      <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
        <div className="w-full h-full ">
        
        <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
         <div className="w-full h-full ">
        
        <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
        <div className="w-full h-full ">
        
        <img src={front}  alt="poster" className="w-full h-full"/> 
          </div>
        
      </Slider>  
         
      </div>
  )
}

const MdSmheader = () => {
  const settings = {
   
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    slideToScroll: 1
};
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return(
    <div className="relative w-full  " style={{ height: "20rem" }}>
      
    <div className="absolute z-30 left-0 top-0 flex  h-16 gap-10 w-full">
    <div className='w-full pt-2.5 pb-2.5  flex justify-around items-center'>
        <div>  <img src={Logo} alt='logo' className='w-1/2 h-1/2 ' /></div>
           
          <div className='flex gap-3 w-1/4 justify-end items-center'>
          
            <h6 className='text-black  hover:cursor-pointer bg-white px-2.5 py-2 rounded-lg flex items-center' onClick={handleToggle}><a href='#' className='text-red-500 '> {navbarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}</a></h6>
            <div className={`${navbarOpen?"block":"hidden"}`}>
            
              <ul className={`bg-white flex flex-col gap-3 absolute top-0 right-0 h-72 w-40 md:w-1/2 items-center justify-around `}>
              <div><h6 className='text-black   hover:cursor-pointer'><a href='#' className='flex items-end' >Explore Projects<BiChevronDown/></a></h6></div> 
            <div><h6 className='text-black   hover:cursor-pointer'><a href='#' className='flex items-end' >Residential<BiChevronDown/></a></h6></div> 
            <div><h6 className='text-black   hover:cursor-pointer'><a href='#' className='flex items-end'>Hospitality<BiChevronDown/></a></h6></div> 
                <div><h6 className='text-black   hover:cursor-pointer'><a href='#' className='flex items-end'>Commercial<BiChevronDown /></a></h6></div>
                <div onClick={handleToggle}><h6 className='text-black   hover:cursor-pointer'><a href='#' className='flex items-end'>Back</a></h6></div>   
              </ul>
              </div>
          </div> 
          
    </div>
      </div>
      <div className="absolute h-full w-full z-20" style={{ background: "#01080D", opacity: "49%" }} />
      <Slider {...settings}     >  
      <div className="w-full h-full ">
      
      <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
        <div className="w-full h-full ">
      
      <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
        <div className="w-full h-full ">
      
        <img src={front}  alt="poster" className="w-full h-full"/> 
        </div>
        <div className="w-full h-full ">
      
        <img src={front}  alt="poster" className="w-full h-full"/> 
          </div>
       </Slider> 
      <div className='w-full  pt-2.5 pb-2.5  flex flex-col gap-3 md:gap-0 md:flex-row justify-around items-center  bg-white'>
      <div className='flex gap-2 items-center '>
          <h6 className='text-red-500 underline '>GET IN TOUCH</h6>
          <div className='rounded-full p-2 bg-gray-300 text-red-500'>
          <AiOutlinePlus />
          </div>
          

      </div>
      <div className='flex gap-2 p-2.5 bg-gray-300 rounded-lg '>
          <h6>Enquire now</h6>
          <input type="text" className='border-black border-b-2 bg-transparent  focus:outline-none ' />
      </div>
             

  </div>
    </div>
  )
}

const Header = () => {
  
  return (
    <>
      <div className='hidden lg:block'>
        <Lgheader/>
      </div>
      <div className='lg:hidden'>
        <MdSmheader/>
      </div>
    </>
  )
}

export default Header