import {getScheme} from "../../http";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";


const QuickLink = ({title,link}) => {
    return(
        <a href={link}>
        <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
            {title}
        </div>
        </a>
    )
}
const QuickLinks = ({heading,className}) => {

        const router = useRouter();
        const [scheme,setScheme] = useState([]);

        useEffect(() => {


            if (router.query.id === undefined) return; else
            getScheme(router.query.id).then((resp) => {
                setScheme(resp.data["Scheme List"]);
                console.log(resp);
            });
        }
        , [router])




    return (
        <div className={'flex flex-col mb-4 mx-8 sm:w-[28rem] sm:mb-0 bg-white sm:ml-10 sm:mx-0 rounded-lg mt-40 mr-4 h-96 bg-opacity-60' + className}>
            <div className={'flex items-center p-5 bg-gray-200 border-b-4 border-secondaryLight'}>
                <h1 className={'font-bold text-2xl'}>{heading}</h1>
            </div>

            {scheme.map((item,i) => {
                    return(
                        <QuickLink key={i} title={item?.title} link={"#"}/>
                    )
                }
            )}

        </div>
    )
}

export default QuickLinks;