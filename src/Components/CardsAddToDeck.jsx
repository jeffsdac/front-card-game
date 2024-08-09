import React, { useEffect, useState } from 'react'

function CardsAddToDeck({cardInfo, setCardData, cardData,cardsAlreadyInDeck, setMenuSession, 
    menuSession}) {

    const [imgUrl, setImgUrl] = useState('');
    const [show, setShow] = useState(true);

    const notInv = 'm-4 cursor-pointer hover:border';
    const inv = 'invisible'
    const [cardMenuSession, setcardMenuSession] = useState({idCard:cardInfo.idCard,
        screen:0,
        menu:0,
        tittle: cardInfo.tittle});

    const handleSwitch = async () => {
        const index = cardData.findIndex ( element => element.tittle === cardInfo.tittle );
        //const cardObj = cardData[index]
        removeOneScreen();
    }

    useEffect ( () => {
        console.log(cardMenuSession.menu);
        if (cardMenuSession.menu == 1){
            addToSessionList();
        }
        if (cardMenuSession.menu == 2){
            console.log("é pra atualizar")
            setMenuSession( menuSession => menuSession.map((card) => 
            card.idCard == cardMenuSession.idCard ?{...card, menu: 2} : card));
        }
    },[cardMenuSession] )

    useEffect( () => {
        console.log(cardInfo.idCard);
        const times = cardsAlreadyInDeck.filter((rel) => rel.idCard == cardInfo.idCard);
        console.log(times)
        if (times == undefined || times == null || times.length == 0){
            setShow(true);
            setImgUrl(`data:image/png;base64,${cardInfo.art}`)
            defineScreen(0);
            return;
        }
        const tms = times[0].qtd;
        defineScreen(tms);
        tms < 2 ? setShow(true) : setShow(false);
        setImgUrl(`data:image/png;base64,${cardInfo.art}`)
    }, [] )

    const defineScreen = (value) =>{
        setcardMenuSession({
            ...cardMenuSession,
            screen: 2 - value
        })
    }

    const addOneScreen = () => {
        const screenValue = cardMenuSession.screen;
        setcardMenuSession({
            ...cardMenuSession,
            screen: screenValue + 1
        })
    }

    const removeOneScreen = async () =>{
        if (cardMenuSession.menu > 2){
            cardMenuSession.menu = 0;
        }
        const screenValue = cardMenuSession.screen;
        const menuValue= cardMenuSession.menu;
        setcardMenuSession({
            ...cardMenuSession,
            screen: screenValue - 1,
            menu: menuValue + 1
        })
    }

    const addToSessionList =  async () => {
        setMenuSession(menuSession => [...menuSession, cardMenuSession]);
    }

    return (
        <div className={show ? notInv : inv} onClick={handleSwitch}>
            <img src={imgUrl} alt="" className='card'/>
            <div className='flex justify-center'>
                <span className=' w-1/2 font-bold text-white'>Attack: {cardInfo.attack}</span>
                <span className=' w-1/2 text-right font-bold text-red-600'>HP: {cardInfo.healthPoints}</span>
            </div>
            <div>click: {cardMenuSession.screen}</div>
        </div>
    )
}

export default CardsAddToDeck
