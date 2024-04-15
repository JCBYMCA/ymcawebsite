import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutCell from "../../components/ClubPageComponents/AboutCell";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect, useState } from "react";
import cellsclubId from "../../config/cell_club_map";
import Landing from "../../components/DepartmentPageComponents/Landing";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { getAboutDepartment, getCellsClubs, getMenu, getNotices, getSilder } from "../../http";

const Cellpage = ({slug, setLoader}) => {

  const [sliderImages, setSliderImages] = useState([]);
  const [heroData, setHeroData] = useState();
  const [about, setAbout] = useState();
  const [menuData, setMenuData] = useState();
  const [noticeData, setNoticeData] = useState();
  const [Cellname, setCellName] = useState([]);



  useEffect(() => {
    // console.log("slug", slug);
    const cellId = cellsclubId[slug[0]];
    // console.log("cellId", cellId);

    getSilder(cellId).then((resp) => {
      // console.log("resp", resp);
      setSliderImages(resp.data['Notice List']);
    });

    getCellsClubs().then((resp) => {
      // console.log("resp", resp.data['List']);
      setHeroData(resp.data['List'].filter((item) => item['url'] == slug[0])[0]);
      setCellName(resp.data['List'].filter((item) => item['url'] == slug[0])[0].name);
       //console.log(heroData.name);
      // console.log(Cellname);
    }
    );

    getAboutDepartment(cellId).then((resp) => {
      // console.log("resp", resp.data['List'][0]);
      setAbout(resp.data['List'][0]);
    });
    
    getMenu(cellId).then((resp)=>{
      // console.log("resp", resp.data);
      setMenuData(createMenuObj(resp.data));
    });

    getNotices(cellsclubId[slug?.[0]], 'all').then((resp) => {
            
      resp.data["Notice List"].sort((a, b)=> {
          return moment(b.date) - moment(a.date)
      })
      // console.log(resp);
      if(resp.data["Notice List"].length !=0){
        setNoticeData((xyz)=> {return {...xyz, notices: resp.data["Notice List"]}});
      }
      
  });
   
    const createMenuObj= (data)=> {
      let arr = [];
      let pi = {};
      let si={};
      for( let item of data['Parent Menu List'] ){
          // console.log(item);
          let temp = {}
          temp['title'] = item["name"];
          temp['link'] = item['url'];
          temp['isNewTab'] = item['IsNewTab'];
          temp['submenu'] = [];
          arr.push(temp);
          pi[item.menu_id] = arr.length-1;

      }
      console.log(arr);
      for(let item of data['Submenu Menu List'] ){
          let temp = {};
          temp['title'] = item["name"];
          temp['link'] = item['url'];
          temp['isNewTab'] = item['IsNewTab'];
          temp['submenu'] = [];
          arr[pi[item.p_id]]['submenu'].push(temp);
          si[item.menu_id] = arr[pi[item.p_id]]['submenu'].length-1;
      }
      console.log(si);
      for(let item of data['Submenu Level 2 Menu List'] ){
          let temp = {};
          temp['title'] = item["name"];
          temp['link'] = item['url'];
          temp['isNewTab'] = item['IsNewTab'];
          // console.log(item.p_id,item.s_id);
          arr[pi[item.p_id]]['submenu'][si[item.s_id]]['submenu'].push(temp);
      }
      // console.log(arr);
      return arr;
  }

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      {/* <ClubNavbar name={slug[0].replace("_"," ")} menuData={menuData} />       */}
      <ClubNavbar name={Cellname} menuData={menuData} />      
      <ClubHero slider = {sliderImages} data = {heroData}/>
      <AboutCell data = {about}/>
      {noticeData &&
        <div className={'sm:flex sm:flex-row sm:items-center space-x-4 px-5 sm:pl-20 py-8 bg-notice-bg bg-cover justify-center sm:justify-around sm:pr-20'}>
            <div className={'flex flex-col md:flex-row bg-[#EBEBEB] bg-opacity-5 w-full md:h-[35.8rem] py-10 px-3 md:px-8'}>
                      <div className={'md:w-2/3 w-auto shadow-sm md:mr-4'}>
                        <Notices  data={noticeData} className={'bg-[#EBEBEB] border-solid'} deptID={cellsclubId[slug[0]]} isDepartment={true} isHome={false} /> 
                      </div>
                      <div className={'md:w-1/3 w-auto md:ml-4 mt-4 md:mt-0'}>
                          <QuickLinks className={'bg-[#EBEBEB] border-solid'} heading={"Upcoming Events"}/>
                      </div>
                  </div>
        </div>
      }
      <FooterLinks />
    </div>
  );
};


export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  console.log("slug", slug);
  return {
      props: {
          slug: slug,
          messages: (await import(`../../lang/${context.locale}.json`)).default,
      }
  }
}

export default Cellpage;
