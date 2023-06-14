import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const [axiosSecure, loading] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        },
    })
    return [users,refetch]
};

export default useUsers;