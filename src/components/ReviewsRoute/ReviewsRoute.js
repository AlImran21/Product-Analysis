import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const ReviewsRoute = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setProducts (data))
    }, []);

    return (
        <div className='mt-12 mb-40 mx-auto'>
            <p className='text-4xl font-bold'>Customers Reviews : ({products.length})</p>
            <div className='reviews-container grid grid-cols-3 gap-45 mt-16'>
                {
                    products.map(product => <ReviewDetails
                        key={product.id}
                        product={product}
                    ></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default ReviewsRoute;