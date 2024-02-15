import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutCell from "../../components/ClubPageComponents/AboutCell";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect } from "react";

const Cellpage = ({setLoader}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      <ClubNavbar />
      <ClubHero />
      <AboutCell />
      <div className={'sm:flex sm:flex-row sm:items-center space-x-4 px-5 sm:pl-20 py-8 bg-notice-bg bg-cover justify-center sm:justify-around sm:pr-20'}>
           <div className={'flex flex-col md:flex-row bg-[#EBEBEB] bg-opacity-5 w-full md:h-[35.8rem] py-10 px-3 md:px-8'}>
                    <div className={'md:w-2/3 w-auto shadow-sm md:mr-4'}>
                        <Notices className={'bg-[#EBEBEB] border-solid'} isHome={false} />
                    </div>
                    <div className={'md:w-1/3 w-auto md:ml-4 mt-4 md:mt-0'}>
                        <QuickLinks className={'bg-[#EBEBEB] border-solid'} heading={"Upcoming Events"}/>
                    </div>
                </div>
      </div>
      <FooterLinks />
    </div>
  );
};

export async function getServerSideProps({locale}) {
  return {
      props: {
          messages: (await import(`../../lang/${locale}.json`)).default,
      }
  }
}


export default Cellpage;
