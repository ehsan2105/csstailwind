import React from "react";
import assVid from '../assets/vid.mp4'
const Video = () =>{
return (
   <div className="w-full h-[90vh] top-[90px]">

    <video className="object-cover absolute h-full w-full -z-10" src={assVid} autoPlay loop muted/>

    <div className="w-full h-[100%] flex flex-col text-white justify-center items-center">
        <h1>Testing </h1>
        <h1> <span className="blue py-2"> Lorem </span> , ipsum.</h1>
        <p className="text-xl py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem earum officia similique nesciunt eius.</p>
    <div>
        <button className=" m-2">some </button>
        <button className=" m-2">info </button>
    </div>
    </div>
    <div>
        <p className="text-center text-white text-2xl font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>


   </div>

)
} 

export default Video