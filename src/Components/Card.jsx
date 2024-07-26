import React, { useEffect, useState } from 'react';

const Card = ({element}) => {

  const[strImg, setStrImg] = useState('');

  useEffect ( () => {
    const img = `data:image/${element.imgType};base64,${element.image64}`;
    setStrImg(img);
  }, [] )

    return (
        <div className="hover:border cursor-pointer ">
          <img src={strImg} alt="" className='w-48 h-80'/>
          <p className='text-center text-xl font-bold bg-slate-600'>{element.name}</p>
        </div>
    );
}

export default Card;
