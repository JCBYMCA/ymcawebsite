import SchoolIcon from '@mui/icons-material/School';

const FeatureCard = ({ title, description, link, index }) => {
    return (
        <div className={`bg-no-repeat items-center bg-opacity-80 flex flex-col text-white w-1/5 bg-opacity-30 h-96 bg-auto mt-20 ${index%2===0 ? 'bg-feature-bg-blue' : 'bg-feature-bg-red'}`}>
            <div className={'mt-14 w-full items-center flex flex-col px-4'}>
                <SchoolIcon sx={{
                    fontSize: 60,
                }}/>
                <div className={'border-b-2 border-white w-full text-center pb-1'}>
                    <h1>Campus Life</h1>
                </div>
                <h1 className={'text-xs font-thin'}>Verear verterem commune discere evertitur eloquentiam utroque animal suavitate.</h1>
                <button className={'text-xs mt-2 bg-white px-3 hover:scale-105 duration-200 text-black'}>Read More</button>
            </div>
        </div>
    )
}

export default FeatureCard;