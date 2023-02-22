import {useTranslations} from "next-intl";
import {useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getNotices } from "../../http";
const Notice = (props) => {
    return(
        <div className={'border-1 cursor-pointer hover:scale-[1.01] duration-200 bg-white border-black rounded-md p-2 my-2'}>
            {props.heading}
        </div>
    );
}


const Notices = ({isDepartment, className}) => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [notices,setNotices] = useState([]);
    useEffect(() => {getNotices().then((resp)=>{setNotices(resp.data["Notice List"])})} , [value]) //how do you want to update the values, empty the dependency array if you want to update on every render instead
    const t = useTranslations("home.notices");
    return(
        <div className={'rounded-md border-gray-800 flex flex-col ' + className}>
            <div className={'rounded-tl-md rounded-tr-md py-2 text-xl md:text-3xl text-center bg-secondary text-white font-bold'}>
                {t('heading')}
            </div>

            {!isDepartment ? <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="Notices Tab" className={'md:w-auto w-full'} variant="scrollable" sx={{
                    marginX: 'auto',
                }}>

                        <Tab label="All Notices" value="1" className={'font-bold text-sm text-black'}/>
                        <Tab label="Student Notices" value="2" className={'font-bold text-sm text-black'}/>
                        <Tab label="Admission Notices" value="3" className={'font-bold text-sm text-black'}/>
                        <Tab label="Department Notices" value="4" className={'font-bold text-sm text-black'}/>
                </TabList>
                <TabPanel value="1">
                    {notices.map((notice,i)=>(<Notice heading={notice.notice_id} key={i}/>)) /*have implemented it to display the notice id fetched from api , fix the api or explain how to display here*/} 
                    <Notice heading={"Student 1st counselling merit list"}/>
                    <Notice heading={"Admission 1st counselling merit list"}/>
                    <Notice heading={"Department 1st counselling merit list"}/>
                    <Notice heading={"BTech 1st counselling merit list"}/>
                    <Notice heading={"BTech 1st counselling merit list"}/>
                </TabPanel>
                <TabPanel value="2">
                    <Notice heading={"Student 1st counselling merit list"}/>
                    <Notice heading={"Student 1st counselling merit list"}/>
                    <Notice heading={"Student 1st counselling merit list"}/>
                    <Notice heading={"Student 1st counselling merit list"}/>
                    <Notice heading={"Student 1st counselling merit list"}/>
                </TabPanel>
                <TabPanel value="3">
                    <Notice heading={"Admission 1st counselling merit list"}/>
                    <Notice heading={"Admission 1st counselling merit list"}/>
                    <Notice heading={"Admission 1st counselling merit list"}/>
                    <Notice heading={"Admission 1st counselling merit list"}/>
                    <Notice heading={"Admission 1st counselling merit list"}/>
                </TabPanel>
                <TabPanel value="4">
                    <Notice heading={"Department 1st counselling merit list"}/>
                    <Notice heading={"Department 1st counselling merit list"}/>
                    <Notice heading={"Department 1st counselling merit list"}/>
                    <Notice heading={"Department 1st counselling merit list"}/>
                    <Notice heading={"Department 1st counselling merit list"}/>
                </TabPanel>
            </TabContext> :
                <div className={'flex flex-col px-6 py-3'}>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                <Notice heading={"BTech 1st counselling merit list"}/>
                </div>}
            <button className={'mt-auto mx-auto bg-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                {t('viewAll')}
            </button>
        </div>
    );
}
export default Notices;