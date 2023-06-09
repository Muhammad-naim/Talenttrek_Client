import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import PopularClasses from "../../components/popularCalsses/PopularClasses";
import TopInstructor from "../../components/topInstructor/TopInstructor";
import { Helmet } from "react-helmet-async";
import useScrollTop from "../../hooks/useScrollTop";
import DiscountPage from "../../components/discountPage/DiscountPage";

const Home = () => {
    const location = useLocation()
    const pathname = location?.pathname
    useScrollTop(pathname)
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Home | talenttrek</title>
            </Helmet>
            <Banner />
            <DiscountPage/>
            <PopularClasses/>
            <TopInstructor/>
        </div>
    );
};

export default Home;