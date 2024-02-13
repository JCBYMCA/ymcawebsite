import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Clubs from "../../components/ClubPageComponents/Clubs";
import Caro from "../../components/ClubPageComponents/Caro";
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
      <Clubs />
      <Caro type={"Technical Clubs"} />
      <Caro type={"Cultural Clubs"} />
    </div>
  );
};

export default cell;
