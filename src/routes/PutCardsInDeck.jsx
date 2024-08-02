import React, { useEffect, useState } from 'react'
import CardsAddToDeck from '../Components/CardsAddToDeck'
import ListCardInDecksComponent from '../Components/ListCardInDecksComponent';
import cardService from '../Services/CardService'

function PutCardsInDeck() {

    const[cardData, setCardData] = useState([])

    const [cardInDeckData, setCardInDeckData] = useState([])

    useEffect( () => {
        const getCards = async () => {
            const resp = await cardService.getAll();
            const body = await resp.json();

            setCardData(body);
        }

        getCards();
    }, []  )

    return (
            <div className="bg-slate-900 min-h-screen flex pb-4 overflow-auto relative">
                <div className='w-3/4 '>
                    <h1 className='text-center my-2 font-bold text-xl'>NOME DO DECK</h1>

                    <p className='text-center mt-2 mb-8'>Basta clicar na carta para que ela seja adicionada em seu deck</p>

                    <div className='w-full flex justify-center flex-wrap'>
                        {
                            cardData.map((cardInfo, key) => (
                                <CardsAddToDeck 
                                    key={key} 
                                    cardInfo={cardInfo}
                                    setCardData={setCardData} 
                                    setCardInDeckData={setCardInDeckData}
                                    cardData= {cardData}
                                    cardInDeckData = {cardInDeckData}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='w-1/4 h-full fixed right-4 overflow-y-scroll'>
                        {
                            cardInDeckData.map((card, key) => (
                                <ListCardInDecksComponent
                                    card={card}
                                    key={key}
                                    setCardData={setCardData} 
                                    setCardInDeckData={setCardInDeckData}
                                    cardData= {cardData}
                                    cardInDeckData = {cardInDeckData}
                                />
                            ))
                        }
                </div>

                <div className='fixed bottom-4 left-8 p-2 bg-green-900 font-bold border hover:bg-green-600 cursor-pointer'>
                    CONFIRMAR ALTERAÇÕES
                </div>

            </div>
    )
}

export default PutCardsInDeck
