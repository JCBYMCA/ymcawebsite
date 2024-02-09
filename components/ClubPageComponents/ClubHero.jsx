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
        <div className="sm:flex space-x-8 mt-4 px-3 sm:justify-center">
            <div className="hidden sm:block border-l-8 border-white border-solid border"></div>
            <p className="text-white text-justify font-serif text-lg pt-5 pr-8 sm:w-[55%] mb-10 sm:mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates, inventore saepe, ipsam hic necessitatibus commodi est, minus autem vel blanditiis eaque omnis at a deserunt reiciendis. Quis unde deleniti officia iusto dignissimos dolor temporibus doloribus veritatis debitis non exercitationem omnis dolore sequi voluptatem in. Facere voluptates aliquam inventore exercitationem?</p>
        </div>
    </div>
    </div>
  )
}

export default ClubHero
