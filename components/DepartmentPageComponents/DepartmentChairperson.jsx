import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import Image from "next/image";
const DepartmentChairperson = () => {
    return (
        <div className={'flex flex-col bg-white w-[28rem] p-8 h-[35rem] text-white space-y-8 '}>
            <Image src={'/assets/images/faculty/atulmishra.png'} height={450} width={400} layout={"fixed"}/>
        </div>
    );
}

export default DepartmentChairperson;