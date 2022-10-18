const PatentsGrants= () => {
    return (
        <div className={'mt-5 flex flex-col text-justify border-b-4 border-secondaryLight pb-6'}>
            <h1 className={'text-xl font-bold'}>Patents & Grants</h1>
            <ul className={'text-sm mt-3 font-thin list-disc'}>
                <li>Design Patent entitled Goggle with Speed Indication, Design No: 326252-001, Registration Date 16/01/2020, Date of Issue: 10/02/2020</li>
                <li>Received funding of Rs. 1,85.000 from IIT Madras for NPTEL Awareness Workshop conducted on 31st Jan 2020.</li>
                <li>Received funding of Rs 20000 from HSCSIT for National Technology Day celebration during 13-14 May 2021</li>
                <li>Received funding of 1,93,000 from JCBoseUST YMCA for project Upastithi: Attendance Portal for YMCA during March 2016-March 2018.</li>
                <li>Selected for a grant of 4.5 Lacs from All India Council for Technical Education (AICTE) Research Promotion Scheme (RPS) for her project Drishti: An Audio Aid to Visually Impaired Persons for Obstacle Detection and Route Tracking to develop an automated system for helping the blind persons. </li>
            </ul>
        </div>
    )
}

export default PatentsGrants;