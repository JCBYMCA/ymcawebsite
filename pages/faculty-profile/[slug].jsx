import {useRouter} from "next/router";
import Profile from "../../components/FacultyProfilePageComponents/Profile";
import Image from "next/image";
import BioSketch from "../../components/FacultyProfilePageComponents/BioSketch";
import AreasOfInterests from "../../components/FacultyProfilePageComponents/AreasOfInterests";
import Publications from "../../components/FacultyProfilePageComponents/Publications";

const FacultyProfile = () => {
    return (
    <div className={'py-8 px-[20rem] flex flex-col items-center'}>
        <div className={'flex justify-between w-full'}>
            <Image src={'/assets/images/faculty/neelamduhan.png'} alt={'Neelam Duhan'} width={250} height={200}/>
            <Profile/>
        </div>
        <div className={'w-full mt-1'}>
            <h1 className={'ml-14'}>Dr. Neelam Duhan</h1>
        </div>
        <BioSketch/>
        <AreasOfInterests/>
        <Publications/>
    </div>
  );
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}


export default FacultyProfile;

//getStaticPaths and getStaticProps are used to generate static pages at build time

