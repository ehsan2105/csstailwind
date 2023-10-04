import React from "react";
import Cart from './cart'
import { FaBeer } from 'react-icons/fa';
import {AiFillHeart,AiFillWechat,AiFillSmile} from 'react-icons/ai'


const About = () => {
    return (
        <div className="text-white bg-black w-full">


            <div className="max-w-[1240] mx-auto  px-4 py-16 text-center ">
                <div>
                    <h1 className="py-4 "> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="py-4 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corporis labore ullam eveniet beatae rem praesentium, aut impedit fugiat veritatis qui sint voluptate. Deleniti commodi nisi placeat molestiae in! Nulla.</p>

                    

                </div>
                
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                <Cart item={<FaBeer size={40} className="bg-[#452a8e] rounded-full " />} title='Lorem ipsum, dolor sit amet consectetur adipisicing.' texts='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda odit et deleniti, vel distinctio? Officiis voluptates, recusandae cumque aliquam tempore repellat sit natus quasi, accusamus labore quis ratione voluptatum?'/>
                <Cart item={<AiFillHeart size={40} className="bg-[#452a8e] rounded-full " />} title='Lorem ipsum, dolor sit amet consectetur adipisicing.' texts='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda odit et deleniti, vel distinctio? Officiis voluptates, recusandae cumque aliquam tempore repellat sit natus quasi, accusamus labore quis ratione voluptatum?'/>
                <Cart item={<AiFillWechat size={40} className="bg-[#452a8e] rounded-full " />} title='Lorem ipsum, dolor sit amet consectetur adipisicing.' texts='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda odit et deleniti, vel distinctio? Officiis voluptates, recusandae cumque aliquam tempore repellat sit natus quasi, accusamus labore quis ratione voluptatum?'/>
                <Cart item={<AiFillSmile size={40} className="bg-[#452a8e] rounded-full " />} title='Lorem ipsum, dolor sit amet consectetur adipisicing.' texts='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda odit et deleniti, vel distinctio? Officiis voluptates, recusandae cumque aliquam tempore repellat sit natus quasi, accusamus labore quis ratione voluptatum?'/>
                    </div>
            </div>


        </div>
    )
}
export default About