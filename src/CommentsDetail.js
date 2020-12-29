import React from 'react';  
const CommentsDetail = (props) =>
{ 
    return (
        <div className="comment">
          <a href="/" className="avatar">
             <img alt="avatar" src={props.images}/>
          </a>
       
          <div className="content">
              <a href="/" className="author">
                 {props.author}
              </a>
              <div className="metadata"> 
                <span className="date">{props.timeat}</span>
              </div>
              <div className="text">
                {props.comments}
              </div>
          </div>
        </div>
    );
}
export default CommentsDetail;