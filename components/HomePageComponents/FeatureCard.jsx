import SchoolIcon from '@mui/icons-material/School';

const FeatureCard = ({ title, description, link }) => {
    return (
        <div className={'bg-secondary bg-opacity-80 flex flex-col'}>
            <SchoolIcon/>
        </div>
    )
}

export default FeatureCard;