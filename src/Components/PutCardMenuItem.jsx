import React, { useEffect, useState } from 'react'
import CardService from '../Services/CardService'

function PutCardMenuItem({card}) {


    const [cardData, setCardData] = useState({});

    useEffect( () => {
        const getCardById = async () => {
            const resp = await CardService.getById(card.idCard);
            const body = await resp.json();

            setCardData(body);
        }

        getCardById();
    }, [] ) 

    return (
        <div className='bg-slate-300 text-black cursor-pointer hover:bg-slate-500 p-2 m-2 flex'>
            <div className='text-black w-3/4'>{cardData.tittle}</div>
            <div className='w-1/4 text-center text-green-800 font-bold'>x{card.qtd}</div>
        </div>
    )
}

export default PutCardMenuItem
