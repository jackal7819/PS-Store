import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { TbArrowRightCircle } from 'react-icons/tb';
import {
    RiUser3Line,
    RiShoppingCartLine,
    RiPlaystationLine,
    RiSearchLine,
    RiHeartFill,
    RiHeartLine,
    RiCloseFill,
    RiArrowRightLine,
} from 'react-icons/ri';

const App = () => {
    return (
        <div className='bg-gray-100 shadow-lg rounded-2xl max-w-7xl my-12 mx-auto'>
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
            <header className='flex justify-between items-center p-10 border-b-2 border-gray-200'>
                <div className='flex items-center'>
                    <RiPlaystationLine size={60} className='mr-4' />
                    <div className='hidden sm:block'>
                        <h3 className='uppercase font-bold text-xl'>
                            Playstation
                        </h3>
                        <p className='text-lg opacity-50'>
                            Store The Best Games
                        </p>
                    </div>
                </div>
                <ul className='flex gap-6 items-center'>
                    <li className='flex gap-3'>
                        <RiShoppingCartLine size={25} className='cursor-pointer' />
                        <span>$190</span>
                    </li>
                    <li className='header__item'>
                        <RiUser3Line size={25} className='cursor-pointer' />
                    </li>
                </ul>
            </header>
            <div className='p-10'>
                <div className='flex items-center justify-between mb-5 flex-wrap gap-5'>
                    <h1 className='font-bold text-3xl'>PS5 Games</h1>
                    <div className='flex items-center bg-white rounded-md pl-2 w-64'>
                        <RiSearchLine size={25} className='fill-slate-400' />
                        <input
                            type='search'
                            placeholder='Search...'
                            className='p-2 outline-0 border-0'
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-5 flex-wrap'>
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/gtav-store-art-01-en-15mar22?$1600px--t$'
                            alt='gta'
                        />
                        <h5 className='my-2'>Grand Theft Auto V</h5>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <p className='font-bold'>$39.99</p>
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
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-store-art-01-ps5-en-09dec20$en?$1600px--t$'
                            alt='resident evil'
                        />
                        <h5 className='my-2'>Resident Evil Village</h5>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <p className='font-bold'>$19.99</p>
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
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/minecraft-squareboxart-01-ps4-05dec19-en?$1600px--t$'
                            alt='minecraft'
                        />
                        <h5 className='my-2'>Minecraft</h5>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <p className='font-bold'>$14.99</p>
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
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-300 hover:translate-y-3'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-store-art-01-en-9mar22?$1600px--t$'
                            alt='cyberpank 2077'
                        />
                        <h5 className='my-2'>Cyberpank 2077</h5>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <p className='font-bold'>$29.99</p>
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
                </div>
            </div>
        </div>
    );
};

export default App;
