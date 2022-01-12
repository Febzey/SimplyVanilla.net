import React, {useState} from 'react'
import { FaDiscord } from 'react-icons/fa';
export default function Nav({ cardState, setCard }) {

    return (
        
            <ul className=" text-sm text-zinc-200 flex flex-row gap-2 items-center justify-center py-1 w-full border border-neutral-400 bg-zinc-800 bg-opacity-90 rounded">
                <li className="hover:text-zinc-300 cursor-pointer" onClick={() => setCard(1)}>Home</li>
                »
                <li className="hover:text-zinc-300 cursor-pointer" onClick={() => setCard(2)}>Vote</li>
                »
                <li className="hover:text-zinc-300 cursor-pointer" onClick={() => setCard(3)}>Rules</li>
                »
                <li className="hover:text-zinc-300 cursor-pointer" onClick={() => setCard(4)}>Contact</li>
            </ul>
    
    )
}
