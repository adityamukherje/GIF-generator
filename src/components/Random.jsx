import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { UseGif } from "../hooks/UseGif";



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  // const[gif , setGif] = useState(' ')
  // const[loading , setLoading] = useState(false);
  
  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=HbzNN1N8t551DWuGb4tl1L3nqZoLpqVq`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log("image source", imageSource)
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // } , [])

  const{gif , loading , fetchData} = UseGif();
 
  
  function clickHandler(){
    fetchData();
  }
  return (
      <div className=" w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center
                         gap-y-5 mt-[15px] ">
        <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">
          A Random GIF
        </h1>
        {/* loading state */}
        {
          loading ? (<Spinner/>) : (<img src={gif} width="450" alt="gif" />)
        }
        
        <button onClick={clickHandler}
          className=" w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] ">
          Generate button 
          </button>
      </div>
  );
}
