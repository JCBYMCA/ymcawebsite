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

const FooterLinks = () => {
    const t = useTranslations("home.footer");
    return (
        <div className={'flex flex-col'}>
        <div className={'bg-black md:h-[27rem] space-y-6 flex flex-col md:flex-row justify-around text-white text-lg space-x-8 p-8 '}>
            <div className={'flex flex-col md:w-1/4'}>
                <h1 className={'mb-2'}>{t("TEL")}: 0129-2310126</h1>
                <h1 className={'mb-12'}>{t("EMAIL")}: contact@jcboseust.ac.in</h1>
                <h1 className={'mb-2'}>{t('Subscribe for Newsletter')}</h1>
                <div className={'flex mb-8'}>
                    <input placeholder={t('Enter Email Address')} type={"email"} className={'text-black p-1 w-60'}/>
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
                    <h1 className={'font-bold'}>{t('Important Links')}</h1>
                </div>
                <ul className={'text-gray-400'}>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('UGC')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('DTE, Haryana')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('DigiLocker')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('HSTES')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('NPTEL')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('AICTE')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('NATS')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('HSHEC')}</li>
                </ul>
            </div>
            <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>
                <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>
                    <h1 className={'font-bold'}>{t('Explore more')}</h1>
                </div>
                <ul className={'text-gray-400'}>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Officer\'s Contacts')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('JUFA Elections(2022)')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Archived News')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Policies')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('News Feeds')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Green Initiatives')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Extension & Outreach')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('University Cells')}</li>
                    {/*<li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Pay my tuition')}</li>*/}
                </ul>
            </div>
            <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>
                <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>
                    <h1 className={'font-bold'}>{t('Explore more')}</h1>
                </div>
                <ul className={'text-gray-400'}>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('360 Degree Feedback')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('MoUs & Collaborations')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Holiday List')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Downloads')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Rules and Circulars')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Guest House')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Life@JCBoseUST')}</li>
                    <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Contact Us')}</li>


                </ul>
            </div>
        {/*    <div className={'flex flex-col text-left space-y-6 md:w-1/4'}>*/}
        {/*        <div className={'w-full border-b-2 pb-2 border-secondaryLight'}>*/}
        {/*            <h1 className={'font-bold'}>{t('Quick Links')}</h1>*/}
        {/*        </div>*/}
        {/*    <ul className={'text-gray-400'}>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Officer\'s Contacts')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('JUFA Elections(2022)')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Archived News')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Policies')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('News Feeds')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Green Initiatives')}</li>*/}
        {/*        <li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Extension & Outreach')}</li>*/}
        {/*        /!*<li className={'mb-1 cursor-pointer hover:text-white duration-200'}>{t('Pay my tuition')}</li>*!/*/}
        {/*    </ul>*/}
        {/*</div>*/}
            </div>



        </div>
    );
}

export default FooterLinks;
