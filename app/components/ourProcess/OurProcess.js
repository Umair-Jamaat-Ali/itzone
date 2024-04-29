import React from 'react'
import Image from 'next/image'
import img from '../../../public/assets/1.webp'

export default function OurProcess() {
    return (
        <>
            <div className='main bg-white my-20 lg:my-4 flex flex-wrap-reverse justify-around items-center'>
                <div className='max-w-[600px]'>
                    <div className='bg-white flex flex-col py-2 px-5 gap-5 w-full'>
                        <div className='text-lg font-bold '>01 <span className='text-red-900'>.</span></div>
                        <div>
                            <h2 className='text-xl font-semibold'>Scoping & Estimation</h2>
                        </div>
                        <div>
                            <p>Get the right suggestions for your business plan, validate your idea, and set down the tool stack, teams, and the right approach required for the next round.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[400px] h-[400px]'>
                    <Image width={400} height={400} src={img} />
                </div>
            </div>
        </>
    )
}
