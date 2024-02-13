import FolderIcon from '@mui/icons-material/Folder';
import GalleryComponent from './GalleryComponent';
import BackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { Icon } from '@mui/material';
import { getEventGallery } from '../../http';


const GalleryTemplate = ({title="Gallery@JCBoseUST", data, loader})=>    {

    // console.log(data, loader);  
    const [showFolder, setShowFolder] = useState(true);

    const [loading, setLoading] = useState(loader);

    const [activeFolderData, setActiveFolderData] = useState(null);

 

    const handleFolderClick = (data) => {  

        setLoading(true);
        getEventGallery(data?.id).then((resp) => {
            // console.log(resp.data);
            // setActiveFolderData(resp.data["Images List"]);
            setShowFolder(false);
            setLoading(false);
        });


        
    }

    // console.log("loading", loading);    

    

    if (!data) {
        data = [
            {
                title:"Dummy Data",
                data: [
                    {
                        link:"/assets/images/featureBg.png",
                    },
                    {
                        link:"/assets/images/footerlogo.png",
                    },
                    {
                        link:"/assets/images/featureBg.png",
                    },
                    {
                        link:"/assets/images/footerlogo.png",
                    },
                    {
                        link:"/assets/images/G20.png",
                    },
                    {
                        link:"/assets/images/governor.png",
                    },
                    {
                        link:"/assets/images/jcBosePhoto.png",
                    },
                    {
                        link:"/assets/images/noticeBg.png",
                    },
                ]
            },
        ]
    }

    return (
        <div className={"m-10 rounded-md p-3 border-2 shadow-md"}>
            <div className="flex flex-row">
            <div className={'text-grey m-1 rounded-md inline hover:scale-[1.05] duration-100 '} onClick={()=>setShowFolder(true)}>
                
                {/* blank icon*/}
                {showFolder?
                <Icon className={'text-grey'} style={{fontSize: 25}} />
                :
                <BackIcon className={'text-grey cursor-pointer'} style={{fontSize: 25}}/>
                }
            </div>
            
            <div className={' text-center text-2xl font-bold w-full'}>
                {title}</div>
            </div>
            <hr className={'my-3'}/>
                
            <div>

                {!loading?(
                
                showFolder?
                    <div className={"flex flex-row flex-wrap "}>
                        {data.map((item, index) => (
                            <div key={index} className="gallery-item w-max" onClick={()=>{handleFolderClick(item)}}>
                                {//increase the size of the folder icon}
                            }
                            <div className='text-center hover:scale-[1.1] m-5 hover:border-1 p-2 rounded-lg  duration-100 active:bg-gray-100 cursor-pointer'>
                            <FolderIcon className='' style={{fontSize: 50, color: 'grey'}}/>
                            <p>{item.name}</p>
                                </div>
                        </div>
                        ))}
                    </div>
                :
                    <GalleryComponent data={activeFolderData}/>

                )
                :
                <div className="text-center">
                    <p>Loading...</p>
                    <div className="loader"></div>
                </div>
            }
            </div>
        </div>
    )
}

export default GalleryTemplate;