import React from 'react'

export default function Goals() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-red-400 px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>
                                Achieve your goals faster with scalable & robust web apps
                            </p>
                            <p className='text-sm font-normal'>Schedule a call to discuss your vision with our web experts.</p>

                        </blockquote>
                        <figcaption className="mt-10  sm:mx-[230px] mx-auto md:mx-[270px] lg:mx-[370px] lg:w-52 lg:h-10 h-16 w-40 hover:bg-green-800 hover:scale-110 lg:text-center pt-2 bg-green-400 rounded-md">
                            <button
                                className="text-white"
                            >Book a free consultation</button>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </>
    )
}
