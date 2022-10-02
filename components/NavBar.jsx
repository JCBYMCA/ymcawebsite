import Image from "next/image";
import {useTranslations} from "next-intl";

const NavBar = () => {
    const t = useTranslations("home.navbar");

    return (
        <div className={'flex p-5 text-white items-center bg-white bg-opacity-25'}>
            <div className={'flex items-center'}>
                <Image src='/assets/images/logo.png' alt={'Logo'} width={100} height={100} />
                <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider'}>
                    <h1>JC Bose University</h1>
                    <h1>of Science & Technology</h1>
                    <h1>YMCA, Faridabad</h1>
                </div>
            </div>

            <div className={'flex justify-between w-3/5 ml-14 text-sm font-bold '}>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Home')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('About Us')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Students')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Admission')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Academics')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Research')}</h1>
                <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Resources')}</h1>
            </div>

        </div>
    )
}

export default NavBar;