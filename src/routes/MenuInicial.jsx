import React from 'react'

function MenuInicial() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-marrom-escuro'>
      <main className='container flex justify-center'>
        
        <div className='w-96 h-96 rounded-full border flex items-center justify-center'>
          <ul className='w-80 h-80 rounded-full border flex items-center justify-center flex-wrap bg-marrom-claro'>
            <div className='h-36 w-3/4 flex flex-wrap justify-center items-center'>
              <li 
                className='w-3/4 smt-8 h-8 text-center text-xl font-bold px-2 formato bg-marrom-escuro
                cursor-pointer hover:bg-white'>
              Jogar</li>
              <li 
                className='w-full mt-8 h-8 text-center text-xl font-bold px-2 formato bg-marrom-escuro
                cursor-pointer hover:bg-white'>
              Jogar</li>
              <li 
                className='w-3/4 mt-8 h-8 text-center text-xl font-bold px-2 formato bg-marrom-escuro cursor-pointer hover:bg-white'>
              Jogar</li>

            </div>
          </ul>
        </div>
         

      </main>
    </div>
  )
}

export default MenuInicial