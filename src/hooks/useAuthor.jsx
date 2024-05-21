"use client";

import GlobalApi from '../utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useAuthor = () => {

    const [authorsList, setAuthorList] = useState([]);

    useEffect(() => {
        getAuthor();
    },[])

  const getAuthor = () => {
    GlobalApi.getAuthor().then(resp => {
        console.log(resp.data.data)
        setAuthorList(resp.data.data)
    });
  }

  return authorsList;

}

export default useAuthor;