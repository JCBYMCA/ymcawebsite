import Faculty from "./index";
import FacultyCard from "../../components/FacultyPageComponents/FacultyCard";
import DepartmentContact from "../../components/FacultyPageComponents/DepartmentContact";
import QuickLinks from "../../components/common/QuickLinks";
import Image from "next/image";


const FacultyPage = () => {
    return (
        <div>
            <div>
                <Image src={'/assets/images/computerDepartmentBg.png'} layout={'fixed'} width={1518} height={400}/>
            </div>
           <div className={'flex  space-x-44 pl-20 pr-20 mt-16'}>
            <div className={'flex flex-col'}>
            <FacultyCard
                image={'/assets/images/komalbhatia.jpeg'}
                name={'Komal Kumar Bhatia'}
                designation={'Dean Computer Department hhhh hhhh hhh'}
                mail={'bla@gmail.com'}
                contact={'91-8851221355'}
                qualf1={'bla bla bla bla '}
                qualf2={'bla bla bla bla'}
                linkedinlink={''}
                twitterlink={''}
            />
                <FacultyCard
                    image={'/assets/images/komalbhatia.jpeg'}
                    name={'Komal Kumar Bhatia'}
                    designation={'Dean Computer Department hhhh hhhh hhh'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'bla bla bla bla '}
                    qualf2={'bla bla bla bla'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={''}
                    name={''}
                    designation={''}
                    mail={''}
                    contact={''}
                    qualf1={''}
                    qualf2={''}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={''}
                    name={''}
                    designation={''}
                    mail={''}
                    contact={''}
                    qualf1={''}
                    qualf2={''}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={''}
                    name={''}
                    designation={''}
                    mail={''}
                    contact={''}
                    qualf1={''}
                    qualf2={''}
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