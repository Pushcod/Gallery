import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black h-[508px] py-4 flex flex-col justify-center'>
            <div className=" container mx-auto">
                <div className="w-full flex justify-between items-center">
                    <div className="w-full h-full">
                        <Link href={'/'} className='text-[200px] text-white uppercase leading-none'>MY GALLERY</Link>
                    </div>
                    <div className="w-[150px] flex flex-col gap-5">
                        <Link href={''} className='text-4xl text-white uppercase '>Gallery</Link>
                        <Link href={''} className='text-4xl text-white uppercase '>Author</Link>
                    </div>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer