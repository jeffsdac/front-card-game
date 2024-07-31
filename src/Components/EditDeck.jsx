import React, { useContext, useEffect, useState } from 'react'
import ArtComponent from './ArtComponent';
import DeckService from '../Services/DeckService';
import { AuthContext } from '../Context/AuthContext';


function EditDeck({toggleEdit, deck, setAttPage, setDecksData}) {

    const {user} = useContext(AuthContext);
    const [imageData, setImageData] = useState([1,2,4]);
    const [selectedId, setSelectedId] = useState(-1);
    const[deckName, setDeckName] = useState(deck.name);
    const [isLoading, setIsLoading] = useState(false);

    const [criacao, setCriacao] = useState('');

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
      
        return ` ${day}/${month}/${year} às ${hours}h${minutes}`;
      }

    useEffect(() => {
        const isoDateString = deck.createIn;
        const date = new Date(isoDateString);
        const formatted = formatDate(date);
        setCriacao(formatted);
      }, []);

      const getByUsername = async () => {
        const resp = await fetch (`http://localhost:8080/api/deck/user/${user}`);
        const body = await resp.json();
        setDecksData(body);
      }

      const handleUpdate = async () => {
        const resp = await DeckService.updateById(deck.id, selectedId, deckName);
        if (resp.status === 200){
            setIsLoading(true);
            await getByUsername();
            setAttPage(true);
            setIsLoading(false);
        }
      }

    return (
        <div className='fixed inset-0 w-full h-full flex justify-center 
        items-center z-10 bg-preto-transparente'
        onClick={toggleEdit}>
            <div className='w-full bg-slate-800 flex justify-center items-center flex-wrap'
            onClick={(e) => e.stopPropagation()}>
                <h2 className='text-center text-2xl font-bold py-2 w-full'>EDITANDO SEU DECK</h2>
                <p className='text-center text-xl w-full py-2'>Você está editando o deck: 
                    <span className='font-bold text-green-600'> {deck.name} </span></p>
                <p className='w-full text-center text-sm'> Deck criado em:  
                     { criacao }</p>
                <p className='w-full text-center text-xl my-6'>Por favor selecione a arte que deseja</p>
                {
                    imageData.map( (id, key) => (
                        <ArtComponent  isSelected={id === selectedId} id={id} key={key} 
                        setSelectedId={setSelectedId}></ArtComponent>
                    ))
                }       
                
                <div className='w-full flex justify-center pt-2 pb-8'>
                    <input type="text" name="Nome do card" id="Nome do card" value={deckName}
                    onChange={ e => setDeckName(e.target.value) }
                    className='text-black w-1/4 p-1'/>
                </div>
                {
                isLoading &&
                <div className='w-full flex justify-center py-4'>
                    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-slate-100"></div>
                </div>
                }
                <div className='border p-2 hover:bg-slate-600 cursor-pointer mb-9'
                onClick={handleUpdate}>Confirmar alteração</div>
            </div>
        </div>
    )
}

export default EditDeck
