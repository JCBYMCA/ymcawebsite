import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";
import ProfileCard from "../components/HomePageComponents/ProfileCard";
import Footer from "../components/HomePageComponents/Footer";
import FeatureCard from "../components/HomePageComponents/FeatureCard";


const Home = () => {
    return (
        <>
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
                        name={'Shri Bandaru Dattatreya'}
                        designation={'Hon\'ble Chancellor & Governor Haryana'}
                        image={'/assets/images/governor.png'}
                    />
                    <ProfileCard
                        name={'Shri Manohar Lal'}
                        designation={'Hon\'ble Chief Minister Haryana'}
                        image={'/assets/images/cm.png'}
                    />
                    <ProfileCard
                        name={'Prof. S.K. Tomar'}
                        designation={'Hon\'ble Vice-Chancellor'}
                        image={'/assets/images/vc.png'}
                    />
                </div>
                <div className={'w-1/5 bg-secondary h-full'}>

                </div>
            </div>
            <div className={'h-[70vh] bg-feature-bg bg-no-repeat bg-cover bg-center '}>
                <div className={'backdrop-brightness-50 h-[70vh] flex flex-col'}>
                    <h1 className={'text-white text-4xl '}>Explore</h1>
                    <h1 className={'text-white text-4xl'}>the privileges</h1>
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