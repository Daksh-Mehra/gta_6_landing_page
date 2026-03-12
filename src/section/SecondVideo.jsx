import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const SecondVideo = () => {
    const videoref=useRef(null);
    useGSAP(() => {
        gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".lucia",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
            }
        })

        tl.to(".lucia", { opacity: 1, ease: "power1.inOut",duration:1 });
        videoref.current.onloadedmetadata = () => {
            tl.to(videoref.current,{currentTime:videoref.current.duration,duration:3,ease:"power1.inOut"},"<")
        }
        
    },[])
  return (
    <section className='lucia'>
        <div className="h-dvh">
            <video src="/public/videos/output2.mp4"
            preload='auto'
            muted
            ref={videoref}
            playsInline
            className='size-full object-cover second-vd'

            style={{objectPosition:"15% 0%"}}
            ></video>
        </div>

    </section>

  )
} 

export default SecondVideo