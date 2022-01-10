import React, {useState} from 'react';
import MainContent from '../components/Main/MainContent';
export default function Main() {
    
    const [cardState, setCard] = useState(1);
    
    return (
        <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-mainBg bg-fixed">
            <div className="h-full w-full flex items-center justify-center py-24 ">
                <MainContent cardState={cardState} setCard={setCard} />
            </div>
        </div>

    )
}
