import { RiCloseFill } from 'react-icons/ri';
import { TbArrowRightCircle } from 'react-icons/tb';

const Cart = () => {
    return (
        <div className='absolute left-0 top-0 w-full h-full bg-[#0000004d] z-10 hidden'>
            <div className='absolute w-96 h-full right-0 bg-white shadow-lg p-8 flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Shopping Cart</h2>
                    <button>
                        <RiCloseFill
                            size={25}
                            className='duration-300 hover:fill-red-500'
                        />
                    </button>
                </div>
                <div className='grow overflow-auto'>
                    <div className='flex items-center gap-5 justify-between p-2 border rounded mb-5'>
                        <div className='w-20'>
                            <img
                                src='https://gmedia.playstation.com/is/image/SIEPDC/gtav-store-art-01-en-15mar22?$1600px--t$'
                                alt='gta'
                            />
                        </div>
                        <div>
                            <p>Grand Theft Auto V</p>
                            <p className='font-bold'>$39.99</p>
                        </div>
                        <button className='rounded-xl border border-gray-200 p-1'>
                            <RiCloseFill
                                size={25}
                                className='duration-300 fill-slate-400 hover:fill-red-500'
                            />
                        </button>
                    </div>
                    <div className='flex items-center gap-5 justify-between p-2 border rounded mb-5'>
                        <div className='w-20'>
                            <img
                                src='https://gmedia.playstation.com/is/image/SIEPDC/gtav-store-art-01-en-15mar22?$1600px--t$'
                                alt='gta'
                            />
                        </div>
                        <div>
                            <p>Grand Theft Auto V</p>
                            <p className='font-bold'>$39.99</p>
                        </div>
                        <button className='rounded-xl border border-gray-200 p-1'>
                            <RiCloseFill
                                size={25}
                                className='duration-300 fill-slate-400 hover:fill-red-500'
                            />
                        </button>
                    </div>
                    <div className='flex items-center gap-5 justify-between p-2 border rounded mb-5'>
                        <div className='w-20'>
                            <img
                                src='https://gmedia.playstation.com/is/image/SIEPDC/gtav-store-art-01-en-15mar22?$1600px--t$'
                                alt='gta'
                            />
                        </div>
                        <div>
                            <p>Grand Theft Auto V</p>
                            <p className='font-bold'>$39.99</p>
                        </div>
                        <button className='rounded-xl border border-gray-200 p-1'>
                            <RiCloseFill
                                size={25}
                                className='duration-300 fill-slate-400 hover:fill-red-500'
                            />
                        </button>
                    </div>
                </div>
                <ul>
                    <li className='flex justify-between mb-5'>
                        <span>Total:</span>
                        <div className='border-b grow m-[6px]'></div>
                        <p className='font-bold'>$299.98</p>
                    </li>
                    <li className='flex justify-between'>
                        <span>Tax 20%:</span>
                        <div className='border-b grow m-[6px]'></div>
                        <p className='font-bold'>$59.99</p>
                    </li>
                </ul>
                <button className='rounded-2xl text-white p-3 uppercase duration-300 flex items-center justify-center group bg-orange-300 hover:bg-orange-400 active:bg-orange-500'>
                    Checkout{' '}
                    <span className='group-hover:rotate-90 duration-300'>
                        <TbArrowRightCircle size={20} className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Cart;
