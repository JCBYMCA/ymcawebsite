import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion, useScroll} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";
import ProfileCard from "../components/HomePageComponents/ProfileCard";
import Footer from "../components/HomePageComponents/Footer";
import FeatureCard from "../components/HomePageComponents/FeatureCard";
import Head from "next/head";
import AutoScrollFeatures from "../components/HomePageComponents/AutoScrollFeatures";
import Notices from "../components/HomePageComponents/Notices";


const Home = () => {

    return (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
        <div>
            <motion.div animate={{
                backgroundColor:['#000', 'rgba(0,0,0,0)']
            }} className={'h-screen -z-10 flex flex-col'}>

                <div>
                    <video autoPlay muted loop className={'fixed w-full h-screen brightness-50 -z-30 object-fill'}>
                        <source src="/assets/video/bg.mp4" type="video/mp4"/>
                    </video>
                    <NavBar/>
                    <Heading/>
                    <Button/>
                </div>
                <ScrollHint/>
            </motion.div>
            <div className={'flex bg-[#EBEBEB] h-[60vh] items-center'}>
                <div className={'flex w-4/5 justify-around'}>
                    <ProfileCard
                        name={'governor name'}
                        designation={'governor designation'}
                        image={'/assets/images/governor.png'}
                    />
                    <ProfileCard
                        name={'chief minister name'}
                        designation={'chief minister designation'}
                        image={'/assets/images/cm.png'}
                    />
                    <ProfileCard
                        name={'vice chancellor name'}
                        designation={'vice chancellor designation'}
                        image={'/assets/images/vc.png'}
                    />
                </div>
                <div className={'w-1/5 bg-secondary h-full overflow-hidden'}>
                    <AutoScrollFeatures/>
                </div>
            </div>
            <div className={'flex h-[70vh] bg-notice-bg bg-no-repeat bg-center bg-cover '}>
                <div className={'bg-white bg-opacity-60 flex w-full h-[70vh]'}>
                    <div className={'w-2/3 py-10 px-6'}>
                        <Notices/>
                    </div>
                    <div className={'w-1/3'}>

                    </div>
                </div>
            </div>


            <div className={'h-[70vh] bg-feature-bg bg-no-repeat bg-fixed bg-cover bg-center '}>
                <div className={'backdrop-brightness-50 h-[70vh] flex flex-col'}>
                    <div className={'mt-20 font-semibold'}>
                        <h1 className={'text-white text-8xl ml-60'}>Explore</h1>
                        <h1 className={'text-white text-8xl ml-96'}>the privileges</h1>
                    </div>
                    <div className={'mt-auto flex overflow-hidden'}>
                        <FeatureCard index={0}/>
                        <FeatureCard index={1}/>
                        <FeatureCard index={2}/>
                        <FeatureCard index={3}/>
                        <FeatureCard index={4}/>
                        <FeatureCard index={5}/>
                        <FeatureCard index={6}/>
                    </div>

                </div>


            </div>
        </div>

        </>

    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../lang/${locale}.json`)).default,
        }
    }
}

export default Home;