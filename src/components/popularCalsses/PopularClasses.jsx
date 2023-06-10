import Heading from "../heading/Heading";
import useCourses from "../../hooks/useCourses";
import ClassesCard from "../shared/classesCard/ClassesCard";
import useSelect from "../../hooks/useSelect";

const PopularClasses = () => {
    const [courses, loading] = useCourses()
    const {handleselect} = useSelect()
    const popularCourses = courses.filter(course => course.students >= 15)
    if (loading) {
        return <div className="w-full text-center"><span className="loading loading-spinner loading-lg text-center"></span></div>
    }
    return (
        <div className="my-4">
            <Heading
                Heading={"Pupolar Courses "}
                subHeading={"Explore our popular courses"}
            />
            <div className="grid lg:grid-cols-4 gap-3 px-2 lg:px-0">
                {
                   popularCourses.map(course => {
                       return <ClassesCard
                           key={course?._id} 
                           course={course}
                           badgeText={'Popular'}
                           handleselect={handleselect}
                           
                        />
                    })
                }
            </div>
        </div>
    );
};

export default PopularClasses;