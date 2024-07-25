import React, { useState } from 'react'
import photoService from '../Services/PhotoService'

function UploadPhoto() {

    const [img64, setImg64] = useState('');
    const [ext, setExtension] = useState('');

    const [stringSource, setStringSource] = useState('');
    const [idImg, setIdImg] = useState(0);

    const handleFileChange = (event) =>{
        const file = event.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            const splits = reader.result.split(',')
            const base64 = splits[1]
            const type = splits[0].split('/')[1].split(';')[0]
            setExtension(type)
            setImg64(base64)
        }

        if (file){
            reader.readAsDataURL(file);
        }
    }

    const handleUpload = async () =>{
        const resp = await photoService.uploadArt(img64,ext);
    }

    const handleGetImg = async () => {
        const resp = await  photoService.getArtById(idImg);
        const body = await resp.json();
        console.log(`get img res: ${resp.status}`)
        //console.log(body)
        const imgUrl = `data:image/${body.type};base64,${body.data64}`;
        console.log(imgUrl);
        setStringSource(imgUrl);
    }

    return (
        <div 
        className=' bg-slate-900 w-full min-h-screen 
        flex items-center justify-center flex-wrap'>

            <h1 className='text-2xl font-bold w-full text-center'>
                Página feita para upar sua foto</h1>

            <form className='min-h-80 '>

                <div className='w-full flex flex-wrap justify-center items-center'>

                    <label htmlFor="image" className='w-full text-xl text-center'>
                        Sua imagem</label>

                    <input type="file" name="image" id="image" onChange={handleFileChange}/>

                    <div className='w-full flex justify-center'>

                        <div className='w-80 bg-slate-600 my-8 p-2 hover:bg-slate-700
                        cursor-pointer' onClick={handleUpload}>UPLOAD</div>

                    </div>

                </div>
                
                <div>
                </div>

                <div className='flex w-full flex-wrap justify-center items-center'>

                    <div className='w-80 p-3 text-center border cursor-pointer hover:bg-slate-600
                     w-full'
                     onClick={handleGetImg}>GET IMAGE</div>

                     <label htmlFor="" className='mx-2 text-xl'>IMG ID</label>
                     <input type="number"  value={idImg} className='text-black'
                        onChange={ (input) => (
                        setIdImg(input.target.value)
                     )}/>

                    <div className='w-full flex justify-center'>
                        {stringSource != '' && <img src={stringSource}></img>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UploadPhoto