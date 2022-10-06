const Cards = () => {
    return (
        <div className={'text-white mt-24 flex flex-row items-center justify-around pl-4 pr-4 pb-4 bg-gradient-to-t from-white '}>
            <div className={'flex mx-8 border-2  w-[12rem] h-[12rem] p-2 bg-primary text-white font-bold  overflow-hidden text-justify items-center justify-center skew-y-6'}>ABOUT</div>
            <div className={'flex mx-8 border-2  w-[12rem] h-[12rem] p-2 bg-primary text-white font-bold  overflow-hidden text-justify items-center justify-center -skew-y-6'}>ABOUT</div>
            <div className={'flex mx-8 border-2  w-[12rem] h-[12rem] p-2 bg-primary text-white font-bold  overflow-hidden text-justify items-center justify-center skew-y-6'}>ABOUT</div>
            <div className={'flex mx-8 border-2  w-[12rem] h-[12rem] p-2 bg-primary text-white font-bold  overflow-hidden text-justify items-center justify-center -skew-y-6'}>ABOUT</div>
        </div>
    );
}

export default Cards;