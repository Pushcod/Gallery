"use client";

import GlobalApi from '../utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useReview = () => {

    const [reviewsList, setReviewList] = useState([]);

    useEffect(() => {
        getReview();
    },[])

  const getReview = () => {
    GlobalApi.getReview().then(resp => {
        console.log(resp.data.data)
        setReviewList(resp.data.data)
    });
  }

  return reviewsList;

}

export default useReview;