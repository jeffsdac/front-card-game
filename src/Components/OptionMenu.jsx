import React, { useState } from 'react'
// props = items, setItems, handlerMenu
export default function OptionMenu(props) {
  return (
    <ul>
      {
        props.items.map ( (item, index) => (
          <li className='h-8 border flex items-center justify-center m-2 cursor-pointer hover:bg-slate-300 hover:text-black' key={index} onClick={() => props.handlerMenu(item)}>{item}</li>
        ))
      }
    </ul>
  )
}
