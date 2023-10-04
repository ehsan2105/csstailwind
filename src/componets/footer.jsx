import React from "react";

const Footer = () => {
    return (
        <div className='w-full px-4 py-16 bg-black text-white text-center '>
            <h1>Lorem ipsum dolor sit.</h1>
            <div className=" py-4">
                <input type="email" className=" p-3 rounded-3xl mr-12" placeholder="enter email" />
                <button>sing in</button>
            </div>
            <div className="flex items-center justify-center py-2">
                <input type="checkbox" className="mr-2 " />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!</p>
            </div>

        </div>
    )
}
export default Footer