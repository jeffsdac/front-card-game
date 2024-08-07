import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import ArtSelectionMenu from '../Components/ArtSelectionMenu';
import {AuthContext} from '../Context/AuthContext'
import AddCard from '../Components/AddCard';
import DeckService from '../Services/DeckService.js'
import EditDeck from '../Components/EditDeck.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header.jsx';

function MenuInicial() {

  const [isActive, setIsActive] = useState(false);
  const [attPage, setAttPage] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [decksData, setDecksData] = useState([]);
  const [selecionado, setSelecionado] = useState(-1);
  const [nomeSelecionado, setNomeSelecionado] = useState('Selecione um deck');

  const styleSelectedRemove = 'w-full bg-red-600 my-2 text-2xl text-center font-bold cursor-pointer hover:bg-red-900';
  const styleSelectedEdit = 'w-full bg-green-600 my-2 text-2xl text-center font-bold cursor-pointer hover:bg-green-900';
  const styleNotSelected =  'w-full bg-gray-600 my-2 text-2xl text-center font-bold';

  const navigate = useNavigate();
  const {token, setToken, user, setUser } = useContext(AuthContext);

  useEffect( () => {
    console.log("get decks com user: " + user)
    const getByUsername = async () => {
      const resp = await fetch (`http://localhost:8080/api/deck/user/${user}`);
      const body = await resp.json();
      setDecksData(body);
    }

    getByUsername();
    setAttPage(false);
  }, [attPage] ) 

  const toggleActive = () =>{
    setIsActive( isActive ? false : true);
  };
  const toggleEdit = () => {
    setIsEdit ( isEdit ? false : true );
  };

  const handleRemove = async () => {
    const resp = await DeckService.removeById(selecionado);
    setAttPage(true)
    console.log(resp.status);
  };

  
  return (
    

    <div className="bg-gradient-to-br from-[#020419] via-[#000318] to-[#020419] min-h-screen flex justify-center items-center flex-wrap bg-black relative">
      <Header></Header>
      <div className='w-full banner bg-slate-900 border-b border-slate-700 flex justify-center items-center bg-[url("./midias/bg-banner-4.png")] bg-cover bg-top bg-no-repeat mt-6'>
      </div>
      
      {
        isActive &&
        <ArtSelectionMenu toggleActive={toggleActive} setAttPage={setAttPage}/>
      }
      {
        isEdit &&
        <EditDeck toggleEdit={toggleEdit} deck={ decksData.find( deck => deck.id == selecionado ) }
        setAttPage={setAttPage} setSelecionado={setSelecionado} setDecksData={setDecksData}/>
      }
        <div className='w-4/5 my-12 pb-12 flex border-b'>
          <div className='w-full flex justify-center items-center flex-wrap'>
            <div className='w-3/4 flex'>
              <div className='w-1/2 rounded mx-2 p-4 text-center bg-button font-bold cursor-pointer hover:bg-slate-400'
              onClick={toggleEdit}>
                Editar nome e arte
              </div>

              <div className='w-1/2  mx-2 p-4 text-center bg-button font-bold cursor-pointer hover:bg-slate-400'
              onClick={handleRemove}>
                Remover
              </div>

              <div className='w-1/2  mx-2 p-4 text-center bg-button font-bold cursor-pointer hover:bg-slate-400'
              onClick={ () => navigate('/deckdetail')}>
                Ver detalhes
              </div>

              <div className='w-1/2  mx-2 p-4 text-center bg-button font-bold cursor-pointer hover:bg-slate-400'
              onClick={ () => navigate('/putcards') }>Colocar cards</div>
            </div>
          </div>
        </div>
        
        <div className='w-3/4 flex justify-evenly flex-wrap mt-2'>
          <p className='w-full text-center font-bold text-xl mb-10'>{nomeSelecionado}</p>
          {
              decksData.map ( (element, key) => (
                <Card element={element} key={key} selecionado={selecionado} 
                setSelecionado={setSelecionado} attPage={attPage} setNomeSelecionado={setNomeSelecionado}/>
              ))
            }
            <AddCard toggleActive={toggleActive}/>
          
        </div>

        <article className='w-3/4 my-10'>
          <h2 className='text-4xl text-center font-bold mt-4'>Sobre mim</h2>
          <p className='text-xl pt-2 text-justify'>Olá! Eu me chamo Jefferson e esse site é um projeto pessoal meu, a ideia desse site era criar algo parecido com uma tela de seleção de decks as quais eu via em Hearthstone ou em outros Cardgames, toda imagem nesse site foi rederizada através do meu sistema! e tudo que está rodando aqui está no meu banco de dados, a ideia era criar um site para mostrar um backend que eu já pensava faz tempo e agora você está nele!</p>
          <p className='text-xl pt-2 text-justify'>Sou um desenvolvedor backend que faz as telas para que as pessoas tenham algo palpável para ver durante o projeto! caso tenha alguma proposta para enviar para mim, é só enviar um email para: contato.jeffsdac@gmail.com ou me chamar lá no LinkedIn.</p>
          <p className='text-xl pt-2 text-justify'>Sei que o projeto parece um tanto antiquado para o mercado de trabalho, mas pense nos decks como sendo compras em um carrinho de compras, ou também pense nos registros os quais você faz pare colocar um novo Deck, como sendo um registro de um novo produto, as ideias criadas aqui podem ser abstraídas e principalmente, podem ser replicadas de diversas formas em muitos outros projetos, basta usar um pouco de criatividade.</p>
          <p className='text-xl pt-2'>Espero que você goste do site!</p>
        </article>
    </div>
  )
}

export default MenuInicial