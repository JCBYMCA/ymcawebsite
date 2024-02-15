import Image from "next/image"

const CLubPos = () => {
  return (
    <div className="bg-[#161b25] w-full p-10 text-white px-20">
      <h1 className="text-2xl font-bold">Faculty Coordinators</h1>
      <div className="flex flex-col space-y-3 sm:flex sm:flex-row justify-evenly mt-20">
        <div>
            <Image src='/assets/images/club/jsec1.png' alt="jsec1" height={200} width={200} />
            <span className="text-2xl font-bold flex justify-center mt-4">Anurag Jindal</span>
            <span className="flex justify-center">Joint Secretary</span>
        </div>
        <div>
            <Image src='/assets/images/club/jsec2.png' alt="jsec2" height={200} width={200} />
            <span className="text-2xl font-bold flex justify-center mt-4">Jatin Sharma</span>
            <span className="flex justify-center">Joint Secretary</span>
        </div>
        <div>   
            <Image src='/assets/images/club/jsec3.png' alt="jsec3" height={200} width={200} />
            <span className="text-2xl font-bold flex justify-center mt-4">Yashaswi Garg</span>
            <span className="flex justify-center">Joint Secretary</span>
        </div>
        <div>
            <Image src='/assets/images/club/jsec3.png' alt="jsec3" height={200} width={200} />
            <span className="text-2xl font-bold flex justify-center mt-4">Yashaswi Garg</span>
            <span className="flex justify-center">Joint Secretary</span>
        </div>
      </div>
    </div>
  )
}

export default CLubPos