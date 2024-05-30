import React from 'react'
import useReview from '../../hooks/useReviews'

const Reviews = (params) => {

    const review = useReview(params.id)

    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
            <div className="w-full overflow-auto h-[300px] ">
                        <ul className="w-full flex flex-col gap-6 ">
                        {review?.attributes?.reviews.map((review, index) => {
                    return (
                            <li key={index} className="w-full h-[261px] bg-black rounded-[20px] p-6 overflow-hidden flex items-center">
                                <div className="w-full flex items-center gap-7">
                                    <Image src={''} className='w-[137px] h-[137px] ' width={137} height={137}/>
                                    {/* {detailAuthor?.attributes?.reviews?.data?.attributes?.
                    
                    <p className="w-[1100px] h-[540px] break-words text-white text-[35px]">{detailAuthor?.attributes?.Description}</p>
                    :
                    <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                } */}
                                    
                                        
                                    <p className="w-full break-words h-full text-white">{review.Review}</p>
                                     
                                </div>
                                <div className="w-full flex flex-col justify-end gap-3">
                                        
                                     <span className="w-full text-zinc-700">Дата</span>
                                 </div>
                             </li>
                    )})}

                         </ul>
                    </div>
            </div>
        </section>
    )
}

export default Reviews
