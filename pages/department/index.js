import Landing from "../../components/DepartmentPageComponents/Landing";
import Description from "../../components/DepartmentPageComponents/Description";
import QuickLinks from "../../components/common/QuickLinks";

const DepartmentPage = () => {
    return (
        <div>
            <Landing/>
            <div className={'flex'}>
                <div className={'w-4/5 flex flex-col'}>
                    <Description/>
                </div>
                <div>
                    <QuickLinks/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
    console.log("LOCALE IS ",locale);
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}

export default DepartmentPage;