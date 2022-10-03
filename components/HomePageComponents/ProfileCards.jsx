import Image from "next/image"


const ProfileCards = () => {
  return (
    <div className={'  mt-24 flex flex-row items-center justify-around pl-4 pr-4 pb-4 '}>
      <div className={'flex flex-col mx-5 border-12 rounded-xl  w-[10rem] h-[18rem] p-2 bg-gradient-to-b from-cyan-100 to-blue-400   border-neutral-50 text-justify items-center justify-center '}>
        <Image src="/assets/images/logo.png"  alt={'Chief Minister'} width={100} height={100}/>
        <div className={' flex flex-col  mt-6 text-orange-800 font-bold items-center'}>
          <h1 className={''}>Shri Manohar Lal</h1>


          <h2 className={'text-xs mt-2 mx-auto'}>Hon'able chief minister of Haryana
          </h2>
        </div>
        <div>
          <button  className={'    p-2  px-6 mt-6 text-sm rounded-xl bg-primary text-white '}>Read More </button>
        </div>
      </div>
      


    </div>
  );
}
export default ProfileCards;