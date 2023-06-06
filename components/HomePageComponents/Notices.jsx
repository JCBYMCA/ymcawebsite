import {useTranslations} from "next-intl";
import {useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useRouter} from "next/router";
import { getNotices } from "../../http";
import moment from "moment";

const Notice = (props) => {
    return(
        <div onClick={() => {
            // open the notice in a new tab
            window.open(props.notice?.url ? props.notice?.url : `${process.env.BACKEND_URL}/media/${props.notice?.pdf}`, '_blank');
        }} className={'border-1 flex flex-row justify-between cursor-pointer hover:scale-[1.01] duration-200 bg-white border-black rounded-md p-2 my-2'}>
            <h1>
                {props?.heading}
            </h1>
            <h1>
                {moment(props?.notice?.s_date).format('DD MMM YYYY')}
            </h1>
        </div>
    );
}


const Notices = ({isDepartment = false, className}) => {
    const [value, setValue] = useState('1');
    const router = useRouter();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [notices,setNotices] = useState([]);
    const [resultNotices,setResultNotices] = useState([]);
    const [datesheetNotices,setDatesheetNotices] = useState([]);
    const [tenderNotices,setTenderNotices] = useState([]);
    const [studentNotices,setStudentNotices] = useState([]);
    useEffect(() => {
        getNotices('admin', 'all').then((resp)=>{
        setNotices(resp.data["Notice List"]);
        });
        getNotices('admin', 'result').then((resp)=>{
            setResultNotices(resp.data["Notice List"]);
        });
        getNotices('admin', 'datesheet').then((resp)=>{
            setDatesheetNotices(resp.data["Notice List"]);
        });
        getNotices('admin', 'tender').then((resp)=>{
            setTenderNotices(resp.data["Notice List"]);
        });
        getNotices('admin', 'student').then((resp)=>{
            setStudentNotices(resp.data["Notice List"]);
        });
    } , [value]) //how do you want to update the values, empty the dependency array if you want to update on every render instead
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

                        <Tab label="All" value="1" className={'font-bold text-sm text-black'}/>
                        <Tab label="Result" value="2" className={'font-bold text-sm text-black'}/>
                        <Tab label="Datesheet" value="3" className={'font-bold text-sm text-black'}/>
                        <Tab label="Tender" value="4" className={'font-bold text-sm text-black'}/>
                        <Tab label="Student" value="5" className={'font-bold text-sm text-black'}/>
                </TabList>
                <TabPanel value="1">
                    {notices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                </TabPanel>
                <TabPanel value="2">
                    {resultNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                </TabPanel>
                <TabPanel value="3">
                    {datesheetNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                </TabPanel>
                <TabPanel value="4">
                    {tenderNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                </TabPanel>
                <TabPanel value="5">
                    {studentNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
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
