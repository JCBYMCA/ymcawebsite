const EducationsQualifications = () => {
    return (
        <div className={'mt-5' +
            ' flex flex-col text-justify border-b-4 border-secondaryLight pb-6'}>
            <h1 className={'text-xl font-bold'}>Education & Qalifications</h1>
            <ul className={'list-disc text-sm mt-3 font-thin text-justify'}>
                <li>Ph.D. in Computer Engineering from Maharishi Dayanand University, Rohtak (June 2011). Title: A P&P Framework for Knowledge Discovery from World Wide Web</li>
                <li>M.Tech. in Computer Engineering from YMCA Insitute of Engineering, Maharishi Dayanand University, Rohtak (2003-05). </li>
                <li>B.Tech. in Computer Engineering from Kurukshetra University, Kurukshetra (1998-2002).</li>
                <li>Qualified GATE in Computer Engineering in 2003.</li>
            </ul>
        </div>
    )
}

export default EducationsQualifications;