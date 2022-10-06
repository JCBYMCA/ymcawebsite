import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";
import ProfileCard from "../components/HomePageComponents/ProfileCard";
import Footer from "../components/HomePageComponents/Footer";


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
            <div className={'mt-72 bg-white'}>
                <div className={'mb-48'}>hh</div>
                <Footer/>
            </div>





        </div>
            <ProfileCard
                name={'Shri Bandaru Dattatreya'}
                designation={'Hon\'ble Chancellor & Governor Haryana'}
                image={'/assets/images/governor.png'}
            />
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