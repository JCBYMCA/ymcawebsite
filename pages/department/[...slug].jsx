import Landing from "../../components/DepartmentPageComponents/Landing";
import Description from "../../components/DepartmentPageComponents/Description";
import QuickLinks from "../../components/common/QuickLinks";
import DepartmentChairperson from "../../components/DepartmentPageComponents/DepartmentChairperson";
import Notices from "../../components/HomePageComponents/Notices";
import Image from "next/image";
import Achievements from "../../components/DepartmentPageComponents/Achievements";
import { motion } from "framer-motion";
import DepartmentNavbar from "../../components/DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAboutDepartment, getDepartmentPost, getDepartmentPostsMenu, getNotices, getSilder } from "../../http";
import Head from "next/head";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";
import PostTemplate from "../../components/common/PostTemplate";
import FooterLinks from "../../components/common/FooterLinks";
import departmentId from "../../config/dept_map";

const DepartmentPage = ({ slug, setLoader }) => {
    setTimeout(() => {
        setLoader(false);
    }, 1000);
    const [main, setMain] = useState([]);
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');
    const [menu, setMenu] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [noticeData, setNoticeData] = useState({
        notices: [],
        resultNotices: [],
        datesheetNotices: [],
        tenderNotices: [],
        studentNotices: []
    });
    const page = slug?.[1] ? slug[1] : "";

    useEffect(() => {
        if(page!= "")


        getDepartmentPost(departmentId[slug?.[0]], page).then((resp) => {
            setData(resp.data["Post List"][0].content);
            setTitle(resp.data["Post List"][0].name);
        });

        getAboutDepartment(departmentId[slug?.[0]]).then((resp) => {
            setMain(resp.data['List'], console.log(resp.data['List']))
        });

        getSilder(departmentId[slug?.[0]]).then((resp) => {
            setSliderImages(resp.data['Notice List']);
        });

        getDepartmentPostsMenu(departmentId[slug?.[0]]).then((resp) => {
            setMenu((resp.data));
        });


        getNotices(departmentId[slug?.[0]], 'all').then((resp) => {
            
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            // console.log(resp);
            setNoticeData((xyz)=> {return {...xyz, notices: resp.data["Notice List"]}});
        });

    }, [page, slug])

    return slug?.length === 1 ? (
        <div>
            <DepartmentNavbar id={departmentId[slug[0]]} dept_name={slug[0]} isDept={true} />
            <Landing id={departmentId[slug[0]]} dept_name={slug[0]} sliderImages={sliderImages} />
            <div className={'flex flex-col'}>
                <div className={'mt-16 mb-12 ml-20 mr-16 md:flex-row space-x-12 flex flex-col justify-center'}>
                    {main && main.map(data => {
                        return <>
                        <DepartmentChairperson name={data.head_name} designation={data.head_des} link={data.head_img} />
                        <Description about={data.about_department} mission={data.department_mission} vision={data.department_vision} dept_name={slug[0]} />
                        </>
                    })}
                </div>
                <div className={'flex flex-col md:flex-row bg-notice-bg bg-cover bg-opacity-5 w-full md:h-[35.8rem] py-10 px-3 md:px-8'}>
                    <div className={'md:w-2/3 w-auto shadow-sm md:mr-4'}>
                        <Notices className={'bg-[#EBEBEB] border-solid'} data={noticeData} isDepartment={true}  isHome={false} deptID={departmentId[slug[0]]} deptName={slug[0]} />
                    </div>
                    <div className={'md:w-1/3 w-auto md:ml-4 mt-4 md:mt-0'}>
                        <QuickLinks heading={'Scheme & Syllabus'} className={'bg-[#EBEBEB] border-solid'} deptName={slug[0]} />
                    </div>
                </div>
                <Achievements id={departmentId[slug[0]]} />
            </div>
        </div>
    ) : (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
            <div>
                <div className={"backdrop-brightness-50 shadow-lg"}>
    
                <DepartmentNavbar id={departmentId[slug[0]]} dept_name={slug[0]} isDept={true} />
                    {/* <NavBar id={departmentId[slug[0]]} menudata={menu} /> */}
                </div>
                <PostTemplate content={data} title={title}></PostTemplate>
            </div>
            <FooterLinks />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    console.log("slug", slug);
    return {
        props: {
            slug: slug,
            messages: (await import(`../../lang/${context.locale}.json`)).default,
        }
    }
}


export default DepartmentPage;
