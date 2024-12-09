import React from 'react'
function room() {
    return (
        <div className='bg-[#FCF8F3] h-[80vh] flex items-center md2:h-auto md:justify-center'>
            <div className='flex items-center ms-14'>
                <div className='flex flex-col md2:items-center items-center gap-8 md2:py-10'>
                    <h1 className='font-bold text-[40px] leading-[48px] md2:text-center'>50+ Beautiful rooms
                        inspiration</h1>
                    <p>Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</p>
                    <button className='bg-[#B88E2F]  text-white px-3 py-2 w-[175px]'>Explore Now</button>
                </div>
                <div className='mt-28 md2:hidden'>
                
                </div>
            </div>
        </div>
    )
}

export default room