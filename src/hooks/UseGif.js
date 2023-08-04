import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";



export const UseGif = () => {
  const[gif , setGif] = useState(' ');
  const[loading , setLoading] = useState(false);
 
  
  async function fetchData(tag){
    setLoading(true)
    const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=HbzNN1N8t551DWuGb4tl1L3nqZoLpqVq&tag=${tag}`;
    const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=HbzNN1N8t551DWuGb4tl1L3nqZoLpqVq`;
    const {data} = await axios.get(tag ? (TagUrl) : (RandomUrl));
    const imageSource = data.data.images.downsized_large.url;
    console.log("image source", imageSource)
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  } , [])
  return {
    gif,loading,fetchData
  };
}
