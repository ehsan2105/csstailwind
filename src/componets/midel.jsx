import React from "react";
import image from '../assets/blue one.jpg'
const Midel  = () => {
    return(<>
    <div className="w-full text-white bg-black">
            <h1>Lorem ipsum <span className=" blue">  dolor </span> sit amet consectetur.</h1>
        <div className="flex max-w-[1240]  px-4 py-16  ">
            <p className="mt-8">
                Lorem, ipsum dolor sit <span className="blue">   amet </span>  consectetur adipisicing elit. Doloremque ducimus consequuntur consequatur eligendi, <span className=" blue ">      ipsum,</span>  dolorem eveniet, deserunt porro laborum eum neque distinctio ratione doloribus.

            </p>
            <div>
                <img src={image} className="max-w-[250xp] shadow-2xl shadow-cyan-500/50" alt="" />
            </div>

        </div>
    </div>
    
    
    
    </>

    )
}
export default Midel