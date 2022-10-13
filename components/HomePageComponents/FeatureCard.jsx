import SchoolIcon from '@mui/icons-material/School';

const FeatureCard = ({ title, description, icon, link, index }) => {
    return (
        <div className={`bg-no-repeat items-center bg-opacity-80 flex flex-col text-white w-1/5 bg-opacity-30 md:h-72 bg-auto mt-20 ${index%2===0 ? 'bg-feature-bg-blue' : 'bg-feature-bg-red'}`}>
            {/*TODO make cards responsive too*/}
            <div className={'hidden h-full md:flex mt-14 w-full items-center flex flex-col px-1 md:px-4'}>
                <div className={'mx-auto flex'}>
                    {icon}
                </div>
                <div className={'border-b-2 border-white w-full text-center pb-1'}>
                    <h1>{title}</h1>
                </div>
                <h1 className={'text-xs font-thin'}>{description}</h1>
                <button className={'text-xxs mb-20 mx-auto md:text-sm mt-auto bg-white px-2 md:px-3 hover:scale-105 duration-200 text-black'}>Read More</button>
            </div>
        </div>
    )
}

export default FeatureCard;