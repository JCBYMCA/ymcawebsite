import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutClub from "../../components/ClubPageComponents/AboutClub";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Gallery from "../../components/ClubPageComponents/Gallery";
import FooterLinks from "../../components/common/FooterLinks";
import cellsclubId from "../../config/cell_club_map";
import QuickLinks from "../../components/common/QuickLinks";
import ClubPos from "../../components/ClubPageComponents/ClubPos";
import { getAboutDepartment, getCellsClubs, getSilder } from "../../http";
import { useEffect, useState } from "react";


const Clubpage = ({slug, setLoader}) => {
  const [sliderImages, setSliderImages] = useState([]);
  const [heroData, setHeroData] = useState();
  const [about, setAbout] = useState();

  useEffect(() => {
    // console.log("slug", slug);
    const cellId = cellsclubId[slug[0]];
    // console.log("cellId", cellId);

    getSilder(cellId).then((resp) => {
      // console.log("resp", resp);
      setSliderImages(resp.data['Notice List']);
    });

    getCellsClubs().then((resp) => {
      // console.log("resp", resp.data['List']);
      setHeroData(resp.data['List'].filter((item) => item['url'] == slug[0])[0]);
    }
    );

    getAboutDepartment(cellId).then((resp) => {
      // console.log("resp", resp.data['List'][0]);
      setAbout(resp.data['List'][0]);
    }); 

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div className="bg-[#161b25]">
      <ClubNavbar name={slug[0].replace("_"," ")} />      
      <ClubHero slider = {sliderImages} data = {heroData}/>
      <AboutClub data={about} />
      <ClubPos />
      <div className=" flex-col flex p-10 justify-around md:flex-row w-full h-full bg-[#161b25] gap-y-10">
        <div className={"md:w-1/4"}>
        <QuickLinks heading={"Upcoming Events"} />
        </div>
        
        <div className="md:w-2/3">
          <Gallery />
        </div>
        
      </div>
      {/* <div
        className={
          "flex space-x-4 pl-20 py-8 bg-notice-bg bg-cover justify-around pr-20"
        }
      >
      </div> */}
      <FooterLinks />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  console.log("slug", slug);
  return {
      props: {
          slug: slug,
          messages: (await import(`../../lang/${context.locale}.json`)).default,
      }
  }
}

export default Clubpage;
