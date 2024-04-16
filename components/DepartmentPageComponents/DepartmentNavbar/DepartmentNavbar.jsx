import NavBarMenu from "../../common/NavBarMenu";
import {departmentMenuItems} from "./DepartmentMenuItems";
import Image from "next/image";
import {useTranslations} from "next-intl";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/router";
import { getDepartmentMenu, getMenu } from "../../../http";
import { useEffect, useState } from "react";
import { getDepartmentlist } from "../../../http";

const DepartmentNavbar = ({id, dept_name, isDept=false}) => {
    const t = useTranslations("home.navbar");
    const [deptdata, setdeptData] = useState();
    
    useEffect(() => {
        getDepartmentlist(id).then((resp) => {           
            setdeptData(resp.data["List"][0]["short_name"]);
           // console.log(resp.data["List"][0]["short_name"]);
            //console.log(resp.data);
           
        });

        // setTimeout(() => {
        //     setLoader(false);
        // }, 1000);
    }, []);
    return (
        <>
            <div className={`flex flex-col sticky top-0 bg-[#EBEBEB]  text-black border-1 border-neutral-200`} style={{
                zIndex:80
            }}>
                <div className={'flex'}>
                <a href={'/'} className={'ml-5'}>
                        <Image src='/assets/images/logo.png' alt={'Logo'} width={90} height={90} />
                    </a>
                    <div className={'flex flex-col'}>

                        {isDept?(
                            <div className={"m-auto"}>
                            {/* <h1 className={'font-semibold text-3xl'}>Department of {dept_name.replace(/_/g, " ")}</h1> */}
                      <h1 className={'font-semibold text-3xl'}>{deptdata}</h1> 
                           
                            <h1 className={'font-semibold text-md text-secondaryLight'}>J.C. Bose University of Science and
                                                Technology, YMCA, Faridabad</h1>
                            </div>
                        ):
                        <>
                            <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider mt-5'}>
                                <h1 className={'text-xs md:text-xl'}>{t("JCBoseUst")}</h1>
                                
                            </div>
                            <div className={''}>
                                <h1 className={`text-xs md:text-xs `}>{t("UST description 1")}</h1>
                                <h1 className={`text-xs `}>{t("UST description 2")}</h1>
                            </div> 
                        </>
                        }

                       
                        
                    </div>
                    <div className={'ml-auto p-1 mr-5'}>
                        <Image src={'/assets/images/jcBosePhoto.png'} width={75} height={75}
                               className={'rounded-full'}/>
                    </div>
                </div>
                <DepartmentNavbarMenu id={id} dept_name={dept_name} />
            </div>
        </>
    )
}

export const DepartmentNavbarMenu = ({id, dept_name}) => {
    const router = useRouter();
    const [menu, setMenu]= useState([]);

    useEffect(() => {
        let user = "2";
        // if(isDepartment){
        //     console.log("getting dept menu");
        //     if (router.query.id === undefined) return; else
        //     user = router.query.id;
        // }
        //console.log("getting",id,"menu");
        getDepartmentMenu(id).then((resp) => {
            //console.log(resp.data);
            setMenu(createMenuObj(resp.data));
            
        });

    } , [id])

    const makeLink = (link) => {
        if( link.substring(0, 4) === 'http' || 
            link.substring(0, 4) === 'www.' ||
            link.substring(0, 5) === 'https'     
        ) return link;

        return dept_name+'/'+link;
    }

    const createMenuObj= (data)=> {
        let arr = [];
        let pi = {};
        let si={};
        for( let item of data['Parent Menu List'] ){
            // console.log(item);
            let temp = {}
            temp['title'] = item["name"];
            temp['link'] = makeLink(item['url']);
            temp['isNewTab'] = item['IsNewTab'];
            temp['submenu'] = [];
            arr.push(temp);
            pi[item.menu_id] = arr.length-1;

        }
        //console.log(arr);
        for(let item of data['Submenu Menu List'] ){
            let temp = {};
            temp['title'] = item["name"];
            temp['link'] = makeLink(item['url']);
            temp['isNewTab'] = item['IsNewTab'];
            temp['submenu'] = [];
            arr[pi[item.p_id]]['submenu'].push(temp);
            si[item.menu_id] = arr[pi[item.p_id]]['submenu'].length-1;
        }
        //console.log(si);
        for(let item of data['Submenu Level 2 Menu List'] ){
            let temp = {};
            temp['title'] = item["name"];
            temp['link'] = makeLink(item['url']);
            temp['isNewTab'] = item['IsNewTab'];
            // console.log(item.p_id,item.s_id);
            arr[pi[item.p_id]]['submenu'][si[item.s_id]]['submenu'].push(temp);
        }
        // console.log(arr);
        return arr;
    }

    return (
        <div className={'flex'}>
            <div className={'ml-auto w-10 hover:bg-primary text-center hover:text-white duration-200'} onClick={() => {
                router.push('/department/'+dept_name)
            }}>
                <HomeIcon className={'ml-auto'}/>
            </div>
            <NavBarMenu menuItems={menu} className={' mr-0'} translations={''} />
        </div>
    )
}

export default DepartmentNavbar;