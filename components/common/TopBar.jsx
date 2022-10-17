import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

const TopBar = () => {
    const router = useRouter();
    const [isHindi, setIsHindi] = useState(false);

    useEffect(() => {
        if(router.locale === 'hi'){
            setIsHindi(true);
        }
        else {
            setIsHindi(false);
        }
    }, [router.locale]);


    return (
        <div className={'bg-primaryLight text-xs relative w-full flex h-7 items-center text-white px-5'} style={{
            zIndex:9000
        }}>
            <div className={'flex space-x-1 items-center'}>
                <EmailOutlinedIcon/>
                <h1>contact@jcboseust.ac.in</h1>
            </div>
            <div className={'flex space-x-1 ml-10 items-center'}>
                <LocalPhoneOutlinedIcon/>
                <h1>+91 9898989898</h1>
            </div>
            <div className={'flex ml-auto  mr-5'}>
                <button className={'px-3 hover:bg-primary duration-200'}>DLMS</button>
                <button className={'px-3 hover:bg-primary duration-200 '}>WEB</button>
                <button className={'bg-secondaryLight px-3 py-[0.38rem] hover:bg-secondary duration-200 cursor-pointer'}>ERP</button>
            </div>
            <div className={'cursor-pointer space-x-1 mr-4 hover:bg-primary duration-200 h-full flex items-center px-2'} onClick={() => {
                if(isHindi){
                    router.push(router.pathname, router.pathname, {locale: 'en'})
                }else{
                    router.push(router.pathname, router.pathname, {locale: 'hi'})
                }
            }}>
            {/*  create a change language button with mui icon  */}
                <TranslateOutlinedIcon/>
                <button className={''}>{isHindi ? 'Eng' : 'हिंदी'}</button>
            </div>
        </div>
    )
}

export default TopBar;