import { getEvents } from "../../http";
import {useState,useEffect} from "react";
import moment from "moment/moment";

const Event=(props)=>{
    return(
        <div onClick={() => {
            // open the notice in a new tab
            window.open(props.notice?.url ? props.notice?.url : `${process.env.BACKEND_URL}/media/${props.notice?.pdf}`, '_blank');
        }} className={'border-1 flex flex-row justify-between cursor-pointer hover:scale-[1.01] duration-200 bg-white border-black rounded-md p-2 my-2'}>
            <h1>
                {props?.heading}
            </h1>
            <h1>
                {/* {moment(props?.notice?.s_date).format('DD MMM YYYY')} */}
            </h1>
        </div>
    );
}

const UpcomingEvents=()=>{
    const [events,setEvents] = useState([]);
    const getmonth=(date)=>{
        return date.toLocaleString('default', { month: 'short' });
    }
    useEffect(() => {
        getEvents().then((resp)=>{
           // console.log(resp.data["Notice List"]);
            setEvents(resp.data["Notice List"]);
        })
    } , []);
    return(
        <div className={'rounded-md bg-[#EBEBEB] flex flex-col h-full'}>
            <div className={'rounded-tl-md rounded-tr-md py-2 text-l md:text-xl text-center bg-secondary text-white font-bold'}>
                UPCOMING EVENTS
            </div>
            <div className={'flex-col px-3 py-4'}>
            {events.map((notice,i)=> moment(notice?.e_date).isAfter(moment()) ? (<Event notice={notice} heading={notice?.title} key={i}/>) : null)}
            </div>
            
        </div>
    );
}
export default UpcomingEvents;
