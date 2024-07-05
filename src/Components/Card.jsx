import React from 'react'

export default function Card(props) {

  const handleRemove = () => {
    const novasUrls = props.dummydata.urls.slice(0, -1);
    props.setDummydata(prevState => ({
        ...prevState,
        urls: novasUrls
    }));
  };
  
  return (
    <div className='border card my-3 bg-slate-600 relative rounded-lg p-1'>
        <img src={props.url} alt="art card" />
        <div className='w-8 h-8 rounded-full border text-center bg-red-600 absolute
        left-56 -top-3 flex justify-center items-center font-bold hover:bg-slate-800 cursor-pointer'
        onClick={handleRemove}>X</div>
        <div></div>
    </div>
  )
}
