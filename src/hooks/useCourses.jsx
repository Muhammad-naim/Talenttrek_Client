import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await fetch('https://talenttrek-server-muhammad-naim.vercel.app/courses');
            return res.json();
        }
    })
    return [courses, loading, refetch]
}
export default useCourses;