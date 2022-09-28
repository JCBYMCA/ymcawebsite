import Image from "next/image";

const NavBar = () => {
   return (
       <div className={'flex mt-5 mx-5 text-white items-center'}>
            <div className={'flex items-center'}>
                <Image src='/assets/images/logo.png' alt={'Logo'} width={100} height={100} />
                <div className={'flex flex-col font-bold text-xl -space-y-1 tracking-wider'}>
                    <h1>JC Bose</h1>
                    <h1>University</h1>
                    <h1>YMCA, Faridabad</h1>
                </div>
            </div>

           <div className={'flex justify-between w-3/5 ml-14 text-sm font-bold '}>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>HOME</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>ABOUT US</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>ACADEMICS</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>STUDENTS</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>ADMISSION</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>RESEARCH</h1>
               <h1 className={'cursor-pointer hover:underline decoration-primary decoration-4 duration-300 underline-offset-4'}>RESOURCES</h1>
           </div>

       </div>
   )
}

export default NavBar;