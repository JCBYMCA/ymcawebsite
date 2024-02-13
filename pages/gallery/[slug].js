import Head from "next/head";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";
import FooterLinks from "../../components/common/FooterLinks";
import GalleryTemplate from "../../components/GalleryComponents/GalleryTemplate";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getGallery } from '../../http';
import { getEventGallery } from '../../http';

const TemplatePage = (props) => {
    const router= useRouter();
    const user= router.query.slug||router.query.id;
    const [data, setData]= useState('');
    const [title, setTitle]= useState('Gallery@JCBoseUST');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user  === undefined) return; else
        console.log("getting",user,"gallery data");
        setLoading(true);
        getGallery(user).then((resp) => {
            // console.log(resp);
            setData(resp.data["Gallery List"]);
            setTitle(resp.data["Gallery"]);
            setLoading(false);

        });

        

    } , [user])



    return (<>
        <Head>
            <title>Home - JC Bose University of Science and Technology, YMCA</title>
        </Head>
    <div>
        <NavBar/>
        
        <GalleryTemplate title={title} data={data} loader={loading}/>

    </div>
        {/* <FooterLinks/> */}
    </>
    )
}

// export async function getServerSideProps({locale}) {
//     return {
//         props: {
//             messages: (await import(`../lang/${locale}.json`)).default,
//         }
//     }
// }


export default TemplatePage;

//getStaticPaths and getStaticProps are used to generate static pages at build time


