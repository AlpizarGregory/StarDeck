import React from 'react'
import c5 from '../assets/stardeckImages/c5.jpg';


export function OwnedCard({ card, setData, selectCard }) {



    function setInfo() {
        setData(card)
    }
    function emptyInfo() {
        setData({
            nombre: "",
            costo: "",
            energia: "",
            tipo: "",
            raza: "",
            descripcion: ""

        })
    }
    function select(){
        selectCard(card)
    }

    //console.log(card.imagen)
    //const img = "bg-" + "url('./assets/stardeckImages/RcardIcons.png')"
    //console.log(img)
    return (
        <div onClick={select} onMouseEnter={setInfo} onMouseLeave={emptyInfo} className={`bg-white w-[138px] h-[200px] rounded-sm shadow-xl border-2 hover:border-amber-400`}>
            <img className='w-fit h-fit' src={card.imagen} />

        </div>
    )
}

export default OwnedCard