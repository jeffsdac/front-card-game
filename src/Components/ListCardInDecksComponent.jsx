import React from 'react'

function ListCardInDecksComponent({card,setCardData, setCardInDeckData, cardData, cardInDeckData}) {

    const handleSwitch = () => {
        const index = cardInDeckData.findIndex( element => element.tittle === card.tittle);
        const element = cardInDeckData[index];
        console.log(element)
        setCardInDeckData(cardInDeckData.filter( value => card.tittle != value.tittle ))
        setCardData([...cardData, element])

    };



    return (
        <div className='border cursor-pointer hover:bg-slate-500 p-2 m-2' onClick={handleSwitch}>
            {card.tittle}
        </div>
    )
}

export default ListCardInDecksComponent
