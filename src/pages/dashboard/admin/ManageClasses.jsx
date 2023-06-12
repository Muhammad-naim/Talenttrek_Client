import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classesData, setClassesData] = useState([])
    useEffect(() => {
        axiosSecure('/all-courses')
            .then(res => {
                setClassesData(res.data)
            })
    }, [axiosSecure])
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                {
                    classesData?.map(item => {
                        return <div
                            key={item._id}
                            className={` card shadow-sm hover:shadow-xl mx-auto lg:mx-0  rounded-md c-card1`}
                        >
                            <figure className="w-full">
                                <img src={item.imageURL} className="h-32 w-full" />
                                
                            </figure>
                            <div className="gap-0 p-2 items-center child:hover:text-white text-left">
                                <h3 className="font-semibold leading-5">{item.name}</h3>
                                <small>By: {item.instructor}</small><br />                           
                                <small>Email: {item.email}</small><br />                           
                                <small className="">Students: {item.students}</small><br />
                                <small className="">Available seat: {item.totalSeat - item.students}</small><br />
                                <small className="">Status: {item.status}</small>
                                <div className="flex justify-between mt-2">                                
                                    <button
                                        className="text-white hover:text-slate-700 capitalize font-normal mr-4  px-3 btn btn-xs border-0 bg-[#4169E1]"                            
                                    >select</button>
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

        </div>
    );
};

export default ManageClasses;