import {useState} from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

const NewTitles = ({categories}) => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={"flex py-5 px-10 text-white flex-col bg-gradient-to-b from-secondaryLight to-secondary"}>
            <h1 className={'text-2xl font-bold'}>New Titles</h1>
                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="Notices Tab" sx={{
                        marginX: 'aut',
                    }} className={'bg-transparent'}>
                        {categories.map((category, index) => {
                    return (
                                    <Tab label={category} value={index + 1} className={'text-white font-semibold focus:text-white'}/>

                    )})
                }


                    </TabList>
                    {categories.map((category, index) => {
                        return (
                            <TabPanel value={index + 1} className={''}>
                                <div className={'flex'}>
                                    <img src={'/assets/images/library/books/1.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                    <img src={'/assets/images/library/books/2.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                    <img src={'/assets/images/library/books/3.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                    <img src={'/assets/images/library/books/4.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                    <img src={'/assets/images/library/books/5.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                    <img src={'/assets/images/library/books/6.jpeg'} alt={'book'} className={'w-40 h-64 mx-5'}/>
                                </div>
                            </TabPanel>
                        )
                    })}
                </TabContext>
            <div className={'w-full border-b-2 border-white'}>
            </div>

        </div>
    )
}

export default NewTitles;