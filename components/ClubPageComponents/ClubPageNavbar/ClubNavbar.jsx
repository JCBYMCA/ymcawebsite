import Image from "next/image";
import { DepartmentNavbarMenu } from "../../DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import NavBarMenu from "../../common/NavBarMenu";
import { ClubMenuItems } from "./ClubMenuItems";


const ClubNavbar = ({name, menuData}) => {
    if(!menuData || menuData.length === 0){
        menuData = ClubMenuItems;
    }

    


    return (
        <>
            <div className={`flex flex-col sticky top-0 bg-[#EBEBEB]  text-black border-1 border-neutral-200`} style={{
                zIndex:8000
            }}>
                <div className={'flex'}>
                    <Image src='/assets/images/logo.png' alt={'Logo'} width={90} height={90} />
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-col font-bold -space-y-1 tracking-wider mt-5'}>
                            <h1 className={'text-xs md:text-3xl mb-1'}>{name ? name : `Clubs & Societies`}</h1>
                            {/*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*/}
                            {/*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*/}
                        </div>
                    </div>
                </div>
                <ClubNavbarMenu menuData={menuData} />
            </div>
        </>
    )
}
export const ClubNavbarMenu = ({menuData}) => {
    const router = useRouter();
    return (
        <div className={'flex'}>
            <div className={'ml-auto w-10 hover:bg-primary text-center hover:text-white duration-200'} onClick={() => {
                router.push('/')
            }}>
                <HomeIcon className={'ml-auto'}/>
            </div>
            <NavBarMenu menuItems={menuData} className={' mr-20'} translations={''} />
        </div>
    )
}

export default ClubNavbar;