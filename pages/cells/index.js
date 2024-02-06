import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import CellHero from "../../components/ClubPageComponents/CellHero";
import CellCards from "../../components/ClubPageComponents/CellCards";
import FooterLinks from "../../components/common/FooterLinks";

const cell = () => {
  return (
    <div>
      <ClubNavbar />
      <CellHero />
      <CellCards />
    </div>
  );
};

export default cell;
