import { getScheme } from "../../http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const QuickLink = ({ title, link }) => {
    return (
        <a href={link}>
            <div className={'flex cursor-pointer hover:text-secondaryLight duration-200 items-center p-5 border-b-1 border-secondaryLight'}>
                {title}
            </div>
        </a>
    )
}
const QuickLinks = ({ heading, className, deptName }) => {

    const router = useRouter();
    const [scheme, setScheme] = useState([]);

    useEffect(() => {

        if (router.query.id === undefined) return; else
            getScheme(router.query.id).then((resp) => {
                setScheme(resp.data["Scheme List"]);
                console.log(resp);
            });
    }
        , [router])




    return (
        <div className={'flex flex-col bg-white  bg-opacity-60 h-full mx-auto ' + className}>
            <div className={'flex items-center p-5 bg-gray-200 border-b-4 border-secondaryLight'}>
                <h1 className={'font-bold text-2xl'}>{heading}</h1>
            </div>

            {scheme.map((item, i) => {
                return (
                    <QuickLink key={i} title={item?.title} link={"#"} />
                )
            }
            )}
            <button
                onClick={() => {
                    // open the notice in a new tab
                    window.open(`notices/${deptName}/scheme_syllabus`, '_blank');
                }}
                className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                {/* {t('viewAll')} */}
                View All
            </button>

        </div>
    )
}

export default QuickLinks;