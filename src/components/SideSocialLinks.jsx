import React from 'react'

const SideSocialLinks = () => {
  return (
    <div className='px-2  py-5 w-auto bg-black-500 rounded-lg bg-opacity-30 opacity-75 sm:block hidden absolute left-0 top-[270px]'>
        <a href='https://www.linkedin.com/in/anandrajchoudhary/' className='p-3 hover:bg-black-500 rounded-lg block transition-all ease-in-out duration-300'>
            <img src="/assets/linkedin.svg" alt="linkedin" className='h-8 w-8'/>
        </a>
        <a href='https://www.github.com/anand150git' className='p-3 hover:bg-black-500 rounded-lg block transition-all ease-in-out duration-300'>
            <img src="/assets/github.svg" alt="github" className='h-8 w-8'/>
        </a>
        <a href='https://x.com/AnandRajChoudh9' className='p-3 hover:bg-black-500 rounded-lg block transition-all ease-in-out duration-300'>
            <img src="/assets/twitter.svg" alt="twitter" className='h-8 w-8'/>
        </a>
    </div>
  )
}

export default SideSocialLinks