import {motion, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

const AutoScrollFeatures = () => {
    const t = useTranslations("home.autoscrollfeatures")
    const controls = useAnimation();
    const data = [
        {
            first: {
                title: "A",
                subtitle: "Grade NAAC Accredited",
            },
            second: {
                title: "60",
                subtitle: "Lakhs highest package",
            },
            third: {
                title: "2000",
                subtitle: "QS World University Ranking",
            }
        },
        {
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
        {
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
    ]

    const [title1, setTitle1] = useState(data[0].first.title);
    const [subtitle1, setSubtitle1] = useState(data[0].first.subtitle);
    const [title2, setTitle2] = useState(data[0].second.title);
    const [subtitle2, setSubtitle2] = useState(data[0].second.subtitle);
    const [title3, setTitle3] = useState(data[0].third.title);
    const [subtitle3, setSubtitle3] = useState(data[0].third.subtitle);

    useEffect(() => {
        let i = 0;
        setInterval(() => {
            controls.start({
                y: [0, 400, 0],
                opacity: [1, 0, 1],
                transition: {
                    duration: 0.4,
                }
            });
            if(i === data.length) i = 0;
            setTitle1(data[i].first.title);
            setSubtitle1(data[i].first.subtitle);
            setTitle2(data[i].second.title);
            setSubtitle2(data[i].second.subtitle);
            setTitle3(data[i].third.title);
            setSubtitle3(data[i].third.subtitle);
            i++;
        }, 5000);

    }, [])


    return (
        <motion.div animate={controls}
            className={'flex flex-col text-white text-center'}>
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