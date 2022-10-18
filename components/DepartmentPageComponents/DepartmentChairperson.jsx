import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import Image from "next/image";
const  DepartmentChairperson = () => {
    return (
        <div className={'flex flex-col bg-primaryLight bg-opacity-90 p-4 items-center justify-center rounded-xl shadow-2xl'}>
            <div>
                <a href={'#'}><Image src={'/assets/images/faculty/atulmishra.png'} layout={'fixed'} height={300} width={300} className={'rounded'}/></a>
            </div>
            <a href={'#'}><h1 className={'text-white font-bold text-2xl'}>Prof. Atul Mishra</h1></a>
            <a href={'#'}><h1 className={'text-white font-light mb-2'}>Chairperson</h1></a>
            <button className={'border-primaryLight border-2 rounded-lg p-1 bg-primary text-white'}>Read More</button>

        </div>


    );
}

export default DepartmentChairperson;