import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,

    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
        carouselState: { currentSlide },
    } = rest;
    return (
        <div className="absolute flex w-full">
            <button className="" onClick={() => previous()}>
                <ArrowBackIosIcon/>
            </button>
            <button className="ml-auto" onClick={() => next()}>
                <ArrowForwardIosIcon/>
            </button>
        </div>
    );
}

const Achievements = () => {
    return (
        <div className={'bg-white mt-8 mb-8'}>
            <div className={'container mx-auto'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <h1 className={'text-3xl font-semibold text-center text-secondary mb-4 underline underline-offset-8 '}>Departmental Achievements</h1>
                    <div className={'w-20 h-1 bg-secondaryDark my-2'}/>
                </div>
                <Carousel
                    swipeable={true}
                    customButtonGroup={<ButtonGroup />}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/1.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'w-2/3 text-xs font-bold text-justify text-primary text-center text-secondaryDark mt-4'}>Dr. Neelam Duhan has been awarded the AICTE Visvesvaraya Best Teacher Award 2021. The award carries a cash prize of Rs 25,000 with a medal and certificate of excellence.</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/2.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xs text-justify w-2/3 text-secondary font-semibold text-center text-secondaryDark mt-4'}>The officials of university have been acknowledged for their support and contribution during the lockdown period of Covid-19 Pandemic from March to May, 2020, by the Haryana Red Cross Society.</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/3.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xs w-2/3 text-primary font-semibold text-center text-secondaryDark mt-4 text-justify'}>The team of women innovators of the University was recently awarded the Lilavati Award 2021-22 on Women Empowerment by AICTE. The award carries a cash prize of Rs. 75,000 and an appreciation certification.</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/4.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xs text-secondary font-semibold text-justify mt-4 w-2/3'}>Dr. Sushil Kumar Panwar won second prize in the three-day State Level YRC Orientation Workshop for YRC University Programme Coordinators and Counsellors on YRC Guidelines and Activities held from August 26 to 28,2022.</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/5.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xs text-primary font-semibold text-justify w-2/3 text-secondaryDark mt-4'}>The University & The University Computer Centre had set-up &apos;COVID-19 Help-Desk&apos; to provide a Common Resource Platform for COVID patients with a dedicated team of over 200 student volunteers to assist critically ill patients by arranging medical facilities.
                            </h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/6.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xs text-justify w-2/3 font-semibold text-secondary mt-4'}>The university has been awarded the &apos;Youth Red Cross Shield&apos;, &apos;Youth Red Cross Award&apos;, &apos;Voluntary Blood Donation Award&apos;, and a &apos;Souvenir&apos; by the Haryana State Branch of Indian Red Cross Society (IRCS) in recognition of the University&apos;s outstanding contribution in voluntary blood donation.</h1>
                    </div>
                </Carousel>
            </div>
        </div>
    );

}

export default Achievements;