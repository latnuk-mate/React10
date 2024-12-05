import React, { useRef, useState } from 'react'

function Hero() {

    const iframe = useRef();
    const playBtn = useRef();

    const [visible, setVisible] = useState(false);
 
    function showIframe(){
        setVisible(prv => !prv);
    
        playBtn.current.classList.toggle('hidden');
        iframe.current.classList.toggle('hidden');
    }


  return (
    <div>
    <div className='app_container'>
        <h5 className='headingText'>Explore</h5>
        <p 
        className='subHeadingText'>
            What are you gonna watching today?
        </p>
        {/* hero image section... */}
        <div className="relative mb-10 mt-5 rounded-lg overflow-hidden h-[450px] bg-zinc-700 flex items-center justify-start">
            <img src="/heroPoster.jpg" alt="" className='absolute mix-blend-multiply object-cover object-center w-full h-full'/>
        
            <div className="text-gray-100 z-50 text-center sm:text-left sm:px-16">
                <h5 className='text-gray-50 text-3xl tracking-wider mb-2'>Bright</h5>
                <p className='text-zinc-400 w-[30rem] mb-5'>
                In a gritty, alternate reality where magical creatures live alongside humans, 
                a tough cop and his rookie orc partner must protect a powerful, 
                ancient wand that everyone wants to control, 
                while navigating deadly threats and deep-rooted prejudice.
                </p>
             <div className="flex items-center gap-5 justify-center md:justify-start">
                <a href='https://youtu.be/6EZCBSsBxko?si=1ER7BXlMu6pHtTuP' className='btn' target='_blank'>Watch Now</a>

            {/* embed the video content */}
            <div className="video--content absolute bg-zinc-700 p-8 rounded-lg left-0 top-0 w-full h-full z-50 hidden" ref={iframe}>
                {/* close button */}
                <svg xmlns="http://www.w3.org/2000/svg" onClick={showIframe}
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer size-7 text-zinc-300 absolute top-1 right-1 rounded-full border-2 border-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <iframe className='w-full h-full rounded-lg'
                    src={visible ? "https://www.youtube.com/embed/6EZCBSsBxko?si=1ER7BXlMu6pHtTuP" : ""} 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>

                <div ref={playBtn} class="cursor-pointer w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center animate-pulse" onClick={showIframe}>
                    <div class="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-sky-600 -rotate-90"></div>
                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero;