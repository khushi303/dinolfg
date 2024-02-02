import React from 'react';
import Comcrocoimg from '../assets/images/webp/comcroco.webp';
import UtilityCroco from '../assets/images/webp/utilitybicyclecroco.webp';
import UtilityChristmas from '../assets/images/webp/utilityChristmas.webp';
import UtilityLayerimg from '../assets/images/webp/utilitylayer.webp';
import TimelineLayer from '../assets/images/webp/roadmaplayer.webp';

const Utility = () => {
    return (
        <div className='relative overflow-hidden xl:pb-[466px] md:pb-[300px] sm:pb-[190px] xl:pt-[230px] sm:pt-[150px] pt-[100px] pb-[150px]'>
            <div className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10'>
                <h2 className='ff_chewy sm:text-[64px] text-[35px] font-normal text-white text-center leading-[132%]'>Utility and Usecase</h2>
                <div className='relative z-10 xl:mt-[158px] lg:mt-[100px] md:mt-[70px] mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col'>
                    <div data-aos="fade-right">
                        <p className='max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white leading-[119%]'>We are going to work hard in otder to add <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span> to main platforms as a form of payment</p>
                        <p className='max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white mt-[28px] leading-[120%]'>You will be able to buy a lot of things with <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span></p></div>
                    <img src={Comcrocoimg} alt="Comcrocoimg" className='sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6 lg:mx-[unset] mx-auto lg:h-[332px] lg:translate-y-[-124px] croco-utility w-full' />
                </div>
                <div className='relative z-10 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse justify-center items-center '>
                    <img src={UtilityCroco} alt="UtilityCroco" className='sm:max-w-[267px] max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]' />
                    <div data-aos="fade-left" className=''>
                        <p className='sm:text-[32px] text-[25px] font-normal lg:text-end text-center text-white leading-[119%]'>We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
                <img src={UtilityChristmas} alt="UtilityChristmas" className='lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0' />
            </div>
            <img src={UtilityLayerimg} alt="UtilityLayerimg" className='absolute top-0 left-0 right-0 w-full' />
            <img src={TimelineLayer} alt="TimelineLayer" className='absolute left-0 right-0 bottom-[-13px] w-full' />
        </div>
    )
}

export default Utility