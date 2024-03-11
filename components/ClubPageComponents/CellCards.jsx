import Image from "next/image";
import Cards from "./Cards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CellCards = ({data=[], type}) => {
  const description =
    "";
  return (
    <div className="bg-[#F5F7FA] rounded-xl m-20 p-6 flex flex-col space-y-5">
      <Carousel responsive={responsive} keyBoardControl={true}>
      {data && data.map((item, index) => (
            <Cards
            type= {type}
            key = {index}
            height={120}
            width={120}
            name={item.name}
            desc={item.Description}
            image={"http://49.50.77.87:3000/assets/media/"+item.image}
            url={item.url}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CellCards;
