import ChairpersonMessage from '../../../components/DepartmentPageComponents/ChairpersonMessage';
const ChairpersonMessagePage = () => {
    return (
        <ChairpersonMessage/>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../../../lang/${locale}.json`)).default,
        }
    }
}

export default ChairpersonMessagePage;
