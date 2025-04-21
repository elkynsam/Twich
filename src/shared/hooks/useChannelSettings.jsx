import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelsSettings, updateChannelSettings } from "../../services";

export const useChannelSettings = () =>{
    const [ channelsSettings, setChannelSettings ] = useState();

    const fetchChannelSettings = async () =>{
        const response = await getChannelsSettings();

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'ocurrio un error'
            )
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })
    }

    const saveSettings = async (data) =>{
        const response = await updateChannelSettings(data)

        if(response.error){
            return toast.error(
            response.e?.response?.data || 'ocurrio un error '
            )
        }

        toast.success('informacion actualizada correctamente')

    }

    useEffect(() =>{
        fetchChannelSettings()
    }, [])

    return{
        isFetching: !channelsSettings,
        channelsSettings,
        saveSettings
    }
}