import Card from '../components/Card';
import AppContext from '../context';
import { useContext } from 'react';

const Favorites = () => {
    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <div className='p-10'>
            <h1 className='font-bold text-3xl mb-5'>My Favorites</h1>
            <div className='flex justify-center gap-[58px] flex-wrap sm:justify-start'>
                {favorites.map((game) => (
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
