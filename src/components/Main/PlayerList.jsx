export default function PlayerList({ nameArray }) {

    return (
        <div className="flex flex-col bg-zinc-800 bg-opacity-90 w-full rounded max-h-[56vh] min-h-[56vh] overflow-auto border border-zinc-400 px-5">

            <div className="text-neutral-200 flex flex-col gap-0 py-2">
                <div className="text-left py-2">
                    <p className="font-medium">Player List</p>
                    <p className="font-medium">Online: {nameArray.length}</p>
                </div>

                <div className="flex flex-col gap-1 border-t border-zinc-300 py-4 px-12 mr-auto ml-0 pl-0">
                    {
                        nameArray.length === 0 ? <p>ForestBot is not online or the player list is still loading </p>
                            :
                            nameArray.map(name => (
                                <div className="flex flex-row gap-2 mr-auto">
                                    <img alt="MC-HEAD" src={`https://minotar.net/avatar/${name}/25`} />
                                    <a href={`https://namemc.com/search?q=${name}`}>{name}</a>
                                </div>

                            ))
                    }
                </div>

            </div>

        </div>
    )
}
