import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {ADDRESS, ADMISSIONPHN, CONTACTEMAIL, PHONE} from "../../config/constants";


const Footer = () => {
    const t = useTranslations("home.heading");
    return (
        <div className={'flex flex-col'}>
        <div className={'bg-secondary h-[27rem] flex justify-around text-white text-xl pt-8 pb-8 '}>
            <div className={'flex flex-col'}>
                <h1 className={'mb-2'}>TEL: {PHONE}</h1>
                <h1 className={'mb-12'}>EMAIL: {CONTACTEMAIL}</h1>
                <h1 className={'mb-2'}>Subscribe for Newsletter</h1>
                <div className={'flex mb-8'}>
                    <input placeholder={'Enter Email Address'} type={"text"}/>
                    <button className={'bg-primary border-4 border-primary'} type={"submit"}>SUBMIT</button>
                </div>
                <div className={'bg-gray-300 h-[10rem] text-black'}>MAP GOES HERE</div>

            </div>
            <div className={'flex flex-col text-center space-y-6 '}>
                <h1 className={'underline underline-offset-8'}>QUICK LINKS</h1>
                <ul className={'list-disc'}>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                </ul>
            </div>
            <div className={'flex flex-col text-center space-y-6 '}>
                <h1 className={'underline underline-offset-8'}>QUICK LINKS</h1>
                <ul className={'list-disc'}>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>
                    <li className={'mb-1'}>Admission 2022</li>

                </ul>
            </div>
            <div className={'flex flex-col text-center space-y-6 '}>
            <h1 className={'underline underline-offset-8'}>QUICK LINKS</h1>
            <ul className={'list-disc'}>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
                <li className={'mb-1'}>Admission 2022</li>
            </ul>
        </div>
            </div>

            <div className={'bg-gray-200 flex justify-around h-[8rem] items-center'}>
                <div className={'flex items-center text-lg text-primary font-bold'}>
                    <Image src={'/assets/images/logo.png'} height={120} width={120}/>
                    <h1 className={'text-center w-80'}>J.C. Bose University of Science & Technology, YMCA</h1>
                </div>
                <div className={'flex space-x-11'}>
                    <div><Image src={'/assets/images/linkedin.png'} height={25} width={25}/></div>
                    <div><Image src={'/assets/images/linkedin.png'} height={25} width={25}/></div>
                    <div><Image src={'/assets/images/linkedin.png'} height={25} width={25}/></div>
                    <div><Image src={'/assets/images/linkedin.png'} height={25} width={25}/></div>
                </div>
                <div className={'flex items-center text-lg text-black font-bold'}>
                    <h1 className={'w-80'}>{ADDRESS}</h1>
                </div>
            </div>

        </div>
    );
}

export default Footer;