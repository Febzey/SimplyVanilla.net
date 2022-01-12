import React, {useState,useEffect} from 'react';
import MainContent from '../components/Main/MainContent';
export default function Main() {
    const [cardState, setCard] = useState(1);
    const [nameArray, setNames] = useState([]);

    useEffect(() => {
        /**
         * This websocket will talk to forestbot to get
         * the live player list.
         * the IP: '167.99.0.51' is where forestbot is hosted.
         */
        const ws = new WebSocket('ws://167.99.0.51:8383/playerlist');
        ws.onmessage = message => {
            const msg = JSON.parse(message.data);            
            setNames(msg)
            console.log("loaded player list successfully.")
            return () => ws.close();
        }
        return 
    },[])

    return (
        <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-mainBg bg-fixed">
            <div className="h-full w-full flex items-center justify-center py-24 ">
                <MainContent cardState={cardState} setCard={setCard} nameArray={nameArray} />
            </div>
        </div>

    )
}
