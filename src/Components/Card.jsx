import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Card = ({element, setSelecionado, selecionado, attPage,setNomeSelecionado}) => {

  const[strImg, setStrImg] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const {setDeckId } = useContext(AuthContext);


  const handlerSelcionado = () => {
    setSelecionado(element.id);
    setDeckId(element.id);
    setNomeSelecionado(element.name);
  }
  

  useEffect ( () => {
    const img = `data:image/${element.imgType};base64,${element.image64}`;
    setStrImg(img);
  }, [attPage] )

  useEffect ( () => {
    setIsSelected(selecionado == element.id)
  }, [selecionado] ) 

    return (
        <div className="cursor-pointer my-2 relative card-menu"
        onClick={handlerSelcionado}>
          {
            isSelected && 
            <div className='w-full h-full bg-black/[.81] absolute flex justify-center items-center flex-wrap'>
            </div>
          }
          <img src={strImg} alt="" className='w-full h-full object-cover'/>
        </div>
    );
}

export default Card;
