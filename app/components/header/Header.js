import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/assets/1.webp';
import ScrollAnimation from '../scrollAnimation/Scrollanimation';


export default function Header() {
    return (
        <>
        <div className="relative isolate  h-[1280px] overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl flex-wrap-reverse sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto  max-w-md text-center lg:mx-0 lg:flex-auto lg:py-40 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Full-Stack Web Design &
              <br />
              Development Services.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                href="#"
                className="rounded-md bg-green-700 w-[240px] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </button>
              
            </div>
            <div className='my-16'>
               <div> <p>Trusted by :</p> </div>
               <div className='flex justify-center gap-10 mt-12'>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
                <Image width={50} height={50} src={img1} className='rounded-md'/>
            </div>
            </div>
            <div className='absolute lg:top-1/2  right-10 top-[53%] lg:left-[46%] lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 z-10'>
                {/* <ScrollAnimation/> */}
            </div>
          </div>
          <div className="relative  lg:h-40">
            <Image
              className="absolute left-0 bg-no-repeat top-0 w-[57rem] max-w-none bg-white/5 ring-1 ring-white/10"
              src={img1}
              alt="App screenshot"
              width={700}
              height={700}
            />
          </div>
        </div>
        </>
    )
}
