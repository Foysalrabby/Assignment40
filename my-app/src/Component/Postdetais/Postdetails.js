import React from 'react';
import'./Postdetails.css';
const Postdetails = (props) => {
    const {title,body}=props.post;
    return (
        <div className="postdetail">
            <h1>{title}</h1>
            <p>{body}</p>
            <button>show post</button>
        </div>
    );
};

export default Postdetails;