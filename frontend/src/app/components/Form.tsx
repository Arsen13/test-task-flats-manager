import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { FormFields } from "../types/types";

interface FormProps {
    register: UseFormRegister<FormFields>;
    onSubmit: SubmitHandler<FormFields>;
    handleSubmit: UseFormHandleSubmit<FormFields, undefined>;
    errors: FieldErrors<FormFields>;
    isSubmitting: boolean;
}

const Form = ({ register, onSubmit, handleSubmit, errors, isSubmitting }: FormProps) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-amber-300 text-slate-900 border-none rounded-md w-[400px]">
            <div className="mt-5 flex flex-col justify-center items-center gap-3">
                
            <input 
                type="text"
                placeholder="Title:" 
                className="w-3/4 h-10 rounded-md placeholder:pl-2"
                {...register("header", {
                    required: true,
                    maxLength: 90,
                })}
            />
            {errors.header && <div className="text-red-500">Please provide a title</div>}
            
            <input 
                type="text"
                placeholder="Description..."
                className="w-3/4 h-10 rounded-md placeholder:pl-2"
                {...register("description", {
                    required: true,
                    maxLength: 335,
                })}
            />
            {errors.description && <div className="text-red-500">Please provide a description</div>}

            <input 
                type="number"
                placeholder="Price:"
                className="w-3/4 h-10 rounded-md placeholder:pl-2"
                {...register("price", {
                    required: true,
                    min: {
                        value: 1,
                        message: "Price must be at least 1",
                    }
                })}
            />
            {errors.price && <div className="text-red-500">Please provide a price</div>}

            <input 
                type="number"
                placeholder="Amount of rooms:"
                className="w-3/4 h-10 rounded-md placeholder:pl-2"
                {...register("numberOfRooms", {
                    required: true,
                    min: {
                        value: 1,
                        message: "Amount of room must be at least 1",
                    },
                    max: {
                        value: 3,
                        message: "Amount of room must be no more than 3"
                    }
                })}
            />
            {errors.numberOfRooms && <div className="text-red-500">Please provide an amount of rooms</div>}

            <input
                type="file"
                {...register("picture", {
                    required: true
                })}
            />
            {errors.picture && <div className="text-red-500">Please provide a picture of apartment</div>}


            <button 
                type="submit" 
                disabled={isSubmitting}
                className="pt-3 pb-3 pl-10 pr-10 mb-5 bg-amber-800 text-white border-none rounded-lg"
            >
                {isSubmitting ? 'Loading...' : 'Submit'}
            </button>
            </div>
        </form>
    )
}

export default Form;