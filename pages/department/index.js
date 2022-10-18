import Landing from "../../components/DepartmentPageComponents/Landing";
import Description from "../../components/DepartmentPageComponents/Description";
import QuickLinks from "../../components/common/QuickLinks";
import DepartmentChairperson from "../../components/DepartmentPageComponents/DepartmentChairperson";
import Notices from "../../components/HomePageComponents/Notices";
import Image from "next/image";
import Achievements from "../../components/DepartmentPageComponents/Achievements";
import {motion} from "framer-motion";

const DepartmentPage = () => {
    return (
        <div>
            <Landing/>
            <div className={'flex flex-col'}>
                <div className={'mt-16 mb-12 ml-20 mr-16 space-x-12 flex '}>
                    <DepartmentChairperson/>
                    <Description/>
                </div>
                <div className={'flex space-x-4 pl-20 py-8 bg-notice-bg bg-cover justify-around pr-20'}>

                    <Notices className={'w-[52rem] bg-white bg-opacity-60'} isDepartment={true}/>
                    <QuickLinks heading={'Scheme & Syllabus'}/>
                </div>
                    <Achievements/>



            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default DepartmentPage;