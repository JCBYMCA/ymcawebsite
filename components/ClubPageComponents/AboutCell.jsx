import Image from "next/image"
import { MEDIA_BASE_URL } from "../../config/constants"
const AboutCell = ({ data }) => {
  return (
    <div className="bg-[#161b25] text-white p-10 px-10 sm:px-20">
      <div>
        <h1 className="text-5xl" >About Us</h1>
      </div>
      <div className="sm:flex sm:space-x-4 mt-6 flex flex-col-reverse sm:flex-row">
        <div className="sm:mr-4 text-justify">
          {data?.about_department ||
            "UCCE & DA is a part of the University Computer Centre, Panjab University, Chandigarh. It is responsible for the development and maintenance of the University website, the University Management Information System (UMIS), and the University Mobile App. It also provides IT support to various departments and offices of the University"
          }
        </div>
        <div className="">
          <div className="hidden sm:block border border-t-6 border-white border-solid my-4">
          </div>
          <div className="sm:flex px-10 sm:px-0">
            <div className="hidden sm:block border border-l-6 border-white border-solid mr-6"></div>
            <div className="mt-8 mb-8 sm:mb-0 sm:mt-0  text-center">
              <Image className={"w-[30vw] "} src={ data?.head_img ? MEDIA_BASE_URL+data?.head_img : '/assets/images/sampleperson.png'} alt="Pic" width={650} height={650} />
              <div className="w-full md:text-xl font-bold text-xl">{
                data?.head_name ? data?.head_name : "Mr./Ms. Chairperson"
              }</div>
              <p className="w-full text-xs">{data?.head_des || "Designation "}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCell
