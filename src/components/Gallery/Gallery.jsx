"use client"
import React from 'react'
import Image from 'next/image'
import useIndex_gallery from '@/hooks/useIndex_gallery'

const Gallery = () => {


  return (
    <section className='w-full py-10'>
        <div className="container mx-auto">
        

                        <div  className="w-full flex gap-12">
                
                <div className="w-full flex gap-8">
                    <div className=" flex flex-col gap-7">
                        <Image src={'/assets/img/1.jpeg'} className='w-[520px] h-[430px] bg-slate-500 object-cover' width={560} height={430}/>
                        <Image src={'/assets/img/2.jpeg'} className='w-[520px] h-[498px] bg-slate-500 object-cover' width={560} height={498}/>
                    </div>
                    <Image src={'/assets/img/3.jpeg'} className='w-[333px] h-[958px] bg-slate-500 object-cover' width={366} height={958}/>
                </div>
                <div className="w-full flex flex-col justify-between gap-7">
                    <div className=" flex flex-col gap-7">
                        <Image src={'/assets/img/4.jpeg'} className='w-[600px] h-[430px] bg-slate-500 object-cover' width={650} height={430}/>
                        <Image src={'/assets/img/5.jpeg'} className='w-[600px] h-[315px] bg-slate-500 object-cover' width={650} height={315}/>
                    </div>
                    <h1 className='text-[90px] text-white uppercase w-[650px] h-[106px]'>GALLERY</h1>
                </div>
            </div>

            
            
        </div>
    </section>
  )
}

export default Gallery