import Banner from "../../components/banner/Banner";
import PopularClasses from "../../components/popularCalsses/PopularClasses";
import TopInstructor from "../../components/topInstructor/TopInstructor";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Home | talenttrek</title>
            </Helmet>
            <Banner />
            <PopularClasses/>
           <TopInstructor/>
        </div>
    );
};

export default Home;