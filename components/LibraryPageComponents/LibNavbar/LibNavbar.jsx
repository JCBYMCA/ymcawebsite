import NavBarMenu from "../../common/NavBarMenu";
import {LibMenuItems} from "./LibMenuItems";
import Image from "next/image";
import {useTranslations} from "next-intl";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/router";

const LibNavbar = () => {
    const t = useTranslations("home.navbar");
    return (
        <>
            <div className={`flex flex-col sticky top-0 bg-[#EBEBEB]  text-black border-1 border-neutral-200`} style={{
                zIndex:8000
            }}>
                <div className={'flex'}>
                    <Image src='/assets/images/logo.png' alt={'Logo'} width={110} height={90} />
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider mt-5'}>
                            <h1 className={'text-xl md:text-2xl font-bold'}>Pt. Deen Dayal Upadhyay Central library</h1>

                        </div>
                        <div className={''}>
                            <h1 className={`text-sm text-secondary font-bold md:text-sm `}>JC Bose University of Science & Technology, YMCA, Faridabad</h1>
                            {/*<h1 className={`text-sm `}>Science & Technology,</h1>*/}
                            {/*<h1 className={'text-sm'}>YMCA</h1>*/}
                        </div>
                    </div>
                    <div className={'ml-auto p-1 mr-5'}>
                        <Image src={'/assets/images/jcBosePhoto.png'} width={75} height={75}
                               className={'rounded-full'}/>
                    </div>
                </div>
                <LibNavbarMenu/>
            </div>
        </>
    )
}

export const LibNavbarMenu = () => {
    const router = useRouter();
    return (
        <div className={'flex'}>
            <div className={'ml-auto w-10 hover:bg-primary text-center hover:text-white duration-200'} onClick={() => {
                router.push('/')
            }}>
                <HomeIcon className={'ml-auto'}/>
            </div>
            <NavBarMenu menuItems={LibMenuItems} className={' mr-20'} translations={''} />
        </div>
    )
}

export default LibNavbar;