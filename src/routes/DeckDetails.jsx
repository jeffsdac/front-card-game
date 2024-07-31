import React, { useContext, useEffect, useState } from 'react'
import OptionMenu from '../Components/OptionMenu'
import CardInDecks from '../Components/CardInDecks'
import { AuthContext } from '../Context/AuthContext'
import RelDeckCardService from '../Services/RelDeckCardService'

export default function DeckDetails() {

    const [cards, setCards] = useState([])
    const {deckId} = useContext(AuthContext);
    const [selectedCards, setSelectedCards] = useState([]);
    const [res, setRes] = useState(-1);

    useEffect ( () => {
        const getCards = async () => {
            const resp = await RelDeckCardService.getCardsByDeckId(deckId);
            const body = await resp.json();

            const newArray = [...body]

            console.log(newArray);

            setSelectedCards(newArray);
            
        }  

        getCards();
    },[] ) 

    return(
        <div className='bg-preto min-h-screen w-full'>
            <main className='flex'>
                <div className='w-3/4 min-h-80 flex items-center justify-center'>
                    
                    <div className='lg:w-3/4 sm:w-full min-h-screen flex flex-wrap justify-evenly'>
                        <h1 className='w-full text-2xl font-bold green-text text-center my-4'>Cards disponiveis</h1>
                    </div>
                    {
                        selectedCards.map( (rel, key) => (
                            <p className='mx-2' key={key}>Card: {rel.cardId} </p>
                        ))
                    }
                </div>
                <div className='w-1/4'>
                    {/* {
                        <OptionMenu selectedCards={selectedCards} cards={cards} setCards={setCards}
                        setSelectedCards={setSelectedCards}></OptionMenu>
                    } */}
                    
                </div>
            </main>
        </div>
    )
}
