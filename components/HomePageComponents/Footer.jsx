import {useTranslations} from "next-intl";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTransition} from "next-intl";
import Image from "next/image";
// import {ADDRESS, ADMISSIONPHN, CONTACTEMAIL, PHONE} from "../../config/constants";


// const FooterLinks = () => {
//
//     return (
//         <div className={'flex flex-col text-left space-y-6 '}>
//             <h1 className={'underline underline-offset-8'}>Our Campus</h1>
//             <ul className={'list-disc'}>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//                 <li className={'mb-1'}>Admission 2022</li>
//             </ul>
//         </div>
//     )
// }

const Footer = () => {
    const t = useTranslations("home.footer");
    return (
        <div className={'flex flex-col'}>
        <div className={'bg-black md:h-[27rem] space-y-6 flex flex-col md:flex-row justify-around text-white text-xl space-x-8 p-8 '}>
            <div className={'flex flex-col md:w-1/4'}>
                <h1 className={'mb-2'}>TEL: 0129-2310126</h1>
                <h1 className={'mb-12'}>EMAIL: contact@jcboseust.ac.in</h1>
                <h1 className={'mb-2'}>{t('Subscribe for Newsletter')}</h1>
                <div className={'flex mb-8'}>
                    <input placeholder={'Enter Email Address'} type={"email"} className={'text-black p-1 w-60'}/>
                    <button className={'bg-primaryLight p-1 hover:bg-primary cursor-pointer duration-200'} type={"submit"}>{t('SUBMIT')}</button>
                </div>
                <div className={'bg-gray-300 h-[10rem] text-black'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.638181854629!2d77.3209443!3d28.3691409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1665171600444!5m2!1sen!2sin"
                        width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>
                <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>
                    <h1 className={'font-bold'}>{t('Our Campus')}</h1>
                </div>
                <ul className={'text-gray-400'}>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Academic')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Planning & Administration')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Campus Safety')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Office of the Chancellor')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Facility Services')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Human Resources')}</li>
                </ul>
            </div>
            <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>
                <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>
                    <h1 className={'font-bold'}>{t('Campus Life')}</h1>
                </div>
                <ul className={'text-gray-400'}>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Accessibility')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Financial Aid')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Food Services')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Housing')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Information Technologies')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Student Life')}</li>

                </ul>
            </div>
            <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>
                <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>
                    <h1 className={'font-bold'}>{t('Our Campus')}</h1>
                </div>
            <ul className={'text-gray-400'}>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Canvas')}</li>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Catalyst')}</li>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Library')}</li>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Time Schedule')}</li>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Apply for admissions')}</li>
                <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Pay my tuition')}</li>
            </ul>
        </div>
            </div>

            <div className={'bg-gray-200 flex flex-col md:flex-row justify-around space-y-6 md:h-[8rem] items-center'}>
                <div className={'flex items-center text-lg text-primary font-bold'}>
                    <Image src={'/assets/images/logo.png'} height={120} width={120}/>
                    <h1 className={'text-center w-80'}>J.C. Bose University of Science & Technology, YMCA</h1>
                </div>
                <div className={'flex space-x-11'}>
                    <div><LinkedInIcon/></div>
                    <div><LinkedInIcon/></div>
                    <div><LinkedInIcon/></div>
                    <div><LinkedInIcon/></div>
                </div>
                <div className={'flex items-center text-lg text-black font-bold'}>
                    <h1 className={'w-80'}>NH-2 Sector-6,Mathura Road, Faridabad-121006, Haryana(India)</h1>
                </div>
            </div>

        </div>
    );
}

export default Footer;
