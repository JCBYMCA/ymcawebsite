import React from 'react';
import { getMarquee } from '../../http';
import {useState,useEffect} from "react";



const Marquee = () => {
  const [Dmarquee,setMarquee] = useState([]);
  useEffect(() => {
    getMarquee().then((resp)=>{
       // console.log(resp.data["Notice List"]);
        setMarquee(resp.data['Marque List']);
    })}, []);

  return (
    <div className="relative flex overflow-x-hidden bg-white">
      <div className="py-0 z-10">
        <div className="w-30 p-3 md:text-md mr-4 bg-secondaryLight text-white hidden md:block">Important Links</div>
      </div>
      <div className="py-2 md:py-3 animate-marquee whitespace-nowrap">
        {Dmarquee && Dmarquee.map((marquee,i)=>(<span key={marquee.marque_id} className="text-xs md:text-lg mx-4">{marquee?.title}</span>))}
        {/* <span class="text-2xl mx-4">Marquee Item 1</span>
        <span class="text-2xl mx-4">Marquee Item 2</span>
        <span class="text-2xl mx-4">Marquee Item 3</span>
        <span class="text-2xl mx-4">Marquee Item 4</span>
        <span class="text-2xl mx-4">Marquee Item 5</span> */}
      </div>
    </div>

  );
};

export default Marquee;
