import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";
import {motion} from "framer-motion";
import ScrollHint from "../components/HomePageComponents/ScrollHint";
import Button from "../components/HomePageComponents/Button";


const Home = () => {
    return (
        <motion.div animate={{
            backgroundColor:['#000', 'rgba(0,0,0,0)']
        }} className={'h-screen -z-10 flex flex-col bg-transparent'}>
            <div>
                <video autoPlay muted loop className={'fixed w-full h-screen brightness-50 -z-50 object-fill'}>
                    <source src="/assets/video/bg.mp4" type="video/mp4"/>
                </video>
            </div>
            <NavBar/>
            <Heading/>
            <Button/>
            <ScrollHint/>
        </motion.div>
    )
}

export default Home;