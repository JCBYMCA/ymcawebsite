import Image from "next/image";
import {useTranslations} from "next-intl";
import {menuItems} from "./menuItems";
import MenuItem from "./MenuItem";
import {useScroll} from "framer-motion";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({isHome}) => {
    const t = useTranslations("home.navbar");
    const {scrollY, scrollYProgress} = useScroll();
    const [isWhite, setIsWhite] = useState(!isHome);

    scrollY.onChange((y) => {
        console.log(scrollYProgress.get());
        if(isHome)
            scrollYProgress.get() > 0.066 ? setIsWhite(true) : setIsWhite(false);
    });

    return (
        <div className={`flex md:px-2 sticky top-0 items-center bg-white ${!isWhite ? "bg-opacity-25 text-white" : "text-black border-1 border-neutral-200"}`} style={{
            zIndex:999999
        }}>
            <div className={'flex items-center w-1/3'}>
                <Image src='/assets/images/logo.png' alt={'Logo'} width={160} height={160} />
                <div className={'flex flex-col'}>
                    <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider'}>
                        <h1 className={'text-xs md:text-xl'}>JC Bose University</h1>
                        <h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>
                        <h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>
                    </div>
                    <div className={''}>
                        <h1 className={'text-xs md:text-xs'}>(A Haryana State Government University)</h1>
                        <h1 className={'text-xxs'}>(Established by Haryana State Legislative Act No. 21 of 2009 & Recognised by UGC Act 1956 u/s 22 to Confer Degrees)</h1>
                    </div>
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

            <nav className={'ml-0 font-bold hidden md:block'}>
                <ul className={'flex '}>
                    {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
            </nav>
            <div className={'flex md:hidden ml-auto mr-2'}>
                <MenuIcon fontSize={'large'}/>
            </div>

        </div>
    )
}

export default NavBar;