import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import {motion} from "framer-motion";
import Image from "next/image";
const  DepartmentChairperson = ({name, designation, link}) => {
    return (
        <motion.div
            initial={{
                opacity:0,
                x:-100
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            transition={{
                duration:0.5,
            }}
            viewport={{
                margin:'0px 0px -50px 0px',
                once: false
            }}
            whileHover={{
                scale:1.05
            }}
            className={'flex flex-col  bg-opacity-90 px-4 items-center justify-center rounded-xl shadow-2xl h-[30rem]'}>
            <div>
                <a href={'#'}><Image src={'http://49.50.77.87:3000/assets/media/'+link} height={200} width={200} className={'w-[250px] h-[300px] rounded'}/></a>
            </div>
            <a href={'#'}><h1 className={'text-black font-bold text-2xl'}>{name}</h1></a>
            <a href={'#'}><h1 className={'text-black font-light mb-2'}>{designation}</h1></a>
            <button className={' rounded-lg p-1 bg-primaryLight text-white hover:scale-105 duration-200 hover:bg-primary'} onClick={''}>Read More</button>

        </motion.div>


    );
}

export default DepartmentChairperson;