"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAuthor from '@/hooks/useAuthor';
<<<<<<< HEAD
import Authors from '@/components/Author/Author';
=======
import Author from '../../../components/Author/Author'
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1

const outhor_page = () => {

    const authorsList = useAuthor();

    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
<<<<<<< HEAD
                {/* s */}
                <Authors/>
                {/* <div className="w-full grid grid-cols-3 gap-52">
                    {authorsList.map((item, index) => {
=======
                
                <div className="w-full flex items-center justify-between">
                    <Author/>
                    {/* {authorsList.map((item, index) => {
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
                        return (
                            <article key={index} className="w-[440px] h-[789px] bg-black p-[24px] flex flex-col gap-7">
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL +item.attributes?.Image?.data.attributes?.url} className='w-[492px] h-[287px] rounded-xl object-cover' width={492} height={287}/>
                                <div className="w-full flex gap-7 items-center justify-between">
                                    <h3 className='text-[40px] text-white'>{item.attributes?.Name}</h3>
                                    <Link href={'/outhor/'+ item.attributes?.author} >
                                        <button className='w-[185px] h-[66px] bg-white rounded-xl uppercase'>Перейти</button>
                                    </Link>

                                </div>
                                <div className="w-full h-[300px] break-words ">
                                    <p className=' text-white text-4xl '>{item.attributes?.Description.slice(0,140)}</p>
                                </div>

                            </article>
                        );
<<<<<<< HEAD
                    })}
                </div> */}
=======
                    })} */}
                </div>
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
            </div>
        </section>
    )
}

export default outhor_page