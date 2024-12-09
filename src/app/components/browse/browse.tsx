import React from 'react'
import Image from 'next/image'

function browse() {
  return (
    <div className='tablet:h-auto tablet:my-20 tablet:max-w-[1200px] tablet:mx-auto tablet:flex tablet:flex-col tablet:gap-16 
    flex flex-col gap-16 '>
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-[32px] leading-[48px]'>Browse The Range</h2>
            <p className='tablet:font-normal tablet:text-xl font-normal text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='tablet:flex tablet:justify-between '>
            <div className=' tablet:flex-col tablet:items-center tablet:gap-5 hidden tablet:flex'>
                <Image src='/images/dining.svg' alt='living room' width={381} height={480}/>    
                <h4 className='font-medium text-2xl'>Dining</h4>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <Image src='/images/living room.svg' alt='dining' width={381} height={480}/>
                <h4 className='font-medium text-2xl'>Living room</h4>
            </div>
            <div className='tablet:flex tablet:flex-col tablet:gap-5 tablet:items-center hidden'>
                <Image src='/images/bedroom.svg' alt='bedroom' width={381} height={480}/>
                <h4 className='font-medium text-2xl'>Bedroom</h4>
            </div>
            <div className='flex justify-center pt-10 tablet:hidden'>
                <button className='py-3 px-4 border border-[#B88E2F]'>View all Browse</button>
            </div>
        </div>
    </div>
  )
}

export default browse