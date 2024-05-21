"use client";
import GlobalApi from '../utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const useSingleAuthor = (id) => {

    const [detailAuthor, setDetailAuthor]= useState();

    useEffect(()=> {
        getSingleAuthor();
    },[id])

  const getSingleAuthor = () => {
    GlobalApi.getSingleAuthor(id).then(resp => {
        console.log(resp.data.data);
        setDetailAuthor(resp.data.data);
    });
  }

  return detailAuthor;
}

export default useSingleAuthor