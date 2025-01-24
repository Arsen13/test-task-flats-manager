'use client';

import { useDispatch, useSelector } from "react-redux";
import FlatCards from "./FlatCards";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { fetchFlats, setCurrentPage, sortByPrice, sortByRooms } from "@/store/slice";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortNumericDown } from "react-icons/fa";

const Main = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { flats, flatsPerPage, currentPage, countOfPages } = useSelector((state: RootState) => state.flats);

    useEffect(() => {
        dispatch(fetchFlats(currentPage, flatsPerPage));
    }, [dispatch, currentPage])

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    }
    
    return (
        <main>
            <div className="flex flex-column gap-3 justify-center items-center mt-2">
                <div onClick={() => dispatch(sortByPrice())} className="flex gap-2 items-center cursor-pointer">
                    <FaSortAmountDownAlt className="w-8 h-8" />
                    <span>by price</span>
                </div>
                <div onClick={() => dispatch(sortByRooms())}  className="flex gap-2 items-center cursor-pointer">
                    <FaSortNumericDown className="w-8 h-8" />
                    <span>by rooms</span>
                </div>
            </div>

            <FlatCards flats={flats} />

            {flats.length > 0 && (            
                <div className="flex justify-center items-center gap-10 mt-5">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="bg-amber-800 min-w-[125px] pt-4 pb-4 rounded-md cursor-pointer hover:bg-amber-900 duration-300"
                    >
                        Previous
                    </button>
                    <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === countOfPages}
                        className="bg-amber-800 min-w-[125px] pt-4 pb-4 rounded-md cursor-pointer hover:bg-amber-900 duration-300"
                    >
                        Next
                    </button>
                </div>)}
        </main>
    )
};

export default Main;