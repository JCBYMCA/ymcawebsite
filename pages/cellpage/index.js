import { useTranslations } from "next-intl";
import { useTransition } from "next-intl";
import AboutCell from "../../components/ClubPageComponents/AboutCell";
import ClubHero from "../../components/ClubPageComponents/ClubHero";
import ClubNavbar from "../../components/ClubPageComponents/ClubPageNavbar/ClubNavbar";
import FooterLinks from "../../components/common/FooterLinks";
import Notices from "../../components/HomePageComponents/Notices";
import QuickLinks from "../../components/common/QuickLinks";
import { useEffect } from "react";

import Landing from "../../components/DepartmentPageComponents/Landing";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const Cellpage = ({setLoader}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      <ClubNavbar />
      <div>
      <div className={'h-min'}>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    arrows={false}
                >
                    <div className={'w-full border-2 h-[20rem] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/1.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/2.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/3.png'} alt={'Achievement'} layout={'fill'}/>
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/4.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    {/* {sliderImages && sliderImages.map((item, i) => (
                        <div key={i} className={'w-full h-[30vh] md:h-[60vh]'}>
                            <Image src={'http://49.50.77.87:8000/media/'+item.files_url} alt={'Achievement'} layout={'fill'} />
                        </div>
                    ))}  */}
                </Carousel>
                
                <div className={'absolute ml-20 bottom-[21%]'}>
                    <h1>
                        {/* <span className={'text-3xl font-bold '}>Department of Computer Engineering</span> */}
                    </h1>
                </div>
                </div>
      </div>
      
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
