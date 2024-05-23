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

const getSingleAuthor = (id) => axiosClient.get('/authors?filters[author][$eqi]=' + id + '&populate=*');

export default{
    getAuthor,
    getGallery,
    getSingleAuthor
}