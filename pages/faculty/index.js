import Faculty from "./index";
import FacultyCard from "../../components/FacultyPageComponents/FacultyCard";
import DepartmentContact from "../../components/FacultyPageComponents/DepartmentContact";
import QuickLinks from "../../components/common/QuickLinks";
import Image from "next/image";


const FacultyPage = () => {
    return (
        <div>
            <div>
                <Image src={'/assets/images/computerDepartmentBg.png'} layout={'responsive'} width={'100%'} height={30}/>
            </div>
           <div className={'flex justify-between  px-10 mt-16'}>
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
            <div className={'flex flex-col space-y-8 w-[28rem]'}>
                <QuickLinks/>
                <DepartmentContact/>
            </div>


        </div>
        </div>

    )
}

export async function getStaticProps({locale}) {
    console.log("LOCALE IS ",locale);
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default FacultyPage;