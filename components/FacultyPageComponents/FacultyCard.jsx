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
            className={'flex drop-shadow-lg  mx-auto mb-8 space-x-8'}>
            <div className={''}>
                <Image src={image} height={'200'} width={'180'} layout={'fixed'}/>
            </div>
            <div className={'flex flex-col '}>
                {/*<div className={'flex space-x-4 mb-2'}>*/}
                {/*    <a href={linkedinlink}><LinkedInIcon className={'hover:scale-105 duration-200'}/></a>*/}
                {/*    <a href={twitterlink}><TwitterIcon className={'hover:scale-105 duration-200'}/></a>*/}
                {/*</div>*/}
                <h1 className={'font-bold text-lg md:text-2xl'}>{name}</h1>
                <h1 className={'text-gray-600 mb-1 text-sm md:text-base'}>{designation}</h1>
                <div className={'flex  space-x-4 text-sm md:text-base'}>
                    <DraftsIcon className={'inline'}/>
                    <h1 className={'inline'}>{mail}</h1>
                </div>
                <div className={'flex text-sm md:text-base space-x-4 mb-1'}>
                    <CallIcon/>
                    <h1>{contact}</h1>
                </div>

                <h1 className={'text-sm md:text-base'}>- {qualf1}</h1>
                <h1 className={'text-sm md:text-base'}>- {qualf2}</h1>
                <a href={link}><button className={'mt-1 border-2 py-1 px-5 bg-primaryLight hover:bg-primary duration-200 hover:scale-105 text-white rounded-lg'}>Read More</button></a>
            </div>

        </motion.div>
    );
}

export default FacultyCard;