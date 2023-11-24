import SchoolIcon from '@mui/icons-material/School';
import {useTranslations} from "next-intl";

const FeatureCard = ({ title, description, icon, link, index }) => {
    const t = useTranslations("home.featureCard");
    return (
        <div className={`fbox ${index%2===0 ? 'fbox-even' : 'fbox-odd'}`}>
            {/*TODO make cards responsive too*/}
            <div className={`section-a`}></div>
            <div className={`section-b p-2 flex items-center flex-col text-justify`}>
                <div className={'mx-auto flex'}>
                    {icon}
                </div>
                <div className={'border-b-2 font-semibold border-white mx-2 text-center pb-1'}>
                    <h1>{t(title)}</h1>
                </div>
                <h1 className={'text-sm font-light mt-4 mb-12 '}>{t(description)}</h1>
                <button className={'text-xxs py-0.5 absolute bottom-44 mx-auto md:text-base bg-white px-2 md:px-3 hover:scale-105 duration-200 text-black'}>{t("Read More")}</button>
            </div>
        </div>
    )
}

export default FeatureCard;