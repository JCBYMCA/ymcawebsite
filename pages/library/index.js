import {useState} from "react";
import LibNavbar from '../../components/LibraryPageComponents/LibNavbar/LibNavbar';
import {motion} from "framer-motion";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LibNotices from "../../components/LibraryPageComponents/LibNotices";
import LibStats from "../../components/LibraryPageComponents/LibStats";
import NewTitles from "../../components/LibraryPageComponents/NewTitles";

const LibraryPage= ()=> {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <LibNavbar />
            <div className={'bg-library-bg bg-no-repeat bg-cover'}>
                <div className={'backdrop-brightness-50 flex flex-col'}>
                    <div className={'mt-20 font-semibold'}>
                        <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                        }}
                            transition={{
                            delay: 0.2,
                            duration: 0.3,
                        }} className={'text-white text-2xl text-center md:text-5xl'}>{"PT. DEEN DAYAL UPADHYAY"}</motion.h1>
                        <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                        }}
                            transition={{
                            delay: 0.4,
                            duration: 0.3,
                        }} className={'text-white text-2xl text-center md:text-5xl'}>{"CENTRAL LIBRARY"}</motion.h1>
                    </div>
                    <motion.div
                        initial={{
                            opacity:0,
                            y: 100,
                        }}
                        viewport={{
                            margin:'0px 0px -200px 0px',
                            once: true
                        }}
                        whileInView={{
                            opacity:1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            type: 'spring',
                        }}
                        className={'text-white m-10'}>
                            <div className={'bg-secondaryLight w-2/4 m-auto'}>
                                <TabContext value={value}>
                                    <TabList onChange={handleChange} aria-label="Notices Tab" sx={{
                                        marginX: 'auto',
                                    }} className={'bg-white'}>
                                        <Tab label="Discovery" value="1" className={'font-bold text-black'}/>
                                        <Tab label="Catalogue" value="2" className={'font-bold text-black'}/>
                                        <Tab label="E-Journals" value="3" className={'font-bold text-black'}/>
                                        <Tab label="Databases" value="4" className={'font-bold text-black'}/>
                                    </TabList>
                                    <TabPanel value="1">
                                        <span>Search for articles, books, journals, databases, and more</span>
                                        <input placeholder={'Ex. engineering mathematics, data structures'} type={"text"} className={'text-black p-1 rounded-md p-3 text-xl w-full'}/>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <span>Search for articles, books, journals, databases, and more</span>
                                        <input placeholder={'Ex. engineering mathematics, data structures'} type={"text"} className={'text-black p-1 rounded-md p-3 text-xl w-full'}/>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <span>Search for articles, books, journals, databases, and more</span>
                                        <input placeholder={'Ex. engineering mathematics, data structures'} type={"text"} className={'text-black p-1 rounded-md p-3 text-xl w-full'}/>
                                    </TabPanel>
                                    <TabPanel value="4">
                                        <span>Search for articles, books, journals, databases, and more</span>
                                        <input placeholder={'Ex. engineering mathematics, data structures'} type={"text"} className={'text-black p-1 rounded-md p-3 text-xl w-full'}/>
                                    </TabPanel>
                                </TabContext>
                                    <div className={'flex flex-col px-6 py-3'}>
                                    </div>
                            </div>
                    </motion.div>
                    <div>
                    <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                        }}
                            transition={{
                            delay: 0.4,
                            duration: 0.3,
                        }} className={'text-white text-2xl text-center md:text-4xl mb-10'}>{"Quick Links"}</motion.h1>
                    <motion.h1
                            initial={{
                                opacity:0,
                                x: -50,
                            }}
                            viewport={{
                                margin:'0px 0px -200px 0px',
                                once: true
                            }}
                            whileInView={{
                                opacity:1,
                                x: 0,
                        }}
                            transition={{
                            delay: 0.4,
                            duration: 0.3,
                        }} className={'text-white text-2xl text-center md:text-2xl mb-2 0 flex justify-center flex-wrap w-3/4 m-auto'}>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>Downloads</div>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>Exam Papers</div>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>E-Library</div>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>Student&apos;s Corner</div>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>Institutional Repository</div>
                            <div className={'p-3 m-3 border-2 text-white w-80'}>Archives</div>
                        </motion.h1>
                    </div>

                </div>
            </div>
            <div className={'mt-16 bg-white flex flex-row justify-around mb-8'}>
                <LibNotices/>
                <LibStats/>
            </div>
            <NewTitles categories={['Engineering', 'Finance', 'Business', 'Physics', 'Management']} />
        </div>
    )
}

export default LibraryPage;