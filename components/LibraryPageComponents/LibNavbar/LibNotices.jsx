import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const LibNoticeHeads=({heading})=>{
    return(
        <div className={'border-black bg-white rounded p-2 mx-4 my-2'}>
            <h1>{heading}</h1>
        </div>
    )
}
const LibNotices = ({heading}) => {
    return(
        <div className={'flex flex-col bg-gray-300 w-[50rem] rounded '}>
         <h1 className={'text-center py-4 bg-secondary text-white font-bold'}>NOTICES & UPDATES</h1>
           <LibNoticeHeads heading={'New titles added to stock'}/>
           <LibNoticeHeads heading={'New titles added to stock'}/>
           <LibNoticeHeads heading={'New titles added to stock'}/>
           <LibNoticeHeads heading={'New titles added to stock'}/>
           <LibNoticeHeads heading={'New titles added to stock'}/>
            <button className={'border-secondary border-2 w-[10rem] mt-4 mx-auto text-white bg-secondary rounded p-2 mb-2'}>See More</button>
         </div>
    )
}
export default LibNotices;