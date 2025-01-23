import FlatCard from './FlatCard';

const FlatCards = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-5'>
            <FlatCard />
            <FlatCard />
            <FlatCard />
        </div>
    )
}

export default FlatCards;