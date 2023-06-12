import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/authProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "https://talenttrek-server-muhammad-naim.vercel.app",
})
const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearar ${token}`;
            }
            return config
        })
        axiosSecure.interceptors.response.use((response) => response ,
            async (error)=> {
                if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                    await logOut()
                    navigate("/login")
                }
                return Promise.reject(error)
             }
        )
    }, [logOut, navigate])
    return [axiosSecure]
}
export default useAxiosSecure;