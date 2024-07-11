import React from 'react'

function Home() {
  return (
    <div className="bg-[url('./midias/bg_login.jpeg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center">
      <form action="post" className='tamanho-form shadow-md min-h-80 bg-preto px-8'>
        <h1 className='text-2xl font-bold w-full text-center pt-2 pb-6 text-white'>Login</h1>

        <div className='flex flex-wrap w-full justify-center items-center'>
          <label className='w-full p-2 text-2xl green-text' htmlFor='email'>Email</label>
          <input type='email' placeholder='Digite o seu email aqui' 
          className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600
          text-white' 
          id='email'></input>
        </div>

        <div className='flex flex-wrap w-full justify-center items-center pt-6'>
          <label className='w-full p-2 text-2xl green-text' htmlFor='senha'>Senha</label>
          <input type='password' placeholder='Digite a sua senha aqui' 
          className='w-full bg-transparent px-3 focus:outline-none border-b green-border placeholder-gray-600
          text-white' 
          id='senha'></input>
        </div>

        <div className='flex flex-wrap mt-6'>
          <span className='text-white text-xs font-bold w-full mb-1 hover:underline cursor-pointer'>Não é cadastrado? Clique aqui</span>
          <span className='text-white text-xs hover:underline cursor-pointer'>Esqueci minha senha</span>
        </div>

        <div className='mt-8 w-full green-bg flex justify-center mb-6 hover:bg-green-900 cursor-pointer shadow-sm'>
          <p className='text-4xl preto-texto font-bold'>→</p>
        </div>


      </form>
    </div>
  )
}

export default Home