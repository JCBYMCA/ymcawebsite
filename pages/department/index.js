const DepartmentPage = () => {
    return (
        <div>
            Department
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