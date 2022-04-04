import React, { useState } from 'react';

const ReviewDetails = ({product}) => {
    const {name, picture, comment, rating} = product;
    const [products, setProducts] = useState ([]);
    return (
        <div>
           <div style={{ width: '300px', height: '510px', border: '1px solid #95A0A7', borderRadius: '8px', marginBottom: '40px' }}>
                <img style={{ width: '286px', height: '286px', borderRadius: '8px', margin: '7px' }} src={picture} alt="" />
                <p className='mt-4 text-xl'><span className='font-semibold'>Name</span> : {name}</p>
                <p className='mt-4 text-sm font-serif text-center px-2'><span className='font-semibold font-sans text-xl'>Comment</span> : {comment}</p>
                <p className='mt-3'><span className='font-semibold'>Rating</span>: {rating} stars</p>
            </div>
        </div>
    );
};

export default ReviewDetails;