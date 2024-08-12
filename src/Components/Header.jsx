import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
        toast("Você foi deslogado com sucesso!")
    }

    return (
        <header className='fixed w-full h-16 bg-red-600 top-0 bg-gradient-to-br from-[#020419] via-[#000318] to-[#020419] flex justify-end items-center z-50 shadow-lg'>

                <div className='w-1/4 flex justify-center'>
                    <p className='text-2xl font-bold cursor-pointer'
                    onClick={() => navigate("/inicio")}>DeckCards</p>
                </div>

                <div className='flex justify-end flex-wrap w-3/4 items-center'>
                    <ul className='flex w-2/5 justify-evenly'>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'
                        onClick={() => navigate("/inicio")}>Home</li>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'
                        onClick={ () => navigate("/sobre") }>Sobre o projeto</li>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'
                        onClick={logout}>Logout</li>
                    </ul>
                    <div className='w-12 h-12 rounded-full mr-12 cursor-pointer flex justify-center items-center border border-slate-100 hover:bg-slate-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </div>
                </div>

        </header>
    )
}

export default Header
