import { useDispatch } from 'react-redux';
import { TFlat } from '../types/types';
import FlatCard from './FlatCard';

const FlatCards = ({ flats }: { flats: TFlat[] }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-5'>
            {flats.map((flat: TFlat) => (
                <FlatCard
                    key={flat._id}
                    data={flat}
                />
            ))}
        </div>
    )
}

export default FlatCards;