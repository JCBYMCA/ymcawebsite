import PostTemplate from "../components/common/PostTemplate";
import Head from "next/head";
import NavBar from "../components/HomePageComponents/NavBar/NavBar";
import FooterLinks from "../components/common/FooterLinks";
import { getPost } from "../http";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const templatePage = (props) => {
    const router= useRouter();
    const urlKey= router.query.slug;
    const [data, setData]= useState('');
    const [title, setTitle]= useState('');

    useEffect(() => {
        let user = "1";
        // if(isDepartment){
        //     console.log("getting dept menu");
        //     if (router.query.id === undefined) return; else
        //     user = router.query.id;
        // }
        console.log("getting",user,"post data");
        getPost(user, urlKey).then((resp) => {
            setData(resp.data["Post List"][0].content);
            setTitle(resp.data["Post List"][0].name);
            
        });

    } , [])

    return (<>
        <Head>
            <title>Home - JC Bose University of Science and Technology, YMCA</title>
        </Head>
    <div>
        <div className={"backdrop-brightness-50 shadow-lg"}>
        <NavBar/>
        </div>
        <PostTemplate content={data} title={title}></PostTemplate>

    </div>
    <FooterLinks/>
    </>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            messages: (await import(`../lang/${locale}.json`)).default,
        }
    }
}


export default templatePage;

//getStaticPaths and getStaticProps are used to generate static pages at build time


