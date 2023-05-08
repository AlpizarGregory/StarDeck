import React, { useRef } from 'react'
import { useState, useEffect, useContext } from "react"
import predator from '../assets/stardeckImages/predator.png';
import { CardPreview } from './CardPreview.jsx'

import { FaSearch } from "react-icons/fa";
import { Select } from "tw-elements";


import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image'


const imageMimeType = /image\/(png|jpg|jpeg)/i;


// Component that shows the creation card form
function CardForm() {

    // The attibutes of the new card
    const [name, setName] = useState("")
    const [energy, setEnergy] = useState("")
    const [cost, setCost] = useState("")
    const [image, setImage] = useState("")
    const [kind, setKind] = useState("Basico")
    const [race, setRace] = useState("")

    const [desing, setDesing] = useState("bg-Basico")

    // To load the 5 different kinds of cards
    const arrayCards = ["bg-Basico","bg-Popular","bg-Raro"]
    function loadCards(st){
        for(var i; i<2;i++){
            setTimeout(()=> setDesing(st[i]),20)
        }
    }
    loadCards(arrayCards)

    // Different classes for the components on this window
    const [description, setDescription] = useState("")
    
    const [colorBoxes, setColorBoxes] = useState("text-slate-300")

    // To allow the import of a file locally
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    // Function to get and set the image of the card in the screen
    const changeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
        }
        setFile(file);
    }
    // To read files
    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);

    // Reference to pass from html to jpeg
    const componentRef = useRef();

    const arrayData = [name, energy, cost, image, kind, race, desing]
    // Function that verifies if all the data in the form follows the restrictions
    function verifyData(){

        if (cost ===""){
            alert("Informacion incompleta, costo sin rellenar")
        }
        if (energy ===""){
            alert("Informacion incompleta, energia sin rellenar")
        }

        if (Number(cost) > -1 && Number(cost) < 101){
            if (Number(energy) > -101 && Number(energy) < 101){
                console.log("costo y energia correctos")
            } else{alert("La energia de la carta debe tener un valor entre -100 y 100")}
        } else {alert("El costo de la carta debe tener un valor entre 0 y 100")}

        if (name ===""){
            alert("Informacion incompleta, nombre sin rellenar")
        }
        if (description ===""){
            alert("Informacion incompleta, descripcion sin rellenar")
        }
        if (image ===""){
            alert("Informacion incompleta, imagen sin seleccionar")
        }
    
    }

    return (
        <div className={` bg-cover bg-my2 bg-left grid grid-flow-col h-screen w-screen`} >

            <div className="font-bruno2" >
                
                <img src={fileDataURL} className='absolute ml-12 mt-36 h-[282px] animate-ab ' />
                <div ref={componentRef} className={`bg-cover bg-center  ${desing} h-[430px] w-[291px]    mt-28 ml-36 float-right mx-10`} >
                    <div className="grid grid-flow-col mt-2">
                        <h3 className=" h-10 text-lime-500 text-4xl ml-2 w-14 ">{cost}</h3>
                        <h3 className={`bg-gradient-to-b from-slate-800 via-slate-950 to-slate-800 text-sm h-fit ml-32 rounded-b-md ${colorBoxes} p-1 mt-1 w-fit`}>{kind}</h3>
                    </div>
                    <div >
                        <img className="h-[173px] w-[190px] mx-auto mb-2  rounded-rm -mt-5" src={fileDataURL} />
                    </div>
                    <h3 className="rounded-md text-slate-400 bg-gradient-to-b from-slate-800 via-slate-950 to-slate-800 text-xs  h-8 mx-auto  w-10/12 text-center mb-2 border-2 border-black ">{name}</h3>
                    <h3 className=" bg-gradient-to-b from-slate-800 via-slate-950 to-slate-800 border-2 border-black text-xs1/[10px] w-[243px]  h-[162px]  text-center  text-slate-400  rounded-md ml-6"> {description} </h3>
                    <h3 className="rounded-md bg-gray-600 text-orange-500 text-2xl ml-14 w-16 border-r-2 border-black pl-1">{energy}</h3>
                </div>
            </div>
            <div className="max-w-md mt-16">
                
                <div className='mt-5'>
                    <h3 className="border-black border-2 rounded-md bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-center text-2xl mx-auto  mb-1 w-full font-bruno font-semibold">Ingrese los datos del nuevo planeta</h3>
                    <input className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-11/12 ml-3 p-2 mb-1 mt-2  rounded-md font-bruno2" placeholder="Nombre del planeta" maxLength={30} onChange={(e) => { setName(e.target.value) }} value={name} autoFocus />

                    <div>
                        <input className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-9/12 ml-3 p-2 mb-1 mt-2  rounded-md font-bruno2 text-base" placeholder="Imagen" onChange={(e) => { setFileDataURL(e.target.value) }} value={fileDataURL} />

                        <button for="files" className=" bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md py-2 pb-4 pl-3 mx-3 w-12 font-bruno" ><FaSearch /></button>
                        <input id="files" type="file" accept='.png, .jpg, .jpeg' onChange={changeHandler} className=" mr-2 bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-xs rounded-md  pt-3 -mx-16 w-12 h-12 font-bruno opacity-0" />

                    </div>


                    <select value={kind} className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-5/12 p-2 mb-1 mx-2 mt-2 ml-28 rounded-md font-bruno2" data-te-select-init onChange={(e) => {
                        e.preventDefault()
                        setDesing("bg-" + e.target.value)
                        setKind(e.target.value)
                        console.log(kind)

                        console.log(desing)
                        if (e.target.value === "Basico"){
                            setColorBoxes("text-slate-300")
                        } else if (e.target.value === "Popular"){
                            setColorBoxes("text-red-600")
                        } else {
                            setColorBoxes("text-sky-500")
                        }


                    }}>
                        <option className="text-slate-400" value="Basico">Basico</option>
                        <option className="text-red-600" value="Popular">Popular</option>
                        <option className="text-sky-500" value="Raro">Raro</option>

                    </select>

                    

                    <textarea className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 text-sm w-11/12 ml-3 p-2 mb-1 mt-2 h-36  rounded-md font-bruno2 resize-none" maxLength={1000} placeholder="Descripcion del personaje" onChange={(e) => { setDescription(e.target.value) }}
                        value={description}>

                    </textarea>
                    <button className="hover:text-black hover:border-black bg-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md p-2 mx-4 w-5/12 font-bruno border-cyan-600 text-warning-500 " onClick={() => { exportComponentAsJPEG(componentRef) }}>Capturar</button>
                    <button onClick={verifyData} className="hover:text-black hover:border-black bg-black  border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md p-2 mx-2 w-5/12 font-bruno border-cyan-600 text-warning-500 ">Guardar</button>

                </div>
            </div>
        </div>
    )
}

export default CardForm