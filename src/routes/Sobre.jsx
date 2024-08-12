import React from 'react'
import Header from '../Components/Header'

function Sobre() {
    return (
        <div className='bg-gradient-to-br from-[#020419] via-[#000318] to-[#020419] min-h-screen flex justify-center items-center flex-wrap'>
            <Header></Header>
        <main className='w-3/4'>
            <h1 className='mt-20 w-full text-center text-4xl font-bold'>Sobre o projeto</h1>
            <p className='text-xl mt-2 text-justify'>O projeto DeckCards foi um projeto que nasceu com o intuíto de imitar uma tela de seleção de um deckgame de jogos como HearthStone ou até mesmo Magic.</p>
            <p className='text-xl mt-2 text-justify'>Nesse projeto foi utilizado <strong>React</strong> para o frontEnd, com <strong>Java e springBoot</strong> para o Backend e <strong>Postgresql</strong> para o banco de dados.</p>
            <h2 className='mt-4 text-2xl font-bold'>Arquitetura</h2>
            <div className='w-full h-64 border pt-20 mt-4'>IMAGEM ARQUITETURA</div>
            <p className='mt-2 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora delectus facere commodi veniam vitae, consequatur ratione corrupti perspiciatis nulla quo, totam voluptatum aliquam optio a fugit soluta magni consequuntur! Quidem.
            Incidunt mollitia eos perspiciatis inventore? Architecto, dolorem. Dicta, laborum. Harum, facere ratione doloribus accusamus ut quisquam quas repellendus magni vel aperiam tenetur fugiat unde, excepturi deleniti rerum rem dolore. Rem.</p>
            <h2 className='mt-4 text-2xl font-bold'>Por que esse projeto?</h2>
            <p className='text-xl text-justify mt-2'>Esse projeto apesar de não se assemelhar a um projeto mais "business" é um projeto onde eu consegui treinar e aprimorar muitas habilidades.<br/> Nesse projeto em especifico, todas as imagem vistas na tela não vem de nenhum site onde eu fiz o backUp das imagens, todas as imagens daqui são renderizadas do meu próprio banco de dados utilizando <strong>BASE64</strong>. <br/>
            Além disso também consegui treinar e aprimorar minhas habilidades em questão a JPA hibernate e também JUNIT. Mesmo com o projeto não se assemelhando muito a um projeto mais business é fácil imaginar onde isso seria aplicado em projetos mais palpáveis, por exemplo, veja os cards que estão salvo como o seu carrinho que é salvo em uma loja online, quando você seleciona um dos cards e depois o salva, seria semelhante a estar selecionando um produto e o colocando no carrinho. As abstrações que podemos fazer são muitas, some isso a eu gostar de jogos e TANDANN, nasce esse projeto!</p>
        </main>

        <aside className='w-3/4 mb-12'>
          <h2 className='text-2xl font-bold mt-4'>Sobre o DEV</h2>
          <p className='text-xl pt-2 text-justify'>Meu nome é Jefferson e eu tenho 25 anos, atualmente busco oportunidade no mercado como Desenvolvedor BackEnd JR. Apesar de ser BackEnd gosto de fazer os sites para tornar os backends que eu faço muito mais palpáveis e ter uma boa apresentação daquilo que é mais abstrato, para assim não só as pessoas técnicas possam conseguir ver os meus projetos.</p>
        </aside>
        </div>
    )
}

export default Sobre
