
const EventDate=()=>{
    return(
        <>

        </>
    );
}

const Event=(props)=>{
    return(
        <div className={'mb-4'}>
         <div className={'text-lg mb-1 mr-4'}>
             {props.name}
             <EventDate date={props.date}/>
         </div>
            <hr className={'border-gray-400 border-1 w-[90%] m-auto '}/>
        </div>
    );
}

const UpcomingEvents=()=>{
    return(
        <div className={' flex flex-col '}>
            <div className={'uppercase text-3xl border-b-4 border-dotted border-black text-center p-1'}>
                upcoming Events:
            </div>
            <div className={'flex-col py-4'}>
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} date={"6 October"}/>
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} date={"6 October"}/>
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} date={"6 October"}/>
                <Event name={'RoundTable Build-a-Thon: AI/ML Challenge'} date={"6 October"}/>
            </div>
        </div>
    );
}
export default UpcomingEvents;