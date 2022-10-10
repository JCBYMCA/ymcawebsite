import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const Heading = () => {
    const t = useTranslations("home.heading");

    return (
        <div className="mt-20 text-white">

            <motion.div animate={{opacity:[0,1]}} transition={{delay:0.8}} className={'w-20 '}>
                <h1 className={'ml-20 mt-60 w-[44rem] leading-[7rem] z-10 relative font-bold text-8xl '}>{t("tagline")}</h1>
            </motion.div>
            <motion.div animate={{x:[-300,0]}} transition={{delay:1.3, duration:0.5}} className={'top-52 z-0 absolute w-1/12 bg-[#AA0E30] h-80'}>
            </motion.div>
        </div>
    );
}

export default Heading;