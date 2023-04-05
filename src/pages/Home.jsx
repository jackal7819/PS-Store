import Card from '../components/Card';
import { RiSearchLine } from 'react-icons/ri';

const Home = (props) => {
    const {
        data,
        loading,
        favorites,
        searchValue,
        onAddToCart,
        onAddToFavorite,
        onChangeSearchInput,
    } = props;

    const filteredData = data.filter((el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const games = (loading ? [...Array(12)] : filteredData).map(
        (game, index) => (
            <Card
                key={index}
                isLoading={loading}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                isFavorite={favorites.some((obj) => obj.title === game.title)}
                {...game}
            />
        )
    );

    return (
        <div className='p-10'>
            <div className='flex items-center justify-center mb-5 flex-wrap gap-5 sm:justify-between'>
                <h1 className='font-bold text-3xl'>
                    {searchValue
                        ? `Search by request: '${searchValue}'`
                        : 'PS5 Games'}
                </h1>
                <div className='flex items-center bg-white rounded-md pl-2 w-64'>
                    <RiSearchLine size={25} className='fill-slate-400' />
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        type='search'
                        placeholder='Search...'
                        className='p-2 outline-0 border-0'
                    />
                </div>
            </div>
            <div className='flex justify-center gap-[58px] flex-wrap sm:justify-start'>
                {games}
            </div>
        </div>
    );
};

export default Home;
