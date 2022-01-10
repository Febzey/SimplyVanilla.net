import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import PlayerList from './PlayerList';
import { FaReddit, FaWikipediaW, FaDiscord } from 'react-icons/fa';
export default function MainContent({ cardState, setCard }) {

    const [votingLinks] = useState([
        "https://www.planetminecraft.com/server/simply-vanilla-4319849/vote/",
        "https://minecraft-mp.com/server/268854/vote/",
        "http://topminecraftservers.org/vote/9473",
        "https://minecraftservers.org/vote/551850",
        "https://topg.org/Minecraft/in-615468",
        "https://minecraft-server-list.com/server/475915/vote/",
        "https://minestatus.net/server/vote/simplyvanilla.net",
        "https://www.trackyserver.com/server/simply-vanilla-612505",
        "https://minecraft-server.net/vote/Beautifulz/",
    ])

    return (
        <div className="w-full lg:max-w-[60%] lg:min-w-[58em] min-h-[75vh] mb-auto rounded-sm p-7 mx-auto flex flex-col gap-2">

            <div className=" flex mx-auto text-amber-50 font-semibold bg-zinc-800 bg-opacity-90 border border-zinc-400 w-full rounded">
                <h1 className="mx-auto py-4 text-3xl md:text-7xl">SIMPLYVANILLA.NET</h1>
            </div>

            <Nav cardState={cardState} setCard={setCard} />

            <div className="flex flex-col md:flex-row gap-3 rounded">

                {
                    /**
                     * Main content
                     */
                }
                <div className="mx-auto w-full h-full">
                    <div className="overflow-auto py-8 px-5 text-neutral-100 tracking-wide w-full min-h-[56vh] max-h-[56vh] bg-zinc-800 border bg-opacity-90 border-zinc-400">
                        {
                            //Main content
                            cardState === 1 &&
                            <div className="flex flex-col">

                                <div className="flex flex-col text-xs">
                                    <p>Server IP: <span className="font-medium text-green-400 cursor-pointer hover:text-green-600">Simplyvanilla.net</span></p>
                                    <p>Current version: <span className="font-medium text-red-500">1.17.1</span></p>
                                </div>

                                <h1 className="text-lg font-medium pt-4">Hello! Welcome to the Simply Vanilla Website! We are an Anarchy Server with NO HACKS!</h1>
                                <p>"More information about the server here:"</p>
                            </div>
                        }
                        {
                            //Voting info
                            cardState === 2 &&
                            <div className="flex flex-col gap-2 text-md md:text-lg">
                                <h1 className="font-medium text-2xl mx-auto pb-4">Voting Links:</h1>
                                {
                                    votingLinks.map(link => (
                                        <a href={`${link}`} className="text-blue-200 hover:text-blue-400">{link}</a>
                                    ))
                                }
                                <p className=""><span className="font-bold">Every 100 Votes = </span> Custom server MOTD(The message next to our name on the server list)!</p>
                                <p className=""><span className="font-bold">501 Votes = </span> Free priority queue!</p>
                                <p className=""><span className="font-bold">701 Votes = </span> Free donor rank!</p>

                            </div>
                        }
                        {
                            //Rules info
                            cardState === 3 &&
                            <div className="flex flex-col gap-2">
                                <h1 className="font-medium text-2xl mx-auto pb-4">RULES:</h1>
                                <p><span className="text-red-400 font-bold">1.</span> No hacking.  This include baritone/x-ray packs and any macro which gives you an advantage over a player.</p>
                                <p><span className="text-red-400 font-bold">2.</span> No intentional lag machines that could hurt server performance/bot raids.</p>
                                <p><span className="text-red-400 font-bold">3.</span> Post in the appropriate channels.  Don't flood general chat with screenshots, keep bot abuse to a minimum, and things like that.  Stay on-topic and use all chat-rooms as they are intended.</p>
                                <p><span className="text-red-400 font-bold">4.</span> No NSFW in the Discord.  No adult (18+), explicit, overly excessive, gore or otherwise inappropriate pictures in public channels.  Cropped images of NSFW content is still considered NSFW.</p>
                                <p><span className="text-red-400 font-bold">5.</span> Don't ping roles or users for no reason.  (Including mass pinging!) Server @Owner, @Admin and @Mod will help with any issues you may have, however repeated abuse of this with annoying or insignificant topics will result in this permission being revoked from your person.</p>
                                <p><span className="text-red-400 font-bold">6.</span> No advertising servers (Unless related to SV)/spamming shops or other advertisments.</p>
                                <p><span className="text-red-400 font-bold">7.</span> No doxxing (to a reasonable degree)/Ip-grabbers/constant slander or constant harassment.</p>
                            </div>

                        }
                        {
                            //contact info
                            cardState === 4 &&
                            <p>To contact us, please join our <a className="text-blue-400 font-bold underline underline-offset-2 hover:text-blue-600" href="https://discord.gg/dP7SqPF">Discord Server</a> and create a ticket.</p>
                        }
                    </div>
                </div>

                {
                    /**
                     * Player list
                     */
                }
                <div className="md:ml-auto h-full">
                    <PlayerList />
                </div>

            </div>

            {
                /**
                 * Bottom info
                 */
            }

            <div className="flex flex-col md:flex-row gap-3">
                {
                    //Donation info
                }
                <div className="rounded w-full min-h-[20vh] bg-zinc-800 bg-opacity-90 border border-zinc-400 mt-2 py-4 px-5 text-neutral-200 text-center mr-auto gap-2 flex flex-col items-center">
                    <h1 className="text-2xl font-medium text-md md:text-2xl">DONATIONS</h1>
                    <p className="w-[20em] text-xs md:text-base">You can do your part and help keep the server up each month by heading to our donations page</p>
                    <a href="https://simplyvanilla.buycraft.net/" target="_blank" className="hover:bg-emerald-700 bg-emerald-600 rounded px-1 py-1 w-[7em] text-center font-medium motion-safe transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-100">DONATE</a>
                </div>

                {
                    //Notable links
                }
                <div className="text-xs md:text-lg rounded w-full min-h-[20vh] bg-zinc-800 bg-opacity-90 border border-zinc-400 mt-2 py-4 px-6 text-neutral-200 mr-auto gap-2 flex flex-col items-center">
                    <h1 className="text-2xl font-medium text-md md:text-2xl">Notable Links</h1>

                    <div className="flex flex-row gap-2 items-center">
                        <FaReddit className="hidden md:block text-2xl text-orange-400" />
                        <a href="https://www.reddit.com/r/SimplyVanillaMC/" target="_blank" className="text-blue-200 hover:text-blue-400">https://www.reddit.com/r/SimplyVanillaMC/</a>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <FaWikipediaW className="hidden md:block text-2xl text-zinc-100" />
                        <a href="https://simplyvanilla.miraheze.org/wiki/Main_Page" target="_blank" className="text-blue-200 hover:text-blue-400">https://simplyvanilla.miraheze.org/wiki/</a>
                    </div>
                
                    <div className="flex flex-row gap-2 items-center">
                        <FaDiscord className="hidden md:block text-2xl text-blue-400" />
                        <a href="https://discord.gg/dP7SqPF" target="_blank" className="text-blue-200 hover:text-blue-400">https://discord.gg/dP7SqPF</a>
                    </div>
                
                </div>
            </div>


            {
                //Footer
            }
            <div className="bg-zinc-800 flex bg-opacity-90 border border-zinc-400 w-full rounded">
                <p className="mx-auto text-neutral-300 py-2 text-sm">Webiste by: <a href="https://febzey.com" className="hover:text-sky-300" target="_blank">Febzey#1854</a></p>
            </div>


        </div>
    )
}
