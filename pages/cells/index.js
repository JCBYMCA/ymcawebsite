import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import CellHero from "../../components/ClubPageComponents/CellHero";
import CellCards from "../../components/ClubPageComponents/CellCards";
import FooterLinks from "../../components/common/FooterLinks";
import { useEffect } from "react";

const cell = ({setLoader}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])

  return (
    <div>
      <ClubNavbar />
      <CellHero />
      <CellCards />
    </div>
  );
};

export default cell;
