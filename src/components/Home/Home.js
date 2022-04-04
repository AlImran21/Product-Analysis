import React from 'react';
import UseReviews from '../../hooks/UseReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = UseReviews();
    return (
        <div>
            <div className='flex justify-items-center items-center justify-around'>
                <div className='mt-40'>
                    <p className='text-orange-500 text-3xl font-bold mt-6'>It Will Definitely Make</p>
                    <p className='text-blue-400 text-3xl font-bold mt-6'>Your Learning Easier</p>
                    <p className='text-xl mt-8'>As a Bangladeshi JavaScript learner, <br /> this JavaScript by Zonayed Ahmed book <br /> is really amazing. Which has confirmed <br /> the identity of his fluent talent.</p>
                    <button className='bg-slate-600 text-white mt-12 px-4 py-2 font-medium rounded-sm'>Live Demo</button>
                </div>
                <div className='mt-16'>
                    <img src="https://zonayed.js.org/static/book-80255c9427c072e6d57f5ac171f26bd3.png" alt="" />

                </div>
            </div>
            <div className='mt-40 mb-40 mx-auto'>
                <p className='text-4xl font-bold'>Customers Reviews : ({reviews.length})</p>
                <div className='reviews-container grid grid-cols-3 gap-45 mt-16'>
                    {
                        reviews.map(review => <Reviews
                            key={review.id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
                <button className='mt-20 text-3xl bg-lime-600 text-white px-4 py-2 rounded-sm'>See All Reviews</button>
            </div>

        </div>
    );
};

export default Home;