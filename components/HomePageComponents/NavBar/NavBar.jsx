import Image from "next/image";
import {useTranslations} from "next-intl";
import {menuItems} from "./menuItems";
import MenuItem from "../../common/MenuItem";
import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NavBarMenu from "../../common/NavBarMenu";
import DepartmentNavbar from "../../DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";
import {useRouter} from "next/router";
import HomeIcon from '@mui/icons-material/Home';
import FacultyNavbar from "../../FacultyProfilePageComponents/FacultyNavbar";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import NavDrawer from "./NavDrawer";
import SearchComponent from "../../common/SearchComponent";

const NavBar = ({id, menudata}) => {
    const router = useRouter();
    const [isHome, setIsHome] = useState(false);
    const [isDepartment, setIsDepartment] = useState(false);
    const [isFaculty, setIsFaculty] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [menu, setMenu]= useState([]);
    useEffect(() => {
        if(router.pathname === '/') {
            setIsHome(true);
            setIsDepartment(false);
            setIsFaculty(false);
        }
        else if(router.pathname === '/department') {
            setIsDepartment(true);
            setIsHome(false);
            setIsFaculty(false);
        }
        else if(router.pathname==='/faculty-profile/[slug]' || router.pathname==='/faculty') {
            setIsFaculty(true);
            setIsHome(false);
            setIsDepartment(false);
        }
    }, [router.pathname])

    useEffect(() => {
        let user = id;
        // if(isDepartment){
        //     console.log("getting dept menu");
        //     if (router.query.id === undefined) return; else
        //     user = router.query.id;
        // }
        //console.log("getting",user,"menu");
        setMenu(createMenuObj(menudata));

    } , [])

    const createMenuObj= (data)=> {
        let arr = [];
        let pi = {};
        let si={};
        for( let item of data['Parent Menu List'] ){
            // console.log(item);
            let temp = {}
            temp['title'] = item["name"];
            temp['link'] = item['url'];
            temp['submenu'] = [];
            arr.push(temp);
            pi[item.menu_id] = arr.length-1;

        }
        // console.log(arr ,pi);
        for(let item of data['Submenu Menu List'] ){
            try{
                let temp = {};
                temp['title'] = item["name"];
                temp['link'] = item['url'];
                temp['submenu'] = [];
                arr[pi[item.p_id]]['submenu'].push(temp);
            }
            catch (e) {
                console.log(e);
                // console.log(item);
            }
            si[item.menu_id] = arr[pi[item.p_id]]['submenu'].length-1;
        }
        //console.log(si);
        for(let item of data['Submenu Level 2 Menu List'] ){
            let temp = {};
            temp['title'] = item["name"];
            temp['link'] = item['url'];
            // console.log(item.p_id,item.s_id);
            arr[pi[item.p_id]]['submenu'][si[item.s_id]]['submenu'].push(temp);
        }
        // console.log(arr);
        return arr;
    }
    /*
        submenu 2 -  138
        2d arr = {[]}
        arr[obj.p_id].append {obj} 138
        submenu
        let arr = {}
        for( item in data['Parent Menu List'] ){
            let temp = {}
            temp['title'] = item["name"];
            temp['link'] = item['url'];
            temp['submenu'] = {};
            arr[item.menu_id] = temp;
        }
        for( item in data['Submenu Menu List'] ){
            let temp = {};
            temp['title'] = item["name"];
            temp['link'] = item['url'];
            temp['submenu'] = [];
            arr[item.p_id]['submenu'][item.menu_id] = temp;
        }
        for( item in data['Submenu Level 2 Menu List'] ){
            let temp = {};
            temp['title'] = item["name"];
            temp['link'] = item['url'];
            arr[item.p_id]['submenu'][item.s_id]['submenu'].append(temp);
        }


     */

    // }


    const t = useTranslations("home.navbar");
    const {scrollY, scrollYProgress} = useScroll();
    const [isWhite, setIsWhite] = useState(true);

    scrollY.onChange((y) => {
        if(isHome)
            scrollYProgress.get() > 0.066 ? setIsWhite(true) : setIsWhite(true);
    });

    return (
        <div className={` flex flex-col sticky top-0 bg-[#EBEBEB] ${!isWhite ? "bg-opacity-25 text-white" : "text-black border-1 border-neutral-200"}`} style={{
            zIndex:80
        }}>
            <div className={'flex '}>
                <div><Image src='/assets/images/logo.png' className={"h-min"} alt={'Logo'} width={90} height={100} /></div>

                {/*{!isFaculty ? (*/}
                {/*    <>*/}
                {/*        <div className={'flex flex-col'}>*/}
                {/*            <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider mt-5'}>*/}
                {/*                <h1 className={'text-xs md:text-xl'}>{t("JCBoseUst")}</h1>*/}
                {/*                /!*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*!/*/}
                {/*                /!*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*!/*/}
                {/*            </div>*/}
                {/*            <div className={''}>*/}
                {/*                <h1 className={`text-xs md:text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 1")}</h1>*/}
                {/*                <h1 className={`text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 2")}</h1>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'ml-auto p-1 mr-5'}>*/}
                {/*            <Image src={'/assets/images/jcBosePhoto.png'} width={75} height={75}*/}
                {/*                   className={'rounded-full'}/>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <div className={'flex flex-col'}>*/}
                {/*        <div className={'flex flex-col font-bold -space-y-1 tracking-wider mt-5'}>*/}
                {/*            <h1 className={'text-xs md:text-2xl mb-1'}>Department of Computer Engineering - Faculty</h1>*/}
                {/*            <h1 className={'text-sm text-secondaryLight'}>J.C. Bose University of Science and Technology ,YMCA, Faridabad</h1>*/}
                {/*            /!*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*!/*/}
                {/*            /!*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}

                <>
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider mt-2 md:mt-5'}>
                            <h1 className={'text-xs md:text-xl'}>{t("JCBoseUst")}</h1>
                            {/*<h1 className={'text-xs md:text-xl'}>of Science & Technology</h1>*/}
                            {/*<h1 className={'text-xs md:text-xl'}>YMCA, Faridabad</h1>*/}
                        </div>
                        <div className={''}>
                            <h1 className={`text-xs md:text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 1")}</h1>
                            <h1 className={`hidden md:block text-xs ${!isWhite ? "" : "text-secondaryLight"}`}>{t("UST description 2")}</h1>
                        </div>
                    </div>                  
                   
                <div className="flex ml-auto p-1 mr-5">
                    <div className="flex-shrink-0 hidden md:block">
                        <Image src="/assets/images/G20.png" width={120} height={120} className="rounded-full" />
                    </div>
                    <div className="ml-2 flex-shrink-0 hidden md:block">
                        <Image src="/assets/images/jcBosePhoto.png" width={75} height={75} className="rounded-full" />
                    </div>
                </div>

                </>

            </div>

            {/*<div className={'flex justify-between w-3/5 ml-14 text-sm font-bold '}>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Home')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Students')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Admission')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Academics')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Research')}</h1>*/}
            {/*    <h1 className={'uppercase cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>{t('Resources')}</h1>*/}
            {/*</div>*/}
            <div className={'flex '}>
                <div className={'md:ml-auto w-10 hover:bg-primary text-center hover:text-white duration-200'} onClick={() => {
                    router.push('/')
                }}>
                    <HomeIcon className={'md:ml-auto'}/>

                </div>
            {/*{isDepartment ? <DepartmentNavbar/> : isFaculty ? <FacultyNavbar/> : <NavBarMenu menuItems={menuItems} className={'mr-0'} translations={'home.navbar'} />}*/}
                <NavBarMenu menuItems={menu} className={'mr-0'} translations={'home.navbar'} />
                <div className={'flex md:hidden ml-auto mr-2'} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    <MenuIcon fontSize={'large'}/>
                </div>
            </div>

            <NavDrawer
                open={isDrawerOpen}
                translations={'home.navbar'}
                data={menu}
                onClose={() => setIsDrawerOpen(false)}
            >

            </NavDrawer>
            {/* <SearchComponent searchData={searchData}/> */}



            {/*<div className={'flex md:hidden ml-auto mr-2'}>*/}
            {/*    <MenuIcon fontSize={'large'}/>*/}
            {/*</div>*/}

        </div>
    )
}
const searchData = [
    { id: 1, title: 'Scheme A' },
    { id: 2, title: 'Scheme B' },
    { id: 3, title: 'Syllabus X' },
    { id: 4, title: 'Syllabus Y' },
    { id: 5, title: 'Faculty Member 1' },
    { id: 6, title: 'Faculty Member 2' },
    // Add more data elements as needed
  ];

export default NavBar;
