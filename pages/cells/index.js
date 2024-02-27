import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import CellHero from "../../components/ClubPageComponents/CellHero";
import CellCards from "../../components/ClubPageComponents/CellCards";
import FooterLinks from "../../components/common/FooterLinks";
import { useEffect, useState } from "react";
import { getCellsClubs, getDepartmentPostsMenu } from "../../http";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";


const Cell = ({ setLoader }) => {
  const [cells, setCells] = useState([]);
  const [menu, setMenu]= useState([]);

  const separateClubs = (data, type) => {
    return data.filter((club) => {
      return club.type == type;
    })

  }

  useEffect(() => {
    let user= 1;
    getCellsClubs().then((resp) => {
      setCells(separateClubs(resp.data["List"], "cells"))

    });

    getDepartmentPostsMenu(user).then((resp) => {
      setMenu((resp.data));
      setLoader(false);
    });


  }, []);

  return (
    <div>
      {/* <ClubNavbar /> */}
      {menu.length != 0 && <NavBar menudata={menu} />}
      <CellHero />
      <CellCards data={cells} />
    </div>
  );
};



export default Cell;
