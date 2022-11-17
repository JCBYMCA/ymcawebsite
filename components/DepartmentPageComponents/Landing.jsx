import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import DepartmentNavbar, {DepartmentNavbarMenu} from "./DepartmentNavbar/DepartmentNavbar";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/router";
import Carousel from "react-multi-carousel";

const Landing = () => {
    const router = useRouter();
    const {scrollY, scrollYProgress} = useScroll();
    const [isShow, setIsShow] = useState(false);
    const [bgImage, setBgImage] = useState(1);

    useEffect(() => {
        let i = 1;
        setInterval(() => {
            if(i===7)
                i=1;
            setBgImage(i);
            i++;
            console.log(i);
        }, 5000)
    }, [])

    scrollY.onChange(() => {
        scrollYProgress.get() >= 0.331 ? setIsShow(true) : setIsShow(false);

    })

    return (
        <div className={`bg-no-repeat duration-200 bg-cover bg-center flex flex-col ${isShow ? "bg-[#EBEBEB] sticky -top-[27rem] text-black" : `text-white`}`}
             style={{
            zIndex: 9999
        }}>
            <div className={`py-2 bg-no-repeat duration-200 bg-cover bg-center flex flex-col ${isShow ? "bg-transparent" : "bg-opacity-50 bg-black"}`}>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={5000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <div>

                    </div>
                </Carousel>
                <div className={`mt-auto flex items-center ${isShow ? 'mb-1 ml-3' : ''}`}>
                    {/*<h1 className={'text-green-500'}>Department of Computer Engineering, Bachelor of Technology</h1>*/}
                    <Image src={'/assets/images/favicon.ico'} alt={'Logo'} width={70} height={70} className={isShow ? "visible" : "invisible"} />
                    <div className={'flex flex-col ml-2'}>
                        <h1 className={'font-semibold text-3xl'}>Department of Computer Engineering</h1>
                        {isShow && <h1 className={'font-semibold text-md text-secondaryLight'}>J.C. Bose University of Science and
                            Technology, YMCA, Faridabad</h1>}
                    </div>
                </div>

                <div className={`flex ${isShow ? 'ml-auto':'hidden'}`}>

                    <DepartmentNavbarMenu/>
                </div>
            </div>
        </div>
    )
}

export default Landing;