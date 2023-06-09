import { useEffect, useState } from "react";

const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
            {
                instructors.map(instructor => {
                    return <div
                        key={instructor._id}
                        className="card  shadow-xl rounded-none bg-sky-200 hover:bg-sky-300"
                    >
                        <figure className=" ">
                            <img src={instructor.imageURL} alt="Shoes" className="h-40 rounded-full" />
                        </figure>
                        <div className="card-body p-1 items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default InstructorsPage;