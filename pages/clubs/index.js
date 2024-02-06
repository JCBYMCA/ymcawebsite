import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Clubs from "../../components/ClubPageComponents/Clubs";
import Caro from "../../components/ClubPageComponents/Caro";

const cell = () => {
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
