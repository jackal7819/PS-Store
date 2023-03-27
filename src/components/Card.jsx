import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { RiHeartFill, RiHeartLine, RiShoppingCartFill } from 'react-icons/ri';

const Card = (props) => {
    const { title, image, price, onPlus } = props;
    const [check, setCheck] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const isChecked = () => {
        setCheck(!check);
        onPlus({ title, image, price });
    };

    const isFavorite = () => setFavorite(!favorite);

    return (
        <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
            <img src={image} alt='ps5' />
            <h5 className='my-2'>{title}</h5>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='opacity-50 uppercase text-xs'>Price:</span>
                    <p className='font-bold'>${price}</p>
                </div>
                <button onClick={isFavorite}>
                    {favorite ? (
                        <RiHeartFill size={25} className='fill-orange-300' />
                    ) : (
                        <RiHeartLine size={25} className='fill-orange-300' />
                    )}
                </button>
                <button onClick={isChecked}>
                    {check ? (
                        <RiShoppingCartFill
                            size={25}
                            className='fill-green-400'
                        />
                    ) : (
                        <BsPlusLg size={25} className='fill-slate-400' />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Card;
