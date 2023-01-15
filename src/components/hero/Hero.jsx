import React from 'react';
import Typed from 'react-typed';

const Hero = () => {

  return (

    <div className='text-white'>
        
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-5'>

            <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS </p>

            <h1 className='sm:text-4xl md:text-7xl font-bold md:py-6 p-2'> Grow With Data </h1>

            <div className='flex justify-center items-center'>

                <p className='sm:text-lg md:text-5xl text-xl font-bold p-2' > Fast, Flexible Financing For </p>

                <Typed 
                    className='sm:text-lg sm:p-0 md:text-5xl text-xl font-bold pl-3 text-red-700'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop/>

            </div>

            <p className='md:text-2xl md:p-4 text-xl font-bold text-gray-600 p-2'> 
                Monitor Your Data Analytics To Increase Revenue For BTB, BTC, & SASS Platforms
            </p>

            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started </button>

        </div>

    </div>

  );

};

export default Hero;