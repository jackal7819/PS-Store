import Info from './Info';
import useTotal from '../hooks/useTotal';
import axios from 'axios';
import { useState } from 'react';
import {
    RiCloseFill,
    RiShoppingCartLine,
    RiShoppingCartFill,
} from 'react-icons/ri';
import { TbArrowRightCircle } from 'react-icons/tb';
import { BiWinkSmile, BiSmile } from 'react-icons/bi';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Cart = ({ isClosed, onRemove, items = [] }) => {
    const { cartItems, setCartItems, MOCKAPI_URL_CART, total } = useTotal();
    const [numberOrder, setNumberOrder] = useState(null);
    const [isCompleted, setIsComleted] = useState(false);

    const MOCKAPI_URL_ORDERS =
        'https://642d910c66a20ec9cea10382.mockapi.io/orders';

    const onClickCompleted = async () => {
        try {
            const { data } = await axios.post(MOCKAPI_URL_ORDERS, {
                items: cartItems,
            });
            setNumberOrder(data.id);
            setIsComleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`${MOCKAPI_URL_CART}/${item.id}`);
                await delay(2000);
            }
        } catch (error) {
            alert('Failed to create an order :(');
        }
    };

    return (
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'>
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
                                <p className='font-bold'>${total.toFixed(2)}</p>
                            </li>
                            <li className='flex justify-between'>
                                <span>Tax 20%:</span>
                                <div className='border-b grow m-[6px]'></div>
                                <p className='font-bold'>
                                    ${(total * 0.2).toFixed(2)}
                                </p>
                            </li>
                        </ul>
                        <button
                            onClick={onClickCompleted}
                            className='rounded-2xl text-white p-3 uppercase duration-300 flex items-center justify-center group bg-orange-300 hover:bg-orange-400 active:bg-orange-500'>
                            Checkout{' '}
                            <span className='group-hover:rotate-90 duration-300'>
                                <TbArrowRightCircle
                                    size={20}
                                    className='ml-3'
                                />
                            </span>
                        </button>
                    </div>
                ) : isCompleted ? (
                    <Info
                        image={
                            <RiShoppingCartFill
                                size={50}
                                className='fill-blue-400'
                            />
                        }
                        title={`Order #${numberOrder} is placed`}
                        description='Your order is being completed and will soon be handed over to the courier delivery service'
                        smile={<BiSmile size={25} className='fill-blue-400' />}
                    />
                ) : (
                    <Info
                        image={
                            <RiShoppingCartLine
                                size={50}
                                className='fill-green-400'
                            />
                        }
                        title='Cart is empty'
                        description="But it's never too late to fix it"
                        smile={
                            <BiWinkSmile size={25} className='fill-green-400' />
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Cart;
