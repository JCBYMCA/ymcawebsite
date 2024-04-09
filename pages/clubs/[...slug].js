import { useTranslations } from "next-intl";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import QuickLinks from "../../components/common/QuickLinks";
import ClubPos from "../../components/ClubPageComponents/ClubPos";
import { useEffect, useState } from "react";
import cellsclubId from "../../config/cell_club_map";


import { getAboutDepartment, getCellsClubs, getSilder } from "../../http";
import AboutClub from "../../components/ClubPageComponents/AboutClub";
import Gallery from "../../components/ClubPageComponents/Gallery";

const Cellpage = ({slug, setLoader}) => {

  const [sliderImages, setSliderImages] = useState([]);
  const [heroData, setHeroData] = useState();
  const [about, setAbout] = useState();
  let count = 0;



  useEffect(() => {
    // console.log("slug", slug);
    const cellId = cellsclubId[slug[0]];
    // console.log("cellId", cellId);

    getSilder(cellId).then((resp) => {
      // console.log("resp", resp);
      setSliderImages(resp.data['Notice List']);
      handleCount();

    });

    getCellsClubs().then((resp) => {
      // console.log("resp", resp.data['List']);
      setHeroData(resp.data['List'].filter((item) => item['url'] == slug[0])[0]);
      handleCount();
    });


    getAboutDepartment(cellId).then((resp) => {
      // console.log("resp", resp.data['List'][0]);
      setAbout(resp.data['List'][0]);
      handleCount();
    });
    
  }, [])


  const handleCount =()=>{
    
   count++;
   console.log("count", count);
   if (count == 3){
     setLoader(false);
   }
  }


  useEffect(() => {
    if(count == 3){
      setLoader(false);
    }
  }, [count])
  
  return (
    <div className="bg-[#161b25]">
      <ClubNavbar name={slug[0]}  menuData={[]}/>
      <ClubHero slider={sliderImages} data={heroData} />
      <AboutClub  data={about} />
      {/* <ClubPos data={[]} /> */}

      <div className=" flex-col flex p-10 justify-around md:flex-row w-full h-full bg-[#161b25] gap-y-10">
        <div className={"md:w-1/4"}>
        <QuickLinks heading={"Upcoming Events"} />
        </div>
        
        <div className="md:w-2/3">
          <Gallery url={slug[0]}/>
        </div>
        
      </div>
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

export default Cellpage;

