import React from 'react'
// props: deckItems, handlerCard
export default function CardMenu(props) {

  
  return (
    <div className='w-full min-h-96 flex flex-col items-center bg-marrom-escuro'>
      <div className='w-3/4 flex justify-center bg-marrom-claro'>
          <div className='bg-verde-claro pb-4'>
            <h1 className='text-2xl mt-4 font-bold w-fulltext-center marrom-escuro bg-verde-claro rounded-sm
            border-4 border-orange-900 p-2'>
              DeckName
            </h1>
        </div>
      </div>
      <div className='w-3/4 p-6 flex flex-wrap justify-between min-h-screen bg-marrom-claro shadow-md'>
            {
              props.deckItems.map( (content, index) => (
              <div className='card my-3 relative rounded-lg p-1'>
                <img src="https://previews.dropbox.com/p/thumb/ACUj0xx3xcjD5J8VxDRg9YRNcOROqKywC9OUU4aOcqEDAvrpY5yLGe49RYpLrlLG8kHTU_D2fIKpla_k5UcHuTZ53pB_ImS1rAworsyNuXYGgniO1ZTZo2VfckkWYdOUtBFzgmIRuWiGxWEBCMzcdjzCcqsWbyOupqABQhYpDWAQ6-qczB1FwNFR4HSNlQZ0vh09ffzSmLNB6JnrANYzIjxuJx3BWYkqIRWBrjm5wfd_UykojkhXWqjcqsp3STueDdeQJaWh4-Ae9nRF22efloCwkyvNWq7RZmWPAEmXcA3Ayf4TrhZddjjBsL4ZKekopLp2oLrTQwRI7SbvDqLZ5bLW/p.png" alt="card image" />
                <div className='w-8 h-8 rounded-full border text-center bg-red-600 absolute
                left-56 -top-3 flex justify-center items-center font-bold hover:bg-slate-800 cursor-pointer'
                onClick={() => props.handlerCard(content)}>X</div>
              </div>
              ))
            }
      </div>
    </div>
  )
}
