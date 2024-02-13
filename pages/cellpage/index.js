import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutClub from "../../components/ClubPageComponents/AboutClub";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect } from "react";

const Cellpage = ({setLoader}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      <ClubNavbar />
      <ClubHero />
      <AboutClub />
      <div className={'sm:flex sm:flex-row sm:items-center space-x-4 px-5 sm:pl-20 py-8 bg-notice-bg bg-cover justify-center sm:justify-around sm:pr-20'}>
          <Notices className={'sm:w-[52rem] bg-white bg-opacity-60 px-4 pt-5 sm:pt-2'} isHome={false} />
          <QuickLinks className={' sm:mt-0'} heading={'Upcoming Events'} />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Cellpage;
