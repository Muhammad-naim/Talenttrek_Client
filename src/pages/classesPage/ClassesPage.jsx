import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import './styles.css'
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
const ClassesPage = () => {
    const [courses] = useCourses()
    console.log(courses);
    return (
        <div className="grid grid-cols-4">
            <Helmet>
                <title>classes | talenttrek</title>
            </Helmet>
            {
                courses.map(course => {
                    return <div
                        key={course._id}
                        className={`${course.totalSeat - course.students === 0 ? "pointer-events-none bg-red-500 text-white" : 'bg-sky-200'} card shadow-sm hover:shadow-xl mx-auto lg:mx-0  rounded-md c-card1`}
                    >
                        <figure className="w-full">
                            <img src={course.imageURL} className="h-32 w-full" />
                        </figure>
                        <div className="gap-0 p-2 items-center text-left">
                            <h3 className="card-title leading-5">{course.name}</h3>
                            <p>By: {course.instructor}</p>
                            <p className="small">Available Seat: {course.totalSeat - course.students}</p>
                            <div className="flex justify-between">
                                <p className="flex items-center small"><FaUsers /> {course.students}</p>
                                {/* TODO: implement functionalities for select button */}
                                <button className=" mr-4 btn btn-xs bg-sky-400">select</button>
                            </div>
                        </div>
                        <div className="c-go-corner hidden" href="#">
                            <div className="c-go-arrow">

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ClassesPage;