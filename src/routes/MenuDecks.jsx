import React from 'react'

export default function MenuDecks() {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center bg-slate-900'>
        <div className='w-3/4  min-h-96 flex items-center justify-center py-4 bg-slate-800'>
            <div className=' w-3/5  min-h-80 flex flex-wrap justify-evenly py-4 bg-slate-600'>
                <div className='w-80 h-96  m-2 bg-slate-200 cursor-pointer hover:bg-slate-400 shadow-sm'></div>
                <div className='w-80 h-96  m-2 bg-slate-200 cursor-pointer hover:bg-slate-400 shadow-sm'></div>
                <div className='w-80 h-96  m-2 bg-slate-200 cursor-pointer hover:bg-slate-400 shadow-sm'></div>
                <div className='w-80 h-96  m-2 bg-slate-200 cursor-pointer hover:bg-slate-400 shadow-sm'></div>
            </div>
        </div>
    </div>
  )
}
