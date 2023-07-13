import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Personpost = () => {
    let {posterID}=useParams();
    const [comment,setcomment]= useState({});
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments/${posterID}`)
      .then(res =>res.json())
      .then(data =>setcomment(data));

    },[]);
   
    return (
        <div>
            <p>{comment.body}</p>
        </div>
    );
};

export default Personpost;