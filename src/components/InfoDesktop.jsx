import React from 'react';
import PrintButton from "@/components/PrintButton";

const InfoDesktop = () => {
    return (
        <div className={`hidden sm:flex xl:justify-between gap-[30px]`}>
            <div className={`flex flex-col w-[370px]`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Актор</div>
                <h4 className={`text-[31px] font-black text-white mb-[20px]`}>Вячеслав Школьний</h4>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Освіта</div>
                <h5 className={`text-white text-[24px] font-bold`}>Ukrainian Film School</h5>
                <h5 className={`text-white text-[16px] font-bold mb-[26px]`}>Акторcький курс, 2023-2024</h5>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Додаткові навички</div>
                <div>
                    <div className={`text-white text-[12px]`}>▸ Гра на гітарі, закінчив музичну школу, грав у рок-гуртах</div>
                    <div className={`text-white text-[12px]`}>▸ Гра на барабанах, перший рік навчання</div>
                    <div className={`text-white text-[12px]`}>▸ Вождіння авто, досвід 7 років, механіка/автомат, категорія B</div>
                    <div className={`text-white text-[12px]`}>▸ Вождіння мотоцикла, досвід 3 роки, категорія A</div>
                    <div className={`text-white text-[12px]`}>▸ Їзда на велосипеді, роликах, сноуборді</div>
                    <div className={`text-white text-[12px]`}>▸ Володіння зброєю: пістолет, револьвер, рушниця, автомат</div>
                    <div className={`text-white text-[12px]`}>▸ Англійська мова, advanced, щоденна практика з носіями</div>
                </div>

            </div>
            <div className={`flex flex-col w-[148px]`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Контакти</div>
                <h5 className={`text-white text-[13px] leading-[18px] pb-px font-semibold`}>+38 (093) 745 42 21</h5>
                <h5 className={`text-white text-[11px] font-semibold mb-[12px]`}>vshkolnyi.actor@gmail.com</h5>
                <div className={`flex gap-2 mb-8`}>
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
                <div className={`w-[140px] h-[31px] mb-6`}>
                    <PrintButton />
                </div>

                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Тіло</div>
                <div>
                    <div className={`text-white text-[12px]`}>Вік: 34 роки</div>
                    <div className={`text-white text-[12px]`}>Зріст: 180 см</div>
                    <div className={`text-white text-[12px]`}>Вага: 95 кг</div>
                    <div className={`text-white text-[12px]`}>Розмір одягу: L</div>
                    <div className={`text-white text-[12px]`}>Розмір взуття: 43</div>
                </div>

            </div>
        </div>
    );
};

export default InfoDesktop;