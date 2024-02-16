import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import CellHero from "../../components/ClubPageComponents/CellHero";
import CellCards from "../../components/ClubPageComponents/CellCards";
import FooterLinks from "../../components/common/FooterLinks";
import { useEffect, useState } from "react";
import { getCellsClubs } from "../../http";


const Cell = ({setLoader}) => {
  const [cells,setCells] = useState([]);

  const separateClubs = (data,type)=>{
      return data.filter((club)=>{
          return club.type == type;
      })
      
  }

  useEffect(()=>{
    getCellsClubs().then((resp) => {
      console.log(resp.data);
      setCells(separateClubs(resp.data["List"],"cells"))
      setLoader(false);

  });


  }, []); 

  return (
    <div>
      <ClubNavbar />
      <CellHero />
      <CellCards data={cells} />
    </div>
  );
};



export default Cell;
