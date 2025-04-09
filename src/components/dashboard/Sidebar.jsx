import { Channel } from "../channel/Channels"

export const Sidebar = () =>{
    if(!channels){
        return null
    }

    return(
        <div className="sidebar-container">
            <span className="sidebar-title">Sugeridos</span>
            <span className="sidebar-title">Canales Que Sigo</span>
            {channels.map((channel) => {
                return(
                    <div key={chsnnel.id} className="sidebar-list-item">
                            <span className="sidebar-list-username">{channel.username}</span>
                            <span className="sidebar-ist-status" 
                            stye={{
                                color: channel.isOnine ? 'green' : 'red'
                            }}
                            >
                                {channel.isOnine ? 'Online' : 'green'}
                            </span>
                    </div>
                )
            })}
        </div>
    )
}