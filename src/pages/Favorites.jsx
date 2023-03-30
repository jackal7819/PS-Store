import Card from '../components/Card';

const Favorites = (props) => {
    const { data, onAddToFavorite } = props;

    return (
        <div className='p-10'>
            <div className='flex items-center justify-center mb-5 flex-wrap gap-5 sm:justify-between'>
                <h1 className='font-bold text-3xl'>My Favorites</h1>
            </div>
            <div className='flex justify-center gap-[58px] flex-wrap sm:justify-start'>
                {data.map((game) => (
                    <Card
                        key={game.id}
                        isFavorite={true}
                        onFavorite={onAddToFavorite}
                        {...game}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
