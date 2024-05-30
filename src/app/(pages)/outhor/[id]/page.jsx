"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../../utils/GlobalApi'
import useSingleAuthor from '@/hooks/useSingleAuthor'
import Review from '@/components/Reviews/Reviews'

export default function page ({params})  {

    const detailAuthor = useSingleAuthor(params.id);
<<<<<<< HEAD

    const [ review, setReview ] = useState();
    const [ formField, setFormField ] = useState(false);

    useEffect(() => {
        if ( review  ) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [ review ]);

    const saveFields = () => {
        const data = {
            data: {
                review: review,
                
            }
        }
        GlobalApi.createReview(data).then(resp => {
            console.log(resp);
            if ( resp ) {
                alert('Данные успешно отправлены!');
            }
        });
    }
        
=======
    
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
            <div className="w-full mb-[30px] ">
                    <h2 className="w-full text-[100px] text-white flex justify-center">Author</h2>
                </div>
<<<<<<< HEAD
                <div className="w-full flex flex-col items-center gap-14">
                    <div className="w-full flex gap-5">
                    
                    <div className="relative w-full">
                    {detailAuthor?.attributes?.paint?.data.attributes?.url ?
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.paint?.data.attributes?.url ?? '' )} className='w-full h-[600px]  object-contain' width={1920} height={462}/>
=======
                <div className="w-full flex flex-col gap-10">
                    <div className="w-full flex gap-5">
                    
                    <div className="relative w-full ">
                    {detailAuthor?.attributes?.paint?.data.attributes?.url ?
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.paint?.data.attributes?.url ?? '' )} className='w-full h-[600px] bg-zinc-700' width={1920} height={462}/>
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
                                :
                                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    }
                        </div>
                        
                    </div>
                    
                    <div className="w-full flex justify-between items-center">
                    {detailAuthor?.attributes?.Description ?
                    
<<<<<<< HEAD
                        <p className="w-[1100px] h-[540px] break-words text-white text-[35px] leading-10">{detailAuthor?.attributes?.Description}</p>
=======
                        <p className="w-[1100px] h-[540px] break-words text-white text-[35px]">{detailAuthor?.attributes?.Description}</p>
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
                        :
                        <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    }

                        {detailAuthor?.attributes?.Image?.data.attributes?.url ?
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAuthor?.attributes?.Image?.data.attributes?.url ?? '')} className='w-[540px] h-[548px] rounded-xl' width={540} height={548}/>
                        :
                                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                    } 
                    </div>
                    <Review/>
                    <div className="w-full overflow-auto h-[300px] ">
                        <ul className="w-full flex flex-col gap-6 ">
                        {detailAuthor?.attributes?.reviews.data.map((review, index) => {
                    return (
                            <li key={index} className="w-full h-full bg-black rounded-[20px] p-6 overflow-hidden flex justify-between">
                                <div className="w-full flex gap-7">
                                    <Image src={''} className='w-[137px] h-[137px] ' width={137} height={137}/>
                                        <div className="w-full h-full">
                                        <p className="w-full break-words h-full text-white text-3xl text">{review.attributes?.Review}</p>
                                        </div>
                                </div>
                                <div className="w-[200px] flex flex-col gap-3">
                                        
                                     <span className="w-full text-white text-3xl text-end">{review.attributes?.date}</span>
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
                                 </div>
                             </li>
                    )})}

                         </ul>
                    </div>
<<<<<<< HEAD
=======
                    
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
                </div>
            </div>
        </section>
     )
}

