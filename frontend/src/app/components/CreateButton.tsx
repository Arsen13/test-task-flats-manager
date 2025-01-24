'use client';

import { useRouter } from "next/navigation";
import { MdAddBox } from "react-icons/md";

const CreateButton = () => {
    const router = useRouter();
    return (
        <div className="absolute top-4 right-3">
            <MdAddBox onClick={() => router.push('/create')} className="w-12 h-12 text-amber-300 cursor-pointer" />
        </div>
    )
}

export default CreateButton;