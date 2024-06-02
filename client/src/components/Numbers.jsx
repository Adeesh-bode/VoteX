import React, { useState, useEffect, useRef } from 'react';
import useCounter from '../utils/useCounter'; // Adjust the import path as necessary

const Numbers = () => {
    const counterSectionRef = useRef(null); useRef should be avoided as  it directly trigger html elements..can doesn't interact with virtual dom of react
    const [startCounting, setStartCounting] = useState(false);

    const votes = useCounter(0, 20, 3000, startCounting);
    const electionsConducted = useCounter(0, 12, 1500, startCounting);
    const positiveReviews = useCounter(0, 8, 2500, startCounting);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounting(true);
                    observer.unobserve(counterSectionRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }

        return () => {
            if (counterSectionRef.current) {
                observer.unobserve(counterSectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={counterSectionRef} className=" h-[200px] md:h-[300px] flex flex-col md:flex-row justify-around items-center    py-10 bg-gray-100 text-gray-800">
            <div className="text-center flex flex-col jusitify-between items-center">
                <div className="text-3xl font-semibold ">{votes}k+</div>
                <div className="text-lg font-medium text-gray-500 text-2xl">Votes</div>
            </div>
            <div className="text-center flex flex-col jusitify-between items-center">
                <div className="text-3xl font-semibold">{electionsConducted}k+</div>
                <div className="text-lg font-medium text-gray-500 text-2xl">Elections Conducted</div>
            </div>
            <div className="text-center flex flex-col jusitify-between items-center ">
                <div className="text-3xl font-semibold">{positiveReviews}+</div>
                <div className="text-lg font-medium text-gray-500 text-2xl">Positive Reviews</div>
            </div>
        </div>
    );
};

export default Numbers;
