import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-left mt-8 ml-20'>কনটেক্সট এপিআই এর কাজ কি?</p>
            <p style={{lineHeight: '40px'}} className='text-xl font-medium mt-8 mb-12 text-left ml-20'>কনটেক্সট এপিআই হল একটি রিএক্ট স্ট্রাকচার যা ইউজারকে ইউনিক ডিটেলস আদান প্রদান করতে সক্ষম করে <br /> এবং ইউজার এপ্লিকেশন এর সমস্ত স্তর থেকে প্রপ ড্রিলিং সমাধানে সহায়তা করে। <br /> এটি সাধারণত ব্যাবর্হিত হয় যখন কিছু ডাটা বিভিন্ন নেস্টিং লেভেলে অনেক কম্পোনেন্ট দ্বারা এক্সেসযোগ্য হয়। <br /> এটি অল্প পরিমানে ব্যবহার করা উচিত কারণ এটি কম্পোনেন্ট এর পুনর্ব্যবহার আরো কঠিন করে তোলে। </p>
            <p className='text-4xl font-bold text-left mt-8 ml-20'>Semantic ট্যাগ কি?</p>
            <p style={{lineHeight: '40px'}} className='text-xl font-medium mt-8 mb-12 text-left ml-20'>একটি Semantic Elements এর প্রধান কাজ হল পরিষ্কারভাবে ব্রাউজার এবং ডেভেলপার উভয় এর অর্থ বর্ণনা করা। <br /> Semantic ট্যাগ ব্যবহারের ফলে ব্রাউজার সহজেই বুঝতে পারে যে উক্ত ট্যাগটি এইচটিএমএলের একটি নির্দিষ্ট উদ্দেশ্যে <br /> ব্যবহার করা হয়েছে । যেমন আমি যদি article ট্যাগটি ব্যবহার করি তাহলে এর দ্বারা একটি ডকুমেন্টের <br /> আর্টিকেল গুলোকেই শুধু উল্লেখ করা হবে । আবার nav ট্যাগ ব্যবহার করলে এটি ব্রাউজারকে এর ভেতরের <br /> ইলিমেন্টসকে নেভিগেশন বারে প্রদর্শনের নির্দেশ প্রদান করে ।</p>
        </div>
    );
};

export default Blogs;