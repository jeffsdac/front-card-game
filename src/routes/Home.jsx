import React from 'react'

function Home() {
  return (
    <div className=' bg-marrom-escuro w-full min-h-screen flex justify-center items-center'>
     
      <div className='container flex justify-center'>

        <form className='bg-marrom-claro p-2 sm:w-3/4 lg:w-1/2 shadow rounded-sm'>

          <h1 className='text-center text-2xl font-bold marrom-escuro'>LOGIN</h1>

            <div className='flex flex-wrap'>
              <label htmlFor="email" className='marrom-escuro w-full font-semibold'>Email</label>
              <input type="email" name="email" id="email" className='w-full bg-marrom-claro marrom-escuro border-b border-slate-900 focus:outline-none pl-2 placeholder-orange-950 placeholder-opacity-55' placeholder='Insira o seu email'/>
            </div>

            <div className='flex flex-wrap mt-6'>
              <label htmlFor="password" className='marrom-escuro w-full font-semibold'>Senha</label>
              <input type="password" name="password" id="password" className='w-full bg-marrom-claro marrom-escuro border-b border-slate-900 focus:outline-none pl-2 placeholder-orange-950 placeholder-opacity-55' 
              placeholder='Insira a sua senha'/>
            </div>

            <p className='marrom-escuro text-sm mt-4 ml-2 hover:underline cursor-pointer'>Esqueceu sua senha?</p>
            <p className='marrom-escuro text-sm ml-2 hover:underline cursor-pointer'>Cadastre-se</p>

            <div className='w-full flex justify-center my-8'>
              <div className='w-3/4 text-4xl text-center bg-verde-escuro text-white cursor-pointer'>→</div>
              </div>
        </form>

      </div>

    </div>
  )
}

export default Home