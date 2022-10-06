import Image from "next/image"


const ProfileCard = ({image, name, designation}) => {
  return (
      <div className={'flex flex-col mx-5 border-12 rounded-xl  w-[10rem] h-[18rem] py-4 bg-gradient-to-b from-white to-[#A9B6C9] border-neutral-50 text-justify items-center  '}>
          <div className={'px-3'}>
              <div className={'bg-gradient-to-t from-white to-secondary rounded-md'}>
                  <Image src={image ? image : "/assets/images/logo.png"} layout={'responsive'}  alt={name} width={100} height={100}/>
              </div>
            <div className={'flex flex-col text-orange-800 font-bold items-center'}>
              <h1 className={'text-xs'}>{name}</h1>
              <h2 className={'text-xs  mx-auto'}>{designation}</h2>
            </div>
            <div>
              <button  className={'p-2  px-6 text-sm rounded-xl bg-primary text-white'}>Read More </button>
            </div>
          </div>
      </div>
  );
}
export default ProfileCard;