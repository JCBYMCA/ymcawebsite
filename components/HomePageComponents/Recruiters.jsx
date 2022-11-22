import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

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

function importAll(r) {
    return r.keys().map(r);
}

const listOfImages = importAll(require.context('../../public/assets/images/recruiters', false, /\.(png|jpe?g|svg)$/));

const Recruiters = () => {
    return (
        //a auto scrolling company logo carousel
        <div className={' bg-white flex flex-col items-center'}>
            <h1 className={'text-4xl mt-5 font-light'}>Our Recruiters</h1>
            <div className={' w-full mt-10'}>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {listOfImages.map((image, index) => {
                        return (
                            <div key={index} className={'flex  items-center justify-center'}>
                                <Image src={image} width={200} height={100}/>
                            </div>
                        )
                    })}

                </Carousel>
            </div>
        </div>
    )
}

export default Recruiters;