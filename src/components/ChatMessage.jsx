const ChatMessage = ({name,message }) => {
    return (
        <div className="flex items-center">
            <img
                className="h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="User Icon"
            />
            <span className="font-bold px-2 shadow-lg">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default ChatMessage; 
