import React, { useEffect, useState } from 'react'
import CardService from '../Services/CardService'

// rel.cardId
function CardSelectComponent({rel, toggleExpand, setExapandCardId}) {

    const [cardInfo, setCardInfo] = useState({});
    const [urlBase64, setUrlBase64] = useState("");

    useEffect ( () => {
        const findById = async () => {
            const resp = await CardService.getById(rel.idCard);
            const body = await resp.json();
            setUrlBase64(`data:image/png;base64,${body.art}`);
            setCardInfo(body);
        }

        findById();
    }, [] ) 

    const handleNewWindow = () => {
        setExapandCardId(rel.idCard);
        toggleExpand();
    }

    return (
        <div>
            <img src={urlBase64} alt="" className='card cursor-pointer hover:border'
            onClick={handleNewWindow}/>
            <div className='flex justify-center'>
                <span className=' w-1/2 font-bold text-white'>Attack: {cardInfo.attack}</span>
                <span className=' w-1/2 text-right font-bold text-red-600'>HP: {cardInfo.healthPoints}</span>
            </div>
        </div>
    )
}

export default CardSelectComponent
