import { createRef, useEffect } from "react";

export const useClickOutside = (handler, ref, outerRef) => {
    const domRef = ref || createRef();

    useEffect(() => {
        const localHandler = (e) => {
            if (!domRef.current) return;
            if (!domRef.current?.contains(e.target)) {
                if (outerRef && outerRef.current?.contains(e.target)) {
                    handler();
                }
                else {
                    handler()
                }
            }
        };
        document.addEventListener("mousedown", localHandler);
        return () => document.removeEventListener("mousedown", localHandler);
    }, [domRef, handler]);

    return domRef;
};
