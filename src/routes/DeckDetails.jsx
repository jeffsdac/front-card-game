import React, { useState } from 'react'
import OptionMenu from '../Components/OptionMenu'
import CardInDecks from '../Components/CardInDecks'

export default function DeckDetails() {

    const [cards, setCards] = useState(["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"])
    
    const [selectedCards, setSelectedCards] = useState([]);

    return(
        <div className='bg-preto min-h-screen w-full'>
            <main className='flex'>
                <div className='w-3/4 min-h-80 flex items-center justify-center'>
                    
                    <div className='lg:w-3/4 sm:w-full min-h-screen flex flex-wrap justify-evenly'>
                        <h1 className='w-full text-2xl font-bold green-text text-center my-4'>Cards disponiveis</h1>
                        {
                            cards.map ( (content, key) => (
                                <CardInDecks key={key} content={content} setCards={setCards} setSelectedCards={setSelectedCards} cards={cards} selectedCards={selectedCards}></CardInDecks>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/4'>
                    {
                        <OptionMenu selectedCards={selectedCards} cards={cards} setCards={setCards}
                        setSelectedCards={setSelectedCards}></OptionMenu>
                    }
                </div>
            </main>
        </div>
    )
}
