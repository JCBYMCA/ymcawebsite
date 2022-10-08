import {motion} from "framer-motion";
import {useState} from "react";

const AutoScrollFeatures = () => {
    const data = {
        scroll1: {
            first: {
                title: "A",
                subtitle: "Grade NAAC Accredited",
            },
            second: {
                title: "60",
                subtitle: "Lakhs highest package",
            },
            third: {
                title: "2000-2500",
                subtitle: "QS World University Ranking",
            }
        },
        scroll2: {
            first: {
                title: "1000+",
                subtitle: "Placement offers",
            },
            second: {
                title: "60+",
                subtitle: "Companies visit",
            },
            third: {
                title: "No.1",
                subtitle: "University in terms of placements in Haryana",
            }
        },
        scroll3: {
            first: {
                title: "5000+",
                subtitle: "Students",
            },
            second: {
                title: "30",
                subtitle: "Acre Campus",
            },
            third: {
                title: "12",
                subtitle: "Centres of Excellence",
            }
        }
    }

    const [title1, setTitle1] = useState(data.scroll1.first.title);
    const [subtitle1, setSubtitle1] = useState(data.scroll1.first.subtitle);
    const [title2, setTitle2] = useState(data.scroll2.first.title);
    const [subtitle2, setSubtitle2] = useState(data.scroll2.first.subtitle);
    const [title3, setTitle3] = useState(data.scroll3.first.title);
    const [subtitle3, setSubtitle3] = useState(data.scroll3.first.subtitle);


    return (
        <motion.div animate={{
            y:[0, 400, 0],
            opacity: [1, 0, 1]
        }} transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
            type: 'spring',
        }} className={'flex flex-col text-white text-center'}>
            <div className={'h-1/3 flex flex-col my-10'}>
                <h1 className={'text-6xl font-bold'}>{title1}</h1>
                <h1 className={'text-xl'}>{subtitle1}</h1>
            </div>
            <div className={'h-1/3 flex flex-col my-10'}>
                <h1 className={'text-6xl font-bold'}>{title2}</h1>
                <h1 className={'text-xl'}>{subtitle2}</h1>
            </div>
            <div className={'h-1/3 flex flex-col my-10'}>
                <h1 className={'text-6xl font-bold'}>{title3}</h1>
                <h1 className={'text-xl'}>{subtitle3}</h1>
            </div>
        </motion.div>
    )
}

export default AutoScrollFeatures;