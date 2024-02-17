
import Homecourse2 from '@/components/Homecourse2';
import Homehero from '@/components/Homehero';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Homehero />
            <h1 className='text-3xl bg-white text-center text-red-800'>OUR SERVICES</h1>
            <Homecourse2 />

            
            <h1 className='text-3xl bg-white text-center text-red-800 py-5'>OUR COURSES</h1>
        </div>
    );
};

export default HomePage ;