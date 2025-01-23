import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const FlatCards = () => {
    return (
        <div className="min-h-[500px] w-[400px] p-2 border-none rounded-md bg-yellow-200">
            <div 
                className="w-full h-[250px]"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dwju9hvfl/image/upload/v1737653776/flat_pics/xcqkzs54bgmwu2jpemvi.jpg)`,
                    backgroundPosition: 'center center',
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="flex flex-col gap-1 justify-center items-center mt-2 text-slate-950">
                <h2 className="text-2xl font-semibold">
                    Blue Sky
                </h2>
                <p className="ml-80 bg-blue-500 pt-1 pb-1 pl-3 pr-3 rounded-full">
                    2200
                </p>
                <p className="text-sm text-slate-700">
                    "Sunrise Resort — це затишний курорт, розташований біля берега моря. Готель пропонує просторі номери з видом на океан, басейн, спа та ресторан. На всій території готелю доступний безкоштовний Wi-Fi та приватна парковка
                </p>
                <p className="flex w-full justify-start">
                    Кількість кімнат: 3
                </p>
                <div className="flex gap-2 w-full justify-end items-center pr-3">
                    <GrUpdate className="w-5 h-5 text-orange-500 cursor-pointer" />
                    <MdDelete className="w-7 h-7 text-red-600 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default FlatCards;