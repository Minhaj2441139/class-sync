import Homecourse2 from '@/components/Homecourse2';
import Homecourse from '@/components/Homecourse';
import Homehero from '@/components/Homehero';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Homehero />
            <h1 className='text-3xl bg-white text-center text-red-800'>OUR SERVICES</h1>
            <Homecourse />

            <h1 className='text-3xl bg-white text-center text-red-800 py-5'>OUR GOAL</h1>
            <Homecourse2 />
        </div>
    );
};

export default HomePage ;