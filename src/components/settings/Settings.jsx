import { useChannelSettings } from "../../shared/hooks";
import { channelSettings } from "../channels/ChannelSettings";
import { LoadingSpinner } from '../LoadingSpinner'
import { StreamKey } from "./StreamKey";
import { PasswordSettings } from "./PasswordSettings";

export const Settings = () =>{
    const { channelSettings, isFetching, saveSettings} = useChannelSettings()
    if(isFetching){
        return<LoadingSpinner/>
    }
    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings Settings={ channelSettings} saveSettings={saveSettings}/>
            <PasswordSettings/>
            <StreamKey StreamKey= {channelSettings.StreamKey}/>
        </div>
    )
}