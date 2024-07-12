import React, { useState } from 'react';
import userService from '../Services/UserService'

const RegistrarUsuario = () => {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const[id, setId] = useState(-1);

    const formHandler = () => {
        console.log("Entrou no form Handler")
        userService.registerUser(email, password, fullName, nickname)
        .then( obj => {
            setId(obj.id)
        });
    }

    return (
        <div className="bg-[url('./midias/bg_login.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
            <form action="post" className='tamanho-form shadow-md min-h-80 bg-preto px-8'>
                <h1 className='text-2xl font-bold w-full text-center pt-2 pb-6 text-white'>Fazer o seu cadastro</h1>

                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className='w-full p-2 text-2xl green-text' htmlFor='fullname'>Nome completo</label>
                    <input type='text' placeholder='Digite o seu nome completo' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white' 
                    id='fullname'
                    value={fullName}
                    onChange={ input => setFullName(input.target.value) }></input>
                </div>

                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className='w-full p-2 text-2xl green-text' htmlFor='email'>Email</label>
                    <input type='email' placeholder='Digite o seu email' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white' 
                    id='email'
                    value={email}
                    onChange={ input => setEmail(input.target.value) }></input>
                </div>

                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className='w-full p-2 text-2xl green-text' htmlFor='password'>Senha</label>
                    <input type='password' placeholder='Digite a sua senha' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white' 
                    id='password'
                    value={password}
                    onChange={ input => setPassword(input.target.value)}></input>
                </div>

                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className='w-full p-2 text-2xl green-text' htmlFor='nickname'>Nickname</label>
                    <input type='text' placeholder='Digite o seu nickname' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white' 
                    id='nickname'
                    value={nickname}
                    onChange={ input => setNickname(input.target.value) }></input>
                </div>

                <div className='mt-6 w-full green-bg flex justify-center mb-6 hover:bg-green-900 cursor-pointer shadow-sm'
                onClick={formHandler}>
                <p className='text-4xl preto-texto font-bold'>→</p>
                </div>

            </form>
        </div>
    );
}

export default RegistrarUsuario;
