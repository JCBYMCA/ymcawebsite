import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { MEDIA_BASE_URL } from "../../config/constants"

const ClubHero = ({slider, data}) => {
  return (
    <div className="bg-[#161b25] relative">
      <div className={'h-[30vh] md:h-[70vh]'}>
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
          {slider?.map((item, index) => (
            <div key={index} className={'w-full h-[30vh] md:h-[70vh]'}>
              <Image src={item.img
                ? MEDIA_BASE_URL+item.img
                : '/assets/images/achievements/1.png'} alt={'Achievement'} layout={'fill'} />
            </div>
          ))
          }
          <div className={'w-full h-[30vh] md:h-[70vh]'}>
            <Image src={'/assets/images/achievements/1.png'} alt={'Achievement'} layout={'fill'} />
          </div>
        </Carousel>
      </div>
      <div className=" bg-[#000000c6] h-[30vh] md:h-[70vh] w-full flex flex-col items-center pt-10 absolute top-0">
        <div className="pt-10">
          <Image src={
            data?.image? MEDIA_BASE_URL+data.image : "/assets/images/cell/ucc.png"
          } alt="Logo" width={150} height={150} />
        </div>
        <div>
          <h1 className="text-white text-xl text-center font-serif sm:text-2xl">
              {data?.name || 
              "UNIVERSITY COMPUTER CENTER & DIGITAL AFFAIRS"
              } 
            </h1>
        </div>
        <div className="sm:flex space-x-8 mt-4 px-3 sm:justify-center">
          <div className="hidden sm:block border-l-8 border-white border-solid border"></div>
          <p className="text-white text-justify font-serif text-lg pt-5 pr-8 sm:w-[55%] mb-10 sm:mb-0">
            {data?.Description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates, inventore saepe, ipsam hic necessitatibus commodi est, minus autem vel blanditiis eaque omnis at a deserunt reiciendis. Quis unde deleniti officia iusto dignissimos dolor temporibus doloribus veritatis debitis non exercitationem omnis dolore sequi voluptatem in. Facere voluptates aliquam inventore exercitationem?" }
            </p>
        </div>
      </div>
    </div>
  )
}

export default ClubHero
