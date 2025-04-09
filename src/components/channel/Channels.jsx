import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";

export const Channel = () =>{
    const navigate = useNavigate()

    const handleNavigate = (id) =>{
        navigate(`/channel/${id}`)

        return(
            <div className="channel-conteiner">
                {channels.map((c) => (
                    <ChannelCard 
                        key={c.id}
                        id={c.id}
                        title={c.id}
                        username={c.username}
                        isOnline={c.isOnline}
                        avatarUrl={c.avatarUrl}
                        navigateToChannelHandler={c.navigateToChannelHandler}
                        
                    />
                ))}
            </div>
        )
    }
}