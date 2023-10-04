import React from "react";
import { FaBeer } from 'react-icons/fa';

const Cart = (props) => {

    return(
        
                        <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
                            <div className=" inline-flex  justify-left rounded-xl">
                                {props.item}
                            </div>
                            <h3 className="text-xl font-bold text-left"> {props.title} </h3>
                            <p>
                                {props.texts}
                                </p>
                            </div>

                       



        
    )
}

export default Cart 