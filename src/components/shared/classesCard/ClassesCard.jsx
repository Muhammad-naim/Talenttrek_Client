import PropTypes from 'prop-types';
import './classesCard.css'
import { FaUsers } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
const ClassesCard = ({ course, badgeText, handleselect }) => {
    const { user } = useAuth();
    return (
        <div            
            className={`${course.totalSeat - course.students === 0 ? "pointer-events-none bg-red-500 text-white" : 'bg-sky-50'} card shadow-sm hover:shadow-xl mx-auto lg:mx-0 rounded-md c-card1`}
        >
            <figure className="w-full">
                <img src={course.imageURL} className="h-32 w-full" />
                {
                    badgeText ? 
                        <div className="badge badge-error bg-red-600 text-white absolute top-1 right-0">{badgeText}</div> :
                        <></>
                }
            </figure>
            <div className="gap-0 p-2 items-center text-left child:text-slate-950">
                <h3 className="card-title leading-5">{course.name}</h3>
                <p className='text-sm font-medium'>By: {course.instructor}</p>
                <p className="small text-sm font-medium">Available Seat: {course.totalSeat - course.students}</p>
                <div className="flex justify-between">
                    <p className="flex items-center text-sm font-medium small"><FaUsers /> {course.students}</p>
                    <button
                        className="text-white hover:text-slate-700 capitalize font-normal mr-4  px-3 btn btn-sm border-0 bg-[#4169E1]"
                        onClick={() => handleselect(course)}
                        disabled = { user ? user.role !== "student" : false}
                    >select</button>
                </div>
            </div>
            <div className="c-go-corner hidden" href="#">
                <div className="c-go-arrow">

                </div>
            </div>
        </div>
    );
};
ClassesCard.propTypes = {
    course: PropTypes.object,
    badgeText: PropTypes.string,
    handleselect: PropTypes.func,
    
};
export default ClassesCard;