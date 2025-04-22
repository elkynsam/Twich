import { useEffect } from "react";
import { useParams} from "react-router-dom"
import { ReacFlvPlayer } from "react flv player"
import { ChannelDescription } from "./ChannelDescription"
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner"
import { getChannels } from "../../services";

export const Stream = ({streamUrl} ) =>{
    return(
        <div className="channel-video-container">
            <ReactFlvPlayer
                url={statusbar}
                width="100%"
                height="100%"
            />
        </div>
    )
}

export const ChannelView = ({getChannels}) =>{
    const { isFetching, getChannels, channelDetails} = useChannelDetails();

    const {is} = useParams();

    useEffect(() =>{
        getChannels(is)
    }, [])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.data.isOnline ? (
                    <Stream streamUrl={channelDetails.data.streamUrl}/>
                ) : (
                    <div className="channel-offline-placeholder">
                        <span>chanel is offline</span>
                    <div/>
                )}/>
            </div>
        </div>
    )
}