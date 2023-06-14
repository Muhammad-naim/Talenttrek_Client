import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const [axiosSecure, loading] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/all-courses')
            return res.data
        },
    })
    return [classes,refetch]
};

export default useAllClasses;