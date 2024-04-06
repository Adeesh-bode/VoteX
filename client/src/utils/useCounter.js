import { useState, useEffect } from 'react';

const useCounter = (start, end, duration, startCounting) => {
    const [count, setCount] = useState(start);
  
    useEffect(() => {
        let interval = null;

        if (startCounting && count < end) {
            let stepDuration = duration / (end - start);
            interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < end) {
                        return prevCount + 1;
                    }
                    clearInterval(interval);
                    return prevCount;
                });
            }, stepDuration);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [start, end, duration, count, startCounting]); // Depend on startCounting
  
    return Math.round(count);
};

export default useCounter;
