import Landing from "../../components/DepartmentPageComponents/Landing";
import Description from "../../components/DepartmentPageComponents/Description";
import QuickLinks from "../../components/common/QuickLinks";
import DepartmentChairperson from "../../components/DepartmentPageComponents/DepartmentChairperson";

const DepartmentPage = () => {
    return (
        <div>
            <Landing/>
            <div className={'flex'}>
                <div className={'w-3/5 flex flex-col'}>
                    <Description/>
                </div>
                <div className={'mt-20 w-[28rem] ml-20 space-y-8 flex flex-col'}>
                    <QuickLinks/>
                    <DepartmentChairperson/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default DepartmentPage;