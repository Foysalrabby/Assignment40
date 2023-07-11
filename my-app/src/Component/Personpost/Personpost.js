import React from 'react';
import { useParams } from 'react-router-dom';

const Personpost = () => {
    let {posterID}=useParams();
    return (
        <div>
            <h2>this is post details page</h2>
        </div>
    );
};

export default Personpost;