import Image from "next/image"


const ProfileCard = ({image, name, designation}) => {
  return (
      <div className={'flex hover:scale-105 duration-200 flex-col mx-5 border-12 rounded-xl  w-[15rem] h-[22rem] pt-4 px-2 bg-gradient-to-b from-white to-[#A9B6C9] border-neutral-50 items-center mb-2 '}>
          <div className={'px-3 flex flex-col'}>
              <div className={'bg-gradient-to-t relative h-60 w-52 from-white to-secondary rounded-md'}>
                  <Image src={image ? image : "/assets/images/logo.png"} className={'absolute bottom-0 '}  alt={name} layout='fill' objectFit='contain'/>
              </div>
            <div className={'flex flex-col text-orange-800 font-bold items-center'}>
              <h1 className={'text-xs'}>{name}</h1>
              <h2 className={'text-xs  mx-auto'}>{designation}</h2>
            </div>
            <div className={'mx-auto mt-1 '}>
              <button  className={'px-1 hover:scale-105  duration-200 text-sm rounded-md bg-primaryLight text-white m'}>Read More </button>
            </div>
          </div>
      </div>
  );
}
export default ProfileCard;