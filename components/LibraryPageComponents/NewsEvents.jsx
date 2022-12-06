const Box = () => {
    return (
        <div className={'border-b-emerald-800 border-b-8 bg-blue-800 text-white mx-5'}>
            <div className={'text-2xl text-center mb-2 font-bold p-4'}>Heading 1</div>
            <div className={'text-justify mb-3 p-3 '}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet.
            </div>
            <div className={'flex flex-row justify-end'}>
                <div> </div>
                <div></div>
            </div>
        </div>
    );
}

const NewsEvents = () => {
    return (
        <div className={'w-3/4 m-5'}>
        <h2 className={'text-3xl underline text-center mb-4'}>News & Events</h2>
        <div className={'flex flex-row items-center '}>
            <Box/>
            <Box/>
            <Box/>
        </div>
        </div>
    );
}
export default NewsEvents;