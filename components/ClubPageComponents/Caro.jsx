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

const Caro = ({ title, data, type }) => {
  
  return (

    <>
      <div>
        <div className="text-3xl font-bold md:mx-20 my-2 mt-10">{title}</div>
      </div>
      <div className="bg-[#F5F7FA] rounded-xl mx-3 md:mx-20 p-6 grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-4 ">
        
        {data && data.map((item, index) => (
              <Cards
              type= {type}
              key = {index}
              height={100}
              width={100}
              name={item.name}
              desc={item.Description}
              image={"http://49.50.77.87:3000/assets/media/"+item.image}
              url = {item.url}
            />
          ))}
      </div>
    </>
  );
};

export default Caro;
