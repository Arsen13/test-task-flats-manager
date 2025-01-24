'use client';

import Form from "../components/Form";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from "../types/types";
import { createFlat } from "../lib/data";
import { useRouter } from "next/navigation";

const CreatePage = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm<FormFields>();

    const router = useRouter()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await createFlat(data);
            router.push('/');
        } catch (error) {
            console.log("Error with create flat", error);
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