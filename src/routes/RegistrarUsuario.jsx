import React, { useEffect, useState } from 'react';
import userService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrarUsuario = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const [emailExists, setEmailExists] = useState(false);
    const [usernameExists, setUsernameExists] = useState(false);

    const styleInput ='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white'

    const normalLabel = "w-full p-2 text-2xl green-text";

    const errorLabel = "w-full p-2 text-2xl text-red-600"


    const [code, setCode] = useState(-1) 
    const [response, setResponse] = useState(null);

    useEffect ( () => {
        console.log(code)
        if (code === 400 && response){
            setEmailExists(response.email);
            setUsernameExists(response.username);
        }
        if (code === 201){
            toast("Usuário criado com sucesso!");
            navigate("/")
        }

    }, [code, response] )

    const formHandler = async () => {
        const resp = await userService.registerUser(email, password, fullName, nickname);
        setCode(resp.status);
        const data = await resp.json();

        setCode(resp.status);
        setResponse(data);
    }

    const toastTest = () =>{
        toast("Usuário cadastrado com sucesso!");
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
                    <label className={emailExists ? errorLabel : normalLabel} htmlFor='email'>Email</label>
                    <input type='email' placeholder='Digite o seu email' 
                    className={styleInput}
                    id='email'
                    value={email}
                    onChange={ input => setEmail(input.target.value) }></input>
                </div>
                <p className='text-red-600 font-bold text-xs'>
                    {
                        emailExists && "Email já cadastrado!"
                    }
                </p>
                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className='w-full p-2 text-2xl green-text' htmlFor='password'>Senha</label>
                    <input type='password' placeholder='Digite a sua senha' 
                    className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600 text-white' 
                    id='password'
                    value={password}
                    onChange={ input => setPassword(input.target.value)}></input>
                </div>

                <div className='flex flex-wrap w-full justify-center items-center mb-5'>
                    <label className={usernameExists ? errorLabel : normalLabel} htmlFor='nickname'>Nickname</label>
                    <input type='text' placeholder='Digite o seu nickname' 
                    className={styleInput}
                    id='nickname'
                    value={nickname}
                    onChange={ input => setNickname(input.target.value) }></input>
                </div>
                <p className='text-red-600 font-bold text-xs'>
                {
                    usernameExists && "Usuário já cadastrado!"
                }
                </p>

                <div className='mt-6 w-full green-bg flex justify-center mb-6 hover:bg-green-900 cursor-pointer shadow-sm'
                onClick={formHandler}>
                <p className='text-4xl preto-texto font-bold'>→</p>
                </div>

            </form>
        </div>
    );
}

export default RegistrarUsuario;
