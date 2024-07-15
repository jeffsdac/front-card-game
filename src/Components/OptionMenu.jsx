import React, { useState } from 'react'
export default function OptionMenu({setCards, setSelectedCards, cards, selectedCards}) {
  
  const handlerOption = (content) => {
    setSelectedCards(selectedCards.filter(card => card !== content));
    setCards([...cards, content]);
  };
  
  return (
    <ul className='w-full flex-wrap bg-slate-600 p-2 min-h-screen'>
      <h2 className='text-center text-2xl mb-2 green-text font-semibold w-full'>Deck atual</h2>
      {
        selectedCards.map( (content, key) => (
          <li key={key} className=' w-full my-2 text-center bg-gray-950 hover:bg-slate-400 cursor-pointer p-2 green-text font-semibold text-s' onClick={ () => handlerOption(content)}>{content}</li>
        ))
      }
    </ul>
  )
}
