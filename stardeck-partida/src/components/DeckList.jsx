import React from 'react'

function DeckList() {
  return (
    <div className='fixed text-2xl text-amber-500 bg-teal-950 bg-opacity-50 rounded-md p-3 text-center' style={{
      marginTop: '500px',
      marginLeft: '560px'
    }}>
        <label for="deckList">Seleccione su mazo:</label>
        <select name="deckList" id="deckList" className='bg-cyan-950 bg-opacity-0 ml-10'>
          <option value="deck1">Mazo predeterminado</option>
          <option value="deck2">Mazo predeterminado 2</option>
          <option value="deck3">Mazo predeterminado 3</option>
          <option value="deck4">Mazo predeterminado 4</option>
        </select>

    </div>
  )
}

export default DeckList