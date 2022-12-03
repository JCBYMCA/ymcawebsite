import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
const LibStatistics=({heading,number})=>{
    return(
        <div className={'pt-2'}>
        <div className={'flex flex-row space-x-8'}>
            <h1 className={'text-secondary w-[8rem]'}>{heading}</h1>
            <h1>{number}</h1>
        </div>
            <hr className={'border-gray-300'}/>
        </div>
    )
}
const LibStats=()=>{
    return(
        <div className={'flex flex-col space-y-2 '}>
            <h1 className={'text-3xl font-bold text-center text-secondary'}>STATS</h1>
            <hr className={'mx-20 border-black'}/>
            <div className={'bg-gray-50 px-16 py-8'}>
           <LibStatistics heading={'No. of Books'} number={'876429'}></LibStatistics>
           <LibStatistics heading={'No. of catalogues'} number={'876429'}></LibStatistics>
           <LibStatistics heading={'No. of Research Papers'} number={'876429'}></LibStatistics>
           <LibStatistics heading={'No. of Books'} number={'876429'}></LibStatistics>
           <LibStatistics heading={'No. of Books'} number={'876429'}></LibStatistics>
            </div>

        </div>
    )
}

export default LibStats;