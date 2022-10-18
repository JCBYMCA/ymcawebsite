import Faculty from "./index";
import FacultyCard from "../../components/FacultyPageComponents/FacultyCard";
import DepartmentContact from "../../components/FacultyPageComponents/DepartmentContact";
import QuickLinks from "../../components/common/QuickLinks";
import Image from "next/image";


const FacultyPage = () => {
    return (
        <div>

           <div className={'flex justify-between  px-32 mt-16'}>
            <div className={'flex flex-col'}>
            <FacultyCard
                image={'/assets/images/faculty/komalbhatia.png'}
                name={'Komal Kumar Bhatia'}
                designation={'Dean Computer Department'}
                mail={'bla@gmail.com'}
                contact={'91-8851221355'}
                qualf1={'Vituperatoribus efficiantur tempor'}
                qualf2={'Vituperatoribus efficiantur tempor'}
                linkedinlink={''}
                twitterlink={''}
            />
                <FacultyCard
                    image={'/assets/images/faculty/atulmishra.png'}
                    name={'Atul Mishra'}
                    designation={'Chairperson Computer Department'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/neelamduhan.png'}
                    name={'Neelam Duhan'}
                    designation={'Assistant Professor'}
                    mail={'neelamduhan@jcboseust.ac.in'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
            </div>
            <div className={'flex flex-col  '}>
                <FacultyCard
                    image={'/assets/images/faculty/cknagpal.jpg'}
                    name={'C.K Nagpal '}
                    designation={'Professor'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/ashutoshdixit.jpg'}
                    name={'Ashutosh Dixit'}
                    designation={'Professor, Computer Engineering and Dean, Academic Affairs'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/harish.jpg'}
                    name={'Harish Kumar'}
                    designation={'Associate Professor'}
                    mail={'neelamduhan@jcboseust.ac.in'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
            </div>


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

export default FacultyPage;