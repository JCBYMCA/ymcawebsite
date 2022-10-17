import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import DepartmentNavbar from "./DepartmentNavbar/DepartmentNavbar";

const Landing = () => {
    const {scrollY, scrollYProgress} = useScroll();
    const [isShow, setIsShow] = useState(false);
    const [bgImage, setBgImage] = useState(1);

    useEffect(() => {
        setInterval(() => {
            if(bgImage === 1){
                setBgImage(2);
            }
            else if(bgImage === 2){
                setBgImage(1);
            }
        }, 10000)
    })

    scrollY.onChange(() => {
        scrollYProgress.get() >= 0.501 ? setIsShow(true) : setIsShow(false);

    })

    return (
        <div className={`bg-no-repeat duration-200 bg-cover bg-center flex flex-col h-[35rem] ${isShow ? "bg-[#EBEBEB] sticky -top-[26rem] text-black" : `bg-computer-department-bg-1 text-white`}`}
             style={{
            zIndex: 9999
        }}>
            <div className={` py-2 bg-no-repeat duration-200 bg-cover bg-center flex flex-col h-[35rem] ${isShow ? "bg-transparent" : "bg-opacity-50 bg-black"}`}>
                <div className={`mt-auto flex items-center ${isShow ? 'mb-0' : ''}`}>
                    {/*<h1 className={'text-green-500'}>Department of Computer Engineering, Bachelor of Technology</h1>*/}
                    <Image src={'/assets/images/favicon.ico'} alt={'Logo'} width={70} height={70} className={isShow ? "visible" : "invisible"} />
                    <div className={'flex flex-col ml-2'}>
                        <h1 className={'font-semibold text-3xl'}>Department of Computer Engineering</h1>
                        {isShow && <h1 className={'font-semibold text-md text-secondaryLight'}>J.C. Bose University of Science and
                            Technology, YMCA, Faridabad</h1>}
                    </div>

                </div>
                <div className={`flex ${isShow ? '':'hidden'}`}>
                    <DepartmentNavbar/>
                </div>
            </div>
        </div>
    )
}

export default Landing;