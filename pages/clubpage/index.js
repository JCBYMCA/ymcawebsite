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

const club = ({setLoader}) => {
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
      <Gallery />
      <div className={'flex space-x-4 pl-20 py-8 bg-notice-bg bg-cover justify-around pr-20'}>
          <Notices className={'w-[52rem] bg-white bg-opacity-60'} isHome={false} />
          <QuickLinks heading={'Upcoming Events'} />
      </div>
      <FooterLinks />
    </div>
  );
};

export default club;
