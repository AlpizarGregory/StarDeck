import React, { useState } from 'react'
import { MdOutlineCo2 } from 'react-icons/md';
import c1 from '../assets/stardeckImages/c2.jpg';
import c2 from '../assets/stardeckImages/c4.jpg';
import c4 from '../assets/stardeckImages/c4.jpg';
import c5 from '../assets/stardeckImages/c5.jpg';
import { cards } from './cards';


const basicCards = [{ nombre: "Nombre 1", descripcion: "Descripcion 1", imagen: "/src/assets/stardeckImages/c2.jpg" }, { nombre: "Nombre 2", descripcion: "Descripcion 2", imagen: "/src/assets/stardeckImages/c2.jpg" }];
const nrCards = [{ nombre: "Nombre R 1", descripcion: "Descripcion R 1", imagen: "/src/assets/stardeckImages/c5.jpg" }, { nombre: "Nombre R 2", descripcion: "Descripcion R 2", imagen: "/src/assets/stardeckImages/c4.jpg" }];


const bcard1 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard2 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard3 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard4 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard5 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard6 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard7 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard8 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard9 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard10 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard11 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard12 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard13 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard14 = basicCards[Math.floor(Math.random() * basicCards.length)]
const bcard15 = basicCards[Math.floor(Math.random() * basicCards.length)]


