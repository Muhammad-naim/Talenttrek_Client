import { useContext } from "react";
import Banner from "../../components/banner/Banner";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="min-h-screen">
            <Banner />
           
        </div>
    );
};

export default Home;