import React from 'react'
import predator from '../assets/stardeckImages/predator.png';
export function CardPreview() {
    return (
        <div className="bg-cover bg-basic  h-[430px] w-[291px]    mt-20 float-right mx-10" >
            <div className="grid grid-flow-col mt-2">
                <h3 className=" text-lime-500 text-4xl ml-2 w-14 ">111</h3>
                <h3 className=" text-3xl ml-44 w-9">111</h3>
            </div>
            <div>
                <img className="h-[133px] w-[190px] mx-auto mb-3 mt-2" src={predator} />
            </div>
            <h3 className="text-xs mx-auto mt-2 w-8/12 text-center">111</h3>
            <h3 className="text-xs mx-auto mt-4 w-8/12 mb-1 h-[133px]  text-center  text-slate-400"> 111 </h3>
            <h3 className="rounded-md bg-gray-600 text-orange-500 text-2xl ml-14 w-14 border-r-2 border-black pl-1">111</h3>
        </div>
    )
}

export default CardPreview