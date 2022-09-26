import React from 'react'
import Activecomp from '../components/Active/Activecomp'
import Coustomertype from '../components/Coustomertype/Coustomertype'
import Development from '../components/Development/Development'
import Footer from '../components/Footer/Footer'
import Portfolio from '../components/Portfolio/Portfolio'





const Mainpage = () => {
    return (
      <>
        <Activecomp />
        <div className='w-full mt-48 container mx-auto px-4 lg:px-0' >
        <hr className='border-t-2 border-gray-500' />
        </div>
        <Development />
        <Coustomertype />
        <Portfolio />
        <Footer/>
       
     </>
  )
}

export default Mainpage