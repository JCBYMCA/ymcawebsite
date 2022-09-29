import {motion} from "framer-motion";

const Button = () => {
    return(
        <motion.div animate={{opacity:[0,1]}} transition={{delay:0.8}} className="flex mt-20 ml-20 space-x-11">
            <button className="text-white border-2 p-4 text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">FIND A PROGRAM</button>
            <button className="text-white border-2 p-4 text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">REQUEST INFORMATION</button>
            <button className="text-white border-2 p-4 text-sm hover:text-primary hover:bg-white hover:border-primary font-bold">APPLY</button>
        </motion.div>
    )
}

export default Button;