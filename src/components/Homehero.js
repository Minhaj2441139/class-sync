import React from 'react';
import Image from 'next/image';
import study from '../../public/study.svg'
import study2 from '../../public/study2.svg'

const Homehero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={study2} width={400} height={200} className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold text-black">The smart education<br></br>for future</h1>
                        <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Courses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homehero;