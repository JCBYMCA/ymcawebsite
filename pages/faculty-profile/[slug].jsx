import ProfileCard from "../../components/FacultyProfilePageComponents/ProfileCard";
import Head from "../../components/FacultyProfilePageComponents/Head";
import Biography from "../../components/FacultyProfilePageComponents/Biography";

const FacultyProfile = () => {
    return (
    <div className={'flex flex-row p-20 space-x-8'}>
        <div className={'w-1/3'}>
            <ProfileCard/>
        </div>
        <div className={'w-2/3'}>
            <Head/>
            <Biography/>
        </div>
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

