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
    const [kind, setKind] = useState("")
    const [race, setRace] = useState("")

    const [desing, setDesing] = useState("bg-basic")

    // To load the 5 different kinds of cards
    const arrayCards = ["bg-n","bg-r","bg-vr","bg-ur"]
    function loadCards(st){
        for(var i; i<4;i++){
            setTimeout(()=> setDesing(st[i]),20)
        }
    }
    loadCards(arrayCards)

    // Different classes for the components on this window
    const [description, setDescription] = useState("")
    const [cardDesing, setCardDesing] = useState("bg-cover bg-basic  h-[430px] w-[291px]    mt-20 float-right mx-10")
    const [classNombre, setClassNombre] = useState("text-xs mx-auto mt-2 w-8/12 text-center")
    const [classCosto, setClassCosto] = useState("text-lime-500 text-4xl ml-2 w-14")
    const [classRaza, setClassRaza] = useState("text-3xl ml-44 w-9")
    const [classEnergia, setClassEnergia] = useState("rounded-md bg-gray-600 text-orange-500 text-2xl ml-14 w-14 border-r-2 border-black pl-1")
    const [classDescripcion, setClassDescripcion] = useState("text-xs mx-auto mt-4 w-8/12 mb-1 h-[133px]  text-center  text-slate-400")
    const [classImage, setClassImage] = useState("h-[133px] w-[190px] mx-auto mb-3 mt-2")

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
        <div className={` bg-cover bg-my bg-left grid grid-flow-col h-screen w-screen`} >

            <div className="font-bruno2" >
                <img src="https://www.pngkit.com/png/full/1-17731_planet-png.png" className='-ml-28 -mt-12 h-[312px] animate-ac' />
                <img src="https://odespertardaautocura.com.br/wp-content/uploads/2020/08/alma-4-600x516.png" className='ml-40 -mt-24 h-[132px] animate-ab' />
                <div ref={componentRef} className={`bg-cover ${desing}  h-[430px] w-[291px]    -mt-48 ml-36 float-right mx-10`} >
                    <div className="grid grid-flow-col mt-2">
                        <h3 className=" h-10 text-lime-500 text-4xl ml-2 w-14 ">{cost}</h3>
                        <h3 className=" text-2xl ml-44 w-9">{race}</h3>
                    </div>
                    <div >
                        <img className="h-[133px] w-[190px] mx-auto mb-3 mt-2 rounded-rm" src={fileDataURL} />
                    </div>
                    <h3 className=" text-xs mb-1 h-8 mx-auto mt-2 w-8/12 text-center ">{name}</h3>
                    <h3 className="bg-blue-950 text-xs1/[10px] mx-12  w-[200px]  h-[139px]  text-center  text-slate-400 mb-2 rounded-md"> {description} </h3>
                    <h3 className="rounded-md bg-gray-600 text-orange-500 text-2xl ml-14 w-16 border-r-2 border-black pl-1">{energy}</h3>
                </div>
            </div>
            <div className="max-w-md mt-12">
                
                <div className='mt-5'>
                    <h3 className="border-black border-2 rounded-md bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-center text-2xl mx-auto  mb-1 w-full font-bruno font-semibold">Ingrese los datos de la nueva carta</h3>
                    <input className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-11/12 ml-3 p-2 mb-1 mt-2  rounded-md font-bruno2" placeholder="Nombre del personaje" maxLength={30} onChange={(e) => { setName(e.target.value) }} value={name} autoFocus />

                    <div>
                        <input maxLength={3} className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-3/12 py-1 mb-1 mx-2 mt-2 ml-24 rounded-md font-bruno2 text-center text-1xl" placeholder="Costo" onKeyPress={(event) => {
                            if ((/[0-9]/).test(event.key)) {
                                console.log(1)
                            } else {
                                event.preventDefault();
                            }
                        }} onChange={(e) => { setCost(e.target.value) }} value={cost} />

                        <input maxLength={4} className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-3/12 py-1 mb-1 mx-2 mt-2 rounded-md text-1xl font-bruno2 text-center" onKeyPress={(event) => {
                            if (!/^(?:[\-]+|\d+)$/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                            placeholder="Energia" onChange={(e) => { setEnergy(e.target.value) }} value={energy} />
                    </div>
                    <div>
                        <input className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-9/12 ml-3 p-2 mb-1 mt-2  rounded-md font-bruno2 text-sm" placeholder="Imagen" onChange={(e) => { setFileDataURL(e.target.value) }} value={fileDataURL} />



                        <button for="files" className=" bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md py-2 pb-4 pl-3 mx-3 w-12 font-bruno" ><FaSearch /></button>
                        <input id="files" type="file" accept='.png, .jpg, .jpeg' onChange={changeHandler} className=" mr-2 bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-xs rounded-md  pt-3 -mx-16 w-12 h-12 font-bruno opacity-0" />

                    </div>


                    <select value={kind} className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-5/12 p-2 mb-1 mx-2 mt-2 ml-6 rounded-md font-bruno2" data-te-select-init onChange={(e) => {
                        e.preventDefault()
                        setDesing("bg-" + e.target.value)
                        setKind(e.target.value)
                        console.log(kind)

                        console.log(desing)


                    }}>
                        <option className="text-slate-400" value="basic">Basica</option>
                        <option className="text-green-600" value="n">Normal</option>
                        <option className="text-blue-700" value="r">Rara</option>
                        <option className="text-purple-700" value="vr">Muy Rara</option>
                        <option className="text-yellow-500" value="ur">Ultra-Rara</option>

                    </select>

                    <select value={race} className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 w-5/12 p-2 mb-1 mx-2 mt-2  rounded-md font-bruno2" data-te-select-init onChange={(e) => { setRace(e.target.value) }}>
                        <option value="R1">R1</option>
                        <option value="R2">R2</option>
                        <option value="R3">R3</option>
                        <option value="R4">R4</option>

                    </select>

                    <textarea className="hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 focus:bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 text-xs w-11/12 ml-3 p-2 mb-1 mt-2 h-36  rounded-md font-bruno2 resize-none" maxLength={1000} placeholder="Descripcion del personaje" onChange={(e) => { setDescription(e.target.value) }}
                        value={description}>

                    </textarea>
                    <button className="bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md p-2 mx-4 w-5/12 font-bruno" onClick={() => { exportComponentAsJPEG(componentRef) }}>Capturar</button>
                    <button onClick={verifyData} className="bg-gray-500 border-black border-2 hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 text-1xl rounded-md p-2 mx-2 w-5/12 font-bruno">Guardar</button>

                </div>
            </div>
        </div>
    )
}

export default CardForm