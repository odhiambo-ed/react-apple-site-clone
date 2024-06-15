import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 1}
    )
  }, [])
  
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)

  const handleVideoSrc = () => { 
    if (window.innerWidth < 768) {
      setVideoSrc(heroVideo)
    } else {
      setVideoSrc(smallHeroVideo)
    }
  }

  useEffect(() => { 
    window.addEventListener('resize', handleVideoSrc)
    return () => window.removeEventListener('resize', handleVideoSrc)
  }, [videoSrc])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iPhone 15 pro</p>
      </div>
      <div className="w-9/12 md:w-10/12">
        <video autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Hero