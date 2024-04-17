import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className='flex'>
      <div className='w-4/12'>Hello</div>
      <div className='w-8/12'>
        <div>
          <Image src="./svgs/section-1.svg" width={600} height={500}></Image>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
