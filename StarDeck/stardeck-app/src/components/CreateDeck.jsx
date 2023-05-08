import React, { useEffect, useState } from 'react'
import { OwnedCard } from './OwnedCard'
import c5 from '../assets/stardeckImages/c5.jpg';
import empty from '../assets/stardeckImages/EmptyCard.png';
import { cards } from './cards'
console.log(c5)

let arrayS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let arrayS2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

export function CreateDeck() {

    const [deckName, setDeckName] = useState("")

    const [name, setName] = useState("")
    const [energy, setEnergy] = useState("")
    const [cost, setCost] = useState("")
    const [image, setImage] = useState("")
    const [kind, setKind] = useState("")
    const [race, setRace] = useState("")
    const [description, setDescription] = useState("")

    const [ownedCards, setOwnedCards] = useState([])

    let [contSelected, setContSelected] = useState(0)

    const emptyCard = {
        nombre: "",
        energia: "",
        costo: "",
        imagen: '/src/assets/stardeckImages/EmptyCard.png',
        tipo: "",
        raza: "",
        atributo: "",
        descripcion: "",
    }

    const [s1, setS1] = useState(emptyCard)
    const [s2, setS2] = useState(emptyCard)
    const [s3, setS3] = useState(emptyCard)
    const [s4, setS4] = useState(emptyCard)
    const [s5, setS5] = useState(emptyCard)
    const [s6, setS6] = useState(emptyCard)
    const [s7, setS7] = useState(emptyCard)
    const [s8, setS8] = useState(emptyCard)
    const [s9, setS9] = useState(emptyCard)
    const [s10, setS10] = useState(emptyCard)
    const [s11, setS11] = useState(emptyCard)
    const [s12, setS12] = useState(emptyCard)
    const [s13, setS13] = useState(emptyCard)
    const [s14, setS14] = useState(emptyCard)
    const [s15, setS15] = useState(emptyCard)
    const [s16, setS16] = useState(emptyCard)
    const [s17, setS17] = useState(emptyCard)
    const [s18, setS18] = useState(emptyCard)






    useEffect(() => {
        setOwnedCards(cards)
    }, [])

    function setData(card) {
        setName(card.nombre)
        setCost(card.costo)
        setEnergy(card.energia)
        setKind(card.tipo)
        setRace(card.raza)
        setDescription(card.descripcion)
    }

    function verifyDuplicates(card) {
        for (var i = 0; i < 18; i++) {
            if (arrayS2[i] === card.imagen) {
                return false
            }
        }
        return true
    }
    function selectCard(card) {
        for (var i = 0; i < 18; i++) {
            console.log(arrayS2)

            if (arrayS[i] === 0) {

                switch (i) {
                    case 0:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS1(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 1:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS2(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 2:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS3(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 3:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS4(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 4:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS5(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 5:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS6(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 6:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS7(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 7:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS8(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 8:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS9(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 9:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS10(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 10:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS11(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 11:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS12(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 12:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS13(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 13:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS14(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 14:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS15(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 15:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS16(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 16:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS17(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;
                    case 17:
                        if (verifyDuplicates(card)) {
                            arrayS2[i] = card.imagen
                            setS18(card)
                            arrayS[i] = 1
                        } else { alert("Carta ya seleccionada") }
                        break;

                }
                break
            }
        }

    }

    function saveDeck() {
        var cont = 0
        //Verificar 18 cartas
        for (var i = 0; i < 18; i++) {
            if (arrayS[i] === 0) {
                alert("Deck incompleto, asegurese de haber seleccionado las 18 cartas")
                break
            }
        }
        //Verificar minimo del nombre
        if (deckName.length < 5) {
            alert("El nombre debe contar con al menos 5 caracteres")
        }


        //Verificar nombre repetido
        //Guardar en base de datos
    }

    return (
        <div className='bg-red-700 grid grid-cols-2  min-h-screen  '>
            <div className='bg-deck bg-cover gap-2 grid grid-cols-4 p-2 pl-6 border-2 border-cyan-600'>
                {ownedCards.map((card) => (
                    <OwnedCard key={card.id} card={card} setData={setData} selectCard={selectCard} />
                ))}

                <div className='bottom-2 fixed grid grid-cols-2 gap-1 ml-24'>

                    <input onChange={(e)=>{setDeckName(e.target.value)}} className='rounded-md text-center font-electrolize px-2 py-1  text-2xl bg-white pla hover:border-sky-500 focus:placeholder-neutral-600 border-black border-2 w-96' placeholder='Nombre del deck' maxLength={30} />

                    <button onClick={()=>saveDeck()} className='rounded-md font-bruno hover:bg-gradient-to-r from-blue-700 via-purple-400 to-sky-400 px-2 border-2 border-cyan-600 text-warning-500 text-2xl bg-black w-fit hover:border-black hover:text-black '>Guardar</button>
                </div>

            </div>

            <div className=' font-electrolize text-slate-300 bg-deck2 bg-cover p-1'>
                <div className=' fixed w-full'>
                    <h1 className='p-1 bg-black bg-opacity-70 border-2 border-cyan-600 text-2xl  mb-1'> <mark className='text-warning-500 bg-black bg-opacity-0'>Nombre: </mark> {name}</h1>
                    <div className='grid grid-cols-8 gap-2 mb-1 text-base'>
                        <h2 className='p-1 bg-black bg-opacity-70 border-2 border-cyan-600'><mark className='text-warning-500 bg-black bg-opacity-0'>Costo: </mark> {cost} </h2>
                        <h2 className=' p-1 bg-black bg-opacity-70 border-2 border-cyan-600 '><mark className='text-warning-500 bg-black bg-opacity-0'>Energia: </mark>{energy} </h2>
                        <h2 className='p-1 bg-black bg-opacity-70 border-2 border-cyan-600'><mark className='text-warning-500 bg-black bg-opacity-0'>Raza: </mark>{race} </h2>
                        <h2 className='p-1 bg-black bg-opacity-70 border-2 border-cyan-600'><mark className='text-warning-500 bg-black bg-opacity-0'>Tipo: </mark>{kind} </h2>
                    </div>

                    <h1 className='p-1 bg-black bg-opacity-70 border-2 border-cyan-600 text-xs4 h-32 w-[670px] '><mark className='text-warning-500 bg-black bg-opacity-0'>Descripcion: </mark> {description}</h1>

                </div>
                <div className='fixed pt-4 ml-12 mt-52 grid grid-cols-6 gap-2'>
                    <div onClick={() => {
                        setS1(emptyCard)
                        arrayS[0] = 0
                        arrayS2[0] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s1) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s1.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS2(emptyCard)
                        arrayS[1] = 0
                        arrayS2[1] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s2) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s2.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS3(emptyCard)
                        arrayS[2] = 0
                        arrayS2[2] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s3) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s3.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS4(emptyCard)
                        arrayS[3] = 0
                        arrayS2[3] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s4) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s4.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS5(emptyCard)
                        arrayS[4] = 0
                        arrayS2[4] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s5) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s5.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS6(emptyCard)
                        arrayS[5] = 0
                        arrayS2[5] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s6) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s6.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS7(emptyCard)
                        arrayS[6] = 0
                        arrayS2[6] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s7) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s7.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS8(emptyCard)
                        arrayS[7] = 0
                        arrayS2[7] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s8) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s8.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS9(emptyCard)
                        arrayS[8] = 0
                        arrayS2[8] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s9) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s9.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS10(emptyCard)
                        arrayS[9] = 0
                        arrayS2[9] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s10) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s10.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS11(emptyCard)
                        arrayS[10] = 0
                        arrayS2[10] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s11) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s11.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS12(emptyCard)
                        arrayS[11] = 0
                        arrayS2[11] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s12) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s12.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS13(emptyCard)
                        arrayS[12] = 0
                        arrayS2[12] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s13) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s13.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS14(emptyCard)
                        arrayS[13] = 0
                        arrayS2[13] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s14) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s14.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS15(emptyCard)
                        arrayS[14] = 0
                        arrayS2[14] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s15) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s15.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS16(emptyCard)
                        arrayS[15] = 0
                        arrayS2[15] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s16) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s16.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS17(emptyCard)
                        arrayS[16] = 0
                        arrayS2[16] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s17) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s17.imagen}></img>

                    </div>
                    <div onClick={() => {
                        setS18(emptyCard)
                        arrayS[17] = 0
                        arrayS2[17] = emptyCard.imagen
                    }} onMouseEnter={() => { setData(s18) }} onMouseLeave={() => { setData(empty) }} className="bg-cover w-[88px] h-[130px] rounded-sm shadow-xl">
                        <img className='w-fit h-fit' src={s18.imagen}></img>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default CreateDeck