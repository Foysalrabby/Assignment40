import React, { useEffect, useState } from 'react';
import Postdetails from '../Postdetais/Postdetails';

const Home = () => {
   const [posts,setpost]=useState([]);

   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setpost(data) );
     

   },[])



    return (
        <div className="homo-page">
            <h1>Home </h1>
            <p> All person </p>
            {
                posts.map(post => <Postdetails key={post.id}
                  post={post}
                
                ></Postdetails>)
            }
         
        

        </div>
    );
};

export default Home;