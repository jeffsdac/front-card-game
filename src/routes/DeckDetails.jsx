import React, { useContext, useEffect, useState } from 'react'
import OptionMenu from '../Components/OptionMenu'
import { AuthContext } from '../Context/AuthContext'
import RelDeckCardService from '../Services/RelDeckCardService'
import CardSelectComponent from '../Components/CardSelectComponent'
import CardDetailComponent from '../Components/CardDetailComponent'

export default function DeckDetails() {

    const [cards, setCards] = useState([])
    const {deckId} = useContext(AuthContext);
    const [expand, setExpand] = useState(false);
    const [expandCardID, setExapandCardId] = useState(-1);

    useEffect ( () => {
        const getCards = async () => {
            const resp = await RelDeckCardService.getCardsByDeckId(deckId);
            const body = await resp.json();

            const newArray = [...body]

            console.log(newArray);

            setCards(newArray);
            
        }  

        getCards();
    },[] ) 

    const toggleExpand = () => {
        setExpand( expand ? false : true );
    }

    return(
        <div className='bg-preto min-h-screen w-full'>

            {
                expand &&
                <CardDetailComponent toggleExpand={toggleExpand}
                expandCardID={expandCardID}></CardDetailComponent>

            }
            <main className='flex'>
                <div className='w-full min-h-80 flex items-center justify-center'>
                    
                    <div className='lg:w-3/4 sm:w-full min-h-screen flex flex-wrap justify-evenly'>
                        <h1 className='w-full text-2xl font-bold green-text text-center my-4'>Cards disponiveis</h1>
                        {
                        cards.map( (rel, key) => (
                            <CardSelectComponent key={key} rel={rel} toggleExpand={toggleExpand}
                            setExapandCardId={setExapandCardId}/>
                        ))
                    }
                    </div>
                </div>
            </main>
        </div>
    )
}
