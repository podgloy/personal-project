'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export default function WelcomeSection() {

  gsap.registerPlugin(ScrollTrigger)
  
  function runGSAP(){
    const tl1 = gsap.timeline()
    tl1.to('.blue-text', {
      rotate: 0,
      scrollTrigger: {
        trigger: '.section-1',
        markers: true,
        start: "top top",
        end: "bottom top", // adjust end value
        scrub: true,
        // pin: true
      }
    })
    tl1.to('.blue-text', {
      rotate: 120,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-1',
        markers: true,
        start: "top top",
        end: "bottom top", // adjust end value
        scrub: true,
        // pin: true
      }
    })
    const tl2 = gsap.timeline()
    tl2.to('.yellow-text', {
      rotate: 0,
      scrollTrigger: {
        trigger: '.section-2',
        markers: true,
        start: "top top",
        end: "bottom top", // adjust end value
        scrub: true,
        // pin: true
      }
    })
    tl2.to('.yellow-text', {
      rotate: 120,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-2',
        markers: true,
        start: "top top",
        end: "bottom top", // adjust end value
        scrub: true,
        // pin: true
      }
    })
  }

  useEffect(() => {
    runGSAP()
  },[])
 
  return (
    <ReactLenis root>
      { /* content */ }
      <div className="bg-red-500">
        <div className="section-1 bg-orange-200 relative h-[1200px]">
           <div className="bg-blue-500 absolute top-0 left-0 w-40 h-40 blue-text">test</div>
        </div>
        <div className="section-2 bg-purple-200 relative h-[1200px]">
          <div className="bg-yellow-500 absolute top-0 left-0 w-40 h-40 yellow-text">test</div>
        </div>
      </div>
    </ReactLenis>
  )
}
