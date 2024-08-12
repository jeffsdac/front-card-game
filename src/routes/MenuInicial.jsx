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

  const navigate = useNavigate();
  const {token, setToken, user, setUser } = useContext(AuthContext);

  useEffect( () => {
    const getByUsername = async () => {
      let localUser = user;
      if (user === ""){
        localUser = localStorage.getItem('username');
      }
      const resp = await fetch (`http://localhost:8080/api/deck/user/${localUser}`);
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
        
        <div className='w-3/4 flex justify-evenly flex-wrap mt-2 mb-12'>
          <p className='w-full text-center font-bold text-xl mb-10'>{nomeSelecionado}</p>
          {
              decksData.map ( (element, key) => (
                <Card element={element} key={key} selecionado={selecionado} 
                setSelecionado={setSelecionado} attPage={attPage} setNomeSelecionado={setNomeSelecionado}/>
              ))
            }
            <AddCard toggleActive={toggleActive}/>
          
        </div>
    </div>
  )
}

export default MenuInicial