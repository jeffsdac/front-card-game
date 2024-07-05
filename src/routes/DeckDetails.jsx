import React, { useState } from 'react'
import OptionMenu from '../Components/OptionMenu'
import CardMenu from '../Components/CardMenu';

    //<img src="https://mtgcardsmith.com/view/cards_ip/1720130355226517.png?t=536537" alt="" />
export default function DeckDetails() {
    
    const [items, setItems] = useState(["item1", "item2", "item3", "item4"])
    const [deckItems, setDeckItems] = useState (["item0"]);


    const handlerMenu = (textToChange) => {
        setDeckItems([...deckItems ,textToChange]);
        setItems( prevOptions => prevOptions.filter( opt => opt !== textToChange ) )
    }

    const handlerCard = (textToChange) => {
        setDeckItems( prevDeckItems => prevDeckItems.filter ( deckText => deckText !== textToChange ) );
        setItems([...items, textToChange]);
    };

  return (
    <div className='w-full min-h-screen flex justify-center bg-slate-900'>
            <div className='w-3/4 border min-h-44 flex justify-center'>
                <CardMenu deckItems={deckItems} handlerCard={handlerCard}></CardMenu>
            </div>

            <div className=' w-2/6 min-h-44 border px-4'>
                <OptionMenu items={items} handlerMenu={handlerMenu}></OptionMenu>
            </div>
            
        </div>
  )
}
