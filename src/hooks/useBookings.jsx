import { useContext } from "react";
import { AuthContext } from "../firebase/authProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useBookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ["bookings", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-bookings?email=${user?.email}`)
            return res.data            
        }
    })
    return [bookings, refetch]
};

export default useBookings;