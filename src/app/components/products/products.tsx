import React from 'react'
import Image from 'next/image'
function products() {
    return (
        <div className='h-auto max-w-[1200px] mx-auto my-5 tablet:mt-2 flex flex-col items-center gap-20 '>
            <h2 className='font-bold text-[36px] leading-[48px]'>Our Products</h2>
            <div className='flex gap-5 md3:flex-col'>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%]'>
                    <div className='relative'>
                        <Image src='/images/image 1.svg' alt='product image1' width={285} height={301} />
                        <div className='h-[48px] w-[48px] bg-[#E97171] absolute top-3 right-3 rounded-full flex justify-center items-center text-white'><p className='font-medium text-base'>-30%</p>
                        </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Syltherine</h2>
                        <p className='font-medium text-base opacity-60'>Stylish cafe chair</p>
                        <span className='flex items-center gap-5'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 2.500.00</p>
                            <s className='font-normal text-base opacity-55'>Rp 3.500.000</s>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%]'>
                    <Image src='/images/image 2.svg' alt='product image2' width={285} height={301} />
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Leviosa</h2>
                        <p className='font-medium text-base opacity-60'>Stylish cafe chair</p>
                        <span className='flex items-center gap-5'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 2.500.00</p>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%] md2:hidden'>
                    <div className='relative'> 
                    <Image src='/images/image 3.svg' alt='product image3' width={285} height={301} />
                    <div className='h-[48px] w-[48px] bg-[#E97171] absolute top-3 right-3 rounded-full flex justify-center items-center text-white'><p className='font-medium text-base'>-50%</p>
                    </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Lolito</h2>
                        <p className='font-medium text-base opacity-60'>Luxury big sofa</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 7.000.000</p>
                            <s className='font-normal text-sm opacity-55'>Rp 14.000.000</s>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%] lg2:hidden'>
                    <div className='relative'>
                    <Image src='/images/image 4.svg' alt='product image4' width={285} height={301} />
                    <div className='h-[48px] w-[48px] bg-[#2EC1AC] absolute top-3 right-3 rounded-full text-white flex justify-center items-center'>
                        <p className='font-medium text-base'>New</p>
                    </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Respira</h2>
                        <p className='font-medium text-base opacity-60'>Outdoor bar table and stool</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 500.000</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 md3:flex-col'>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%]'>
                    <Image src='/images/image 9.svg' alt='product image9' width={285} height={301} />
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Grifo</h2>
                        <p className='font-medium text-base opacity-60'>Night lamp</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 1.500.000</p>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%]'>
                    <div className='relative'>
                    <Image src='/images/image 6.svg' alt='product image6' width={285} height={301} />
                    <div className='w-12 h-12 bg-[#2EC1AC] absolute top-3 right-3 rounded-full flex justify-center items-center text-white'>
                        <p className='font-medium text-base'>New</p>
                    </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Muggo</h2>
                        <p className='font-medium text-base opacity-60'>Small mug</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 150.000</p>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%] md2:hidden'>
                    <div className='relative'>
                        <Image src='/images/image 7.svg' alt='product image6' width={285} height={301} />
                        <div className='h-[48px] w-[48px] bg-[#E97171] absolute top-3 right-3 rounded-full flex justify-center items-center text-white'><p className='font-medium text-base'>-50%</p>
                        </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Pingky</h2>
                        <p className='font-medium text-base opacity-60'>Cute bed set</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 7.000.000</p>
                            <s className='font-normal text-base opacity-55'>Rp 14.000.000</s>
                        </span>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] hover:cursor-pointer hover:bg-[#3A3A3A] hover:opacity-[72%] lg2:hidden'>
                    <div className='relative'>
                    <Image src='/images/image 8.svg' alt='product image6' width={285} height={301} />
                    <div className='w-[48px] h-[48px] bg-[#2EC1AC] text-white absolute top-3 right-3 rounded-full flex justify-center items-center'>
                        <p className='font-medium font-base'>New</p>
                    </div>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-3 '>
                        <h2 className='font-semibold text-2xl'>Potty</h2>
                        <p className='font-medium text-base opacity-60'>Minimalist flower pot</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-semibold text-xl leading-[30px]'>Rp 500.000</p>
                        </span>
                    </div>
                </div>
            </div>
                <button className='border border-[#B88E2F] text-[#B88E2F] px-20 py-2'>Show More</button>
        </div>
    )
}

export default products