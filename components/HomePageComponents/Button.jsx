import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const Button = () => {
    const t = useTranslations("home.button");

    return(
        <motion.div animate={{opacity:[0,1]}} transition={{delay:0.8}} className="flex mt-12 md:ml-20 space-x-4 md:space-x-11">
            <button className="uppercase duration-300 text-white border-2 p-1 md:p-4 text-xs md:text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">{t('Find a Program')}</button>
            <button className="uppercase duration-300 text-white border-2 p-1 md:p-4 text-xs md:text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">{t('Request Information')}</button>
            <button className="uppercase duration-300 text-white border-2 p-1 md:p-4 text-xs md:text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">{t('Apply Now')}</button>
        </motion.div>
    )
}

export default Button;