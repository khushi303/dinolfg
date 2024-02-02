import React, { useState } from 'react';
import { Accordionbtn, Accordionbtn2 } from './Iconimg';
import Faqlayer1 from '../assets/images/webp/faqlayer1.webp';

const AccodianSec = () => {
    const [openAccordion, setOpenAccordion] = useState(true);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    const accordionData = [
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content: "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
        },
    ];
    // padding: 23px 50px 22px 50px;
    return (
        <>
            <div id='FAQ' data-aos="zoom-in" className="accordion max-w-[801px] mx-auto">
                {accordionData.map((item, index) => (
                    <div className="accordion-item md:pt-[23px] md:pb-[22px] md:px-[50px] px-[20px] py-[20px] md:mb-[26px] mb-[18px] md:rounded-[40.5px] rounded-[20.5px] !transition-all !duration-700 !ease-in-out" key={index}>
                        <div
                            className="accordion-title flex justify-between items-center text-white"
                            onClick={() => toggleAccordion(index)}
                        >
                            <p className='sm:text-[20px] text-[16px] font-bold text-white leading-[121%] mr-[20px]'>{item.title}</p>
                            <button className='transition-all duration-700 ease-linear'>{openAccordion === index ? <Accordionbtn /> : <div className='rotate-[-180deg]'><Accordionbtn /></div>}</button>
                        </div>
                        <div
                            className={`accordion-content ${openAccordion === index ? "open" : ""
                                }`}
                            transition={{ duration: 0.5 }}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const Faq = () => {
    return (
        <div className='relative lg:pt-[298px] md:pt-[200px] sm:pt-[150px] pt-[100px]'>
            <div className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative'>
                <h2 data-aos="zoom-in" className='sm:text-[64px] text-[40px] leading-[132%] text-center font-normal ff_chewy text-white lg:mb-[61px] mb-[35px]'>FAQs</h2>
                <AccodianSec />
            </div>
            <img src={Faqlayer1} alt="Faqlayer1" className='absolute top-[-16px] left-0 right-0 w-full' />
        </div>
    )
}

export default Faq