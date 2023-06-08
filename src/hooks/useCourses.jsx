import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/courses');
            return res.json();
        }


    })
    // if (loading) {
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }
    return [courses, loading, refetch]
}
export default useCourses;