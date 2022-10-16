import {useScroll} from "framer-motion";
import {useState} from "react";
import Image from "next/image";
import DepartmentNavbar from "./DepartmentNavbar/DepartmentNavbar";

const Landing = () => {
    const {scrollY, scrollYProgress} = useScroll();
    const [isShow, setIsShow] = useState(false);

    scrollY.onChange(() => {
        scrollYProgress.get() >= 0.501 ? setIsShow(true) : setIsShow(false);

    })

    return (
        <div className={`bg-no-repeat duration-200 bg-cover bg-center flex flex-col h-[35rem] ${isShow ? "bg-[#EBEBEB] sticky -top-[26rem] text-black" : "bg-computer-department-bg text-white"}`}
             style={{
            zIndex: 9999
        }}>
            <div className={` py-2 bg-no-repeat duration-200 bg-cover bg-center flex flex-col h-[35rem] ${isShow ? "bg-transparent" : "bg-opacity-50 bg-black"}`}>
                <div className={`mt-auto flex items-center ${isShow ? 'mb-0' : ''}`}>
                    {/*<h1 className={'text-green-500'}>Department of Computer Engineering, Bachelor of Technology</h1>*/}
                    <Image src={'/assets/images/logo.png'} alt={'Logo'} width={90} height={90} className={isShow ? "visible" : "invisible"} />
                    <h1 className={'font-semibold text-4xl'}>Department of Computer Engineering</h1>
                </div>
                <div className={`flex ${isShow ? '':'bg-gradient-to-t from-gradient-from'}`}>
                    <DepartmentNavbar/>
                </div>
            </div>
        </div>
    )
}

export default Landing;