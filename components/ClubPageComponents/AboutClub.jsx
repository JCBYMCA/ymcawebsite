import Image from "next/image"
const AboutClub = ({data}) => {
  return (
    <div className="bg-[#161b25] text-white p-10 px-10 sm:px-20">
      <div>
        <h1 className="text-5xl" >About Us</h1>
      </div>
      <div className="sm:flex sm:space-x-4 mt-6 flex flex-col-reverse sm:flex-row">
        <div className="sm:mr-4 text-justify">{data}</div>
      </div>
    </div>
  )
}

export default AboutClub
