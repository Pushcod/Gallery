"use client"
import useIndex_gallery from '@/hooks/useIndex_gallery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Galleries = () => {

    const gallerysList = useIndex_gallery();

    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
                <div className="w-full flex justify-between gap-5">
                    <div className="w-full flex gap-5">
                        <ul className="w-full grid grid-cols-3 gap-6">
                        {gallerysList.map((item, index) => {
                        return (
                            <>
                            <li key={index} className="w-full  ">
                                <Link href={''}>
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL +item.attributes?.Image?.data.attributes?.url} className='w-full h-[560px] bg-white object-cover' width={1920} height={560}/>
                                </Link>
                            </li>
                            </>
                        );
                    })}
                        </ul>
                      </div>  
                </div>
            </div>
        </section>
    )
}

export default Galleries