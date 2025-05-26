import { useState, useEffect } from 'react';

function useWindowResize(debounceDelay = 300) {
    const [size, setSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        let timeoutId;

        function handleResize() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, debounceDelay);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [debounceDelay]);

    return size;
}

export default useWindowResize;
