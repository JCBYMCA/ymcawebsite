import NavBar from "../components/NavBar";
import Heading from "../components/HomePageComponents/Heading";

const Home = () => {
    return (
        <div className={'h-screen flex flex-col bg-gray-700'}>
            <NavBar/>
            <Heading/>
        </div>
    )
}

export default Home;