//classNameName="hover:transform hover:skew-y-[180deg] duration-1000"
//classNameName='relative hover:my-rotate-y-180 duration-1000'
function CardSelector() {
    const [selection1, setS1] = useState(nrCards[Math.floor(Math.random() * basicCards.length)])
    const [selection2, setS2] = useState(nrCards[Math.floor(Math.random() * basicCards.length)])
    const [selection3, setS3] = useState(nrCards[Math.floor(Math.random() * basicCards.length)])

    const [choosed1, setC1] = useState(c5)
    const [choosed2, setC2] = useState(c5)
    const [choosed3, setC3] = useState(c5)

    const [visibility1, setV1] = useState("invisible")
    const [visibility2, setV2] = useState("invisible")
    const [visibility3, setV3] = useState("invisible")
    const [visibilitySelector, setVS] = useState("")

    const [totalCards, setTotalCards] = useState(15)










    return (
        <div className="bg-bg3 bg-cover grid grid-cols-6 gap-2 min-h-screen items-center justify-center bg-slate-100">
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard1.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard1.nombre}</h1>
                            <p className="text-base">{bcard1.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard2.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard2.nombre}</h1>
                            <p className="text-base">{bcard2.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard3.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard3.nombre}</h1>
                            <p className="text-base">{bcard3.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard4.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard4.nombre}</h1>
                            <p className="text-base">{bcard4.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard5.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard5.nombre}</h1>
                            <p className="text-base">{bcard5.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard6.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard6.nombre}</h1>
                            <p className="text-base">{bcard6.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard7.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard7.nombre}</h1>
                            <p className="text-base">{bcard7.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard8.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard8.nombre}</h1>
                            <p className="text-base">{bcard8.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard9.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard9.nombre}</h1>
                            <p className="text-base">{bcard9.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard10.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard10.nombre}</h1>
                            <p className="text-base">{bcard10.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard11.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard11.nombre}</h1>
                            <p className="text-base">{bcard11.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard12.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard12.nombre}</h1>
                            <p className="text-base">{bcard12.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard13.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard13.nombre}</h1>
                            <p className="text-base">{bcard13.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard14.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard14.nombre}</h1>
                            <p className="text-base">{bcard14.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group [perspective:1000px]">
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={bcard15.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{bcard15.nombre}</h1>
                            <p className="text-base">{bcard15.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${visibility1} group [perspective:1000px]`}>
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={choosed1.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{choosed1.nombre}</h1>
                            <p className="text-base">{choosed1.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${visibility2} group [perspective:1000px]`}>
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={choosed2.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{choosed2.nombre}</h1>
                            <p className="text-base">{choosed2.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${visibility3} group [perspective:1000px]`}>
                <div className="relative h-fit w-[192px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className=" h-full absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={choosed3.imagen} />
                    </div>
                    <div className=" inset-0 h-[290px] w-fit rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{choosed3.nombre}</h1>
                            <p className="text-base">{choosed3.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>






            <p className={` ${visibilitySelector} ml-52 absolute bg-black text-cyan-500 border-2 border-cyan-500 text-1xl font-bruno2 w-[900px] mb-96 -mt-36 pl-1`}>Te hemos asignado 15 cartas <mark className="bg-black text-slate-300">Basicas</mark> aleatorias, ahora escoge entre una de las tres opciones de cartas <mark className="bg-black text-green-500">Normales</mark> o <mark className="bg-black text-blue-600">Raras</mark> hasta completar tu primer deck y preparate para comenzar tu experiencia en Stardeck!</p>
            <div className={`${visibilitySelector} ml-52 absolute  h-[450px] w-[900px] bg-black grid grid-cols-3 border-2 border-cyan-500 gap-3`}>
                <div className="  group [perspective:1000px] w-fit mx-auto">
                    <div className="relative h-fit w-[270px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] m-auto mt-5">
                        <div className=" h-full absolute inset-0">
                            <img className=" rounded-xl object-cover shadow-xl shadow-black/40" src={selection1.imagen} />
                        </div>
                        <div className=" inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className=" flex min-h-full h-[400px] flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold">{selection1.nombre}</h1>
                                <p className="text-base">{selection1.descripcion}</p>
                                <button onClick={() => {
                                    if (totalCards < 18) {
                                        if (totalCards === 15) {
                                            setV1("")
                                            setC1(selection1)
                                            setTotalCards(16)

                                        } else if (totalCards === 16) {
                                            setV2("")
                                            setC2(selection1)
                                            setTotalCards(17)

                                        } else if (totalCards === 17) {
                                            setV3("")
                                            setC3(selection1)
                                            setTotalCards(18)
                                            setVS("invisible")
                                        }

                                    }

                                    setS1(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS2(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS3(nrCards[Math.floor(Math.random() * basicCards.length)])

                                }} className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Seleccionar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  group [perspective:1000px] w-fit mx-auto">
                    <div className="relative h-fit w-[270px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] m-auto mt-5">
                        <div className=" h-full absolute inset-0">
                            <img className=" rounded-xl object-cover shadow-xl shadow-black/40" src={selection2.imagen} />
                        </div>
                        <div className=" inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className=" flex min-h-full h-[400px] flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold">{selection2.nombre}</h1>
                                <p className="text-base">{selection2.descripcion}</p>
                                <button onClick={() => {
                                    if (totalCards < 18) {
                                        if (totalCards === 15) {
                                            setV1("")
                                            setC1(selection2)
                                            setTotalCards(16)

                                        } else if (totalCards === 16) {
                                            setV2("")
                                            setC2(selection2)
                                            setTotalCards(17)

                                        } else if (totalCards === 17) {
                                            setV3("")
                                            setC3(selection2)
                                            setTotalCards(18)
                                            setVS("invisible")

                                        }
                                    }
                                    setS1(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS2(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS3(nrCards[Math.floor(Math.random() * basicCards.length)])

                                }} className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Seleccionar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  group [perspective:1000px] w-fit mx-auto">
                    <div className="relative h-fit w-[270px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] m-auto mt-5">
                        <div className=" h-full absolute inset-0">
                            <img className=" rounded-xl object-cover shadow-xl shadow-black/40" src={selection3.imagen} />
                        </div>
                        <div className=" inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className=" flex min-h-full h-[400px] flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold">{selection3.nombre}</h1>
                                <p className="text-base">{selection3.descripcion}</p>
                                <button onClick={(e) => {
                                    if (totalCards < 18) {
                                        if (totalCards === 15) {
                                            setV1("")
                                            setC1(selection3)
                                            setTotalCards(16)

                                        } else if (totalCards === 16) {
                                            setV2("")
                                            setC2(selection3)
                                            setTotalCards(17)

                                        } else if (totalCards === 17) {
                                            setV3("")
                                            setC3(selection3)
                                            setTotalCards(18)
                                            setVS("invisible")

                                        }
                                    }
                                    setS1(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS2(nrCards[Math.floor(Math.random() * basicCards.length)])
                                    setS3(nrCards[Math.floor(Math.random() * basicCards.length)])

                                }} className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Seleccionar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="fixed bottom-6 grid grid-cols-2">
                <p className="rounded-md p-2 bg-opacity-70 font-bruno bg-black text-2xl font-semibold text-cyan-600 border-cyan-600 border-2 ">Cantidad de cartas en el deck <mark className="bg-transparent text-cyan-600">{totalCards}</mark>/18</p>
                <button onClick={() => {
                    if (totalCards < 18) {
                        alert("Termina de completar tu deck para poder avanzar")
                    }
                }} className='text-xl w-fit font-bruno2 border-cyan-600 text-warning-500 border-2 p-2 rounded-md bg-black hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 hover:border-black hover:text-black'>Avanzar</button>
            </div>

        </div>


    )
}

export default CardSelector


















