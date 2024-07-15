import React from 'react';

const CardInDecks = ({content, setCards, setSelectedCards, cards, selectedCards}) => {

    const handlerCard = () => {
        setCards(cards.filter(card => card !== content));
        setSelectedCards([...selectedCards, content]);
    };

    return (
        <div className=" shadow-md card-menu border flex items-center justify-center hover:bg-slate-500 cursor-pointer m-2 green-border" onClick={handlerCard}>
            <span className='text-4xl font-bold text-white green-text'>
                {content}
            </span>
        </div>
    );
}

export default CardInDecks;
