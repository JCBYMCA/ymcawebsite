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
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}>Achievement 1</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/2.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}>Achievement 2</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/3.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}>Achievement 3</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/4.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}>Achievement 4</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/5.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}>Achievement 5</h1>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'w-40 h-40 bg-secondaryDark rounded-full'}>
                            <Image src={'/assets/images/achievements/6.png'} alt={'Achievement'} width={200} height={200} className={'rounded-full'}/>
                        </div>
                        <h1 className={'text-xl font-semibold text-center text-secondaryDark mt-2'}></h1>
                    </div>
                </Carousel>
            </div>
        </div>
    );

}

export default Achievements;