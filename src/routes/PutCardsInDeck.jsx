import React, { useContext, useEffect, useState } from 'react'
import CardsAddToDeck from '../Components/CardsAddToDeck'
import ListCardInDecksComponent from '../Components/ListCardInDecksComponent';
import cardService from '../Services/CardService'
import { AuthContext } from '../Context/AuthContext';
import RelDeckCardService from '../Services/RelDeckCardService';
import { toast } from 'react-toastify';
import PutCardMenuItem from '../Components/PutCardMenuItem';


function PutCardsInDeck() {

    const {deckId} = useContext(AuthContext);

    const[cardData, setCardData] = useState([]);

    const [cardsAlreadyInDeck, setCardsAlreadyInDeck] = useState([]);
    const [cardInDeckData, setCardInDeckData] = useState([]);
    const [cardType, setCardType] = useState("NECRO");
    const [isLoading, setIsLoading] = useState();
    const [pageUpdate, setPageUpdate] = useState(false);
    const [menuSession, setMenuSession] = useState([]);
    const [updateMenu, setUpdateMenu] = useState(false);




    useEffect( () => {
        const getCards = async () => {
            setIsLoading(true);
            const resp = await cardService.getByType(cardType);
            const body = await resp.json();

            setCardData(body);
            setIsLoading(false);
        }

        getCards();
    }, [pageUpdate]  )

    useEffect( () => {
        const getCardsInDeck = async () => {
            let idDeck = deckId;
            if (idDeck === -1 ){
                idDeck = Number(localStorage.getItem('idDeck'));
            }
            const resp = await RelDeckCardService.getCardsByDeckId(idDeck);
            const body = await resp.json();
            console.log("A resposta para pegar os decks do card foi: " + resp.status);
            console.log(body)
            setCardsAlreadyInDeck(body);
            setPageUpdate(false);
        }

        getCardsInDeck();
    }, [pageUpdate] )

    const handleSaveCardsOnDeck = async () => {
        cardInDeckData
        .map( async (card) => {
            setIsLoading(true);
            const resp = await RelDeckCardService.saveRelCardDeck(card.idCard, deckId);
            console.log("Salvando card resposta: " + resp.status);
            setIsLoading(false);
            setPageUpdate(true);
            setCardInDeckData([]);
            toast("Seus cards novos foram salvos.");
        })
    }

    return (
            <div className="bg-gradient-to-br from-[#020419] via-[#000318] to-[#020419] min-h-screen flex pb-4 overflow-auto relative">
                <div className='w-3/4 '>

                {isLoading &&
                <div className='absolute h-screen w-full flex items-center justify-center bg-slate-900/[0.5] z-10'>
                    <svg className="animate-spin rounded-full h-12 w-12 border-t-4 "></svg>
                </div>
                }
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
                                    cardsAlreadyInDeck={cardsAlreadyInDeck}
                                    menuSession={menuSession}
                                    setMenuSession={setMenuSession}
                                    updateMenu={updateMenu}
                                    setUpdateMenu={setUpdateMenu}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='w-1/4 h-full fixed right-4 overflow-y-scroll z-0'>
                <h2 className='pt-3 font-bold text-xl text-center'>Already in deck</h2>

                        {   
                            cardsAlreadyInDeck.map( (card, key) => (
                                <PutCardMenuItem 
                                key={key} 
                                card={card}
                                />
                            ))
                        }
                        <h2 className='border-t pt-3 font-bold text-xl text-center'>Cards to save</h2>
                        {
                            menuSession.map((card, key) => (
                                <ListCardInDecksComponent
                                key={key}
                                card={card}
                                menuSession={menuSession}
                                setMenuSession={setMenuSession}
                                setUpdateMenu={setUpdateMenu}
                                />
                            ))
                        }
                        
                </div>

                <div 
                className='fixed bottom-4 left-8 p-2 bg-green-900 font-bold hover:bg-green-600 cursor-pointer'
                onClick={handleSaveCardsOnDeck}>
                    CONFIRMAR ALTERAÇÕES
                </div>

            </div>
    )
}

export default PutCardsInDeck
