import React, {useState} from 'react'
import { FaDiscord } from 'react-icons/fa';
export default function Nav({ cardState, setCard }) {

    return (
        <div>
            <ul className="text-sm md:text-md flex flex-row gap-4 items-center justify-center py-1 w-full border border-neutral-400 bg-zinc-800 bg-opacity-90 text-white rounded">
                <li className="hover:text-zinc-300 cursor-pointer underline underline-offset-2" onClick={() => setCard(1)}>Home</li>
                <li className="hover:text-zinc-300 cursor-pointer underline underline-offset-2" onClick={() => setCard(2)}>Vote</li>
                <li className="hover:text-zinc-300 cursor-pointer underline underline-offset-2" onClick={() => setCard(3)}>Rules</li>
                <li className="hover:text-zinc-300 cursor-pointer underline underline-offset-2" onClick={() => setCard(4)}>Contact</li>
                <a href="https://discord.gg/dP7SqPF">
                    <FaDiscord className="cursor-pointer text-blue-400 hover:text-blue-500 text-4xl motion-safe transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-100" />
                </a>
            </ul>
        </div>
    )
}
