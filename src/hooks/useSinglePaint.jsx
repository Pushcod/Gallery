"use client";

import GlobalApi from '../utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSinglePaint = (id) => {

    const [detailpaintsList, setDetailPaintList] = useState();

    useEffect(() => {
      getSinglePaint();
    },[id])

  const getSinglePaint = () => {
    GlobalApi.getSinglePaint(id).then(resp => {
        
        setDetailPaintList(resp.data.data[0])
    });
  }

  return detailpaintsList;

}

export default useSinglePaint;