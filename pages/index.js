import NavBar from "../components/HomePageComponents/NavBar/NavBar";
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
import {useEffect, useState} from "react";
import Feedback from "../components/HomePageComponents/Feedback";
import HomeSlider from "../components/HomePageComponents/HomeSlider";
import Marquee from "../components/common/Marquee";
import Carousel from "react-multi-carousel";
import api, { getDepartmentPostsMenu, getNotices, getSilder } from "../http";
import PopupModal from "../components/HomePageComponents/PopupModal";

const Home = ({setLoader}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
    
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
    
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }
    const [sliderImages, setSliderImages] = useState([]);
    const [menu, setMenu]= useState([]);
    const [apiCount, setApiCount]= useState(1);
    const [noticeData, setNoticeData] = useState({});


    useEffect(()=> {
        let user= 1;

        getSilder().then((resp) => {
            setApiCount(apiCount+1);
            setSliderImages(resp.data['Notice List']);
        });

        getDepartmentPostsMenu(user).then((resp) => {
            setApiCount(apiCount+1);
            setMenu((resp.data));
        });

        getNotices(user, 'all').then((resp) => {
            
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNoticeData((xyz)=> {return {...xyz, notices: resp.data["Notice List"]}});
        });
        // getNotices(user, 'result').then((resp) => {

        //     resp.data["Notice List"].sort((a, b)=> {
        //         return moment(b.date) - moment(a.date)
        //     })
        // setNoticeData((xyz)=> {return {...xyz, resultNotices: resp.data["Notice List"]}});
        // });
        getNotices(user, 'examination').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNoticeData((xyz)=> {return {...xyz, datesheetNotices: resp.data["Notice List"]}});
        });
        getNotices(user, 'tender').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNoticeData((xyz)=> {return {...xyz, tenderNotices: resp.data["Notice List"]}});
        });
        getNotices(user, 'recruitment').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNoticeData((xyz)=> {return {...xyz, studentNotices: resp.data["Notice List"]}});
        });
        
        return () => {
            setLoader(true);
          }
    }, [])

    useEffect(() => {
        if(apiCount == 2) {
            setTimeout(() => {
                setLoader(false);
            }, 1000);
        }
    }, [apiCount])

    useEffect(() => {
        const parallaxBackground = document.querySelector('.bg-notice-bg');
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        parallaxBackground.style.transform = `translate3d(0, ${scrollPosition * 0.5}px, 0)`;
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);

    const t = useTranslations("home");
    return (
        <>
            <Head>
                <title>Home - JC Bose University of Science and Technology, YMCA</title>
            </Head>
        <div>
            {menu.length!=0 && <NavBar menudata={menu} />}
           
            {sliderImages.length!=0 && menu.length!=0 && <HomeSlider sliderImages={sliderImages} menu={menu} />}
            <Marquee />
            <div className={'flex flex-col md:flex-row bg-[#EBEBEB] md:h-[26rem] items-center'}>
                <div className={'flex flex-col md:flex-row w-4/5 md:justify-around'}>
                    <ProfileCard
                        name={'governor name'}
                        designation={'governor designation'}
                        image={'/assets/images/governor.png'}
                        url = {'https://haryanarajbhavan.gov.in/whoswho/shri-bandaru-dattatraya/'}
                    />
                    {/* <ProfileCard
                        name={'chief minister name'}
                        designation={'chief minister designation'}
                        image={'/assets/images/cm.png'}
                        url = {'https://haryanacmoffice.gov.in/biography'}
                    /> */}
                    <ProfileCard
                        name={'vice chancellor name'}
                        designation={'vice chancellor designation'}
                        image={'/assets/images/vc.png'}
                        url = {'http://new.jcboseust.ac.in:3000/vc-s-message'}
                    />
                </div>
                <div className={'w-1/5 hidden md:block bg-secondary h-full overflow-hidden'}>
                    <AutoScrollFeatures/>
                </div>
            </div>
            <Feedback />
            {/* <PopupModal /> */}
            <div className={'bg-no-repeat bg-fixed bg-cover bg-center'}>
            <div className={'h-[100%] md:h-[80%] xl:h-[100%] w-full bg-notice-bg bg-no-repeat bg-center bg-cover absolute -z-10 top-[120%] md:top-[75%] xl:top-[80%] left-0'}></div>
            <div className={'flex flex-col md:flex-row md:h-[36rem] bg-fixed bg!-notice-bg bg-no-repeat bg-center bg-cover'}>
                <div className={'flex flex-col md:flex-row bg-[#EBEBEB] bg-opacity-5 w-full md:h-[35.8rem] py-10 px-3 md:px-8'}>
                    <div className={'md:w-2/3 w-auto shadow-sm md:mr-4'}>
                        <Notices data={noticeData} className={'bg-[#EBEBEB] border-solid'} />
                    </div>
                    <div className={'md:w-1/3 w-auto md:ml-4 mt-4 md:mt-0'}>
                        <UpcomingEvents className={'bg-[#EBEBEB] border-solid'}/>
                    </div>
                </div>
            </div>
            </div>


            <div className={'bg-no-repeat bg-fixed bg-cover bg-center'}>
                <div className={'h-[100%] md:h-[80%] xl:h-[100%] w-full bg!-feature-bg bg-no-repeat bg-center bg-cover absolute -z-10 top-[120%] md:top-[75%] xl:top-[100%] left-0'}></div>
                <div className={'backdrop-brightness-50 flex flex-col items-center bg-[#000000] bg-opacity-40'}>
                    <div className={'md:mt-20 mt-20 mb-10 font-semibold'}>
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
                        }} className={'text-white select-none text-2xl ml-0 md:text-5xl md:ml-0'}>{t("Explore")}</motion.h1>
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
                            }} className={'text-white text-4xl ml-0 select-none md:text-7xl md:ml-0'}>{t("the privileges")}</motion.h1>
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
                        className="h-[400px] w-full hidden md:block">
                        <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                        deviceType={"desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                            <FeatureCard title={"Campus Life"} icon={<LocationCityIcon className={'mx-auto'}/>} description={"Campus Life description"} index={0}/>
                            <FeatureCard title={"Placements"} icon={<WorkIcon className={'mx-auto'}/>} description={"Placements description"} index={1}/>
                            <FeatureCard title={"Centres of Excellence"} icon={<SchoolIcon className={'mx-auto'}/>} index={2} description={"Centres of Excellence description"}/>
                            <FeatureCard title={"Research Facility"} description={"Research Facility description"} index={3} icon={<PrecisionManufacturingIcon className={'mx-auto'}/>}/>
                            <FeatureCard title={"Central Library"} icon={<LocalLibraryIcon className={'mx-auto'}/>} index={4} description={"Central Library description"} />
                            <FeatureCard title={"Incubation Centre"} icon={<RocketLaunchIcon className={'mx-auto'}/>} index={5} description={"Incubation Centre description"}/>
                            <FeatureCard title={"Media Centre"} icon={<MovieIcon className={'mx-auto'}/>} index={6} description={"Media Centre description"}/>
                            <FeatureCard title={"Media Centre"} icon={<MovieIcon className={'mx-auto'}/>} index={7} description={"Media Centre description"}/>
                        </Carousel>
                    </motion.div>
                    {/* <motion.div
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
                        className={'fbox-container hidden md:flex'}>
                        <FeatureCard title={"Campus Life"} icon={<LocationCityIcon className={'mx-auto'}/>} description={"Campus Life description"} index={0}/>
                        <FeatureCard title={"Placements"} icon={<WorkIcon className={'mx-auto'}/>} description={"Placements description"} index={1}/>
                        <FeatureCard title={"Centres of Excellence"} icon={<SchoolIcon className={'mx-auto'}/>} index={2} description={"Centres of Excellence description"}/>
                        <FeatureCard title={"Research Facility"} description={"Research Facility description"} index={3} icon={<PrecisionManufacturingIcon className={'mx-auto'}/>}/>
                        <FeatureCard title={"Central Library"} icon={<LocalLibraryIcon className={'mx-auto'}/>} index={4} description={"Central Library description"} />
                        <FeatureCard title={"Incubation Centre"} icon={<RocketLaunchIcon className={'mx-auto'}/>} index={5} description={"Incubation Centre description"}/>
                        <FeatureCard title={"Media Centre"} icon={<MovieIcon className={'mx-auto'}/>} index={6} description={"Media Centre description"}/>
                    </motion.div> */}
                </div>
                <div className="block md:hidden">
                    <Carousel
                        additionalTransfrom={0}
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                                }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        arrows={false}
                    >
                        <FeatureCard title={"Campus Life"} icon={<LocationCityIcon className={'mx-auto'}/>} description={"Campus Life description"} index={0}/>
                        <FeatureCard title={"Placements"} icon={<WorkIcon className={'mx-auto'}/>} description={"Placements description"} index={1}/>
                        <FeatureCard title={"Centres of Excellence"} icon={<SchoolIcon className={'mx-auto'}/>} index={2} description={"Centres of Excellence description"}/>
                        <FeatureCard title={"Research Facility"} description={"Research Facility description"} index={3} icon={<PrecisionManufacturingIcon className={'mx-auto'}/>}/>
                        <FeatureCard title={"Central Library"} icon={<LocalLibraryIcon className={'mx-auto'}/>} index={4} description={"Central Library description"} />
                        <FeatureCard title={"Incubation Centre"} icon={<RocketLaunchIcon className={'mx-auto'}/>} index={5} description={"Incubation Centre description"}/>
                        <FeatureCard title={"Media Centre"} icon={<MovieIcon className={'mx-auto'}/>} index={6} description={"Media Centre description"}/>
                    </Carousel>
                </div>

            </div>
            {/* <Recruiters/> */}
            {/* className={'md:h-screen h-[40rem] -mt-[9.2rem] -z-10 flex flex-col'} */}
            <div className={'border-y-4'}>
            <motion.div animate={{
                backgroundColor:['#000', 'rgba(0,0,0,0)']
            }} className={'md:h-[48rem] -z-10 flex flex-col'}>
                <div className={'relative'}>
                    {/* fixed md:w-full w-screen md:h-screen md:mt-[0px] mt-[-4rem] h-[43rem] bright ness-50 -z-30 object-fill */}
                    <video poster={'/assets/images/temp.png'} autoPlay muted loop className={'md:w-full md:mt-[0px] md:h-[48rem] bright ness-50 -z-30 object-fill' }>
                        <source src="/assets/video/videoplayback.mp4" type="video/mp4"/>
                    </video>
                    <div className="absolute top-[0%] w-full h-full bg-black opacity-40"></div>
                    <div className="absolute top-[0%] lg:top-[20%] md:top-[0%]">
                        <Heading/>
                    </div>
                    {/* <Button/> */}
                </div>
                {/* <ScrollHint/> */}
            </motion.div>
            </div>
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
