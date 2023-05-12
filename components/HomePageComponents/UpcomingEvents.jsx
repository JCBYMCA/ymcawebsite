import { getEvents } from "../../http";
import {useState,useEffect} from "react";

const EventDate=(props)=>{
    return(
        <div className={"text-center bg-white rounded-md mx-2"}>
            <div className={"text-3xl"}>{props.day}</div>
            <div className={"text-xs text-white bg-secondary rounded-br-md rounded-bl-md p-1"}>{props.month}</div>
        </div>
    );
}

const Event=(props)=>{
    return(
        <div className={'mb-4'}>
         <div className={'text-lg mb-1 mr-4 flex w-full justify-between px-2'}>
             {props.name}
             <EventDate day={props.day} month={props.month} className={'rounded-md'} />
         </div>
            <hr className={'border-gray-400 border-1 w-[90%] m-auto '}/>
        </div>
    );
}

const UpcomingEvents=()=>{
    const [events,setEvents] = useState([]);
    useEffect(() => {
        getEvents().then((resp)=>{
            console.log(resp.data["Notice List"]);
            setEvents(resp.data["Notice List"]);
        })
    } , []);
    return(
        <div className={'rounded-md bg-white bg-opacity-80 flex flex-col'}>
            <div className={'rounded-tl-md rounded-tr-md py-2 text-3xl text-center bg-secondary text-white font-bold'}>
                Upcoming Events:
            </div>
            <div className={'flex-col py-4'}>
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} day={"6"} month={"October"} />
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} day={"6"} month={"October"} />
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} day={"6"} month={"October"} />
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} day={"6"} month={"October"} />
            </div>
        </div>
    );
}
export default UpcomingEvents;
