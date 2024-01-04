import React from 'react';
import { getMarquee } from '../../http';
import {useState,useEffect} from "react";



const Marquee = () => {
  const [Dmarquee,setMarquee] = useState([]);
  useEffect(() => {
    getMarquee().then((resp)=>{
       // console.log(resp.data["Notice List"]);
        setMarquee(resp.data);
    })}, []);

  return (
    <div class="relative flex overflow-x-hidden">
      {/* <div class="py-3">
        <span class="text-2xl mx-4 bg-red-600 text-white">Bulletin</span>
      </div> */}
  <div class="py-3 animate-marquee whitespace-nowrap">
    <span class="text-2xl mx-4"></span>
    <span class="text-2xl mx-4"></span>
    <span class="text-2xl mx-4">Marquee Item 1</span>
    <span class="text-2xl mx-4">Marquee Item 2</span>
    {/* {Dmarquee.map((marquee,i)=>(<span class="text-2xl mx-4">{marquee?.title}</span>))} */}
    {/* <span class="text-4xl mx-4">Marquee Item 3</span>
    <span class="text-4xl mx-4">Marquee Item 4</span>
    <span class="text-4xl mx-4">Marquee Item 5</span> */}
  </div>





  
</div>

  );
};

export default Marquee;
