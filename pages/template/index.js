import PostTemplate from "../../components/common/PostTemplate";
import Head from "next/head";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";


const templatePage = () => {
    return (<>
        <Head>
            <title>Home - JC Bose University of Science and Technology, YMCA</title>
        </Head>
    <div>
        <div className={"backdrop-brightness-50 shadow-lg"}>
        <NavBar/>
        </div>
        <PostTemplate></PostTemplate>

    </div>
    </>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default templatePage;
