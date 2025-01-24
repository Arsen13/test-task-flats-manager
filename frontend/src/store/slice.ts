import axiosInstance from '@/app/lib/axiosInstance';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from './store';
import { TFlat } from '@/app/types/types';

export interface FlatsState {
    flats: TFlat[];
    flatsPerPage: number;
    currentPage: number;
    countOfPages: number;
}

const initialState: FlatsState = {
    flats: [],
    flatsPerPage: 3,
    currentPage: 1,
    countOfPages: 1,
}

export const flatSlice = createSlice({
    name: "flats",
    initialState,
    reducers: {
        fetchFlat: (state, action) => {
            state.flats = [...action.payload];
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCountOfPages: (state, action) => {
            state.countOfPages = action.payload;
        },
        deleteFlatState: (state, action) => {
            state.flats = state.flats.filter(flat => flat._id !== action.payload)
        }
    }
})

export const { fetchFlat, setCurrentPage, setCountOfPages, deleteFlatState } = flatSlice.actions;

export default flatSlice.reducer;

export const fetchFlats = (page: number, limit: number) => {
    return async (dispatch: AppDispatch) => {
        const fetchFlatsApi = async () => {
            const response = await axiosInstance.get(`/${page}/${limit}`);
            return response.data;
        }
        try {
            const flats = await fetchFlatsApi();
            dispatch(fetchFlat(flats.flats));
            dispatch(setCountOfPages(Math.ceil(flats.length / limit)));
        } catch (error) {
            console.log(error)
        }
    }
}