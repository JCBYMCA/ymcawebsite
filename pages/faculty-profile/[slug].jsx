import ProfileCard from "../../components/FacultyProfilePageComponents/ProfileCard";
import Head from "../../components/FacultyProfilePageComponents/Head";
import EducationQualifications from "../../components/FacultyProfilePageComponents/EducationQualifications";
import AreaofResearch from "../../components/FacultyProfilePageComponents/AreaofResearch";
import PatentsGrants from "../../components/FacultyProfilePageComponents/Patentsgrants";
import ProfessionalMembership from "../../components/FacultyProfilePageComponents/ProfessionalMembership";
import Awards from "../../components/FacultyProfilePageComponents/Awards";
import ResearchPublications from "../../components/FacultyProfilePageComponents/ResearchPublications";
import FacultyNavbar from "../../components/FacultyPageComponents/FacultyNavbar/FacultyNavbar";
import { useEffect, useState } from "react";
import { getDepartmentPostsMenu, getFacultyProfile } from "../../http";
import ProfileSection from "../../components/FacultyProfilePageComponents/Section";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";

const FacultyProfile = ({slug, setLoader }) => {

    const [data, setData] = useState();
    const [menu, setMenu] = useState([]);

    useEffect(() => {

        getDepartmentPostsMenu(1).then((resp) => {
            setMenu((resp.data));
        });
            
            getFacultyProfile(slug).then((resp) => {
                console.log(resp);
                setData(resp.data['Post List']);
                setLoader(false);
            });
        
    }, []);

    return (
        <div>
            {menu.length!=0 && <FacultyNavbar facultyPage={true} menudata={menu} />}
    <div className={'flex flex-row p-20 space-x-4'}>
        <div className={'w-1/3'}>
            <ProfileCard/>
        </div>
        <div className={'w-2/3'}>
            <Head/>
            <ProfileSection  />
            {/* <EducationQualifications/> */}
            {/* <AreaofResearch/>
            <PatentsGrants/>
            <ProfessionalMembership/>
            <Awards/> */}
            {/* <ResearchPublications/> */}
            {/* <button className={'bg-secondaryLight p-2 mt-4 rounded text-white'}>Read More</button> */}
        </div>
    </div>
        </div>
  );
}

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    //console.log("slug", slug);
    return {
        props: {
            slug: slug,
            messages: (await import(`../../lang/${context.locale}.json`)).default,
        }
    }
}

export default FacultyProfile;

//getStaticPaths and getStaticProps are used to generate static pages at build time

