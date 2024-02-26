import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function Feedback() {
    return (
        <div className='bg-[#AA0E30] cursor-pointer p-4 rounded-t-md text-xl text-white fixed -rotate-90 -right-8 top-80'>Feedback</div>
    )
}

function FeedbackForm() {
    const [show, setShow]= useState(false);

    const toggleForm= ()=> {
        show?setShow(false):setShow(true);
    }

    return (
        <>
        <div onClick={toggleForm} className='bg-[#AA0E30] cursor-pointer p-3 rounded-t-md text-xl text-white fixed top-80 -rotate-90 -right-8' style={{zIndex: 120}}>Feedback</div>
        <div className={`flex justify-center items-center fixed w-full h-full top-0 ${show?'block':'hidden'} z-10 bg-opacity-75 bg-[black]`} style={{zIndex: 100}}>
            <div className='bg-[#EBEBEB] p-6 flex flex-col w-96 z-20'>
                <div className='flex flex-row justify-between'>
                    <div className='m-auto text-xl font-bold'>Feedback Form</div>
                    <div className='rounded-md p-2 text-3xl text-right duration-300 cursor-pointer hover:bg-[#AA0E30] hover:text-white' onClick={toggleForm}>&times;</div>
                </div>
                <input type='text' placeholder='Name' className='p-4 border my-2' />
                <input type='text' placeholder='Email ID' className='p-4 border my-2' />
                <textarea rows={10} placeholder='Message' className='p-4 border my-2' />
                <button className='p-4 text-xl border border-black'>Submit</button>
            </div>
        </div>
        </>
    )
}

export default FeedbackForm