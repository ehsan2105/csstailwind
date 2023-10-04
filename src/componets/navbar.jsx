import React, { useState } from "react";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full h-[90px] bg-black ">

            <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
                <div>
                    <h1 className="text-[var(--primary-blue)]" > TEST</h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex text-white items-center">
                        <li>platform</li>
                        <li>devdloper</li>
                        <li>commuinty</li>
                        <li>about</li>
                        <button className="ml-4">  use defi</button>
                    </ul>
                </div>
                <div onClick={handleNav} className="block md:hidden">

                    {nav !== true? 
                    <AiOutlineMenu size={35} className=' text-white' />
                :
                
                    <AiOutlineClose size={35} className=' text-white' />
                }
                    
                    <div className={ nav ?"w-full bg-black text-white absolute top-[90px] left-0 justify-center text-center h-full" : 'absolute left-[-100%]'}>
                        <ul>
                            <li className="text-3xl">platform</li>
                            <li className="text-3xl">devdloper</li>
                            <li className="text-3xl">commuinty</li>
                            <li className="text-3xl">about</li>
                            <button className="m-8">  use defi</button>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar