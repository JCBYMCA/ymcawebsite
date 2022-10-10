import Image from "next/image";
import {useTranslations} from "next-intl";
import {menuItems} from "./menuItems";
import MenuItem from "./MenuItem";
import {useScroll} from "framer-motion";
import {useState} from "react";

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
        <div className={`flex p-5 sticky top-0 items-center bg-white ${!isWhite ? "bg-opacity-25 text-white" : "text-black"}`} style={{
            zIndex:999999
        }}>
            <div className={'flex items-center'}>
                <Image src='/assets/images/logo.png' alt={'Logo'} width={100} height={100} />
                <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider'}>
                    <h1>JC Bose University</h1>
                    <h1>of Science & Technology</h1>
                    <h1>YMCA, Faridabad</h1>
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

            <nav className={'ml-14 font-bold'}>
                <ul className={'flex '}>
                    {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;