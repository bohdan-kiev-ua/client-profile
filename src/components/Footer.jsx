import React from 'react';
import PrintButton from "@/components/PrintButton";

const Footer = () => {
    return (
        <footer className={`w-full h-[300px] sm:h-[144px] flex justify-center bg-[#1c1c1c]`}>
            <div className={`max-w-[1920px] w-full flex gap-10 sm:gap-0 justify-center sm:justify-between items-center flex-col sm:flex-row mx-10`}>
                <div className={`flex flex-col items-center sm:items-start`}>
                    <h5 className={`text-white text-[13px] leading-[18px] pb-px font-semibold`}>+38 (093) 745 42 21</h5>
                    <h5 className={`text-white text-[11px] font-semibold`}>vshkolnyi.actor@gmail.com</h5>
                </div>
                <div className={`flex gap-2`}>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/instagram.png"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/facebook.svg"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                    <div className={`w-[31px] h-[31px] flex justify-center items-center bg-[#707070] rounded-full cursor-pointer hover:bg-white`}>
                        <img
                            src="/images/youtube.png"
                            className="w-[24px]"
                        />
                    </div>
                </div>
                <div className={`w-[180px] sm:w-[140px] h-[44px] sm:h-[31px]`}>
                    <PrintButton />
                </div>
            </div>
        </footer>
    );
};

export default Footer;