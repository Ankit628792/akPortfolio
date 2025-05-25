import { useEffect,  useState } from "react";
import { interpolate } from 'flubber';
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const MorphSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="260" height="200" fill="none" viewBox="0 0 53 53">
            <SVGPaths paths={[
                "M52.1 26.5c0 3.2-4.3 5.6-5.5 8.4-1.2 2.9.1 7.6-2.1 9.8-2.2 2.2-6.9.9-9.8 2.1-2.8 1.2-5.2 5.5-8.4 5.5s-5.6-4.3-8.4-5.5c-2.9-1.2-7.6.1-9.8-2.1-2.2-2.2-.9-6.9-2.1-9.8C4.8 32.1.5 29.7.5 26.5s4.3-5.6 5.5-8.4c1.2-2.9-.1-7.6 2.1-9.8 2.2-2.2 6.9-.9 9.8-2.1C20.7 5 23.1.7 26.3.7s5.6 4.3 8.4 5.5c2.9 1.2 7.6-.1 9.8 2.1 2.2 2.2.9 6.9 2.1 9.8 1.2 2.8 5.5 5.2 5.5 8.4Z",
                "M49.7 27.5c7.1 11.8-.9 16.6-10.8 8.6-5.4 4.2-14.9 4.2-20.3 0-9.9 8-17.8 3.2-10.8-8.6-9.6-3.8-9.6-10.5 0-14.3C.7 1.4 8.7-3.4 18.6 4.6 24 .4 33.5.4 38.9 4.6c9.9-8 17.8-3.2 10.8 8.6 9.6 3.8 9.6 10.5 0 14.3Z"
            ]}
                fill="url(&quot;#SvgjsLinearGradient1020&quot;)"
            />
            <defs><linearGradient id="SvgjsLinearGradient1020"><stop stopColor="#f6d365" offset="0"></stop><stop stopColor="#fda085" offset="1"></stop></linearGradient></defs>
        </svg>
    )
}

export default MorphSVG

function SVGPaths({ paths, fill }) {
    const [indexOfPath, setIndexOfPath] = useState(0);
    const progress = useMotionValue(0);
    const path = useTransform(progress, paths.map((_, i) => i), paths, {
        mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 })
    })

    useEffect(() => {
        animate(progress, indexOfPath, {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.4,
            onComplete: () => {
                if (indexOfPath === paths.length - 1) {
                    setIndexOfPath(0);
                    path.set(0)
                }
                else {
                    setIndexOfPath(indexOfPath + 1);
                }
            }
        })
    }, [indexOfPath])

    return (
        <motion.path d={path} fill={fill}></motion.path>
    )
}
