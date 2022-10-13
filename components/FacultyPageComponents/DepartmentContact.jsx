import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
const DepartmentContact = () => {
    return (
        <div className={'flex flex-col bg-black w-[28rem] p-8 h-[35rem] text-white space-y-8 '}>
            <h1 className={'text-secondaryLight text-xl  font-bold'}>Department Contact Info</h1>
            <h1>Bachelor of Technology</h1>
            <h1 className={''}>NH-2 Sector-6,Mathura Road, Faridabad-121006, Haryana(India)</h1>
            <div>
                <h1>0129-9999999</h1>
                <h1>blabla@gmail.com</h1>
            </div>
            <h1 className={''}>Mon-Fri 9:00-5:00PM</h1>
            <div>
                <h1 className={'text-xl font-bold text-secondaryLight'}>Social Info</h1>
                <div className={'flex space-x-4 mt-4'}>
                    <a href={'#'}><LinkedInIcon className={'text-secondaryLight'} /></a>
                    <a href={'#'}><FacebookIcon className={'text-secondaryLight'} /></a>
                    <a href={'#'}><TwitterIcon className={'text-secondaryLight'}/></a>
                </div>
            </div>
            <a href={'#'}><button className={'border-2 border-secondaryLight bg-secondaryLight p-4'}>Student Resources</button></a>



        </div>
    );
}

export default DepartmentContact;