const MessageSkeleton = () => {
    const skeletonMessages = Array(6).fill(null);
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {skeletonMessages.map((_, idx) => (
            <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-starts" : "chat-end"}`}>
                <div className="chat-image avatar">
                    <div className="">
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MessageSkeleton