import React from 'react'
import image from '../assets/Adityalawate.png'

export const HomePage = () => {
    return (
        <header className="App-header">
            <div className='flex-div'>
                <img src={image}  alt='Adi' width={300} className='profile' />
                <p>
                    Hi 👋🏻<br /> I'm <span className='spantxt'>Aditya Lawate</span> 
                </p>
            </div>
        </header>
    )
}
