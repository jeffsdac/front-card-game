import React, { useState } from 'react'
import photoService from '../Services/PhotoService'

function UploadPhoto() {

    const [img64, setImg64] = useState('');
    const [ext, setExtension] = useState('');
    const[resCode, setResCode] = useState(-1)

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
        setResCode(resp.status);
    }

    return (
        <div 
        className=' border bg-slate-900 w-full min-h-screen 
        flex items-center justify-center flex-wrap'>

            <h1 className='text-2xl font-bold w-full text-center'>
                Página feita para upar sua foto</h1>

            <form className='h-80 border'>

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
                    {resCode}
                </div>
            </form>
        </div>
    )
}

export default UploadPhoto