import React from 'react';
import heloImg from '../assets/images/webp/helicopterroadmap.webp';
import TimelineDashed from '../assets/images/webp/timelinedhased.webp';
import TimeChris from '../assets/images/webp/timelinechristmas.webp';
import Timedinechris from '../assets/images/webp/cristmascrocotime.webp';
import Timegrass from '../assets/images/webp/timelinegrass.webp';

const Timeline = () => {
    return (
        <div id='Roadmap' className='bg-[#09655A] sm:pt-0 pt-[45px] lg:pb-[208px] md:pb-[150px] sm:pb-[120px] pb-[90px] relative'>
            <h2 className='sm:text-[64px] text-[40px] font-normal text-white text-center ff_chewy leading-[83.63px] md:mb-[97px]leading-[132%] relative z-10 mb-[40px]'>Roadmap</h2>
            <div className="container mx-auto xl:max-w-[1118px] xl:px-3 px-6 relative">
                <div className='md:pl-0 sm:pl-[130px] pl-[70px]'>
                    <div data-aos="zoom-in" className='flex sm:flex-row flex-col sm:items-center xl:gap-[45px] lg:gap-[25px] gap-[14px] relative z-10'>
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px] font-normal md:w-[auto] w-[135px] leading-[130%] ff_chewy text-[#FBA11D] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>01 </h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Launch $DINO & Website & Social Media.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Building the community.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 1.</li>
                        </ol>
                        <img src={heloImg} alt="heloImg" className='md:hidden block absolute sm:top-[-17%] left-[-86px] sm:left-[-28%] top-[-12%] max-w-[90px] sm:max-w-[120px]' />
                    </div>
                    <div data-aos="zoom-in" className='flex sm:flex-row flex-col sm:items-center lg:justify-end md:justify-center lg:pl-0 md:pl-[100px] lg:gap-[30px] gap-[15px] lg:pr-[100px] md:pt-[245px] pt-[30px] relative z-10'>
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px] leading-[145%] ff_chewy font-normal text-[#8EC627] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>02</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>CoinGecko & Coinmarketcap listing.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Introduction to Buyback & Burning mechanism</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 2.</li>
                        </ol>
                        <img src={TimeChris} alt="TimeChris" className='md:hidden block absolute sm:top-[26%] left-[-91px] sm:left-[-26%] top-[14%] max-w-[90px] sm:max-w-[80px]' />
                    </div>
                    <div data-aos="zoom-in" className='flex sm:flex-row flex-col sm:items-center xl:gap-[45px] lg:gap-[25px] gap-[14px] lg:pt-[92px] md:pt-[143px] pt-[30px] relative z-10'>
                        <h3 className='lg:text-[220.95px] sm:text-[120px] text-[70px] font-normal ff_chewy text-[#D45B07] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[131%]'>03</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Utility and Usecase Introduction.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>CEX Listings</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 3.</li>
                        </ol>
                        <img src={Timedinechris} alt="Timedinechris" className='md:hidden block absolute sm:top-[26%] left-[-91px] sm:left-[-26%] top-[14%] max-w-[90px] sm:max-w-[80px]' />
                    </div>
                    <div data-aos="zoom-in" className='flex sm:flex-row flex-col sm:items-center md:justify-center lg:gap-[30px] gap-[15px] lg:pt-[200px] md:pt-[154px] pt-[30px] relative z-10'>
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px]  ff_chewy font-normal md:ml-[150px] text-[#23AAAC] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[145%]'>04</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Staking Introduction.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>DINO NFT Collection.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 4</li>
                        </ol>
                        <img src={Timegrass} alt="Timegrass" className='md:hidden block absolute left-[-86px] sm:left-[-28%] bottom-[-19px] max-w-[80px] sm:max-w-[120px]' />
                    </div>
                </div>
                <div className='md:hidden block absolute sm:left-[70px] left-[40px] top-0 bottom-0 w-[15px] border-l-[11px] border-dashed border-[#0a4740]'></div>
                <img src={TimelineDashed} alt="TimelineDashed" className='md:block hidden absolute xl:pl-[68px] top-0 bottom-0 left-0 right-0' />
            </div>
        </div>
    )
}

export default Timeline;