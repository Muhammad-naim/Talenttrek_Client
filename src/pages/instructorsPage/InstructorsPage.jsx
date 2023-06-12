import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import './InstructorsPage.css'
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useScrollTop from "../../hooks/useScrollTop";
const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([])
    const location = useLocation()
    useScrollTop(location?.pathname)
    useEffect(() => {
        fetch('https://talenttrek-server-muhammad-naim.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4  mt-8">
            <Helmet>
                <title>Instructors | talenttrek</title>
            </Helmet>
            {
                instructors.map(instructor => {
                    return <Link
                        key={instructor._id}
                        className="card shadow-sm hover:shadow-xl mx-auto lg:mx-0 bg-sky-200 rounded-md card1"
                    >
                        <figure className="">
                            <img src={instructor.imageURL} alt="Shoes" className="h-40 rounded-full" />
                        </figure>
                        <div className="card-body p-1 items-center text-center">
                            <h3 className="card-title leading-3">{instructor.name}</h3>
                            <p className="small">{instructor.email}</p>
                            <p className="flex items-center small"><FaUsers /> {instructor.student || 16}</p>
                        </div>
                        <div className="go-corner" href="#">
                            <div className="go-arrow">

                            </div>
                        </div>
                    </Link>
                })
            }
            
        </div>
    );
};

export default InstructorsPage;