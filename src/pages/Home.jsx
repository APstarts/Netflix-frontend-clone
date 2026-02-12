import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/one-piece-time-watch.jpeg'
import Cars from '../assets/cars.jpg'
import Frieren from '../assets/frieren.jpg'
import Naruto from '../assets/naruto.jpeg'
import Peaky from '../assets/peakyblinders.jpg'
import Tokyo from '../assets/tokyoghoul.jpg'
import Doraemon from '../assets/doraemon.jpg'
import DeathNote from '../assets/deathNote.jpg'
import Bartender from '../assets/bartender.jpg'
import { useState } from 'react'

let cards = [
    {id: 1, img: Cars, desc: "Cars 1"},
    {id: 2, img: Frieren, desc: "Frieren"},
    {id: 3, img: Naruto, desc: "Naruto Shippuden"},
    {id: 4, img: Peaky, desc: "Peaky Blinders"},
    {id: 5, img: Tokyo, desc: "Tokyo Ghoul"},
    {id: 6, img: Doraemon, desc: "Doraemon"},
    {id: 7, img: DeathNote, desc: "Death Note"},
    {id: 8, img: Bartender, desc: "The Bartender"}
];

function Home() {
    const [images, setImages] = useState(cards)
  return (
    <div className="bg-black">
        <Navbar />
        {/* The 'after' classes create the overlay without needing a second <div> */}
        <div className="relative h-120 w-full after:absolute after:inset-0 after:bg-linear-to-t after:from-black/30 after:to-transparent">
            <img src={Hero} alt="" className='h-full w-full object-cover' />
            
            <div className='absolute bottom-10 left-10 z-10 flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <button className='font-bold cursor-pointer border-white border-2 hover:bg-white hover:text-black p-2 bg-white/10 text-white hover:scale-110 duration-300'>
                        Watch Now!
                    </button>
                    <button className='font-bold cursor-pointer border-red-600 border-2  p-2 bg-red-600 text-white hover:scale-110 duration-300'>Add to watchlist</button>
                </div>
                <div>
                    <p>Luffy, the kid who grew up with a dream to become the next Pirate King. Watch how his adventure goes.</p>
                </div>
            </div>
        </div>
        <p className='ml-5 mt-2 font-bold text-2xl'>New Releases</p>
        <div className='flex gap-3 mt-2 mx-5 flex-nowrap overflow-x-scroll'>
            {images.map((i) => (
                <div className='flex flex-col gap-2 shrink-0'>
                    <img src={i.img} className='h-64 w-48 hover:scale-110 duration-300 cursor-pointer'/>
                    <p className='text-center'>{i.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home