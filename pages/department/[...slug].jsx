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
import { getDepartmentMenu, getDepartmentPost } from "../../http";
import Head from "next/head";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";
import PostTemplate from "../../components/common/PostTemplate";
import FooterLinks from "../../components/common/FooterLinks";

const DepartmentPage = ({ slug }) => {
    const router = useRouter();
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');
    const page = slug?.[1] ? slug[1] : "";

    const departmentId = {
        "cse": 2,
        "electrical": 1
    }

    useEffect(() => {
        console.log("getting", departmentId[slug?.[0]], "post data");
        getDepartmentPost(departmentId[slug?.[0]], page).then((resp) => {
            setData(resp.data["Post List"][0].content);
            setTitle(resp.data["Post List"][0].name);
        });
    }, [page, slug])

    return slug?.length === 1 ? (
        <div>
            <DepartmentNavbar id={departmentId[slug[0]]} />
            <Landing />
            <div className={'flex flex-col'}>
                <div className={'mt-16 mb-12 ml-20 mr-16 space-x-12 flex '}>
                    <DepartmentChairperson />
                    <Description />
                </div>
                <div className={'flex space-x-4 pl-20 py-8 bg-notice-bg bg-cover justify-around pr-20'}>
                    <Notices className={'w-[52rem] bg-white bg-opacity-60'} isDepartment={true} />
                    <QuickLinks heading={'Scheme & Syllabus'} />
                </div>
                <Achievements />
            </div>
        </div>
    ) : (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
            <div>
                <div className={"backdrop-brightness-50 shadow-lg"}>
                    <NavBar />
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
