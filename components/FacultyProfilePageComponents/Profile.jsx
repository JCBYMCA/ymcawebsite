import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const Profile = () => {
    return (
        <div className={'flex flex-col items-center w-[27rem] bg-secondaryLight text-white py-8'}>
            <div className={'flex space-x-8 text-4xl font-thin'}>
                <ManageAccountsOutlinedIcon sx={{
                    fontSize: 38
                }}/>
                <h1>Profile</h1>
            </div>
            <div className={'flex items-center text-center flex-col space-y-3 mt-5 text-xl'}>
                <h1>Associate Professor</h1>
                <h1>Ph.D.(CE), M.Tech.(CE), B.Tech(CE)</h1>
                <h1>neelam_duhan@rediffmail.com</h1>
                <h1>+91-9898989898</h1>
            </div>
        </div>
    )
}

export default Profile;