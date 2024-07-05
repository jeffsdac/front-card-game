import React, { useState } from 'react'
import Card from '../Components/Card'
import OptionMenu from '../Components/OptionMenu'

    //<img src="https://mtgcardsmith.com/view/cards_ip/1720130355226517.png?t=536537" alt="" />
export default function DeckDetails() {
    const [dummydata, setDummydata] = useState({
        urls:["https://mtgcardsmith.com/view/cards_ip/1720130355226517.png?t=536537", "https://mtgcardsmith.com/view/cards_ip/1720130355226517.png?t=536537", "https://mtgcardsmith.com/view/cards_ip/1720130355226517.png?t=536537"],
        describe: ["url 1","url 2","url 3","url 4"]
    })




  return (
    <div className='w-full min-h-screen flex justify-center bg-slate-900'>
            <div className='w-3/4 border min-h-44 flex justify-center'>
                <div className='w-3/4 border p-6 flex flex-wrap justify-between items-center'>
                {
                    dummydata.urls.map( (url, index) => (
                        <Card url={url} index={index} dummydata={dummydata} setDummydata={setDummydata}></Card>
                    ))
                }
                </div>
            </div>

            <div className=' w-2/6 min-h-44 border px-4'>
                <ul>
                    {
                        dummydata.describe.map( (item, index) => (
                            <OptionMenu url={item} index={index}/ >
                        ))
                    }
                </ul>
            </div>
            
        </div>
  )
}
