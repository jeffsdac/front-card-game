import React, { useEffect, useState } from 'react';

const Card = ({toggleActive, specs}) => {

    const [image, setImage] = useState('');
    
    
    useEffect(() => {
      fetch(`http://localhost:8080/api/arts/${specs.idImage}`)
        .then(response => response.blob())
        .then(imageBlob => {
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImage(imageObjectURL);
        })
        .catch(error => console.error('Erro ao buscar a imagem:', error));
    }, []);

    return (
        <div className=" shadow-md card-menu border flex items-center justify-center hover:bg-slate-500 cursor-pointer m-2 green-border p-2"
        onClick={toggleActive}>
          {
            image ? <img src={image} alt="" className='w-full h-full'/> : <p>Carregando...</p>
          }

          <img src={specs.image64} alt="" />
        </div>
    );
}

export default Card;
