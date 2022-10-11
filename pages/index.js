import NavBar from "../components/NavBar/NavBar";
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
import UpcomingEvents from "../components/HomePageComponents/UpcomingEvents";
import SchoolIcon from '@mui/icons-material/School';


const Home = () => {

    return (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
        <div>
            <motion.div animate={{
                backgroundColor:['#000', 'rgba(0,0,0,0)']
            }} className={'md:h-[51.3rem] h-[40rem] -z-10 flex flex-col -mt-[8.75rem]'}>

                <div>
                    <video autoPlay muted loop className={'fixed md:w-full w-screen md:h-[51.3rem] h-[40rem] brightness-50 -z-30 object-fill'}>
                        <source src="/assets/video/bg.mp4" type="video/mp4"/>
                    </video>
                    <Heading/>
                    <Button/>
                </div>
                <ScrollHint/>
            </motion.div>
            <div className={'flex flex-col md:flex-row bg-[#EBEBEB] md:h-[32rem] items-center'}>
                <div className={'flex flex-col md:flex-row w-4/5 justify-around'}>
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
                <div className={'w-1/5 hidden md:block bg-secondary h-full overflow-hidden'}>
                    <AutoScrollFeatures/>
                </div>
            </div>
            <div className={'flex flex-col md:flex-row md:h-[36rem] bg-fixed bg-notice-bg bg-no-repeat bg-center bg-cover '}>
                <div className={'flex flex-col md:flex-row bg-white bg-opacity-70 flex w-full md:h-[35.8rem] py-10 md:px-8'}>
                    <div className={'md:w-2/3 md:mr-4'}>
                        <Notices/>
                    </div>
                    <div className={'md:w-1/3 ml-4'}>
                        <UpcomingEvents/>
                    </div>
                </div>
            </div>


            <div className={'md:h-[35.8rem] bg-feature-bg bg-no-repeat bg-fixed bg-cover bg-center '}>
                <div className={'backdrop-brightness-50 md:h-[35.8rem] flex flex-col'}>
                    <div className={'mt-20 font-semibold'}>
                        <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                        }}
                            transition={{
                            delay: 0.2,
                            duration: 0.3,
                        }} className={'text-white text-4xl ml-12 md:text-8xl md:ml-60'}>Explore</motion.h1>
                        <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3
                            }} className={'text-white text-4xl ml-20 md:text-8xl md:ml-96'}>the privileges</motion.h1>
                    </div>
                    <motion.div
                        initial={{
                            opacity:0,
                            y: 100,
                        }}
                        viewport={{
                            margin:'0px 0px -200px 0px',
                            once: true
                        }}
                        whileInView={{
                            opacity:1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            type: 'spring',
                        }}
                        className={'mt-auto flex overflow-x-scroll'}>
                        <FeatureCard  index={0}/>
                        <FeatureCard index={1}/>
                        <FeatureCard index={2}/>
                        <FeatureCard index={3}/>
                        <FeatureCard index={4}/>
                        <FeatureCard index={5}/>
                        <FeatureCard index={6}/>
                    </motion.div>

                </div>


            </div>
        </div>

        </>

    )
}

export async function getStaticProps({locale}) {
    console.log("LOCALE IS ",locale);
    return {
        props: {
            messages: (await import(`../lang/${locale}.json`)).default,
        }
    }
}

export default Home;