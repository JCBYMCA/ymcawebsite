import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutClub from "../../components/ClubPageComponents/AboutClub";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Gallery from "../../components/ClubPageComponents/Gallery";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";

const club = () => {
  return (
    <div className="bg-[#161b25]">
      <ClubNavbar />
      <ClubHero />
      <AboutClub />
      <div className="sm:flex w-full h-full bg-[#161b25]">
        <QuickLinks heading={"Upcoming Events"} />
        <Gallery />
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

export default club;
