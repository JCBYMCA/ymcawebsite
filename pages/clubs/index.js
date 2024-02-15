import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import Clubs from "../../components/ClubPageComponents/Clubs";
import Caro from "../../components/ClubPageComponents/Caro";
import { useEffect, useState } from "react";
import { getCellsClubs } from "../../http";

const Club = ({setLoader}) => {
  const [techClubs,setTechClubs] = useState([]);
  const [cultClubs,setCultClubs] = useState([]);

  const separateClubs = (data,type)=>{
      return data.filter((club)=>{
          return club.type == type;
      })
      
  }

  useEffect(()=>{
    getCellsClubs().then((resp) => {
      console.log(resp.data);
      setTechClubs(separateClubs(resp.data["List"],"technicalclub"))
      setCultClubs(separateClubs(resp.data["List"],"culturalclub"))
      setLoader(false);

  });




  }, []); 




  return (
    <div>
      <ClubNavbar />
      <Clubs />
      <Caro title={"Technical Clubs"} data={techClubs} />
      <Caro title={"Cultural Clubs"} data={cultClubs}    />
    </div>
  );
};

export default Club;
