import React, { useEffect, useState } from 'react';

const Card = ({element, setSelecionado, selecionado, attPage}) => {

  const[strImg, setStrImg] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handlerSelcionado = () => {
    setSelecionado(element.id)
  }

  useEffect ( () => {
    const img = `data:image/${element.imgType};base64,${element.image64}`;
    setStrImg(img);
  }, [attPage] )

  useEffect ( () => {
    setIsSelected(selecionado == element.id)
  }, [selecionado] ) 

    return (
        <div className="hover:border cursor-pointer my-2 relative"
        onClick={handlerSelcionado}>
          <img src={strImg} alt="" className='card-menu'/>
          <p className='text-center text-xl font-bold bg-slate-600'>{element.name}</p>
          {
            isSelected && <div className='absolute w-8 h-8 -top-2 -right-2 rounded-full bg-green-600 flex items-center justify-center'>✓</div>
          }
        </div>
    );
}

export default Card;
