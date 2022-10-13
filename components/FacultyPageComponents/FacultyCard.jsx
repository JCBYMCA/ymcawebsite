import Image from "next/image";
import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {motion} from "framer-motion";

const FacultyCard = ({image,name,designation,mail,contact,qualf1,qualf2,link,linkedinlink,twitterlink}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x:-300
            }}
            whileInView={{
                opacity: 1,
                x:0
        }}
            viewport={{
                margin:'0px 0px -100px 0px',
                once:true
            }}
            transition={{
                duration:0.5,
                type:'spring',
            }}
            className={'flex mb-8 ml-4 space-x-8'}>
            <div className={''}>
                <Image src={image} height={380} width={380} layout={'fixed'}/>
            </div>
            <div className={'flex flex-col mt-4'}>
                <div className={'flex space-x-4 mb-2'}>
                    <a href={linkedinlink}><LinkedInIcon className={'hover:scale-105 duration-200'}/></a>
                    <a href={twitterlink}><TwitterIcon className={'hover:scale-105 duration-200'}/></a>
                </div>
                <h1 className={'font-bold text-3xl'}>{name}</h1>
                <h1 className={'text-gray-600 mb-4'}>{designation}</h1>
                <div className={'flex space-x-4 mb-1'}>
                    <DraftsIcon/>
                    <h1>{mail}</h1>
                </div>
                <div className={'flex space-x-4 mb-4'}>
                    <CallIcon/>
                    <h1>{contact}</h1>
                </div>

                <h1 className={''}>- {qualf1}</h1>
                <h1 className={''}>- {qualf2}</h1>
                <a href={link}><button className={'mt-4 border-2 p-5 bg-primaryLight hover:bg-primary duration-200 hover:scale-105 text-white rounded-lg'}>Read More</button></a>
            </div>

        </motion.div>
    );
}

export default FacultyCard;