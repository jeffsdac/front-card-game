import React, { useEffect, useState } from 'react'

function CardsAddToDeck({cardInfo, setCardData, cardData,cardsAlreadyInDeck, setMenuSession, 
    menuSession, updateMenu, setUpdateMenu}) {

    const [imgUrl, setImgUrl] = useState('');
    const [show, setShow] = useState(true);

    const notInv = 'm-4 cursor-pointer hover:border';
    const inv = 'invisible w-0 h-0'
    const [cardMenuSession, setcardMenuSession] = useState({idCard:cardInfo.idCard,
        screen:0,
        menu:0,
        tittle: cardInfo.tittle});

    const handleSwitch = async () => {
        removeOneScreen();
    }

    useEffect( () => {
        const info = menuSession.find ( c => c.idCard === cardInfo.idCard );
        if (info === undefined){
            return;
        } 
        //console.log("O info screen é: " + info.screen);
        if (info.screen >= 1){
            //console.log(`Exibindo card: ${info.tittle} screen: ${info.screen}`)
            cardMenuSession.screen = info.screen;
            cardMenuSession.menu = info.menu;
            setShow(true);
        }

        setUpdateMenu(false);
    }, [updateMenu] ) 

    useEffect ( () => {
        console.log("O valor de .menu é: " + cardMenuSession.menu);
        if (cardMenuSession.menu == 1){
            addToSessionList();
        }
        if (cardMenuSession.menu == 2){
            //console.log("é pra atualizar")
            setMenuSession( menuSession => menuSession.map((card) => 
            card.idCard == cardMenuSession.idCard ?{...card, menu: 2, screen: 0} : card));
        }
        if (cardMenuSession.screen <= 0){
            //console.log("É PRA SAIR");
            setShow(false);
        }
    },[cardMenuSession] )

    useEffect( () => {
        //console.log(cardInfo.idCard);
        const times = cardsAlreadyInDeck.filter((rel) => rel.idCard == cardInfo.idCard);
        //console.log(times)
        if (times == undefined || times == null || times.length == 0){
            setShow(true);
            setImgUrl(`data:image/png;base64,${cardInfo.art}`)
            defineScreen(0);
            return;
        }
        const tms = times[0].qtd;
        defineScreen(2 - tms);
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
        const screenValue = cardMenuSession.screen - 1;
        console.log("O screenValue salvo é: " + screenValue)
        const menuValue= cardMenuSession.menu;
        setcardMenuSession({
            ...cardMenuSession,
            screen: screenValue,
            menu: menuValue + 1
        })
    }

    const addToSessionList =  async () => {
        const objFinder = menuSession.find ( (c) => c.idCard === cardInfo.idCard );
        if (objFinder === undefined){
            setMenuSession(menuSession => [cardMenuSession , ...menuSession]);
        }
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
