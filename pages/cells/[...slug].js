import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutCell from "../../components/ClubPageComponents/AboutCell";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect, useState } from "react";
import cellsclubId from "../../config/cell_club_map";
import Landing from "../../components/DepartmentPageComponents/Landing";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { getAboutDepartment, getCellsClubs, getMenu, getSilder } from "../../http";

const Cellpage = ({slug, setLoader}) => {

  const [sliderImages, setSliderImages] = useState([]);
  const [heroData, setHeroData] = useState();
  const [about, setAbout] = useState();
  const [menuData, setMenuData] = useState();



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
    
    getMenu(cellId).then((resp)=>{
      console.log("resp", resp);
      setMenuData(resp.data);
    });
   


    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      <ClubNavbar name={slug[0].replace("_"," ")} />      
      <ClubHero slider = {sliderImages} data = {heroData}/>
      <AboutCell data = {about}/>
      <div className={'sm:flex sm:flex-row sm:items-center space-x-4 px-5 sm:pl-20 py-8 bg-notice-bg bg-cover justify-center sm:justify-around sm:pr-20'}>
           <div className={'flex flex-col md:flex-row bg-[#EBEBEB] bg-opacity-5 w-full md:h-[35.8rem] py-10 px-3 md:px-8'}>
                    <div className={'md:w-2/3 w-auto shadow-sm md:mr-4'}>
                        <Notices className={'bg-[#EBEBEB] border-solid'} deptID={cellsclubId[slug[0]]} isDepartment={true} isHome={false} />
                    </div>
                    <div className={'md:w-1/3 w-auto md:ml-4 mt-4 md:mt-0'}>
                        <QuickLinks className={'bg-[#EBEBEB] border-solid'} heading={"Upcoming Events"}/>
                    </div>
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
