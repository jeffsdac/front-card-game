import React, { useContext, useEffect, useState } from 'react';
import ArtComponent from './ArtComponent';
import DeckService from '../Services/DeckService.js'
import { AuthContext } from '../Context/AuthContext.jsx';
import PhotoService from '../Services/PhotoService.js';



const ArtSelectionMenu = ({toggleActive, setAttPage}) => {

    const {token, user } = useContext(AuthContext);

    const [imageData, setImageData] = useState([]);
    const [selectedId, setSelectedId] = useState(1);
    const [username, setUSername] = useState(user);
    const[deckName, setDeckName] = useState("");

    const handleDeckRegister = async () => {
        const resp = await DeckService.registerByUsername(username, deckName, selectedId);
        const body = await resp.json();

        setAttPage(true);
        toggleActive();
    }

    useEffect( () => {
        
        const getArts =  async () => {
            const resp = await PhotoService.getArtByType("BACKGROUNDDECK");
            const body = await resp.json();

            console.log("Printando resposta: " , resp.status);
            setImageData(body);
        }  

        getArts();

    },[] )



    return (
        <div className='fixed inset-0 w-full h-full flex justify-center 
        items-center z-10 bg-preto-transparente'
        onClick={toggleActive}>
            <div className='flex justify-center min-h-80 sticky items-center bg-zinc-950 flex-wrap shadow-sm p-6 rounded-md z=10'
            onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-wrap w-3/4 justify-center items-center py-8'>

                {
                    imageData.map( (imageBody, key) => (
                        <ArtComponent 
                        key={key}
                        imageBody={imageBody}
                        setSelectedId={setSelectedId}
                        selectedId={selectedId}/>
                    ) )
                } 
                
                    <label className='w-full p-2 text-2xl green-text' htmlFor='username'>Nome do seu Deck</label>
                    <input type='text' placeholder='Digite o seu username aqui' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600
                    text-white' 
                    id='username'
                    value={deckName}
                    onChange={ input => setDeckName(input.target.value) }></input>
                </div>  
            <div className='h-50 bg-green-500 cursor-pointer hover:bg-slate-600 w-full p-2 txt-lg text-center font-bold shadow-sm' 
            onClick={handleDeckRegister}>Salvar arte</div>



            </div>
        </div>
    );
}

export default ArtSelectionMenu;
