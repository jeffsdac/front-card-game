import React, { useState } from 'react';
import ArtComponent from './ArtComponent';
import { useNavigate } from 'react-router-dom';


const ArtSelectionMenu = ({toggleActive}) => {
    const [imageData, setImageData] = useState([1,2,3,4,5]);
    const [selectedId, setSelectedId] = useState(5);

    const navigate = useNavigate();



    return (
        <div className='fixed inset-0 w-full h-full flex justify-center items-center z-10 bg-preto-transparente'
        onClick={toggleActive}>
            <div className='flex justify-center min-h-80 sticky items-center bg-zinc-950 flex-wrap shadow-sm p-6 rounded-md z=10'
            onClick={(e) => e.stopPropagation()}>
            {
                imageData.map( (content, key) => (
                    <ArtComponent  isSelected={content === selectedId} id={content} key={key} 
                    setSelectedId={setSelectedId}></ArtComponent>
                ))
            }
            <div className='h-50 bg-green-500 cursor-pointer hover:bg-slate-600 w-full p-2 txt-lg text-center font-bold shadow-sm' onClick={() => navigate("/deckdetail")}>Salvar arte</div>



            </div>
        </div>
    );
}

export default ArtSelectionMenu;
