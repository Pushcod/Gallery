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

<<<<<<< HEAD
const getSingleAuthor = (id) => axiosClient.get('/authors?filters[author][$eqi]='+ id +'&populate=*');

const createReview = (data) => axiosClient.post('/reviews?filters[author]', data);
=======
const getSingleAuthor = (id) => axiosClient.get('/authors?filters[author][$eqi]='+id+'&populate=*');

const getReview = () => axiosClient.get('/reviews?filters[isActive][$in][$eqi]=true&populate[0]=packets.Review');
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1

export default{
    getAuthor,
    getGallery,
    getSingleAuthor,
<<<<<<< HEAD
    createReview
=======
    getReview
>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
}