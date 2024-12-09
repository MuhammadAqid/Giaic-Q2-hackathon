import React from 'react'
import Image from 'next/image'
function hero() {
  return (
    <div className='tablet:overflow-hidden tablet:relative'>
      <div className='h-[616.83px] relative w-full '>
        <Image src='/images/hero.svg' alt='hero' width={1440} height={716.83}
        className='w-full h-auto'/>
        <div className='w-[593px] h-[393px] bg-[#FFF3E3] px-10 py-12 rounded-xl absolute top-44 right-16 ipad:top-[40px] ipad:left-[30px] ipad:w-[493px] mobile:left-10 mobile:w-[293px] mobile:px-6 mobile:py-8'>
          <h6 className='font-semibold font-base tracking-[3px] ipad:text-sm ipad:tracking-[3px] mobile:text-xs'>New Arrival</h6>
          <h1 className='font-bold text-[52px] leading-[65px] text-[#B88E2F] mobile:text-3xl mobile:leading-[45px] '>Discover Our <br /> New Collection</h1>
          <p className='font-medium text-lg mobile:text-base ipad:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='bg-[#B88E2F] text-white px-[72px] py-[25px] mt-8 font-bold'>BUY NOW</button>
        </div>
      </div>

    </div>
  )
}

export default hero