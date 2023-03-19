import React from 'react';
import { FaPlus } from 'react-icons/fa';
import {
    RiUser3Line,
    RiShoppingCartLine,
    RiPlaystationLine,
} from 'react-icons/ri';

const App = () => {
    return (
        <div className='bg-gray-100 shadow-lg rounded-2xl max-w-7xl my-12 mx-auto'>
            <header className='flex justify-between items-center p-10 border-b-2 border-gray-200'>
                <div className='flex items-center'>
                    <RiPlaystationLine size={60} className='mr-4' />
                    <div>
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
                        <RiShoppingCartLine size={25} />
                        <span>$190</span>
                    </li>
                    <li className='header__item'>
                        <RiUser3Line size={25} />
                    </li>
                </ul>
            </header>
            <div className='p-10'>
                <h1 className='font-bold text-3xl mb-5'>PS5 Games</h1>
                <div className='flex justify-between gap-5 flex-wrap'>
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-500 hover:scale-110'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/gtav-store-art-01-en-15mar22?$1600px--t$'
                            alt='resident evil'
                        />
                        <h5 className='my-2'>Grand Theft Auto V</h5>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <b>$39.99</b>
                            </div>
                            <button>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-500 hover:scale-110'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-store-art-01-ps5-en-09dec20$en?$1600px--t$'
                            alt='resident evil'
                        />
                        <h5 className='my-2'>Resident Evil Village</h5>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <b>$19.99</b>
                            </div>
                            <button>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-500 hover:scale-110'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/minecraft-squareboxart-01-ps4-05dec19-en?$1600px--t$'
                            alt='minecraft'
                        />
                        <h5 className='my-2'>Minecraft</h5>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <b>$14.99</b>
                            </div>
                            <button>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className='w-64 p-5 border-2 shadow-lg rounded-3xl duration-500 hover:scale-110'>
                        <img
                            src='https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-store-art-01-en-9mar22?$1600px--t$'
                            alt='cyberpank 2077'
                        />
                        <h5 className='my-2'>Cyberpank 2077</h5>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='opacity-50 uppercase text-xs'>
                                    Price:
                                </span>
                                <b>$29.99</b>
                            </div>
                            <button>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
