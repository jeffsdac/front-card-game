import React, { useEffect, useState } from 'react';

const ArtComponent = ({selectedId, setSelectedId, imageBody}) => {

  const isSelected = selectedId === imageBody.idArt;
  const [artUrl, setArtUrl] = useState('')
  


  useEffect ( () => {
      const url = `data:image/${imageBody.type};base64,${imageBody.data64}`
      setArtUrl(url);
    }, []
  )


    return (
        <div 
        className=" shadow-md card-menu border flex 
        items-center justify-center cursor-pointer m-2 green-border 
        hover:-translate-y-2 rounded-lg relative"
        onClick={ () => setSelectedId(imageBody.idArt) }
        >
          {
            isSelected &&
            <div className='absolute w-8 h-8 -top-2 -right-2 rounded-full bg-green-600 flex items-center justify-center'>✓</div>
          }

          <img src={artUrl} alt="esqueleto" className='img-menu'/>
          
        </div>
    );
}

export default ArtComponent;
