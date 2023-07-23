import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import './Personpost.css';


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



   

const Personpost = () => {

    const [open, setOpen] = React.useState(false);
    const [bringcommet,storecomment]=useState([]);
    const handleOpen = () =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posterID}`)
        .then(res =>res.json())
        .then(data =>{
          storecomment(data);
        });
  
     

      setOpen(true);
    } 
    const handleClose = () => setOpen(false);

    let {posterID}=useParams();
    const [comment,setcomment]= useState([]);

//show post
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${posterID}`)
      .then(res =>res.json())
      .then(data =>{
        setcomment(data);
      });

    },[]);
   
    return (
        <div className='item-section'>

       <div className='itemsection1'>
         <img src="" width="100px" height="100px"  alt="hello" />

        </div>
        <div className='itemsection2'>
        <p>{comment.body}</p>
          
          <Button onClick={handleOpen}>comment</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p>{bringcommet.map(key =><li> {key.body}</li>)}</p>
        </Typography>
      </Box>
    </Modal>
        </div>
        
         
     
            </div>
    );
};


        



export default Personpost;