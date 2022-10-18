import Image from "next/image";
import {useTranslations} from "next-intl";
import {menuItems} from "./menuItems";
import MenuItem from "../common/MenuItem";
import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NavBarMenu from "../common/NavBarMenu";
import DepartmentNavbar from "../DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";
import {useRouter} from "next/router";

const NavBar = () => {
    const router = useRouter();
    const [isHome, setIsHome] = useState(false);
    const [isDepartment, setIsDepartment] = useState(false);
    useEffect(() => {
        if(router.pathname === '/')
            setIsHome(true);
        else if(router.pathname === '/department')
            setIsDepartment(true);
    }, [router.pathname])

    const t = useTranslations("home.navbar");
    const {scrollY, scrollYProgress} = useScroll();
    const [isWhite, setIsWhite] = useState(!isHome);

    scrollY.onChange((y) => {
        if(isHome)
            scrollYProgress.get() > 0.066 ? setIsWhite(true) : setIsWhite(false);
    });

    return (
        <div className={`flex flex-col sticky top-0 bg-[#EBEBEB] ${!isWhite ? "bg-opacity-25 text-white" : "text-black border-1 border-neutral-200"}`} style={{
            zIndex:8000
        }}>
            <div className={'flex '}>
                <Image src='/assets/images/logo.png' alt={'Logo'} width={90} height={90} />
                <div className={'flex flex-col'}>
                    <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider mt-5'}>
                        <h1 className={'text-xs md:text-xl'}>{t("JCBoseUst")}</h1>
                        {/*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*/}
                        {/*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*/}
                    </div>
                    <div className={''}>
                        <h1 className={`text-xs md:text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 1")}</h1>
                        <h1 className={`text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 2")}</h1>
                    </div>
                </div>
                <div className={'ml-auto p-1 mr-5'}>
                    <Image src={'/assets/images/jcBosePhoto.png'} width={75} height={75} className={'rounded-full'} />
                </div>
            </div>

            {/*<div className={'flex justify-between w-3/5 ml-14 text-sm font-bold '}>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Home')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Students')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Admission')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Academics')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Research')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Resources')}</h1>*/}
            {/*</div>*/}

            {isDepartment ? <DepartmentNavbar/> : <NavBarMenu menuItems={menuItems} className={'ml-auto mr-0'} translations={'home.navbar'} />}


            <div className={'flex md:hidden ml-auto mr-2'}>
                <MenuIcon fontSize={'large'}/>
            </div>

        </div>
    )
}

export default NavBar;