import React, { useContext, useEffect, useState } from 'react'
import UserService from '../Services/UserService';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext'

function Home() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [codeResponse, setCodeResponse] = useState(-1);
  const [responseBody, setResponseBody] = useState(""); 

  const [isIncorrect, setIsIncorrect] = useState(false);


  
  const {token, setToken, user, setUser } = useContext(AuthContext);

  useEffect ( () => {
    console.log(codeResponse);
    if (codeResponse === 200){
      navigate("inicio")
      setToken(responseBody.acessToken);
      setUser(username);
    }
    if (codeResponse === 401){
      setIsIncorrect(true);
      console.log("Usuário ou senha incorretos");
    }
    if (codeResponse === 500){
      console.log("Ocorreu um erro no servidor, aguarde alguns instantes para tentar novamente");
    }
  }, [codeResponse, responseBody] ) 

  const handlerLogin = async () => {
    const resp = await UserService.loginUser(username, password);
    const body = await resp.json();

    setCodeResponse(resp.status);
    setResponseBody(body);
  };

  const toggleIncorrect = () => {
    setIsIncorrect( isIncorrect ? false : true);
  };
  

  return (
    <div className="bg-[url('./midias/bg_login.jpeg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center">
      {
        isIncorrect &&
        <div className='w-screen h-screen flex items-center justify-center z-10 absolute bg-preto-transparente'>
          <div className='flex justify-center items-center bg-zinc-950 flex-wrap shadow-sm p-6 rounded-md'>

            <div className='w-full text-lg p-4 flex items-center justify-center font-semibold text-red-600'>Your username or password are incorrect</div>
            <div className='w-50 h-50 bg-red-500 cursor-pointer hover:bg-slate-600 w-full p-2 txt-lg text-center font-bold shadow-sm' onClick={toggleIncorrect}>OK</div>
          </div>
        </div>
      }

      
        <form action="post" className='tamanho-form shadow-md min-h-80 bg-preto px-8'>
          <h1 className='text-2xl font-bold w-full text-center pt-2 pb-6 text-white'>Login</h1>

          <div className='flex flex-wrap w-full justify-center items-center'>
            <label className='w-full p-2 text-2xl green-text' htmlFor='username'>Username</label>
            <input type='text' placeholder='Digite o seu username aqui' 
            className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600
            text-white' 
            id='username'
            value={username}
            onChange={ input => setUsername(input.target.value) }></input>
          </div>

          <div className='flex flex-wrap w-full justify-center items-center pt-6'>
            <label className='w-full p-2 text-2xl green-text' htmlFor='senha'>Senha</label>
            <input type='password' placeholder='Digite a sua senha aqui' 
            className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600
            text-white' 
            id='senha'
            value={password}
            onChange={ input => setPassword(input.target.value) }></input>
          </div>

          <div className='flex flex-wrap mt-6'>
            <span className='text-white text-xs font-bold w-full mb-1 hover:underline cursor-pointer'><Link to="registrar">Não é cadastrado? Clique aqui</Link></span>
            <span className='text-white text-xs hover:underline cursor-pointer'>Esqueci minha senha</span>
          </div>

          <div className='mt-8 w-full green-bg flex justify-center mb-6 hover:bg-green-900 cursor-pointer shadow-sm'
          onClick={handlerLogin}>
            <p className='text-4xl preto-texto font-bold'>→</p>
          </div>

        </form>
    </div>
  )
}

export default Home