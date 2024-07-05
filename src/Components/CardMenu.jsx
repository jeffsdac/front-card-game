import React from 'react'
// props: deckItems, handlerCard
export default function CardMenu(props) {

  
  return (
    <div className='w-3/4 border p-6 flex flex-wrap justify-between items-center'>
          {
            props.deckItems.map( (content, index) => (
            <div className='border card my-3 bg-slate-600 relative rounded-lg p-1'>
              <p key={index}>{content}</p>
              <div className='w-8 h-8 rounded-full border text-center bg-red-600 absolute
              left-56 -top-3 flex justify-center items-center font-bold hover:bg-slate-800 cursor-pointer'
              onClick={() => props.handlerCard(content)}>X</div>
            </div>
            ))
          }
    </div>
  )
}
