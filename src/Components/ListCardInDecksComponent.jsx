import React, { useEffect, useState } from 'react'

function ListCardInDecksComponent({card, menuSession, change, setMenuSession, setUpdateMenu}) {
    
    const inv = "invisible w-0 h-0";
    const vis = "border cursor-pointer hover:bg-slate-500 p-2 m-2 flex"
    const [times, setTimes] = useState(card.menu);
    const id = card.idCard;
    
    useEffect( () => {
        setTimes(card.menu);
    },[menuSession] )


    const handleRemove = () => {
        countRemove();
    };
    
    const countRemove =  () => {
        setTimes(times -1);

        const menuTimes = times - 1;
        const screen = card.screen + 1;

        setMenuSession(menuSession =>
            menuSession.map(objCard =>
                objCard.idCard === id
                    ? { ...objCard, menu: menuTimes, screen: screen }
                    : objCard
            )
        );
        if (menuTimes <= 1){
            setUpdateMenu(true);
        }
    };

    return (
        <div className={times <= 0 ? inv : vis}
        onClick={handleRemove}>
            <div className='w-3/4'>{card.tittle}</div>
            <div className='text-right mr-8 w-1/4'>{times}</div>
            <div></div>
            {/* <div>screen: {card.screen}</div> */}
        </div>
    )
}

export default ListCardInDecksComponent
