const QuickLinks = ({heading}) => {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex items-center p-5 bg-gray-200 border-b-4 border-secondaryLight'}>
                <h1 className={'font-semibold'}>Finance Major</h1>
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