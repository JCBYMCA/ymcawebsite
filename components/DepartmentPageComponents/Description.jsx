import Image from "next/image";

import {motion} from "framer-motion";
const Description = ({about, mission, vision, dept_name}) => {
    return (
        <motion.div
            initial={{
                opacity:0,
                y:150
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.5,
            }}
            viewport={{
                margin:'0px 0px -50px 0px',
                once: false
            }}
            className={'flex flex-col w-[100%] md:w-[60%] mb-4'}>
            {/*<Image src={'/assets/images/1.png'} alt={'Department'} width={800} height={500} />*/}
            {/*generate description text with a heading, subheading and about paragraph along with some bullet points*/}
            <div className={'flex flex-col'}>
                {/* <h1 className={'text-3xl font-bold'}>About Department</h1> */}
                <h1 className={'text-3xl font-semibold mt-2 mb-2'}>Department of {dept_name.replace(/_/g, " ")}</h1>
                {/*<h1 className={'text-lg font-semibold mt-2'}>Bachelor of Technology</h1>*/}
                <p className={'text-justify'}>
                    {about}
                </p>
                <div className={'flex mt-4 space-x-8 text-white'}>
                <div className={'text-justify w-[50rem] border-2 p-4 bg-primaryLight bg-opacity-80 rounded-lg drop-shadow-2xl hover:scale-105 duration-200'}>
                    <h1 className={'text-xl font-bold text-center underline mb-2 '}>MISSION</h1>
                    {mission}
                </div>
                    <div className={'text-justify w-[50rem] border-2 p-4 bg-primaryLight bg-opacity-80 rounded-lg drop-shadow-2xl hover:scale-105 duration-200'}>
                        <h1 className={'text-xl font-bold text-center underline mb-2'}>VISION</h1>
                <ul className={'list-disc pl-4'}>
                    {vision}
                    {/* <li>To provide the future leaders in the area of computer engineering and information technology through the development of human intellectual potential to its fullest extent. </li>
                    <li>To enable the students to acquire globally competence through problem solving skills and exposure to latest developments in IT related technologies.</li>
                    <li>To educate the students about their professional and ethical responsibilities.</li>
                    <li>To ensure continuous interaction with the industry and academia through collaborative research projects</li> */}
                </ul>
                    </div>
                    </div>
            </div>

        </motion.div>
    )
}

export default Description;
