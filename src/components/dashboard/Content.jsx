import { Route, Routes } from "react-router-dom";
import { Channel } from "../channel/Channels";

export const Content = ({ channels, getChannels }) =>{
    return(
        <div className="content-container">
            <Routes>
                <Routes path='channels' element={<Channel channels={channels}/>}/>
            </Routes>

        </div>
    )
}