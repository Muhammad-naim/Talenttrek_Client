import PropTypes from 'prop-types';


const CourseCard = ({ course, badgeText }) => {
    return (
        <div className="card card-compact h-full bg-base-100 shadow-md duration-200 hover:shadow-xl ">
            <figure className="h-40 overflow-hidden">
                <img src={course.imageURL} className="h-full w-full object-cover" />
                {
                    badgeText ? 
                        <div className="badge badge-primary  absolute top-1 right-0">{badgeText}</div> :
                        <></>
                }
            </figure>
            <div className="px-3 ">
                <h2 className="">{course.name}</h2>
                <p>By: {course.instructor}</p>
                <p>Price: ${course.price}</p>
                <p className=""><small>{course.description}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm ">Select</button>
                </div>
            </div>
        </div>
    );
};
CourseCard.propTypes = {
    course: PropTypes.object,
    badgeText: PropTypes.string
    
};
export default CourseCard;