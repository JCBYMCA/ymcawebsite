import Image from "next/image";
import {motion} from "framer-motion";

const Description = () => {
    return (
        <motion.div
            initial={{
                opacity:0,
                y:-150
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:1,
            }}
            viewport={{
                margin:'0px 0px -50px 0px',
                once: false
            }}
            className={'flex flex-col w-[60rem] mb-4'}>
            {/*<Image src={'/assets/images/1.png'} alt={'Department'} width={800} height={500} />*/}
            {/*generate description text with a heading, subheading and about paragraph along with some bullet points*/}
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl font-bold'}>About Department</h1>
                <h1 className={'text-3xl font-semibold mt-2 mb-2'}>Department of Computer Engineering</h1>
                {/*<h1 className={'text-lg font-semibold mt-2'}>Bachelor of Technology</h1>*/}
                <p className={'text-justify'}>
                    The Department of Computer Engineering aims to promote academic growth by offering
                    high quality UG, PG and Doctoral programmes. Department aims to make a place at both
                    National and International level by producing high quality, ethically rich computer engineers
                    and IT professionals conversant with the state-of-the-art technology with the ability to
                    adapt the upcoming challenges in information technologies and their applications to cater
                    to the ever changing industrial &amp; societal needs. The hallmark of the department is a team
                    of passionate academic staff with a wide range of research interests. The department was
                    established in 1991, currently offers B.Tech. courses in Computer Engineering, Information
                    Technology, Computer Engineering with specialization in Data Science; and master courses
                    in Computer Engineering and Computer Science &amp; Engineering. The doctoral programme
                    was started in 2010. The department has modern and state of the art laboratories for its
                    learners.
                </p>
                <div className={'flex mt-4 space-x-8'}>
                <div className={'text-justify w-[50rem] border-2 p-4 bg-primaryLight bg-opacity-80 rounded-lg drop-shadow-2xl hover:scale-105 duration-200'}>
                    <h1 className={'text-xl font-bold text-center underline mb-2 '}>MISSION</h1>
                    The department aims to make a place at both national and international level by producing high quality ethically rich computer engineers conversant with the state-of-the-art technology with the ability to adapt the upcoming technologies to cater to the ever changing industrial demands and societal needs.  It endeavours to establish itself as a centre of excellence by contributing to research areas having IT impact on the people’s life and nation’s growth.
                </div>
                    <div className={'text-justify w-[50rem] border-2 p-4 bg-primaryLight bg-opacity-80 rounded-lg drop-shadow-2xl hover:scale-105 duration-200'}>
                        <h1 className={'text-xl font-bold text-center underline mb-2'}>VISION</h1>
                <ul className={'list-disc pl-4'}>
                    <li>To provide the future leaders in the area of computer engineering and information technology through the development of human intellectual potential to its fullest extent. </li>
                    <li>To enable the students to acquire globally competence through problem solving skills and exposure to latest developments in IT related technologies.</li>
                    <li>To educate the students about their professional and ethical responsibilities.</li>
                    <li>To ensure continuous interaction with the industry and academia through collaborative research projects</li>
                </ul>
                    </div>
                    </div>
            </div>

        </motion.div>
    )
}

export default Description;
