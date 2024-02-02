import React from 'react';
import FooterForest from '../assets/images/webp/footerforestimg.webp';
import { Tweeterimg, Discordimg, Instagramfoot } from './Iconimg';

const Footer = () => {
    return (
        <div className='relative lg:mt-[248px] md:mt-[150px] sm:mt-[100px] mt-[100px] pb-[100px] lg:pb-[267px] md:pb-[150px]'>
            <div data-aos="fade-down" className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10 flex flex-col lg:gap-[33px] gap-[20px] justify-center items-center'>
                <h2 className='ff_luckydino text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_1.337px_0px_#000]'>
                    D
                    <span className='text-[#23AAAC]'>i</span>
                    <span className='text-[#D45B07]'>n</span>
                    <span className='text-[#8EC627]'>o</span>
                    <span className='text-[#FCCA2B]'>L</span>
                    <span className='text-[#8F78D2]'>F</span>
                    <span className='text-[#8EC627]'>G</span>
                </h2>
                <p className='text-[14px] font-normal text-center text-white max-w-[376px] leading-[122%]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                <div className='flex items-center justify-center gap-2'>
                    <Tweeterimg />
                    <Discordimg />
                    <Instagramfoot />
                </div>
            </div>
            <img src={FooterForest} alt="FooterForest" className='absolute 2xl:bottom-[-5%] bottom-0 left-0 right-0 w-full' />
        </div>
    )
}

export default Footer