import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";
import Cards from "../components/HomePageComponents/Cards";


import Image from "next/image";
import ProfileCards from "../components/HomePageComponents/ProfileCards";


const Home = () => {
    return (
        <div>
            <motion.div animate={{
                backgroundColor:['#000', 'rgba(0,0,0,0)']
            }} className={'h-screen -z-10 flex flex-col'}>

                <div>
                    <video autoPlay muted loop className={'fixed w-full h-screen brightness-50 -z-50 object-fill'}>
                        <source src="/assets/video/bg.mp4" type="video/mp4"/>
                    </video>
                    <NavBar/>
                    <Heading/>
                    <Button/>
                    <ScrollHint/>
                    <Cards/>
                    <ProfileCards/>
                  
                </div>
            </motion.div>
           

        </div>

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