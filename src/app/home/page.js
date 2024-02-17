import React from 'react';
import Homehero from './../../components/Homehero';
import Homecourse from '@/components/Homecourse';

const HomePage = () => {
    return (
        <div>
            <Homehero />
            <h1 className='text-3xl bg-white text-center text-red-800'>OUR SERVICES</h1>
            <Homecourse />

            
            <h1 className='text-3xl bg-white text-center text-red-800 py-5'>OUR COURSES</h1>
        </div>
    );
};

export default HomePage ;