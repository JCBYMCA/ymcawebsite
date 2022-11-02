import NavBar from "../components/NavBar/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion, useScroll} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";
import {useTranslations} from "next-intl";
import ProfileCard from "../components/HomePageComponents/ProfileCard";
import FooterLinks from "../components/common/FooterLinks";
import FeatureCard from "../components/HomePageComponents/FeatureCard";
import Head from "next/head";
import AutoScrollFeatures from "../components/HomePageComponents/AutoScrollFeatures";
import Notices from "../components/HomePageComponents/Notices";
import UpcomingEvents from "../components/HomePageComponents/UpcomingEvents";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MovieIcon from '@mui/icons-material/Movie';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Recruiters from "../components/HomePageComponents/Recruiters";

const Home = () => {
    const t = useTranslations("home");
    return (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
        <div>
            <motion.div animate={{
                backgroundColor:['#000', 'rgba(0,0,0,0)']
            }} className={'md:h-screen h-[40rem] -mt-[9.2rem] -z-10 flex flex-col'}>

                <div>
                    <video poster={'/assets/images/temp.png'} autoPlay muted loop className={'fixed md:w-full w-screen md:h-screen h-[40rem] brightness-50 -z-30 object-fill'}>
                        <source src="/assets/video/Video.mov" type="video/mp4"/>
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


            <div className={'bg-feature-bg bg-no-repeat bg-fixed bg-cover bg-center '}>
                <div className={'backdrop-brightness-50 flex flex-col'}>
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
                        }} className={'text-white text-4xl ml-12 md:text-8xl md:ml-60'}>{t("Explore")}</motion.h1>
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
                            }} className={'text-white text-4xl ml-20 md:text-8xl md:ml-96'}>{t("the privileges")}</motion.h1>
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
                        className={'fbox-container'}>
                        <FeatureCard title={"Campus Life"} icon={<LocationCityIcon className={'mx-auto'}/>} description={"Campus Life description"} index={0}/>
                        <FeatureCard title={"Placements"} icon={<WorkIcon className={'mx-auto'}/>} description={"Placements description"} index={1}/>
                        <FeatureCard title={"Centres of Excellence"} icon={<SchoolIcon className={'mx-auto'}/>} index={2} description={"Centres of Excellence description"}/>
                        <FeatureCard title={"Research Facility"} description={"Research Facility description"} index={3} icon={<PrecisionManufacturingIcon className={'mx-auto'}/>}/>
                        <FeatureCard title={"Central Library"} icon={<LocalLibraryIcon className={'mx-auto'}/>} index={4} description={"Central Library description"} />
                        <FeatureCard title={"Incubation Centre"} icon={<RocketLaunchIcon className={'mx-auto'}/>} index={5} description={"Incubation Centre description"}/>
                        <FeatureCard title={"Media Centre"} icon={<MovieIcon className={'mx-auto'}/>} index={6} description={"Media Centre description"}/>
                    </motion.div>

                </div>


            </div>
            <Recruiters/>
        </div>
        <FooterLinks/>
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