import { getEvents } from "../../http";
import {useState,useEffect} from "react";
import moment from "moment/moment";

const EventDate=(props)=>{
    return(
        <div className={"text-center bg-white rounded-md mx-2"}>
            <div className={"text-2xl px-2"}>{props.day>9?props.day:"0"+props.day}</div>
            <div className={"text-xs text-white bg-secondary rounded-br-md w-full rounded-bl-md px-1"}>{props.month}</div>
        </div>
    );
}

const Event=(props)=>{
    return(
        <div className={'mb-4'}>
         <div className={'text-lg mb-1 pl-4  flex w-full justify-between pr-2'}>
             {props.name}
             <EventDate day={props.day} month={props.month} className={'rounded-md'} />
         </div>
            <hr className={'border-gray-400 border-1 w-[90%] m-auto '}/>
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
            console.log(resp.data["Notice List"]);
            setEvents(resp.data["Notice List"]);
        })
    } , []);
    return(
        <div className={'rounded-md h-full bg-white flex flex-col'}>
            <div className={'rounded-tl-md rounded-tr-md py-2 text-xl text-center bg-secondary text-white font-bold'}>
                Upcoming Events
            </div>
            <div className={'flex-col py-4'}>
                {events.map((event,i)=>{
                    return( moment(event?.e_date).isAfter(moment()) ?
                        <Event key = {i} name={event.title} day={moment(new Date(event.s_date)).date() } month={getmonth(new Date(event.s_date))}/>
                            :""
                    )

                }
                )}

            </div>
            
        </div>
    );
}
export default UpcomingEvents;
