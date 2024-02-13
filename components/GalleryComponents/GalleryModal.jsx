import Image from 'next/image';
import { use, useState } from 'react';
import { useEffect } from 'react';

const GalleryModal = ({ show, handleClose, srcList, curr }) => {
    const showHideClassName = show ? "" : "hidden";
    const [current, setCurrent] = useState(curr);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            current > 0 ? setCurrent(current - 1) : setCurrent(current);
        }
        if (e.key === "ArrowRight") {
            current < srcList.length - 1 ? setCurrent(current + 1) : setCurrent(current);
        }
        if (e.key === "Escape") {
            handleClose();
        }
    }



    useEffect(() => {
        setCurrent(curr);
    }
    , [curr]);
    return (
        <div className={showHideClassName +" backdrop-blur  top-0 left-0 z-[81] fixed w-full h-full  pt-8"} onKeyDown={handleKeyDown}>
        <div className="flex justify-end">
                <button className="bg-black/50 rounded-md text-white font-bold px-3 text-3xl" onClick={handleClose}>X</button>
        </div>
        <div>
            <div className="flex justify-around ">
                <div className='flex flex-row'>
            <button className="bg-black/50 rounded-l-md text-white font-bold px-3 text-3xl" onClick={()=>{current>0?setCurrent(current-1):setCurrent(current)}}>{"<"}</button>
                <div className="bg-black w-[75vw] relative h-[80vh] m-auto overflow-hidden">
                    <Image className=' z-[0] ' src={srcList[current]?.src} alt={"img"} layout='fill' objectFit='contain'/>
                </div>
            <button className="z-[1] cursor-pointer bg-black/50 rounded-r-md text-white font-bold px-3 text-3xl" onClick={()=>{current<srcList.length-1?setCurrent(current+1):setCurrent(current)}}>{">"}</button>
            </div>
            </div>
            
            
        </div>
        </div>
    );
}

export default GalleryModal;
