import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NearMeIcon from '@mui/icons-material/NearMe';
import FilePresentIcon from '@mui/icons-material/FilePresent';

const ProfileCard = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'drop-shadow-2xl '}>
                <Image src={'/assets/images/faculty/neelamduhan.png'} width={250} height={300} className={'rounded-xl border-2 border-black '}/>
            </div>
            <div className={'flex flex-col space-y-6 mt-10'}>
                <div className={'flex'}>
                    <EmailIcon className={'text-gray-700 mr-1'}/>
                    <h1>neelamduhan@jcboseust.ac.in</h1>
                </div>
                <div className={'flex'}>
                    <PhoneIcon className={'text-gray-700'}/>
                    <h1>+91 9898989898</h1>
                </div>
                    <button className={'py-3 w-40 px-4 bg-secondaryLight text-white text-sm hover:scale-105 duration-200 hover:bg-secondary rounded '}>
                        Visit IRINS 
                        
                    </button>
            </div>
        </div>
    )
}

export default ProfileCard;
