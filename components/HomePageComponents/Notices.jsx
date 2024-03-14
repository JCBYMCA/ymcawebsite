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


const Notices = ({isDepartment = false, isHome = true, className, deptID = 1, data={
        notices: [],
        //resultNotices: [],
        //datesheetNotices: [],
        examinationNotices: [],
        recruitmentNotices: [],
        tenderNotices: []      
       
        //studentNotices: []
    }
    , deptName}) => {

    const t = useTranslations("home.notices");
    const [value, setValue] = useState('1');
    const router = useRouter();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

                        <Tab label="Examination" value="2" className={'font-bold text-xs md:text-sm text-black'}/>
                        {/* <Tab label="Result" value="2" className={'font-bold text-xs md:text-sm text-black'}/> */}
                         <Tab label="Recruitment" value="3" className={'font-bold text-xs md:text-sm text-black'}/>
                        {/* <Tab label="Datesheet" value="3" className={'font-bold text-xs md:text-sm text-black'}/> */}
                        <Tab label="Tender" value="4" className={'font-bold text-xs md:text-sm text-black'}/>
                        {/* <Tab label="Student" value="5" className={'font-bold text-xs md:text-sm text-black'}/>                         */}
                </TabList>
                </>
            }

                <div className="p-3">
                <TabPanel value="1" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {data.notices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`${isDepartment?'/department/notices/'+deptName+'/all':'/notices/all'}`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>



            {isHome &&
            <>
            <TabPanel value="2" className={"overflow-auto mb-4 overflow-y-scroll"}>
                    {data.examinationNotices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/examination`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                {/* <TabPanel value="2" className={"overflow-auto mb-4 overflow-y-scroll"}>
                    {data.resultNotices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/result`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel> */}
                <TabPanel value="3" className={"overflow-auto mb-4 overflow-y-scroll"}>
                    {data.recruitmentNotices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/recruitment`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                <TabPanel value="4" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {data.tenderNotices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/tender`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel>
                {/* <TabPanel value="5" className={"overflow-auto mb-4 overflow-y-scroll"} >
                    {data.studentNotices?.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Notice notice={notice} heading={notice?.title} key={i}/>) : null)}
                    <button 
                    onClick={() => {
                        // open the notice in a new tab
                        window.open(`/notices/student`, '_blank');
                    }}
                    className={'block mt-auto mx-auto bg-secondary text-white py-2 px-8 hover:scale-105 duration-200 flex-col mb-10'}>
                        {t('viewAll')}
                    </button>
                </TabPanel> */}
            </>
            }
                </div>
            </TabContext>
        </div>
    );
}
export default Notices;
