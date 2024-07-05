import React from 'react'

export default function OptionMenu(props) {
  return (
    <div className='border h-8 my-2 cursor-pointer hover:bg-slate-500'>
        <li className='text-center text-xl font-semibold' key={props.index}>{props.url}</li>
    </div>
  )
}
