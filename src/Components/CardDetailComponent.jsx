import React, { useEffect, useState } from 'react'
import CardService from '../Services/CardService'

function CardDetailComponent({toggleExpand, expandCardID}) {

  const [cardInfo, setCardInfo] = useState({});
  const [urlBase64, setUrlBase64] = useState("");

  useEffect ( () => {
    const findById = async () => {
        const resp = await CardService.getById(expandCardID);
        const body = await resp.json();
        setUrlBase64(`data:image/png;base64,${body.art}`);
        setCardInfo(body);
    }

    findById();
}, [] ) 


    return (
        <div className='w-screen h-screen flex items-center justify-center z-10 absolute bg-preto-transparente'>
          
          <div className='flex justify-center items-center bg-zinc-950 flex-wrap shadow-sm p-6 rounded-md w-3/4 flex flex-wrap'>
            <div className='w-full flex justify-end'>
              <span className='cursor-pointer text-red-600 hover:text-white text-2xl font-bold'
              onClick={toggleExpand}>X</span>
            </div>
            <h2 className='font-bold text-green-600 text-2xl w-full text-center'>{cardInfo.tittle}</h2>
            <img src={urlBase64} alt="" className='card my-4'/>
            <p className='p-2 text-justify w-full'>{cardInfo.lore}</p>
          </div>
        </div>
    )
}

export default CardDetailComponent
