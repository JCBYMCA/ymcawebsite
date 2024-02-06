import Image from "next/image"

const Gallery = () => {
  return (
    <div className="bg-[#161b25] p-10 px-20 text-white w-[70%]">
        <span className="text-5xl font-bold">Gallery</span>
        <div className="border border-white sm:border-t-6 border-solid mt-10"></div>
        <div className="flex mt-4">
            <div className="border border-solid border-white border-l-6"></div>
            <div className="sm:flex pl-6 space-x-6">
                <div className="flex flex-row flex-wrap">
                    <Image src='/assets/images/club/gallery/1.png' alt="1" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/2.png' alt="2" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/3.png' alt="3" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/7.png' alt="7" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/4.png' alt="4" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/5.png' alt="5" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/6.png' alt="6" width={600} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} /> 
                    <Image src='/assets/images/club/gallery/8.png' alt="8" width={270} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/4.png' alt="4" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/5.png' alt="5" width={300} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                    <Image src='/assets/images/club/gallery/6.png' alt="6" width={600} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} /> 
                    <Image src='/assets/images/club/gallery/8.png' alt="8" width={270} height={250} className={'w-[200px] h-[150px] rounded-md object-cover p-1'} />
                </div>
            </div>
        </div>
        <span className="text-3xl font-bold flex justify-center mt-6">MEMORIES THAT WE BUILD TOGETHER</span>
    </div>
  )
}

export default Gallery
