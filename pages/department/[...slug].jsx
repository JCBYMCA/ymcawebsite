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
import { getAboutDepartment, getDepartmentMenu, getDepartmentPost, getSilder } from "../../http";
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
    const [sliderImages, setSliderImages] = useState([]);
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
    }, [page, slug])

    return slug?.length === 1 ? (
        <div>
            <DepartmentNavbar id={departmentId[slug[0]]} dept_name={slug[0]} />
            <Landing id={departmentId[slug[0]]} dept_name={slug[0]} sliderImages={sliderImages} />
            <div className={'flex flex-col'}>
                <div className={'mt-16 mb-12 ml-20 mr-16 space-x-12 flex '}>
                    {main && main.map(data => {
                        return <>
                        <DepartmentChairperson name={data.head_name} designation={data.head_des} link={data.head_img} />
                        <Description about={data.about_department} mission={data.department_mission} vision={data.department_vision} />
                        </>
                    })}
                </div>
                <div className={'flex space-x-4 pl-20 py-8 bg-notice-bg bg-cover justify-around pr-20'}>
                    <Notices className={'w-[52rem] bg-white bg-opacity-60'} isDepartment={true}  isHome={false} />
                    <QuickLinks heading={'Scheme & Syllabus'} />
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
                    <NavBar id={departmentId[slug[0]]} />
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
            slug: slug
        }
    }
}

export default DepartmentPage;
