import React from 'react';
import'./Postdetails.css';
import { Link } from 'react-router-dom';
const Postdetails = (props) => {
    const {title,body,id}=props.post;
    return (
        <div className="postdetail">
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to ={`/about/${id}`}>
              <button>show post{id} </button>
            </Link>
            
        </div>
    );
};

export default Postdetails;