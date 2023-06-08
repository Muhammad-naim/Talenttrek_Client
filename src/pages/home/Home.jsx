import { useContext } from "react";
import Banner from "../../components/banner/Banner";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";
import PopularClasses from "../../components/popularCalsses/PopularClasses";

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="min-h-screen">
            <Banner />
            <PopularClasses/>
           
        </div>
    );
};

export default Home;