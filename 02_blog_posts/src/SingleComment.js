import React from "react";


const SingleComment = (single_comment) => {
    
    return (
        <div className="comment">
        <a href="#" className="avatar">
            <img src={single_comment.picture} alt="profile picture"/>
        </a>
        <div className="content">
          <a href="#" className="author">
            {single_comment.name}
          </a>
          <div className="metadata">
            <span className="date">
              {single_comment.date}
            </span>
          </div>
          <div className="text">
            {single_comment.text}
          </div>
        </div>
      </div>
    )
}

export default SingleComment;