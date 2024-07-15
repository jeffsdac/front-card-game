import React from 'react';
import esqueleto from '../midias/esqueleto_card.jpeg'

const ArtComponent = ({isSelected, id, setSelectedId}) => {


    return (
        <div className=" shadow-md card-menu border flex items-center justify-center cursor-pointer m-2 green-border hover:-translate-y-2 rounded-lg relative"
        onClick={ () => setSelectedId(id) }>
          {
            isSelected &&
            <div className='absolute w-8 h-8 -top-2 -right-2 rounded-full bg-green-600 flex items-center justify-center'>✓</div>
          }
          <img src={esqueleto} alt="esqueleto" className='img-menu'/>
          
        </div>
    );
}

export default ArtComponent;
