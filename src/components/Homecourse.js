import React from 'react';
import Image from 'next/image';
import study from './../../public/study.svg'

const Homecourse = () => {
    return (
        <div className='flex flex-row justify-evenly bg-white pt-10'>

            <div className="card w-72 bg-base-100 shadow-xl image-full">
                <figure><Image src={study} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center text-white">LIVE CLASS</h2>
                    <p className='text-white text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">GO LIVE</button>
                    </div>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl image-full">
                <figure><Image src={study} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center text-white">LIVE CLASS</h2>
                    <p className='text-white text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">GO LIVE</button>
                    </div>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl image-full">
                <figure><Image src={study} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center text-white">LIVE CLASS</h2>
                    <p className='text-white text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">GO LIVE</button>
                    </div>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl image-full">
                <figure><Image src={study} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center text-white">LIVE CLASS</h2>
                    <p className='text-white text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">GO LIVE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homecourse;