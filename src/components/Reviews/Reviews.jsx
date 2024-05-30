"use client";
import React, { useEffect, useState } from 'react'
import useReview from '../../hooks/useReviews'
import useSingleAuthor from '@/hooks/useSingleAuthor';
import GlobalApi from '@/utils/GlobalApi';

const Reviews = (params) => {

    const reviewe = useSingleAuthor(params.id);


    const [review, setReview] = useState();
    const [formField, setFormField] = useState(false);

    useEffect(() => {
        if (review) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [review]);

    const saveFields = () => {
        const data = {
            data: {
                review: review,

            }
        }
        GlobalApi.createReview(data).then(resp => {
            console.log(resp);
            if (resp) {
                alert('Данные успешно отправлены!');
            }
        });
    }
    return (
        <section className='w-full py-10'>
            <div className="container mx-auto">
                <section className='w-full py-12'>
                    <div className="container mx-auto">
                        <h2 className="section-title text-white">Оставить отзыв</h2>
                        <div className="w-full relative">
                            <textarea id="review" onChange={(e) => setReview(e.target.value)} cols="30" rows="10" placeholder='Введите описание' className='text-white w-full h-[261px] bg-black rounded-[20px] p-6 overflow-hidden'></textarea>
                            <button className='absolute w-[150px] h-[80px] bg-white text-black rounded-xl right-5 bottom-5' disabled={!formField} onClick={() => saveFields()}>Отправить</button>
                        </div>
                    </div>
                </section>
                
            </div>
        </section>
    )
}

export default Reviews
