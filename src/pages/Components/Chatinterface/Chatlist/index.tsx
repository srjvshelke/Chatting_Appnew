import React from 'react';

const ChatList: React.FC = () => {
    return (
        <>
            <div className='w-1/3 h-full bg-red-500'>
                {/* header */}

                {/* searchbox */}
                <div className="chatList__search">
                    <div className="bg-white rounded-md">
                        <input type="text" placeholder="Search Here" required />
                        <button className="h-46 w-20">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                {/* chatbox */}


            </div>

        </>
    )
}

export default ChatList;
