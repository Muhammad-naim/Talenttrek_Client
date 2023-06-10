import useCourses from "../../hooks/useCourses";
import './styles.css'
import { Helmet } from "react-helmet-async";
import ClassesCard from "../../components/shared/classesCard/ClassesCard";
const ClassesPage = () => {
    const [courses, loading] = useCourses()
    if (loading) {
        return <div className="h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        <div className="grid grid-cols-4">
            <Helmet>
                <title>classes | talenttrek</title>
            </Helmet>
            {
                courses.map(course => {
                    return <ClassesCard
                        key={course._id}
                        course={course}
                    >
                        
                    </ClassesCard>
                })
            }
        </div>
    );
};

export default ClassesPage;