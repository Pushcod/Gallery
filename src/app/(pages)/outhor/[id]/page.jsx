"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import useSingleAuthor from '@/hooks/useSingleAuthor'

export default function page ({params})  {

    const detailAuthor = useSingleAuthor(params.id);
    
    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
            <div className="w-full mb-[30px] ">
                    <h2 className="w-full text-[100px] text-white flex justify-center">Author</h2>
                </div>
                <div className="w-full">
                    <div className="w-full flex gap-5">
                    
                    <div className="relative w-full">
                    {detailAuthor?.attributes?.paint?.data.attributes?.url ?
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.paint?.data.attributes?.url ?? '' )} className='w-full h-[462px] bg-zinc-700' width={1920} height={462}/>
                                :
                                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    }
                        </div>
                        
                    </div>
                    
                    <div className="w-full flex justify-between items-center">
                    {detailAuthor?.attributes?.Description ?
                    
                        <p className="w-[1100px] h-[540px] break-words text-white text-[35px]">{detailAuthor?.attributes?.Description}</p>
                        :
                        <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    }

                        {detailAuthor?.attributes?.Image?.data.attributes?.url ?
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.Image?.data.attributes?.url ?? '')} className='w-[540px] h-[548px] rounded-xl' width={540} height={548}/>
                        :
                                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    } 
                        </div>
                    <div className="w-full overflow-auto h-[300px] ">
                        <ul className="w-full flex flex-col gap-6 ">
                            <li className="w-full h-[261px] bg-black rounded-[20px] p-6 overflow-hidden flex items-center">
                                <div className="w-full flex items-center gap-7">
                                    <Image src={''} className='w-[137px] h-[137px] ' width={137} height={137}/>
                                    {detailAuthor?.attributes?.reviews?.data?.attributes?.Review ?
                                    <p className="w-[1000px] break-words h-full">{detailAuthor?.attributes?.reviews?.data?.attributes?.Review }</p>
                                    :
                        <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    }
                                </div>
                                <div className="w-full flex flex-col justify-end gap-3">
                                    
                                    <span className="w-full text-zinc-700">Дата</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

