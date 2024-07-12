import React, { useState } from 'react'
import OptionMenu from '../Components/OptionMenu'
import CardMenu from '../Components/CardMenu';
import Card from '../Components/Card';

export default function DeckDetails() {
    return(
        <div className='bg-preto min-h-screen w-full'>
            <main className='flex'>
                <div className='w-3/4 min-h-80 flex items-center justify-center'>
                    
                    <div className='lg:w-3/4 sm:w-full flex flex-wrap justify-evenly'>
                        <h1 className='w-full text-2xl font-bold green-text text-center my-4'>Cards disponiveis</h1>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
                <div className='w-1/4 min-h-80 border-l green-border'>
                    <OptionMenu></OptionMenu>
                </div>
            </main>
        </div>
    )
}
