import React from 'react'

function Hero() {
  

  return (
    <div>
        {/* navbar part... */}

        

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
                    <button className='btn'>Watch Now</button>
                <div class="cursor-pointer w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center animate-pulse">
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