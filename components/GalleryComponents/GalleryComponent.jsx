import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from './GalleryModal';


import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
// import { index } from 'next/dist/compiled/lodash';


const GalleryComponent = ({data}) => {

    if (!data) {
        data = [ { "id": 1, "gallery_id_id": 1, "files_url": "files/pan_card.jpg", "status": true, "u_id": 2, "date": "2024-02-11T08:20:16.695062Z", "ip": "0.0.0.0", "system": "Linux | 49-50-77-228.cprapid.com | 5.4.0-171-generic |  #189-Ubuntu SMP Fri Jan 5 14:23:02 UTC 2024 | x86_64 | x86_64" }, { "id": 2, "gallery_id_id": 1, "files_url": "files/_a22a0c59-b544-4752-bc5a-177d0f1560e4.jpeg", "status": true, "u_id": 2, "date": "2024-02-11T08:20:16.695062Z", "ip": "0.0.0.0", "system": "Linux | 49-50-77-228.cprapid.com | 5.4.0-171-generic |  #189-Ubuntu SMP Fri Jan 5 14:23:02 UTC 2024 | x86_64 | x86_64" } ];
    }

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    // console.log(data);

    const makeSrcList = (data) => {
        let srcList = [];
        for (let i = 0; i < data.length; i++) {
            srcList.push({src: "http://49.50.77.87:3000/assets/media/" + data[i].files_url});
        }
        // console.log(srcList);
        return srcList;
    }

    

    const srcList = makeSrcList(data);

    const handleImgClick = (index) => {
        setCurrent(index);
        // console.log(index);
        setOpen(true);
    }

    return (
        <div className="flex justify-around my-6 ">
{/* 
            <div className='grid grid-cols-4 gap-2 w-max h-full '>
            {data.map((item, index) => {
                return (
                    <div key={index} className="">
                        <a key={index} href={item.link} target="_blank" rel="noreferrer">
                            <div className='w-[18rem] h-[10rem] relative     overflow-hidden'>
                                <Image src={item.link} alt={item.title} layout='fill' objectFit='cover'/>
                            </div>
                        </a>
                    </div>
                );
            })}
            </div> */}
            <ImageList variant="masonry"    justify="center" cols={4} gap={8}>
            {srcList.map((item,index) => (
                <ImageListItem key={index}>
                            <div className='w-[18rem] h-[10rem] relative overflow-hidden cursor-pointer' onClick={() => handleImgClick(index)}>
                                <Image src={item.src} alt={item.title} layout='fill' objectFit='cover'/>
                            </div>
                </ImageListItem>
            ))}
            </ImageList>
            <GalleryModal show={open} handleClose={() => setOpen(false)} curr={current} srcList={srcList}/>
        </div>
    );
    }


    export default GalleryComponent;