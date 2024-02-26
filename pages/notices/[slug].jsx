import PostTemplate from "../../components/common/PostTemplate";
import Head from "next/head";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";
import FooterLinks from "../../components/common/FooterLinks";
import { getDepartmentPostsMenu, getNotices } from "../../http";
import { useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";

const Notice = (props) => {
    return(
        <div onClick={() => {
            // open the notice in a new tab
            window.open(props.notice?.url ? props.notice?.url : `${process.env.BACKEND_URL}/media/${props.notice?.pdf}`, '_blank');
        }} className={'border-1 flex flex-row justify-between cursor-pointer hover:scale-[1.01] duration-200 bg-white border-black rounded-md p-2 my-2'}>
            <h1>
                {props?.heading}
            </h1>
            <h1>
                {moment(props?.notice?.s_date).format('DD MMM YYYY')}
            </h1>
        </div>
    );
}

const TemplatePage = (props) => {
    setTimeout(() => {
        props.setLoader(false);
    }, 1000);
    const router= useRouter();
    const urlKey= router.query.slug;
    const [notices, setNotices]= useState('');
    const [title, setTitle]= useState('Notices');
    const [menu, setMenu]= useState('');

    useEffect(() => {
        let user = "1";
        // if(isDepartment){
        //     console.log("getting dept menu");
        //     if (router.query.id === undefined) return; else
        //     user = router.query.id;
        // }

        getNotices(user, urlKey).then((resp) => {
            // console.log(resp.data["Notice List"]);
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNotices(resp.data["Notice List"]);
        });

        getDepartmentPostsMenu(user).then((resp) => {
            setMenu((resp.data));
        });

    } , [urlKey])

    return (<>
        <Head>
            <title>Home - JC Bose University of Science and Technology, YMCA</title>
        </Head>
    <div>
        <div className={"shadow-lg"}>
        {menu.length!=0 && <NavBar menudata={menu} />}
        </div>
        <div className={'my-5 mx-20 px-2 py-4 '}>
            <div className={' bg-logo bg-center h-fit bg-no-repeat bg-auto  rounded-md  border-1 text-justify bg-neutral-50 border-neutral-300 flex shadow-2xl'}>
                <div className={" px-6 w-full py-8 bg-white/90 "}>
                    <div className={'mr-4 w-full'}>
                        <h1 className={'font-bold text-2xl mb-4 text-center'}>{title}</h1>
                        <div id={'content-box'} className={' h-fit p-3 rounded-sm content-center'}>
                        {notices && notices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <FooterLinks/>
    </>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}


export default TemplatePage;

//getStaticPaths and getStaticProps are used to generate static pages at build time


