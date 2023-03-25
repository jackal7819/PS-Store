import {RiPlaystationLine, RiShoppingCartLine, RiUser3Line } from 'react-icons/ri';   

const Header = () => {
    return (
        <header className='flex justify-between items-center p-10 border-b-2 border-gray-200'>
            <div className='flex items-center'>
                <RiPlaystationLine size={60} className='mr-4' />
                <div className='hidden sm:block'>
                    <h3 className='uppercase font-bold text-xl'>Playstation</h3>
                    <p className='text-lg opacity-50'>Gaming Galaxy</p>
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
    );
};

export default Header;
