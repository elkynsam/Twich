const imageUrl = ''

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={ur || imageUrl} width='100%' height='100%' alt="defaut avatar"/>

        </div>
    )
}

export const ChannelCard = ({
    title,
    Id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) =>{
    const handleNavigate = () =>{
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{coor: isOnline ? 'green' : 'red'}}/>
            {isOnline ? 'onine' : 'offline'}
        
        </div>
    )
}