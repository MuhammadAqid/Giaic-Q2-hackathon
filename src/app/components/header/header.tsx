import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPersonAdd } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

function header() {
  return (
    <div className='flex h-100 justify-between items-center mt-7 max-w-[1200px] mx-auto mb-8'>
      <div className='flex gap-2 items-center '>
        <Image src='/images/MeubelHouse_Logos.svg' alt='MeubelHouse_Logos' width={50} height={32} />
        <Link href='#'><h1 className='font-bold text-3xl'>Furniro</h1></Link>
      </div>
      <div className='hidden tablet:flex '>
        <ul className='flex gap-16 font-poppins font-medium opacity-85'>
          <li><Link href='#'>Home</Link></li>
          <li><Link href='#'>Shop</Link></li>
          <li><Link href='#'>About</Link></li>
          <li><Link href='#'>Contact</Link></li>
        </ul>
      </div>
      <div className='gap-9 hidden tablet:flex'>
        <GoPersonAdd className='w-7 h-7'/>
        <CiSearch className='w-7 h-7' />
        <FaRegHeart className='w-7 h-7' />
        <AiOutlineShoppingCart className='w-7 h-7' />
      </div>
      <div className='me-3 tablet:hidden'>
      <RxHamburgerMenu className='w-10 h-10'/>
      </div>
    </div>
  )
}

export default header