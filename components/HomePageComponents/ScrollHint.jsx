import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

const ScrollHint = () => {
    const t = useTranslations("home.scrollHint");
    return (
        <motion.div animate={{
            y: [-15, 0, -15],
        }} transition={{
            repeat: Infinity,
            duration:1.5
        }} className="flex mt-auto flex-col text-white">
            <h1 className={'mx-auto'}>{t("EXPLORE")}</h1>
            <KeyboardDoubleArrowDownIcon className={'mx-auto'} />
        </motion.div>
    );
}

export default ScrollHint;