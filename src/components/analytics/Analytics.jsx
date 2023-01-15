import React from 'react';

const Analytics = () => {

  return (

    <div className='w-full bg-white py-16 px-4'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

            <img 
                className='w-[400px] h-[300px] mx-auto my-4 border-2 shadow-xl shadow-cyan-500/50 mt-8 ml-1/2'
                src='https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt=''
            />

            <div className='flex flex-col justify-center'>

                <p className='text-[#00df9a] font-bold sm:mx-auto py-3'> DATA ANALYTICS DASHBOARD </p>

                <h1 className='sm:text-2xl md:text-4xl text-2xl font-bold py-2 sm:mx-auto'> Manage Data Analytics Centrally </h1>

                <p className='sm:mx-auto sm:text-l py-4'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum
                </p>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black md:mx-0'> Get Started </button>

            </div>

        </div>

    </div>

  );

};

export default Analytics;