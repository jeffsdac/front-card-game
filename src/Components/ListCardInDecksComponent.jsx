import React, { useEffect, useState } from 'react'

function ListCardInDecksComponent({card, menuSession}) {

    const [reps, setReps] = useState(card.menu);

    useEffect( () => {
        setReps(card.menu);
    },[menuSession] )

    return (
        <div className='border cursor-pointer hover:bg-slate-500 p-2 m-2 flex'>
            <div className='w-3/4'>{card.tittle}</div>
            <div className='text-right mr-8 w-1/4'>{reps}</div>
        </div>
    )
}

export default ListCardInDecksComponent
