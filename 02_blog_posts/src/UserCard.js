import React from "react";

const UserCard = (user_card) => {
    console.log(user_card)
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tancredi
                </div>
                <div className="description">
                { user_card.children }
                </div>            
            </div>
            <div className="ui bottom button">
                <i className="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard