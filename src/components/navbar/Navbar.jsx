import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = (e) => {
        e.preventDefault();
        setNav(!nav);
    };

  return (

    <div className='text-white flex items-center justify-between h-24 mx-auto max-w-[1240px] px-4'>

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> DATA </h1>

        <ul className='hidden md:flex'>

            <li className='p-4 font-bold'> Home </li>

            <li className='p-4 font-bold'> Company </li>

            <li className='p-4 font-bold'> Resources </li>

            <li className='p-4 font-bold'> About </li>

            <li className='p-4 font-bold'> Contact </li>

        </ul>

        <div className='cursor-pointer block md:hidden' onClick={handleNav}>

            {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}

        </div>

        {/* FOR MOBILE USE */}

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> DATA </h1>

            <ul className='p-4 uppercase'>

                <li className='p-4 font-bold border-b border-gray-600'> Home </li>

                <li className='p-4 font-bold border-b border-gray-600'> Company </li>

                <li className='p-4 font-bold border-b border-gray-600'> Resources </li>

                <li className='p-4 font-bold border-b border-gray-600'> About </li>

                <li className='p-4 font-bold'> Contact </li>

            </ul>


        </div>

    </div>

  );

};

export default Navbar;