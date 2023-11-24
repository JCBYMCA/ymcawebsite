import Image from "next/image";
import {useTranslations} from "next-intl";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const t = useTranslations("home");
    return (
        <div className={'bg-gray-200 flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:h-[4rem] items-center'}>
            <div className={'flex items-center text-lg text-primary font-bold'}>
                {/* <Image src={'/assets/images/logo.png'} height={100} width={100}/> */}
               
                <p className={'text-center w-120 text-base'}><span>{"Copyright © 2023 J.C. Bose University of Science and Technology, YMCA, Faridabad All Rights Reserved."}</span>
                <br></br>    
                <span>{"Designed & Developed By:  Meet The Team"}</span>         
                </p>
                
            </div>
            {/* <div className={'flex space-x-11'}>
                <div className={'hover:scale-125 hover:text-primaryLight duration-200'} onClick={() => {
                    window.open('https://twitter.com', '_blank');
                }}><TwitterIcon/></div>
                <div className={'hover:scale-125 hover:text-primaryLight duration-200'} onClick={() => {
                    window.open('https://www.instagram.com/jcboseustofficial/', '_blank');
                }}><InstagramIcon/></div>
                <div className={'hover:scale-125 hover:text-primaryLight duration-200'} onClick={() => {
                    window.open('https://facebook.com', '_blank');
                }}><FacebookIcon/></div>
                <div className={'hover:scale-125 hover:text-primaryLight duration-200'} onClick={() => {
                    window.open('https://linkedin.com', '_blank');
                }}><LinkedInIcon/></div>
            </div> */}
            {/* <div className={'text-lg text-black font-bold'}>
                <h1 className={'w-80'}>{t("footer.address")}</h1>

            </div> */}
        </div>
    )
}


export default Footer;