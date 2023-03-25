import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import { RiSearchLine } from 'react-icons/ri';
import { data } from './data/data';

const App = () => {
    const games = data.map((game) => (
        <Card
            key={game.id}
            title={game.title}
            image={game.image}
            price={game.price}
        />
    ));
    return (
        <div className='bg-gray-100 shadow-lg rounded-2xl max-w-7xl my-12 mx-auto'>
            <Cart />
            <Header />
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
                    {games}
                </div>
            </div>
        </div>
    );
};

export default App;
