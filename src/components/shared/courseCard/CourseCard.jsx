const CourseCard = ({course}) => {
    return (
        <div
            
            className="card card-compact  bg-base-100 shadow-sm duration-200 hover:shadow-xl "
        >
            <figure className="h-40 overflow-hidden">
                <img src={course.imageURL} className="h-full w-full object-cover" />
                <div className="badge badge-primary  absolute top-1 right-0">Popular</div>
            </figure>
            <div className="card-body">

                <h2 className="card-title">                                                        {course.name}
                </h2>

                <p className=""><small>{course.description}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm ">Select</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;