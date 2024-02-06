import Image from "next/image";
import Cards from "./Cards";

const CellCards = () => {
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint";
  return (
    <div className="p-20 flex flex-col space-y-3 sm:space-y-0 sm:flex sm:flex-row justify-around -space-x-">
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

      {/* <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center px-5 pb-5 rounded-lg drop-shadow-2xl">
        <Image className="-mt-12" src={'/assets/images/cell/logo1.png'} height={200} width={200} alt="logo1" />
        <span className="text-3xl font-bold -mt-8">UCC & DA</span>
        <p className="text-sm mt-4 font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint</p>
        <button className="bg-[#183C81] text-white px-3 py-1 rounded-lg mt-5">Visit Site</button>
      </div>
      <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center px-5 pb-5 rounded-lg drop-shadow-2xl">
        <Image className="rounded-full drop-shadow-md -mt-5" src={'/assets/images/cell/logo2.png'} height={100} width={100} alt="logo2" />
        <span className="text-3xl font-bold">C & C</span>
        <p className="text-sm mt-4 font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint</p>
        <button className="bg-[#183C81] text-white px-3 py-1 rounded-lg mt-5">Visit Site</button>
      </div>
      <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center px-5 pb-5 rounded-lg drop-shadow-2xl">
        <Image className="rounded-full drop-shadow-md -mt-5" src={'/assets/images/cell/logo3.png'} height={100} width={100} alt="logo3" />
        <span className="text-3xl font-bold">IIC</span>
        <p className="text-sm mt-4 font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint</p>
        <button className="bg-[#183C81] text-white px-3 py-1 rounded-lg mt-5">Visit Site</button>
      </div>
      <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center px-5 pb-5 rounded-lg drop-shadow-2xl">
        <Image className="rounded-full drop-shadow-md -mt-5"  src={'/assets/images/cell/logo4.png'} height={100} width={100} alt="logo4" />
        <span className="text-3xl font-bold">UDAAN</span>
        <p className="text-sm mt-4 font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur ut molestias ad perspiciatis ex assumenda, sint</p>
        <button className="bg-[#183C81] text-white px-3 py-1 rounded-lg mt-5">Visit Site</button>
      </div> */}
    </div>
  );
};

export default CellCards;
