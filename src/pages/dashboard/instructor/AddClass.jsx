import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.imageURL[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    data.imageURL = imgURL
                    data.price = parseFloat(data.price).toFixed(2) //taking price 2 digit after decimal
                    const courseData = { ...data, students: 0, status: "pending" }
                    axiosSecure.post('/add-class', courseData)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class posted successfully!',
                                    text: "Admin will review your class.",
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                                navigate('/dashboard/Instructor-classes')
                            }
                        })
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 px-3 child:mb-2 child:rounded-sm  ">
                <div className="child:p-2 grid grid-cols-2 gap-2 child:mb-2 child:rounded-sm">
                    <input required {...register("name")} type="text" placeholder="Class name" />
                    <input required {...register("imageURL")} type="file" accept=".jpg,.jpeg,.png,.webp" className="border" />
                    <input required {...register("instructor")} type="text" readOnly defaultValue={user.displayName} />
                    <input required {...register("email")} type="text" readOnly defaultValue={user.email} />
                    <input required {...register("price")} type="number" placeholder="Price" />
                    <input required {...register("totalSeat")} type="number" placeholder="Available seat" />
                </div>
                <textarea {...register("description")} placeholder="Description" className="p-2" />
                <input type="submit" className="btn btn-ghost" />
            </form>
        </div>
    );
};

export default AddClass;