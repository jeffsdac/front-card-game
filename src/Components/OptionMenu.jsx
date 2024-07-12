import React, { useState } from 'react'
// props = items, setItems, handlerMenu
export default function OptionMenu(props) {
  return (
    <ul className='w-full'>
      <h2 className='text-center text-xl mb-2 green-text font-semibold '>Deck atual</h2>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
      <li className='text-center border hover:bg-slate-50 hover:text-black cursor-pointer m-2'>Card 1</li>
    </ul>
  )
}
