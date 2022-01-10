import React, { useState } from 'react';

export default function PlayerList() {

    const [nameArray, setNames] = useState([
        "0Bot",
        "2q1",
        "Alunduyn",
        "black_duck44",
        "Boundzound__",
        "chief_piffington",
        "coffofin",
        "cumermen",
        "Dividedfox111",
        "EGIRLHUNTER615",
        "Exhumi",
        "GGuPP",
        "goettia",
        "Exhumi",
        "GGuPP",
        "goettia",
        "Exhumi",
        "GGuPP",
        "goettia",
    ]);


    return (
        <div className="flex flex-col bg-zinc-800 bg-opacity-90 w-full rounded max-h-[56vh] min-h-[56vh] overflow-auto border border-zinc-400 px-10">

            <div className="text-neutral-200 flex flex-col gap-0 py-2">
                <div className="text-left py-2">
                    <p className="font-medium">Player List</p>
                    <p className="font-medium">Online: {nameArray.length}</p>
                </div>

                <div className="flex flex-col gap-1 border-t border-zinc-300 py-4">
                    {
                        nameArray.map(name => (
                            <div className="flex flex-row gap-2">
                                <img alt="MC-HEAD" src={`https://minotar.net/avatar/${name}/20`} />
                                <a href={`https://namemc.com/search?q=${name}`}>{name}</a>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>
    )
}
