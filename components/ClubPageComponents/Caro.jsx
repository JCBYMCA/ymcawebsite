import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
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
const description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint";

const Caro = ({ type }) => {
  return (
    <div className="bg-[#F5F7FA] rounded-xl m-20 p-10 flex flex-col space-y-5">
      <span className="text-4xl font-bold">{type}</span>
      <Carousel responsive={responsive} keyBoardControl={true}>
        <Cards
          height={100}
          width={100}
          name={"UCC & DA"}
          desc={description}
          image={"/assets/images/cell/ucc.png"}
        />
        <Cards
          height={100}
          width={100}
          name={"C & C"}
          desc={description}
          image={"/assets/images/cell/logo2.png"}
        />
        <Cards
          height={100}
          width={100}
          name={"IIC"}
          desc={description}
          image={"/assets/images/cell/logo3.png"}
        />
        <Cards
          height={100}
          width={100}
          name={"UDAAN"}
          desc={description}
          image={"/assets/images/cell/logo4.png"}
        />
        <Cards
          height={100}
          width={100}
          name={"Manan"}
          desc={description}
          image={"/assets/images/cell/logo4.png"}
        />
      </Carousel>
    </div>
  );
};

export default Caro;
