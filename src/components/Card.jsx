import { useState } from 'react';
import AppContext from '../context';
import { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { BsPlusLg } from 'react-icons/bs';
import { RiHeartFill, RiHeartLine, RiShoppingCartFill } from 'react-icons/ri';

const Card = (props) => {
    const {
        id,
        title,
        image,
        price,
        onPlus,
        onFavorite,
        isFavorite = false,
        isLoading = false,
    } = props;
    const { getIsCheck } = useContext(AppContext);
    const [favorite, setFavorite] = useState(isFavorite);

    const onClickPlus = () => {
        onPlus({ id, title, image, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, title, image, price });
        setFavorite(!favorite);
    };

    return (
        <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={212}
                    height={296}
                    viewBox='0 0 212 296'
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'>
                    <rect x='0' y='0' rx='0' ry='0' width='212' height='212' />
                    <rect x='92' y='266' rx='0' ry='0' width='40' height='30' />
                    <rect
                        x='172'
                        y='266'
                        rx='0'
                        ry='0'
                        width='40'
                        height='30'
                    />
                    <rect x='0' y='266' rx='0' ry='0' width='80' height='30' />
                    <rect x='0' y='224' rx='0' ry='0' width='212' height='30' />
                </ContentLoader>
            ) : (
                <>
                    <img src={image} alt='ps5' />
                    <h5 className='my-2'>{title}</h5>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <span className='opacity-50 uppercase text-xs'>
                                Price:
                            </span>
                            <p className='font-bold'>${price}</p>
                        </div>
                        <button onClick={onClickFavorite}>
                            {favorite ? (
                                <RiHeartFill
                                    size={25}
                                    className='fill-orange-300'
                                />
                            ) : (
                                <RiHeartLine
                                    size={25}
                                    className='fill-orange-300'
                                />
                            )}
                        </button>
                        <button onClick={onClickPlus}>
                            {getIsCheck(title) ? (
                                <RiShoppingCartFill
                                    size={25}
                                    className='fill-green-400'
                                />
                            ) : (
                                <BsPlusLg
                                    size={25}
                                    className='fill-slate-400'
                                />
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
