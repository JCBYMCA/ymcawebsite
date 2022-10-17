import Image from "next/image";
import {useTranslations} from "next-intl";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    const t = useTranslations("home");
    return (
        <div className={'bg-gray-200 flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:h-[6rem] items-center'}>
            <div className={'flex items-center text-lg text-primary font-bold'}>
                <Image src={'/assets/images/logo.png'} height={100} width={100}/>
                <h1 className={'text-center w-80'}>{t("navbar.JCBoseUst")}</h1>
            </div>
            <div className={'flex space-x-11'}>
                <div><LinkedInIcon/></div>
                <div><LinkedInIcon/></div>
                <div><LinkedInIcon/></div>
                <div><LinkedInIcon/></div>
            </div>
            <div className={'text-lg text-black font-bold'}>
                <h1 className={'w-80'}>{t("footer.address")}</h1>

            </div>
        </div>
    )
}

export default Footer;