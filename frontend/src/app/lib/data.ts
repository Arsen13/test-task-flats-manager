import { AppDispatch } from "@/store/store";
import { FormFields } from "../types/types";
import axiosInstance from "./axiosInstance";
import { deleteFlatState } from "@/store/slice";

export const updateFlat = async (data: FormFields, id: string) => {
    try {
        const response = await axiosInstance.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error in updateFlat function", error);
    }
} 

export const createFlat = async (data: FormFields) => {
    try { 
        const formData = new FormData();

        formData.append("header", data.header);
        formData.append("description", data.description);
        formData.append("price", data.price.toString());
        formData.append("numberOfRooms", data.numberOfRooms.toString());
        if (data.picture && data.picture[0]) {
            formData.append("picture", data.picture[0]);  // Витягнути перший файл з FileList
        } else {
            throw new Error("Invalid picture file");
        }

        const response = await axiosInstance.post('/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return response.data;
    } catch (error) {
        console.log("Error in createFlat function", error);
    }
}

export const deleteFlat = async (id: string, dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.delete(`/${id}`);
        dispatch(deleteFlatState(id));
        return response.data;
    } catch (error) {
        console.log("Error in deleteFlat function", error);
    }
}