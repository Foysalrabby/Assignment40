import React from 'react';

const Postdetails = (props) => {
    const {title,body}=props.post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Postdetails;