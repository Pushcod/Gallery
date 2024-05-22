"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import useSingleAuthor from '@/hooks/useSingleAuthor'

export default function page ({params})  {

    const detailAuthor = useSingleAuthor(params.id);
        
    return (
        <section className='w-full py-16'>
        <div className="container mx-auto">
          {/* Начало превью */}
          <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-xl">
              {detailAuthor?.attributes?.image?.data.attributes?.url ? 
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.Image?.data.attributes?.url ?? '')} alt='' width={1200} height={520} className='w-full h-full object-cover' />
              :
                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
              }
  
          </div>
          {/* Конец превью */}
          {/* Начало названия */}
          {detailAuthor?.attributes?.Name ? 
            <h2 className="text-left text-white text-5xl uppercase mt-10">{detailAuthor?.attributes?.Name}</h2>
            :
            <div className='w-full mt-10 flex flex-col gap-4'>
              <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
              <div className='w-1/3 h-12 rounded-lg bg-zinc-800 animate-pulse'></div>
            </div>
          }
          {/* Конец названия */}
          {/* Начало описания */}
          {detailAuthor?.attributes?.Description ? 
            <p className="text-zinc-700 text-base md:text-xl text-left mt-7">{detailAuthor?.attributes?.Description}</p>
            :
            [1,2,3,4,5,6,7].map((item, index) => {
              return (
                <div key={index} className="w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
              )
            })
          }
          {/* Конец описания */}
        </div>
      </section>
    )


    // return (
    //     <section className='w-full py-10'>
    //         <div className="container mx-auto">
    //         <div className="w-full mb-[30px] ">
    //                 <h2 className="w-full text-[100px] text-white flex justify-center">Author</h2>
    //             </div>
    //             <div className="w-full">
    //                 <div className="w-full flex gap-5">
                    
    //                 <div className="relative w-full grid grid-cols-3 gap-6">
    //                 {detailAuthor?.attributes?.paint?.data.attributes?.url ?
    //                             <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.paint?.data.attributes?.url ?? '' )} className='w-full h-[462px] bg-zinc-700' width={1920} height={462}/>
    //                             :
    //                             <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
    //                 }
    //                     </div>
                        
    //                 </div>
                    
    //                 <div className="w-full flex justify-between items-center">
    //                 {detailAuthor?.attributes ?
    //                     <p className="w-[1100px] h-[540px] break-words text-white text-[35px]">{detailAuthor?.attributes?.Description}</p>
                        
    //                     :
    //                     <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.Image?.data.attributes?.url ?? '')} className='w-[540px] h-[548px] rounded-xl' width={540} height={548}/>
                    
    //                 } 
    //                     </div>
    //                 <div className="w-full overflow-auto h-[300px] ">
    //                     <ul className="w-full flex flex-col gap-6 ">
    //                         <li className="w-full h-[261px] bg-black rounded-[20px] p-6 overflow-hidden flex items-center">
    //                             <div className="w-full flex items-center gap-7">
    //                                 <Image src={''} className='w-[137px] h-[137px] ' width={137} height={137}/>
    //                                 <p className="w-[1000px] break-words h-full">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, </p>
    //                             </div>
    //                             <div className="w-full flex flex-col justify-end gap-3">
                                    
    //                                 <span className="w-full text-zinc-700">Дата</span>
    //                             </div>
    //                         </li>
                            
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )
}

