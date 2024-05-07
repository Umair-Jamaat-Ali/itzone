import React from 'react'

export default function ServiceCard() {


    const content = [
        {
            title: "WHOLESALE DIGITAL MARKETING",
            para: "Our wholesale digital marketing platform provides digital marketing, online marketing, website design and graphic design studios across the globe, access to competitively priced, well organised, quality controlled services. These services increase their capacity to deliver, ensuring they can focus on their clients, maximise the use of their passions and add real value.",
            logo: ""
        },
        {
            title: "OFFICE SUPPORT SERVICES",
            para: "Our team of Virtual Assistants offers quality office support to businesses around the world. The purpose of this office support is to remove the burden of time consuming, repetitive tasks from business owners, enabling them to be completed in a low cost, quality controlled environment, enabling business owners to maximise their time on the more important elements of their businesses.",
            logo: ""
        },
        {
            title: "SALES SUPPORT",
            para: "Within our network of business agencies, our success is completely tied with their success. The more clients our agencies successfully sell to, the more successful their business is and as a result, the more successful our business is. Reflecting how important this relationship is, we provide ongoing sales support to our network in training, mentoring and systems.",
            logo: ""
        }
    ]

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                      {content.map((item, index)=> {
                        return (
                            <div class="p-4 md:w-1/3 flex flex-col text-center items-center" key={index}>
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">

                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                                <p class="leading-relaxed text-base">{item.para}</p>
                            </div>
                        </div>
                        )
                      })}
                        
    
                    </div>
                </div>
            </section>

        </>
    )
}
