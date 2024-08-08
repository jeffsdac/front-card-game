import React, { useEffect, useState } from 'react'

function CardsAddToDeck({cardInfo, setCardData, setCardInDeckData, cardData, cardInDeckData, cardsAlreadyInDeck}) {

    const [imgUrl, setImgUrl] = useState('');
    const [show, setShow] = useState(true);

    const notInv = 'm-4 cursor-pointer hover:border';
    const inv = 'invisible'

    const handleSwitch = () => {
        const index = cardData.findIndex ( element => element.tittle === cardInfo.tittle );
        const cardObj = cardData[index]
        
        setCardData(cardData.filter( value => value.tittle != cardInfo.tittle ));
        setCardInDeckData([...cardInDeckData, cardObj])
    }

    useEffect( () => {
        console.log(cardInfo.idCard);
        const times = cardsAlreadyInDeck.filter((rel) => rel.idCard == cardInfo.idCard);
        console.log(times)
        // if (times == undefined || times == null){
        //     setShow(true);
        //     return;
        // }
        const tms = times[0].qtd;
        tms < 2 ? setShow(true) : setShow(false);
        setImgUrl(`data:image/png;base64,${cardInfo.art}`)
    }, [] )

    return (
        <div className={show ? notInv : inv} onClick={handleSwitch}>
            <img src={imgUrl} alt="" className='card'/>
            <div className='flex justify-center'>
                <span className=' w-1/2 font-bold text-white'>Attack: {cardInfo.attack}</span>
                <span className=' w-1/2 text-right font-bold text-red-600'>HP: {cardInfo.healthPoints}</span>
            </div>
        </div>
    )
}

export default CardsAddToDeck
