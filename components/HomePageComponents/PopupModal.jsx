import Image from 'next/image';
import React, {useState} from 'react';


function PopupModal({}) {
    const [show, setShow]= useState(true);



    const toggleForm= ()=> {
        show?setShow(false):setShow(true);
    }

    return (
        <>
        {/* <div onClick={toggleForm} className='bg-[#AA0E30] cursor-pointer p-3 rounded-t-md text-xl text-white fixed top-80 -rotate-90 -right-8' style={{zIndex: 120}}>Feedback</div> */}
        <div className={`flex  justify-center items-center fixed w-full h-full top-0 ${show?'block':'hidden'} bg-opacity-75 bg-[black]`} style={{zIndex: 100}} onClick={toggleForm}>
            
        </div>
        <div className={`bg-[#EBEBEB] rounded-md p-6 pt-1 fixed ${show?'block':'hidden'} top-0 mx-auto flex flex-col w-full  md:w-[50vw] top-[50%] left-[50%]`} style={{zIndex:200, transform:"translate(-50%,-50%)"}}>
                <div className='flex flex-row justify-between'>
                    <div className='m-auto text-xl font-bold'> Exciting News !! </div>
                    <div className='rounded-md p-2 text-3xl text-right duration-300 cursor-pointer hover:bg-[#AA0E30] hover:text-white' onClick={toggleForm}>&times;</div>
                </div>
                <div className='text-justify'>
                    <div>
                        <Image src='/assets/images/featureBg.png' alt="1" width={200} height={150} className={'w-full  rounded-md object-cover p-1'} />
                    </div>
                        <a href="#">
                        <button className='px-3 py-1 rounded-lg cursor-pointer duration-200 bg-secondary hover:bg-secondaryLight text-white text-xl block m-auto '>Click Here</button>
                        </a>
                    
                </div>
                
            </div>
        </>
    )
}

export default PopupModal;