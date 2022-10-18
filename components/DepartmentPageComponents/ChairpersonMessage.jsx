import Image from "next/image";
import DepartmentChairperson from "./DepartmentChairperson";
const ChairpersonMessage=()=>{
    return(
        <div className={'my-5 mx-20 px-2 py-4'}>

            <div className={'px-6 py-8 rounded-md  border-1 text-justify bg-neutral-50 border-neutral-300 flex shadow-2xl'}>
                <div className={'mr-4'}>
                    <h1 className={'font-bold text-2xl mb-4 text-center'}>{"Chairman's Message"}</h1>
                    <div className={' p-3 rounded-sm '}>
                        It gives me an immense pleasure introducing you to a department which nurtures and prepares you to enter the myriad dimensional opportunities waiting for you.It has always been a nursery of computer engineers catering to the needs of the industry of the nation in general and NCR region in particular.In 2002, consciously, the department started a PG program in computer engineering with a vision to produce conceptually correct teachers. No wonders that most faculties of surrounding engineering colleges is an alumni of YMCAUST.The world since recent times had been amazingly fast and fiercely competitive in all spheres of human activity. The said situation called for massive expansion of career focused education, particularly in emerging areas of information technology.The hallmark of the department is research. It has 16 PhD and the remaining are putting their best efforts in exploring new areas. There is strong group of aspirants who interestingly work in the field of internet technologies. Another group is effectively engaged in software engineering and MANETS.The department especially the faculty members take pains to shape the character of our students with consistent effort towards sincerity, punctuality, honesty and hard work. This ultimately play a pivotal role in their prosperous future and in becoming valuable citizens of the country.
                    </div>
                </div>
                <div className={'flex flex-col bg-primaryLight bg-opacity-90 p-4 items-center justify-center rounded-xl shadow-2xl'}>
                        <div>
                            <a href={'#'}><Image src={'/assets/images/faculty/atulmishra.png'} layout={'fixed'} height={300} width={300} className={'rounded'}/></a>
                        </div>
                        <a href={'#'}><h1 className={'text-white font-bold text-2xl'}>Prof. Atul Mishra</h1></a>
                        <a href={'#'}><h1 className={'text-white font-light '}>Chairperson</h1></a>
                </div>
            </div>
        </div>
    );
}
export default ChairpersonMessage;