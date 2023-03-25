import { FaPlus } from 'react-icons/fa';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

const Card = (props) => {
    const { title, image, price } = props;
    return (
        <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
            <img src={image} alt='ps5' />
            <h5 className='my-2'>{title}</h5>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='opacity-50 uppercase text-xs'>Price:</span>
                    <p className='font-bold'>${price}</p>
                </div>
                <div>
                    <RiHeartLine
                        size={25}
                        className='fill-orange-300 cursor-pointer'
                    />
                </div>
                <button className='rounded-xl border border-gray-200 p-3'>
                    <FaPlus className='fill-slate-400' />
                </button>
            </div>
        </div>
    );
};

export default Card;
