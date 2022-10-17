import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const Heading = () => {
    const t = useTranslations("home.heading");

    return (
        <div className="  text-white">

            <motion.div animate={{opacity:[0,1]}} transition={{delay:0.8}} className={'w-20 '}>
                <h1 className={'md:ml-20 ml-5 mt-64 md:mt-52 md:w-[44rem] w-[16rem] text-4xl md:leading-[5rem] z-10 relative font-bold md:text-6xl '}>{t("tagline")}</h1>
            </motion.div>
            <motion.div animate={{x:[-300,0]}} transition={{delay:1.3, duration:0.5}} className={'top-52 z-0 absolute w-2/12 md:w-1/12 bg-[#AA0E30] h-40 md:h-80'}>
            </motion.div>
        </div>
    );
}

export default Heading;