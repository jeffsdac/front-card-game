import React, { useState } from 'react';

const Card = ({toggleActive}) => {

    return (
        <div className=" shadow-md card-menu border flex items-center justify-center hover:bg-slate-500 cursor-pointer m-2 green-border"
        onClick={toggleActive}>
          <span className='text-4xl font-bold text-white green-text'>+</span>
        </div>
    );
}

export default Card;
