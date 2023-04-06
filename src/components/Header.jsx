import { Link } from 'react-router-dom';
import useTotal from '../hooks/useTotal';
import {
    RiPlaystationLine,
    RiShoppingCartLine,
    RiUser3Line,
    RiHeartLine,
} from 'react-icons/ri';

const Header = ({ isOpen }) => {
    const { total } = useTotal();
    return (
        <header className='flex justify-between items-center p-10 border-b-2 border-gray-200'>
            <Link to='/'>
                <div className='flex items-center'>
                    <RiPlaystationLine size={60} className='mr-4' />
                    <div className='hidden sm:block'>
                        <h3 className='uppercase font-bold text-xl'>
                            Playstation
                        </h3>
                        <p className='text-lg opacity-50'>Gaming Galaxy</p>
                    </div>
                </div>
            </Link>
            <ul className='flex gap-6 items-center'>
                <li className='flex gap-3'>
                    <RiShoppingCartLine
                        onClick={isOpen}
                        size={25}
                        className='cursor-pointer'
                    />
                    <span>${total.toFixed(2)}</span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <RiHeartLine size={25} className='cursor-pointer' />
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <RiUser3Line size={25} className='cursor-pointer' />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
