const Notice = (props) =>{
    return(
        <div className={'border-1 rounded pb-3'}>
            {props.heading}
        </div>
    );
}
const Notices = () =>{
    const t = useTranslations("home.notices");
    return(
        <div className={'rounded-md'}>
            <div className={'rounded-md text-center text-white decoration-secondary font-bold'}>
                {t('heading')}
            </div>
            <div className={'flex-col px-6 py-3'}>
            </div>
            <button className={'mt-auto flex-col mb-10'}>
                {t('nextBtn')}
            </button>
        </div>
    );
}
export default Notices;