import React from 'react'
import Building from "../../Assets/Building.png"

const LgPortfolio = () => {
  return (
    <div style={{ background: "#141A24" }} className="w-full pb-5">
          <div className='container mx-auto px-4 w-full flex gap-20'>
          <div className=' py-16 w-1/4 md:w-1/2 lg:w-3/5'>
          <div style={{ color: "#8B8D8F" }} className="pb-2">OUR PORTFOLIO</div>
            <hr style={{ color: "#8B8D8F", backgroundColor: "#8B8D8F", height: "5" }} />
            <div className='text-5xl md:text-7xl lg:text-8xl' style={{color:"#292E37"}}>
              strategically<br />
              spread divers<br />
              real estate<br />
              portfoli
            </div>
        </div> 
        <div className=' w-3/4 md:w-1/2 lg:w-2/5 flex flex-col items-center gap-3'>
              <img src={Building} alt="building" className='h-96 w-full lg:w-1/2' />
              <div className='text-sm text-white w-full lg:w-1/2 text-justify'>
              The ANP legacy spans across 2 decades of prime real estate portfolio consisting of 21+ completed projects, 2.75 million sq. ft. of architecture under development and 3.75 million sq. ft. of revolutionary conception launching this year.
              </div>
              <div className='flex gap-2 p-2.5 bg-white rounded-lg w-full lg:w-1/2'>
                          <h6 className='w-1/2'>Enquire now</h6>
                          <input type="text" className='border-black border-b-2 bg-transparent  focus:outline-none w-1/2' />
                      </div>
              
        </div>
          </div>
          
        </div>
  )
}

const SmPortfolio = () => {
  return (
    <div style={{ background: "#141A24" }} className="w-full pb-5">
      <div className='container mx-auto px-4 w-full'>
          <div className=' py-16 w-full'>
      <div style={{ color: "#8B8D8F" }} className="pb-2">OUR PORTFOLIO</div>
        <hr style={{ color: "#8B8D8F", backgroundColor: "#8B8D8F", height: "5" }} />
        <div className='text-5xl md:text-7xl lg:text-8xl' style={{color:"#292E37"}}>
          strategically
          spread divers
          real estate
          portfoli
        </div>
        </div> 
        <div className=' w-full flex flex-col items-center gap-3'>
              <img src={Building} alt="building" className='h-96 w-2/3' />
              <div className='text-sm text-white w-2/3 text-justify'>
              The ANP legacy spans across 2 decades of prime real estate portfolio consisting of 21+ completed projects, 2.75 million sq. ft. of architecture under development and 3.75 million sq. ft. of revolutionary conception launching this year.
              </div>
              <div className='flex gap-2 p-2.5 bg-white rounded-lg w-2/3'>
                          <h6 className='w-1/2'>Enquire now</h6>
                          <input type="text" className='border-black border-b-2 bg-transparent  focus:outline-none w-1/2' />
                      </div>
              
        </div>
      </div>
    </div>
   )
} 

const Portfolio = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <LgPortfolio/>
      </div>
      <div className=' md:hidden'>
        <SmPortfolio/>
      </div>
    </div>
  )
}

export default Portfolio