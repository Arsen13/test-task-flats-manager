'use client';

import Form from "../../components/Form";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from "../../types/types";
import { useParams, useRouter } from "next/navigation";
import { updateFlat } from "@/app/lib/data";

const CreatePage = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();

    const router = useRouter();
    const { id } = useParams();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            if (!id || typeof id !== 'string') {
                throw new Error("Invalid or missing id");
            }
            await updateFlat(data, id);
            router.push('/');
        } catch (error) {
            console.log("Error with update flat", error);
        }
    }

    return (
        <div className="flex justify-center items-center mt-5">
            <Form 
                register={register} 
                onSubmit={onSubmit} 
                handleSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
            />
        </div>
    )
}

export default CreatePage;