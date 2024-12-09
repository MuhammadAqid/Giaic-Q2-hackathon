import React from 'react'
import Image from 'next/image'
function furniture() {
  return (
    <div className='my-10 flex flex-col gap-10 h-[80vh]   md2:hidden'>
      <div className='flex flex-col items-center gap-5 '>
        <p className='font-semibold text-xl opacity-45'>Share your setup with</p>
        <h2 className='font-bold text-[48px] leading-[48px]'>#FuniroFurniture</h2>
      </div>
      <div className='flex items-center relative lg2:ms-[-50px]' >
        <span className='absolute top-0 lg2:hidden'>
        <Image src='/images/Rectangle 36.svg' alt='Rectangle' width={70} height={50}/>
        </span>
        <span className='absolute top-[350px] lg2:hidden '>
        <Image src='/images/Rectangle 37.svg' alt='Rect' width={200} height={100} className=''/>
        </span>
        <span className='absolute top-[50px] left-[85px]'>
        <Image src='/images/Rectangle 38.svg' alt='rect' width={420} height={400} />
        </span>
        <span className='absolute top-[350px] left-[205px]'>
        <Image src='/images/Rectangle 39.svg' alt='rect' width={300} height={230} />
        </span>
        <span className='absolute top-[95px] left-[520px]'>
        <Image src='/images/Rectangle 40.svg' alt='rect' width={330} height={300} />
        </span>
        <span className='absolute left-[870px] top-[76px]'>
        <Image src='/images/Rectangle 42.svg' alt='rect' width={250} height={200}/>
        </span>
        <span className='absolute top-[390px] left-[870px]'>
        <Image src='/images/Rectangle 41.svg' alt='rect' width={178} height={200} />
        </span>
        <span className='absolute top-0 left-[1135px] xl:hidden'>
        <Image src='/images/Rectangle 45.svg' alt='' width={229} height={203}  />
        </span>
        <span className='absolute top-[390px] left-[1060px] xl:hidden'>
          <Image src='/images/Rectangle 44.svg' alt='rect' width={258} height={200}/>
        </span>
      </div>
    </div>
  )
}

export default furniture


















{/* <div className='flex items-center border relative'>
        <div className='flex flex-col gap-3 '>
          <span className='relative top-[0px] left-[0px]'>
          </span>
          <span>
          </span>
        </div>
        <div className='flex flex-col gap-8 '>
          </div>
          <div className=''>
          </div>
          <div className='flex flex-col gap-4'>
          </div>
          <div className=''>

          </div>
      </div> */}