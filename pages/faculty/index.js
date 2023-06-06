import Faculty from "./index";
import FacultyCard from "../../components/FacultyPageComponents/FacultyCard";
import DepartmentContact from "../../components/FacultyPageComponents/DepartmentContact";
import Image from "next/image";
import FacultyNavbar from "../../components/FacultyPageComponents/FacultyNavbar/FacultyNavbar";


const FacultyPage = () => {
    return (
        <div>
            <FacultyNavbar/>

           <div className={'grid md:grid-cols-2 grid-cols-1 md:px-32 mt-16'}>

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
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />


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
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />



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