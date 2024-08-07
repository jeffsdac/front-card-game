import React from 'react'

function Header() {
    return (
        <header className='fixed w-full h-16 bg-red-600 top-0 bg-gradient-to-br from-[#020419] via-[#000318] to-[#020419] flex justify-end items-center z-50 shadow-lg'>

                <div className='w-1/4 flex justify-center'>
                    <p className='text-2xl font-bold'>DeckCards</p>
                </div>

                <div className='flex justify-end flex-wrap w-3/4 items-center'>
                    <ul className='flex w-2/5 justify-evenly'>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'>Home</li>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'>Home</li>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'>Home</li>
                        <li className='p-2 hover:bg-slate-600 cursor-pointer font-semibold'>Home</li>
                    </ul>
                    <div className='w-12 h-12 rounded-full bg-slate-100 mr-4 cursor-pointer'></div>
                </div>

        </header>
    )
}

export default Header
