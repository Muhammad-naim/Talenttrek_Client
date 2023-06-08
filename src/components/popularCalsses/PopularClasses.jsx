import Heading from "../heading/Heading";
import useCourses from "../../hooks/useCourses";
import CourseCard from "../shared/courseCard/CourseCard";

const PopularClasses = () => {
    const [courses] = useCourses()
    console.log(courses);
    const popularCourses = courses.filter(course => course.students >= 15)
    console.log(popularCourses);
    return (
        <div className="my-4">
            <Heading
                Heading={"Pupolar Courses "}
                subHeading={"Explore our popular courses"}
            />
            <div className="grid lg:grid-cols-4 gap-3 px-2 lg:px-0">
                {
                   popularCourses.map(course => {
                       return <CourseCard
                           key={course?._id} 
                           course={course}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default PopularClasses;