import Nav from '../Nav/Nav'
import PlayerList from './PlayerList';
import simplyvanilla from '../../images/simplyvanilla.png';
import { FaReddit, FaWikipediaW, FaDiscord, FaDonate, FaNewspaper } from 'react-icons/fa';
export default function MainContent({ cardState, setCard, nameArray }) {

    const votingLinks = [
        "https://www.planetminecraft.com/server/simply-vanilla-4319849/vote/",
        "https://minecraft-mp.com/server/268854/vote/",
        "http://topminecraftservers.org/vote/9473",
        "https://minecraftservers.org/vote/551850",
        "https://topg.org/Minecraft/in-615468",
        "https://minecraft-server-list.com/server/475915/vote/",
        "https://minestatus.net/server/vote/simplyvanilla.net",
        "https://www.trackyserver.com/server/simply-vanilla-612505",
        "https://minecraft-server.net/vote/Beautifulz/",
    ]

    const copy = async () => {
        await navigator.clipboard.writeText('simplyvanilla.net');
        alert('Copied to clipboard successfully. Have fun!');
    }

    return (
        <div className="shadow-2xl w-full lg:max-w-[60%] lg:min-w-[58em] min-h-[75vh] mb-auto rounded-sm p-7 mx-auto flex flex-col gap-2">
            <div className="flex flex-row gap-6 items-center mx-auto text-amber-50 font-semibold justify-center  w-full rounded">
                <h1 className="ml-auto py-4 text-3xl md:text-7xl">SIMPLYVANILLA.NET</h1>
                <img alt="simplyvanilla-logo" className="mx-auto" height="80" width="80" src={simplyvanilla}></img>
            </div>

            <Nav cardState={cardState} setCard={setCard} />

            <div className="flex flex-col md:flex-row gap-3 rounded">
                <div className="mx-auto w-full h-full">
                    <div className="overflow-auto pb-8 pt-4 px-5 text-neutral-200 tracking-wide w-full min-h-[56vh] max-h-[56vh] bg-zinc-800 border bg-opacity-90 border-zinc-400">
                        {
                            //Main content
                            cardState === 1 &&
                            <div className="flex flex-col text-neutral-200 gap-6 ">
                                <div className="mr-auto flex flex-col gap-0 text-xs">
                                    <div className="flex flex-row gap-2">
                                        <p>Server IP: <button className="font-medium text-sky-300 cursor-pointer hover:text-sky-400" onClick={() => copy()}>Simplyvanilla.net</button></p>
                                        <p>Current version: <span className="font-medium text-red-300">1.17.1</span></p>
                                    </div>
                                    <p className="text-neutral-300 text-[0.65rem]">Click on the IP to copy to clipboard</p>
                                </div>

                                <h1 className="text-lg md:text-2xl font-medium">Welcome to the SimplyVanilla website, we are a Minecraft Java Anarchy Server with absolutely no hacking!</h1>

                                <div className="text-sm">
                                    <div className="flex flex-row gap-2 items-center">
                                        <h1 className="font-bold text-lg">Discord</h1>
                                        <FaDiscord className="text-lg" />
                                    </div>
                                    <p>Discord is a free voice chatting software which is very easy to use and has good voice quality.
                                        The link to join is <a href="https://discord.gg/dP7SqPF" className="text-sky-300 hover:text-sky-400">discord.gg/dP7SqPF</a> - Download Discord here: <a href="https://discordapp.com/download" className="text-sky-300 hover:text-sky-400">discordapp.com/download</a></p>
                                </div>

                                <div className="text-sm">
                                    <div className="flex flex-row gap-2 items-center">
                                        <h1 className="font-bold text-lg">Reddit</h1>
                                        <FaReddit className="text-lg" />
                                    </div>
                                    <p>Check out simplyvanilla's subreddit - <a href="https://www.reddit.com/r/SimplyVanillaMC/" className="text-sky-300 hover:text-sky-400" >reddit.com/r/SimplyVanillaMC</a></p>
                                </div>

                                <div className="text-sm">
                                    <div className="flex flex-row gap-2 items-center">
                                        <h1 className="font-bold text-lg">Wiki</h1>
                                        <FaWikipediaW className="text-lg" />
                                    </div>
                                    <p>Consider checking out our player made wiki page at <a href="https://simplyvanilla.miraheze.org/wiki/Main_Page" className="text-sky-300 hover:text-sky-400">simplyvanilla.miraheze.org</a> (it's pretty interesting)</p>
                                </div>

                                <div className="text-sm">
                                    <div className="flex flex-row gap-2 items-center">
                                        <h1 className="font-bold text-lg">Server news</h1>
                                        <FaNewspaper className="text-lg" />
                                    </div>
                                    <p>We just recently updated to 1.17.1 and working on 1.18! <span className="text-xs font-bold">— 12/11/2021</span></p>
                                </div>


                            </div>
                        }
                        {
                            //Voting info
                            cardState === 2 &&
                            <div className="flex flex-col gap-2 text-md">
                                <h1 className="font-medium text-2xl mx-auto pb-4">Voting Links:</h1>
                                {votingLinks.map(link => (<a href={`${link}`} className="text-blue-200 hover:text-blue-400">{link}</a>))}
                                <p><span className="font-bold">Every 100 Votes = </span> Custom server MOTD(The message next to our name on the server list)!</p>
                                <p><span className="font-bold">501 Votes = </span> Free priority queue!</p>
                                <p><span className="font-bold">701 Votes = </span> Free donor rank!</p>

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
                    <PlayerList nameArray={nameArray}/>
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
                <div className="rounded w-full min-h-[20vh] bg-zinc-800 bg-opacity-90 border border-zinc-400 mt-2 py-4 px-5 text-neutral-200 text-center mr-auto gap-5 flex flex-col items-center">

                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex flex-col ml-auto">
                            <h1 className="text-2xl font-medium text-md md:text-2xl">DONATIONS</h1>
                            <p className="w-[20em] text-xs md:text-base text-center">You can do your part and help keep the server up each month by heading to our donations page</p>
                        </div>

                        <a href="https://simplyvanilla.buycraft.net/" target="_blank" className="active:bg-emerald-800 h-[70%] my-auto mx-auto md:mr-auto hover:bg-emerald-600 flex flex-row items-center cursor-pointer bg-emerald-500 rounded px-3 py-5 w-[7em] font-medium motion-safe transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-100">
                            <p className="mx-auto font-bold text-white">DONATE</p>
                            <FaDonate className="text-white" />
                        </a>
                    </div>


                    <p className="text-sm text-zinc-300">Donate to receive priority queue and other cosmetic features.</p>

                </div>
            </div>


            {
                //Footer
            }
            <div className="bg-zinc-800 items-center justify-center flex bg-opacity-90 border border-zinc-400 w-full rounded flex-row gap-6">
                <p className="text-neutral-300 py-2 text-sm">Website by: <a href="https://febzey.com" className="text-sky-300 hover:text-sky-400" target="_blank">Febzey#1854</a></p>
                <p className="text-neutral-300 text-sm">2021 &copy; SimplyVanilla.net</p>
            </div>


        </div>
    )
}
