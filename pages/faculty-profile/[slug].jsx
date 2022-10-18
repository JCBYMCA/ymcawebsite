import ProfileCard from "../../components/FacultyProfilePageComponents/ProfileCard";
import Head from "../../components/FacultyProfilePageComponents/Head";
import Biography from "../../components/FacultyProfilePageComponents/Biography";
import EducationQualifications from "../../components/FacultyProfilePageComponents/EducationQualifications";
import AreaofResearch from "../../components/FacultyProfilePageComponents/AreaofResearch";
import PatentsGrants from "../../components/FacultyProfilePageComponents/Patentsgrants";
import ProfessionalMembership from "../../components/FacultyProfilePageComponents/ProfessionalMembership";
import Awards from "../../components/FacultyProfilePageComponents/Awards";
import ResearchPublications from "../../components/FacultyProfilePageComponents/ResearchPublications";
import FacultyNavbar from "../../components/FacultyProfilePageComponents/FacultyNavbar";

const FacultyProfile = () => {

    return (
        <div>
    <div className={'flex flex-row p-20 space-x-4'}>
        <div className={'w-1/3'}>
            <ProfileCard/>
        </div>
        <div className={'w-2/3'}>
            <Head/>
            <Biography/>
            <EducationQualifications/>
            <AreaofResearch/>
            <PatentsGrants/>
            <ProfessionalMembership/>
            <Awards/>
            <ResearchPublications/>
            <button className={'bg-secondaryLight p-2 mt-4 rounded text-white'}>Read More</button>
        </div>
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

