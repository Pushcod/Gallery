"use client"

import axios from "axios";


//получаем токен
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//выполняем регистрацию через токен Bearer
const axiosClient = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});


const getAuthor = () => axiosClient.get('/authors?populate=*');

const getGallery = () => axiosClient.get('/index-gallerys?populate=*');

const getPaint = () => axiosClient.get('/paintings?populate=*');

const getSingleAuthor = (id) => axiosClient.get('/authors?filters[author][$eqi]='+id+'&populate=*');

const getSinglePaint = (id) => axiosClient.get('/paintings?filters[slug][$eqi]='+id+'&populate[0]=reviews.Review=&populate[1]=paint.url=&populate[2]=avtor.Image');

const getReview = () => axiosClient.get('/reviews?filters[isActive][$in][$eqi]=true&populate[0]=packets.Review');

const createReview = (data) => axiosClient.post('/reviews?filters[author]', data);

export default{
    getAuthor,
    getGallery,
    getSingleAuthor,
    getReview,
    createReview,
    getSinglePaint,
    getPaint
}