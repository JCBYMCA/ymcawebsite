import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import DepartmentNavbar, {DepartmentNavbarMenu} from "./DepartmentNavbar/DepartmentNavbar";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/router";
import Carousel from "react-multi-carousel";

const Landing = ({id, dept_name, sliderImages, isNavbar=true}) => {
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
            <div className={`py-1 bg-no-repeat duration-200 bg-cover bg-center flex flex-col ${isShow ? "bg-transparent" : "bg-opacity-50 bg-black"}`}>
                <div className={'h-min]'}>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={3000}
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
                    arrows={false}
                >
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/1.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/2.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/3.png'} alt={'Achievement'} layout={'fill'}/>
                    </div>
                    <div className={'w-full h-[30vh] md:h-[60vh]'}>
                        <Image src={'/assets/images/achievements/4.png'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    {sliderImages && sliderImages.map((item, i) => (
                        <div key={i} className={'w-full h-[30vh] md:h-[60vh]'}>
                            <Image src={'http://49.50.77.87:8000/media/'+item.files_url} alt={'Achievement'} layout={'fill'} />
                        </div>
                    ))} 
                </Carousel>
                
                <div className={'absolute ml-20 bottom-[21%]'}>
                    <h1>
                        {/* <span className={'text-3xl font-bold '}>Department of Computer Engineering</span> */}
                    </h1>
                </div>
                </div>
                {isNavbar && <>
                <div className={`fixed top-0 bg-[#EBEBEB] p-2 pb-0   w-full ${isShow ? 'visible' : 'invisible'}`}>
                    <div className={`  flex items-center mb-4 ml-3`}>
                        {/*<h1 className={'text-green-500'}>Department of Computer Engineering, Bachelor of Technology</h1>*/}
                        <Image src={'/assets/image{isNavbar? <>s/favicon.ico'} alt={'Logo'} width={70} height={70} className={isShow ? "visible" : "invisible"} />
                        <div className={'flex flex-col ml-2'}>
                            <h1 className={'font-semibold text-3xl'}>Department of Computer Engineering</h1>
                            <h1 className={'font-semibold text-md text-secondaryLight'}>J.C. Bose University of Science and
                                Technology, YMCA, Faridabad</h1>
                        </div>
                    </div>

                    <div className={` margin auto`}>

                        <DepartmentNavbarMenu id={id} dept_name={dept_name} />
                    </div>
                </div>
                </>
                }   

            </div>
        </div>
    )
}

export default Landing;