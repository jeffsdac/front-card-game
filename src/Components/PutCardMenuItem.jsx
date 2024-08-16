import React, { useEffect, useState } from 'react'
import CardService from '../Services/CardService'
import RelDeckCardService from '../Services/RelDeckCardService';

function PutCardMenuItem({card, cardsAlreadyInDeck, setUpdateScreen}) {


    const [cardData, setCardData] = useState({});
    const [quantidade, setQuantidade] = useState(card.qtd);
    const [alreadyClicked, setAlreadyClicked] = useState(false);
    const invisible = "invisible w-0 h-0"
    const visible = "bg-slate-300 text-black cursor-pointer hover:bg-slate-500 p-2 m-2 flex"

    useEffect( () => {
        const getCardById = async () => {
            const resp = await CardService.getById(card.idCard);
            const body = await resp.json();

            setCardData(body);
        }

        getCardById();
    }, [] ) 

    const removeQtd = () => {
        setAlreadyClicked(true);
        setQuantidade(quantidade - 1);
    }

    useEffect( () => {
        card.qtd = quantidade;
        
        const getMinus = async () => {
            const resp = await RelDeckCardService.minusOneQtd(card.idRel);
            console.log(resp.status);
        }
        if(alreadyClicked){
            getMinus(); 
        }
            
        setUpdateScreen(true);
    },[quantidade])

    return (
        <div className={quantidade <= 0 ? invisible : visible}
        onClick={removeQtd}>
            <div className='text-black w-3/4'>{cardData.tittle}</div>
            <div className='w-1/4 text-center text-green-800 font-bold'
            >x{quantidade}</div>
        </div>
    )
}

export default PutCardMenuItem
