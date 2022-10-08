import {useTranslations} from "next-intl";

const Notice = (props) => {
    return(
        <div className={'border-1 cursor-pointer hover:scale-[1.01] duration-200 bg-white border-black rounded-md p-2 my-2'}>
            {props.heading}
        </div>
    );
}
const Notices = () => {
    const t = useTranslations("home.notices");
    return(
        <div className={'rounded-md border-1 border-gray-800 flex flex-col'}>
            <div className={'rounded-md py-2 text-3xl text-center bg-secondary text-white font-bold'}>
                {t('heading')}
            </div>
            <div className={'flex flex-col px-6 py-3'}>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
            </div>
            <button className={'mt-auto flex-col mb-10'}>
                {t('nextBtn')}
            </button>
        </div>
    );
}
export default Notices;