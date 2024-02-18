import home6 from "./../../public/home6.svg"
import Image from "next/image";

const Homecourse2 = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-screen">
                <figure><Image src={home6} alt="Album" width={1000} height={1000}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">SAVE TIME & ENERGY FOR STUDENT AND TEACHER</h2>
                </div>
            </div>
        </div>
    );
};

export default Homecourse2;