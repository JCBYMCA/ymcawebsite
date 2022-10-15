import {useRouter} from "next/router";

const FacultyProfile = () => {
    return (
    <div>
      faculty profile
    </div>
  );
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
        }
    }
}


export default FacultyProfile;

//getStaticPaths and getStaticProps are used to generate static pages at build time

