import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import ArtSelectionMenu from '../Components/ArtSelectionMenu';
import {AuthContext} from '../Context/AuthContext'
import AddCard from '../Components/AddCard';
import DeckService from '../Services/DeckService.js'
import EditDeck from '../Components/EditDeck.jsx';
import { useNavigate } from 'react-router-dom';

function MenuInicial() {

  const [isActive, setIsActive] = useState(false);
  const [attPage, setAttPage] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [decksData, setDecksData] = useState([]);
  const [selecionado, setSelecionado] = useState(-1);

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
    

    <div className=" bg-[url('./midias/bg_login.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
      {
        isActive &&
        <ArtSelectionMenu toggleActive={toggleActive} setAttPage={setAttPage}/>
      }
      {
        isEdit &&
        <EditDeck toggleEdit={toggleEdit} deck={ decksData.find( deck => deck.id == selecionado ) }
        setAttPage={setAttPage} setSelecionado={setSelecionado} setDecksData={setDecksData}/>
      }
        
        <div className='sm:w-full sm:mx-2 md:w-3/4 bg-preto min-h-screen p-4'>
          <h1 className='text-2xl font-bold text-center mb-4 green-text'>Seus Decks</h1>
          <p className='mb-4 text-xl font-semibold'>Aqui é onde você irá montar seus primeiros Decks, o passo a passo é bem simples: </p>
          <ul className='list-disc px-4 mb-8'>
            <li className='mb-1'>Clique no ícone de + ou no quadrado abaixo.</li>
            <li className='mb-1'>Selecione a arte e dê um nome para o seu Deck.</li>
            <li className='mb-1'>Após isso você será redirecionado ao menu de seleção de cartas, dentro desse menu basta você clicar na carta selecionada e ela irá aparecer no menu a direita.</li>
            <li className='mb-1'> <span className='text-red-600 font-bold'>IMPORTANTE:</span> não esqueça de salvar seu Deck após selecionar todas as cartas que deseja.</li>
          </ul>

          <div className='w-full p-3 hover:border cursor-pointer text-center bg-blue-600 my-3 font-bold'
          onClick={ () => navigate('/deckdetail') }>SEE CARDS</div>

          <div className='w-full p-3 hover:border cursor-pointer text-center bg-blue-600 my-3 font-bold'
          onClick={ () => navigate('/putcards') }>
            PUT YOUR CARDS
          </div>

          <div className='w-full flex justify-evenly flex-wrap'>
            
            {
              decksData.map ( (element, key) => (
                <Card element={element} key={key} selecionado={selecionado} 
                setSelecionado={setSelecionado} attPage={attPage}/>
              ))
            }
            <AddCard toggleActive={toggleActive}/>
          </div>
          <div className={selecionado == -1 ?  styleNotSelected : styleSelectedRemove}
          onClick={handleRemove}>REMOVE DECK</div>

          <div className={selecionado == -1 ?  styleNotSelected : styleSelectedEdit}
          onClick={toggleEdit}>EDIT DECK</div>
        </div>

    </div>
  )
}

export default MenuInicial