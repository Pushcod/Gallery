"use client";

import GlobalApi from '../utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePaint = () => {

    const [paintsList, setPaintList] = useState([]);

    useEffect(() => {
      getPaint();
    },[])

  const getPaint = () => {
    GlobalApi.getPaint().then(resp => {
        console.log(resp.data.data)
        setPaintList(resp.data.data)
    });
  }

  return paintsList;

}

export default usePaint;