import Faculty from "./index";
import FacultyCard from "../../components/FacultyPageComponents/FacultyCard";
import DepartmentContact from "../../components/FacultyPageComponents/DepartmentContact";
import Image from "next/image";
import FacultyNavbar from "../../components/FacultyPageComponents/FacultyNavbar/FacultyNavbar";
import { useEffect, useState } from "react";
import { getFaculty, getMenu } from "../../http";
import departmentId from "../../config/dept_map";
import { MEDIA_BASE_URL } from "../../config/constants";
import DepartmentNavbar from "../../components/DepartmentPageComponents/DepartmentNavbar/DepartmentNavbar";
import NavBar from "../../components/HomePageComponents/NavBar/NavBar";


const FacultyPage = ({ slug, setLoader }) => {

    const [data, setData] = useState();
    const [menu, setMenu] = useState();



    useEffect(() => {

        getFaculty(departmentId[slug[0]],slug[1]).then((resp) => {
            console.log(resp);
            setData(resp.data["Post List"]);
        });

        getMenu(departmentId[slug[0]]).then((resp) => {
            setMenu(resp.data);
        }
        );

        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <div>
            {slug[0]=="main"? 
             menu && <NavBar menudata={menu}/>
            :
            <DepartmentNavbar id={departmentId[slug[0]]} dept_name={slug[0]} isDept={true} />
            }

            <div className={'grid md:grid-cols-2 grid-cols-1 md:px-32 mt-16'}>

                {data &&

                    data.map((item, i) => {
                        return (
                            <FacultyCard
                                image={item.image_url == "" ? "/assets/images/sampleperson.png" : (MEDIA_BASE_URL + item.image_url)}
                                name={item.name}
                                designation={item.desc}
                                mail={item.email}
                                contact={item.phone_number}
                                link={"/faculty-profile/"+item.teacher_id}
                                qualf1={item.extra_charge}
                                qualf2={''}
                            />
                        )
                    })



                }

                {/* <FacultyCard
                    image={'/assets/images/faculty/komalbhatia.png'}
                    name={'Komal Kumar Bhatia'}
                    designation={'Dean Computer Department'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/atulmishra.png'}
                    name={'Atul Mishra'}
                    designation={'Chairperson Computer Department'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/neelamduhan.png'}
                    name={'Neelam Duhan'}
                    designation={'Associate Professor'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />


                <FacultyCard
                    image={'/assets/images/faculty/cknagpal.jpg'}
                    name={'C.K Nagpal '}
                    designation={'Professor'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/ashutoshdixit.jpg'}
                    name={'Ashutosh Dixit'}
                    designation={'Professor, Computer Engineering and Dean, Academic Affairs'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                />
                <FacultyCard
                    image={'/assets/images/faculty/harish.jpg'}
                    name={'Harish Kumar'}
                    designation={'Associate Professor'}
                    mail={'bla@gmail.com'}
                    contact={'91-8851221355'}
                    qualf1={'Vituperatoribus efficiantur tempor'}
                    qualf2={'Vituperatoribus efficiantur tempor'}
                    linkedinlink={''}
                    twitterlink={''}
                /> */}



            </div>
        </div>

    )
}

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    //console.log("slug", slug);
    return {
        props: {
            slug: slug,
            messages: (await import(`../../lang/${context.locale}.json`)).default,
        }
    }
}


export default FacultyPage;