import React, { useState } from 'react';
import { Tweeter, Discord, Instagram } from './Iconimg';
import Helicopter from '../assets/images/webp/aeroplane.webp';
import BicycleCroco from '../assets/images/webp/bycyclecroco.webp';
import FootCycleCroco from '../assets/images/webp/footcyclecroco.webp';

const NavBar = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <>
            <div className='flex justify-between items-center py-[10px] lg:pt-[4px] lg:pb-[5.50px] pl-[24px] pr-[7.42px] bg-white rounded-[61.102px] border-b-[4px] border-solid border-black'>
                <h2 className='ff_luckydino cursor-pointer lg:text-[39.125px] text-[35px] mt-1 font-normal text-[#FBA11D] leading-[94%] drop-shadow-[0px_1.337px_0px_#000]'>
                    D
                    <span className='text-[#23AAAC]'>i</span>
                    <span className='text-[#D45B07]'>n</span>
                    <span className='text-[#8EC627]'>o</span>
                    <span className='text-[#FCCA2B]'>L</span>
                    <span className='text-[#8F78D2]'>F</span>
                    <span className='text-[#8EC627]'>G</span>
                </h2>
                <div className='flex gap-[136px] items-center'>
                    <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-lg:fixed gap-[28px] max-lg:z-50 items-center max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:bg-white max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col max-lg:justify-center`}>
                        <li><a href="#About" onClick={() => setNav(!nav)} className='ff_chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>About</a></li>
                        <li><a href="#Tokenomic" onClick={() => setNav(!nav)} className='ff_chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>Tokenomic</a></li>
                        <li><a href="#Roadmap" onClick={() => setNav(!nav)} className='ff_chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>Roadmap</a></li>
                        <li><a href="#FAQ" onClick={() => setNav(!nav)} className='ff_chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>FAQ</a></li>
                        <li className='lg:hidden'> <div className='flex gap-2 items-center'>
                            <Tweeter />
                            <Discord />
                            <Instagram />
                        </div></li>
                        <li className='lg:hidden'>
                            <button className='bg-BgBtnJoin bg-Bgsize bg-BgPositionCenter bg-no-repeat'>
                                <p className='pt-[11px] pb-[19.57px] px-[36px] text-[18px] font-normal text-black ff_chewy leading-[131%]'>Join Now</p>
                            </button>
                        </li>
                    </ul>
                    <div className='flex items-center gap-[13px]'>
                        <div className='lg:flex hidden gap-2 items-center'>
                            <Tweeter />
                            <Discord />
                            <Instagram />
                        </div>
                        <button className='lg:block hidden bg-BgBtnJoin bg-Bgsize group bg-BgPositionCenter bg-no-repeat'>
                            <p className='pt-[11px] pb-[19.57px] px-[36px] text-[18px] group-hover:text-white transition-all duration-300 ease-linear font-normal text-black ff_chewy leading-[131%]'>Join Now</p>
                        </button>
                        <div onClick={() => setNav(!nav)} className='lg:hidden mr-[17px] w-[27px] h-[21px] z-50 relative z-[7] flex justify-between flex-col'>
                            <span className={`${nav ? '' : "rotate-[50deg] translate-y-[15px]"} bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            <span className={`${nav ? '' : "hidden"} bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Header = () => {
    return (
        <div className='bg-Bgheader xl:bg-Bgsize bg-cover bg-no-repeat relative sm:pb-[385px] pb-[270px] overflow-hidden'>
            <div className='container mx-auto xl:max-w-[1157px] xl:px-3 px-6 lg:pt-[28px] pt-[20px]'>
                <NavBar />
                <div className='flex flex-row flex-wrap lg:mt-[83px] mt-[45px] justify-between '>
                    <div className='lg:w-5/12 w-full flex lg:items-end lg:justify-center'>
                        <img src={Helicopter} alt="Helicopter" className='w-full lg:max-w-[393px] max-w-[200px] helo-header' />
                    </div>
                    <div data-aos="fade-down-left" className='lg:w-7/12 w-full flex flex-col items-center justify-center lg:mt-0 mt-7 pb-[18px]'>
                        <h2 className='lg:text-[175.636px] sm:text-[125px] text-[100px] ff_luckydino font-normal text-center leading-[82%] text-[#FBA11D] drop-shadow-[0px_6px_0px_#000]'>
                            D
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#8EC627]'>O</span>
                        </h2>
                        <h2 className='lg:text-[175.636px] sm:text-[125px] text-[100px] ff_luckydino font-normal text-center leading-[82%] text-[#8EC627] drop-shadow-[0px_6px_0px_#000]'>
                            L
                            <span className='text-[#FCCA2B]'>F</span>
                            <span className='text-[#8F78D2]'>G</span>
                        </h2>
                    </div>
                </div>
            </div>
            <img src={BicycleCroco} alt="BicycleCroco" className='sm:max-w-[132px] walking-img2 max-w-[94px] w-full absolute bottom-[18%] sm:right-[38%] right-[58%]' />
            <img src={FootCycleCroco} alt="FootCycleCroco" className='xl:max-w-[211px] walking-img sm:max-w-[180px] max-w-[108px] w-full absolute xl:bottom-[10%] md:bottom-[9%] sm:bottom-[8%] bottom-[9%] sm:right-[9%] right-[4%]' />
        </div>
    )
}

export default Header