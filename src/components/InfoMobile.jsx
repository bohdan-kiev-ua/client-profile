import React from 'react';
import PrintButton from "@/components/PrintButton";

const InfoMobile = () => {
    return (
        <div className={`flex sm:hidden flex-col`}>
            <div className={`px-10`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Актор</div>
                <h4 className={`text-[31px] font-black text-white mb-[20px]`}>Вячеслав Школьний</h4>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Освіта</div>
                <h5 className={`text-white text-[24px] font-bold`}>Ukrainian Film School</h5>
                <h5 className={`text-white text-[16px] font-bold mb-[26px]`}>Акторcький курс, 2023-2024</h5>

                <div className={`leading-[28px] font-medium text-[14px] text-[#9a9a9a]`}>Контакти</div>
                <h5 className={`text-white text-[13px] leading-[18px] pb-px font-semibold`}>+38 (093) 745 42 21</h5>
                <h5 className={`text-white text-[11px] font-semibold mb-6`}>vshkolnyi.actor@gmail.com</h5>
                <div className={`flex gap-6 mb-10`}>
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

                <div className={`w-full h-8 max-w-[400px] mb-8`}>
                    <PrintButton />
                </div>
            </div>

            <div className={`w-full pt-4 pb-6 bg-white px-10`}>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Додаткові навички</div>
                <div className={`mb-3`}>
                    <div className={`text-[12px] text-black leading-6`}>▸ Гра на гітарі, закінчив музичну школу, грав у рок-гуртах</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Гра на барабанах, перший рік навчання</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Вождіння авто, досвід 7 років, механіка/автомат, категорія B</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Вождіння мотоцикла, досвід 3 роки, категорія A</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Їзда на велосипеді, роликах, сноуборді</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Володіння зброєю: пістолет, револьвер, рушниця, автомат</div>
                    <div className={`text-[12px] text-black leading-6`}>▸ Англійська мова, advanced, щоденна практика з носіями</div>
                </div>
                <div className={`w-full h-px bg-[#9a9a9a] mb-3`}/>
                <div className={`leading-[21px] font-medium text-[14px] text-[#9a9a9a]`}>Тіло</div>
                <div className={`grid grid-cols-2`}>
                    <div>
                        <div className={`text-[12px] text-black leading-6`}>Вік: 34 роки</div>
                        <div className={`text-[12px] text-black leading-6`}>Зріст: 180 см</div>
                        <div className={`text-[12px] text-black leading-6`}>Вага: 95 кг</div>
                    </div>
                    <div>
                        <div className={`text-[12px] text-black leading-6`}>Розмір одягу: L</div>
                        <div className={`text-[12px] text-black leading-6`}>Розмір взуття: 43</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoMobile;