import Image from "next/image"

const ClubHero = () => {
  return (
    <div className="bg-[#161b25]">
    <div className=" bg-[#0058BF4F] sm:h-[600px] w-full flex flex-col items-center pt-10">
        <div className="pt-10">
            <Image src='/assets/images/cell/ucc.png' alt="Logo" width={200} height={200} />
        </div>
        <div>
            <h1 className="text-white text-xl text-center font-serif sm:text-3xl">UNIVERSITY COMPUTER CENTER & DIGITAL AFFAIRS</h1>
        </div>
        <div className="sm:flex space-x-8 mt-4">
            <div className="hidden sm:block border-l-8 border-white border-solid border"></div>
            <p className="text-white font-serif text-lg pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus <br /> voluptates, inventore saepe, ipsam hic necessitatibus commodi est, minus autem vel <br /> blanditiis eaque omnis at a deserunt reiciendis. Quis unde deleniti officia iusto dignissimos, <br /> dolor temporibus doloribus veritatis debitis non exercitationem omnis dolore sequi <br />voluptatem in. Facere voluptates aliquam inventore exercitationem?</p>
        </div>
    </div>
    </div>
  )
}

export default ClubHero
