import React from 'react'
import Card from '../Components/Card'

function MenuInicial() {
  return (
    

    <div className=" bg-[url('./midias/bg_login.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
        
        <div className='sm:w-full sm:mx-2 md:w-3/4 bg-preto min-h-screen p-4'>
          <h1 className='text-2xl font-bold text-center mb-4 green-text'>Seus decks</h1>
          <p className='mb-4 text-xl font-semibold'>Aqui é onde você irá montar seus primeiros Decks, o passo a passo é bem simples: </p>
          <ul className='list-disc px-4 mb-8'>
            <li className='mb-1'>Clique no ícone de + ou no quadrado abaixo.</li>
            <li className='mb-1'>Selecione a arte e dê um nome para o seu Deck.</li>
            <li className='mb-1'>Após isso você será redirecionado ao menu de seleção de cartas, dentro desse menu basta você clicar na carta selecionada e ela irá aparecer no menu a direita.</li>
            <li className='mb-1'> <span className='text-red-600 font-bold'>IMPORTANTE:</span> não esqueça de salvar seu Deck após selecionar todas as cartas que deseja.</li>
          </ul>
          <div className='w-full flex justify-evenly flex-wrap'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>

    </div>
  )
}

export default MenuInicial