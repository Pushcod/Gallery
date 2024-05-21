"use client";

import GlobalApi from '../utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useIndex_gallery = () => {

    const [gallerysList, setGalleryList] = useState([]);

    useEffect(() => {
      getGallery();
    },[])

  const getGallery = () => {
    GlobalApi.getGallery().then(resp => {
        console.log(resp.data.data)
        setGalleryList(resp.data.data)
    });
  }

  return gallerysList;

}

export default useIndex_gallery;