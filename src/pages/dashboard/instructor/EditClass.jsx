import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const EditClass = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const course = location.state;
    console.log(course);
    const onSubmit = data => {
        data.courseID = course._id;
        console.log(data);
        data.price = parseFloat(data.price).toFixed(2) //taking price 2 digit after decimal
        axiosSecure.patch('/update-class', data)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                    navigate("/dashboard/Instructor-classes")
                }
            })
    }
    const getInputClassName = (fieldName) => {
        return errors[fieldName] ? 'outline-red-600' : '';
      };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 px-3 child:mb-2 child:rounded-sm  ">
                <div className="child:p-2 grid grid-cols-2 gap-2 child:mb-2 child:rounded-sm">
                    <input required {...register("name")} type="text" placeholder="Class name" defaultValue={course.name} />
                    <input required {...register("photo")} type="file" accept=".jpg,.jpeg,.png,.webp" className="border" />
                    <input required {...register("instructor")} type="text" readOnly defaultValue={user.displayName} />
                    <input required {...register("email",)} type="text" readOnly defaultValue={user.email} />
                    <input required {...register("price", {
                        required: 'This field is required',
                        pattern: {
                            value: /^[0-9]+(\.[0-9]{1,2})?$/, // Regular expression for decimal numbers with up to 2 decimal places
                            message: 'Invalid number format'
                        }
                    })} type="text" placeholder="Price" defaultValue={course.price} className={getInputClassName("price")} />
                    
                    <input required {...register("totalSeat")} type="number" placeholder="Available seat" defaultValue={course.totalSeat} />
                </div>
                <textarea {...register("description")} placeholder="Description" className="p-2" defaultValue={course.description} />
                <input type="submit" className="btn btn-ghost" />
            </form>
        </div>
    );
};

export default EditClass;