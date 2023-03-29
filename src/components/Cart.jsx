import { RiCloseFill, RiShoppingCartLine } from 'react-icons/ri';
import { TbArrowRightCircle } from 'react-icons/tb';
import { BiWinkSmile } from 'react-icons/bi';

const Cart = (props) => {
    let { isClosed, onRemove, items = [] } = props;
    const sum = items.reduce((acc, cur) => acc + Number(cur.price), 0);

    return (
        <div className='cart absolute left-0 top-0 w-full h-full bg-[#0000004d] z-10'>
            <div className='absolute w-96 h-full right-0 bg-white shadow-lg p-8 flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Shopping Cart</h2>
                    <button onClick={isClosed}>
                        <RiCloseFill
                            size={25}
                            className='duration-300 hover:fill-red-500'
                        />
                    </button>
                </div>
                {items.length > 0 ? (
                    <div className='flex flex-col gap-5 grow overflow-auto'>
                        <div className='grow'>
                            {items.map((obj) => (
                                <div
                                    key={obj.id}
                                    className='flex items-center gap-5 p-2 border rounded mb-5'>
                                    <div className='w-20'>
                                        <img
                                            className=''
                                            src={obj.image}
                                            alt='ps5'
                                        />
                                    </div>
                                    <div className='grow max-w-[130px]'>
                                        <p>{obj.title}</p>
                                        <p className='font-bold'>
                                            ${obj.price}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => onRemove(obj.id)}
                                        className='rounded-xl border border-gray-200 p-1'>
                                        <RiCloseFill
                                            size={25}
                                            className='duration-300 fill-slate-400 hover:fill-red-500'
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <ul>
                            <li className='flex justify-between mb-5'>
                                <span>Total:</span>
                                <div className='border-b grow m-[6px]'></div>
                                <p className='font-bold'>${sum.toFixed(2)}</p>
                            </li>
                            <li className='flex justify-between'>
                                <span>Tax 20%:</span>
                                <div className='border-b grow m-[6px]'></div>
                                <p className='font-bold'>
                                    ${(sum * 0.2).toFixed(2)}
                                </p>
                            </li>
                        </ul>
                        <button className='rounded-2xl text-white p-3 uppercase duration-300 flex items-center justify-center group bg-orange-300 hover:bg-orange-400 active:bg-orange-500'>
                            Checkout{' '}
                            <span className='group-hover:rotate-90 duration-300'>
                                <TbArrowRightCircle
                                    size={20}
                                    className='ml-3'
                                />
                            </span>
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-5 items-center m-auto'>
                        <RiShoppingCartLine
                            size={50}
                            className='fill-green-400'
                        />
                        <h3 className='font-bold text-xl'>Cart is empty</h3>
                        <div className='flex gap-3 items-center'>
                            <p>But it's never too late to fix it</p>
                            <BiWinkSmile size={25} className='fill-green-400' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
