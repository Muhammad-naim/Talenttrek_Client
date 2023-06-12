import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth()
    // const [data, setData] = useState("");
    const onSubmit = data => {
        const courseData = { ...data, students: 0, status: "pending" }
        console.log(courseData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 px-3 child:mb-2 child:rounded-sm  ">
                <div className="child:p-2 grid grid-cols-2 gap-2 child:mb-2 child:rounded-sm">
                    <input required {...register("name")} type="text" placeholder="Class name" />
                    <input required {...register("photo")} type="file" accept=".jpg,.jpeg,.png,.webp" className="border" />
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