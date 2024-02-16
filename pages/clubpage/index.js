import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutClub from "../../components/ClubPageComponents/AboutClub";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Gallery from "../../components/ClubPageComponents/Gallery";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect } from "react";
import ClubPos from "../../components/ClubPageComponents/ClubPos";

const Clubpage = ({setLoader}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div className="bg-[#161b25]">
      <ClubNavbar />
      <ClubHero />
      <AboutClub />
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

export async function getServerSideProps({locale}) {
  return {
      props: {
          messages: (await import(`../../lang/${locale}.json`)).default,
      }
  }
}

export default Clubpage;
