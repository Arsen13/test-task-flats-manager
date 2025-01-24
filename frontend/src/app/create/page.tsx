'use client';

import Form from "../components/Form";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from "../types/types";

const CreatePage = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data)
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