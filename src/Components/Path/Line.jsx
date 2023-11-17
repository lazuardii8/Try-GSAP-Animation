import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import { useEffect } from 'react'

const Line = () => {
    useEffect(() => {
        const road = document.querySelector("#linePart");
        const path = document.querySelector("#linePart path");
        const length = path.getTotalLength();

        path.style.strokeDasharray = length + " " + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();

        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec2",
                start: 0,
                end: "max",
                scrub: 0.5,
            },
        });

        tl.to(path, { strokeDashoffset: 12, ease: "none", duration: 1 }, "start");

    }, [])

    return (
        <svg className='absolute right-0 top-1/2 -translate-y-1/2' id='linePart' width="464" height="1182" viewBox="0 0 464 1182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M524.5 3C339.667 58.3333 -23.1 227.9 4.49999 463.5C39 758 474.5 568.5 563.5 739.5C634.7 876.3 244.833 1114.5 41 1216.5" stroke="white" stroke-width="5" />
        </svg>
    )
}

export default Line