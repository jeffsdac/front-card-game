import React, { useEffect, useState } from 'react';
import esqueleto from '../midias/esqueleto_card.jpeg'
import PhotoService from '../Services/PhotoService.js'

const ArtComponent = ({isSelected, id, setSelectedId}) => {

  useEffect ( () => {
    const pegarImg = async () => {
      const resp = await PhotoService.getArtById(id);
      const body = await resp.json();

      const url = `data:image/${body.type};base64,${body.data64}`
      setArtUrl(url);
    }

    pegarImg()
  } , [])

  const [artUrl, setArtUrl] = useState('')

    return (
        <div 
        className=" shadow-md card-menu border flex 
        items-center justify-center cursor-pointer m-2 green-border 
        hover:-translate-y-2 rounded-lg relative"
        onClick={ () => setSelectedId(id) }>
          {
            isSelected &&
            <div className='absolute w-8 h-8 -top-2 -right-2 rounded-full bg-green-600 flex items-center justify-center'>✓</div>
          }
          <img src={artUrl} alt="esqueleto" className='img-menu'/>
          
        </div>
    );
}

export default ArtComponent;
