import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function footer() {
  return (
    <div className='tablet:max-w-[1200px] tablet:mx-auto md2:mt-10 mobile:mt-10 tablet:mt-[400px] tablet:border-t tablet:pt-10 tablet:flex tablet:flex-col tablet:gap-16  '>
      <div className='tablet:flex tablet:justify-between tablet:flex-row flex flex-col items-center '>
        <div className='tablet:flex tablet:flex-col tablet:gap-12 pb-14 '>
            <h2 className='tablet:font-bold tablet:text-2xl font-bold text-5xl'>Funiro.</h2>
            <p className='tablet:font-normal tablet:text-base tablet:opacity-60 font-normal text-2xl opacity-55 '>400 University Drive Suite 200 Coral <span className='block'>Gables,</span>
            <span>FL 33134 USA</span></p>
        </div>
        <div className='flex gap-52 mb-8 '>
        <div className='tablet:flex tablet:gap-12 tablet:flex-col flex flex-col gap-12' >
          <h3 className='tablet:font-medium tablet:text-base tablet:opacity-50 font-semibold text-2xl opacity-50'>Links</h3>
            <ul className='flex flex-col gap-10'>
              <li><Link href='#'>Home</Link></li>
              <li><Link href='#'>Shop</Link></li>
              <li><Link href='#'>About</Link></li>
              <li><Link href='#'>Contact</Link></li>
            </ul>
        </div>
        <div className='tablet:flex tablet:flex-col tablet:gap-12 flex flex-col gap-12 '>
          <h3 className='tablet:font-medium tablet:text-base tablet:opacity-50 font-semibold text-2xl opacity-50'>help</h3>
          <ul className='flex flex-col gap-10'>
            <li><Link href='#'>Payments Options</Link></li>
            <li><Link href='#'>Returns</Link></li>
            <li><Link href='#'>Privacy Policies</Link></li>
          </ul>
        </div>
        </div>
        <div className='tablet:flex tablet:flex-col tablet:gap-12 my-14 flex flex-col  gap-12 '>
          <h3 className='tablet:font-medium tablet:text-base tablet:opacity-50 font-semibold text-2xl opacity-50'>Newsletter</h3>
          <div className='tableet:flex tablet:gap-6 flex gap-6 '>
          <input type="email" name='email' id='email' placeholder='Enter Your Email Address'  className='tablet:bg-transparent tablet:border-b tablet:border-black tablet:pe-7 tablet:font-medium tablet:text-sm tablet:p-1 border-b border-black pe-8 font-semibold p-1'/>
          <button className='tablet:border-b tablet:border-black tablet:font-medium tablet:text-sm border-b border-black font-semibold text-lg opacity-90'>Subscribe</button>
          </div>
        </div>

    </div>
    <div className='tablet:border-t tablet:block border-t flex justify-center'>
      <p className='tablet:font-normal tablet:text-base tablet:mt-8 font-medium text-2xl mt-8 opacity-75'>2023 furino. All rights reverved</p>
    </div>
    </div>
  )
}

export default footer
