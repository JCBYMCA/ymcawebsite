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


const Notices = ({isDepartment = false, isHome = true, className}) => {
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
        let user = "1";
        if(isDepartment){
            //console.log("getting dept notices");
            if (router.query.id === undefined) return; else
            user = router.query.id;
        }
        //console.log("getting",user,"notices");
        getNotices(user, 'all').then((resp) => {
           // console.log(resp);
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setNotices(resp.data["Notice List"]);
        });
        getNotices(user, 'result').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setResultNotices(resp.data["Notice List"]);
        });
        getNotices(user, 'datesheet').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setDatesheetNotices(resp.data["Notice List"]);
        });
        getNotices(user, 'tender').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setTenderNotices(resp.data["Notice List"]);
        });
        getNotices(user, 'student').then((resp) => {
            resp.data["Notice List"].sort((a, b)=> {
                return moment(b.date) - moment(a.date)
            })
            setStudentNotices(resp.data["Notice List"]);
        });
       
        //const arr= notices.concat(resultNotices).concat(datesheetNotices).concat(tenderNotices).concat(studentNotices);
        //setNotices(arr.sort((a,b)=> b.e_date - a.e_date))

    } , [value,router])
    const t = useTranslations("home.notices");
    return(
        <div className={'rounded-md border-gray-800 flex flex-col h-full ' + className}>
            <div className={'rounded-tl-md  rounded-tr-md py-2 text-l md:text-xl text-center bg-secondary text-white font-bold'}>
                {t('heading')}
            </div>

             <TabContext value={value} className={"mb-2"}>
                {isHome && <>
                <TabList onChange={handleChange} aria-label="Notices Tab" className={'md:w-auto w-full'} variant="scrollable" sx={{
                    marginX: 'auto',
                }}>                    
                        <Tab label="All" value="1" className={'font-bold text-xs md:text-sm text-black'}/>
                        <Tab label="Result" value="2" className={'font-bold text-xs md:text-sm text-black'}/>
                        <Tab label="Datesheet" value="3" className={'font-bold text-xs md:text-sm text-black'}/>
                        <Tab label="Tender" value="4" className={'font-bold text-xs md:text-sm text-black'}/>
                        <Tab label="Student" value="5" className={'font-bold text-xs md:text-sm text-black'}/>                        
                </TabList>
                </>}
                <div className="p-3">
                <TabPanel value="1" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {notices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/all`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                <TabPanel value="2" className={"overflow-auto mb-4 overflow-y-scroll"}>
                    {resultNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/result`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                <TabPanel value="3" className={"overflow-auto mb-4 overflow-y-scroll"}>
                    {datesheetNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/datesheet`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                {/* <TabPanel value="4" className={"overflow-auto mb-4 scroll-smooth"}>
                    {tenderNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                </TabPanel> */}
                <TabPanel value="4" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {tenderNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/tender`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                <TabPanel value="5" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {studentNotices.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/student`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                </div>
            </TabContext>
        </div>
    );
}
export default Notices;
