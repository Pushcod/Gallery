import Image from 'next/image'
import React from 'react'

const Galleries = () => {
    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
                <div className="w-full flex justify-between gap-5">
                    <div className="w-full flex gap-5">
                        <ul className="w-[400px] flex flex-col gap-6">
                            <li className="w-full  ">
                                <Image src={''} className='w-full h-[560px] bg-white'/>
                            </li>
                        </ul>
                        <ul className="w-[400px] flex flex-col gap-6">
                            <li className="w-full  ">
                                <Image src={''} className='w-full h-[1380px] bg-white'/>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex gap-5">
                        <ul className="w-[400px] flex flex-col gap-6">
                            <li className="w-full  ">
                                <Image src={''} className='w-full h-[835px] bg-white'/>
                            </li>
                        </ul>
                        <ul className="w-[400px] flex flex-col gap-6">
                            <li className="w-full  ">
                                <Image src={''} className='w-full h-[1140px] bg-white'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galleries