import SchoolIcon from '@mui/icons-material/School';
import {useTranslations} from "next-intl";

const FeatureCard = ({ title, description, icon, link, index }) => {
    const t = useTranslations("home.featureCard");
    return (
        <div className={`fbox ${index%2===0 ? 'fbox-even' : 'fbox-odd'}`}>
            {/*TODO make cards responsive too*/}
            <div className={`section-a`}></div>
            <div className={`section-b`}>
                <div className={'mx-auto flex'}>
                    {icon}
                </div>
                <div className={'border-b-2 border-white mx-2 text-center pb-1'}>
                    <h1>{t(title)}</h1>
                </div>
                <h1 className={'text-xs font-thin mt-2'}>{t(description)}</h1>
                <button className={'text-xxs mb-20 mx-auto md:text-sm mt-2 bg-white px-2 md:px-3 hover:scale-105 duration-200 text-black'}>{t("Read More")}</button>
            </div>
        </div>
    )
}

export default FeatureCard;