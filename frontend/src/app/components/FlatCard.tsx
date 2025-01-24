import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { TFlat } from "../types/types";
import { useRouter } from "next/navigation";
import { deleteFlat } from "../lib/data";
import { useDispatch } from "react-redux";

const FlatCards = ({ data }: { data: TFlat }) => {

    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div className="min-h-[500px] w-[400px] p-2 border-none rounded-md bg-amber-300">
            <div 
                className="w-full h-[250px] rounded-md"
                style={{
                    backgroundImage: `url(${data.picture})`,
                    backgroundPosition: 'center center',
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="flex flex-col gap-1 justify-center items-center mt-2 text-slate-950">
                <h2 className="text-2xl font-semibold">
                    {data.header}
                </h2>
                <p className="ml-80 bg-amber-800 text-white pt-1 pb-1 pl-3 pr-3 rounded-full">
                    {data.price}
                </p>
                <p className="text-sm text-slate-700">
                    {data.description}
                </p>
                <p className="flex w-full justify-start text-cyan-700">
                    <i>Кількість кімнат: {data.numberOfRooms}</i>
                </p>
                <div className="flex gap-2 w-full justify-end items-center pr-3">
                    <GrUpdate onClick={() => router.push(`/update/${data._id}`)} className="w-5 h-5 text-orange-500 cursor-pointer" />
                    <MdDelete onClick={() => deleteFlat(data._id, dispatch)} className="w-7 h-7 text-red-600 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default FlatCards;