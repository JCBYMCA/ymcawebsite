const QuickLinks = ({heading,className}) => {
    return (
        <div className={'flex flex-col w-[28rem] bg-white bg-opacity-60'}>
            <div className={'flex items-center p-5 bg-gray-200 border-b-4 border-secondaryLight'}>
                <h1 className={'font-bold text-2xl'}>{heading}</h1>
            </div>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                Course Curriculum
            </div>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                Course Curriculum
            </div>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                Course Curriculum
            </div>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                Course Curriculum
            </div>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                Course Curriculum
            </div>
        </div>
    )
}

export default QuickLinks;